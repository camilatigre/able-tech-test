import { useState, useEffect } from "react";
import SuggestionsList from "./SuggestionsList";

// This endpoint is from TheMovieDB https://developers.themoviedb.org/3/search/search-movies
// There is a missing query string `query` to make the search
const apiKey = 'a0471c3efcac73e624b948daeda6085f'
export default function TypeaheadInput() {
  const [movies, setMovies] = useState([]);
  const [queryTyped, setQueryTyped] = useState('')
  const [booleanStates, setBooleanStates] = useState({
    isSearching: false,
    isFocused: false
  });

  const handleSearch = (e) => {
    const isSearching = e.target.value && booleanStates.isFocused;
    setQueryTyped(e.target.value)
    setBooleanStates((prevState) => ({
      ...prevState,
      isSearching
    }));
  }

  const handleOnFocus = () => {
    setBooleanStates((prevState) => ({
      ...prevState,
      isFocused: true
    }));
  }

  const handleOnBlur = () => {
    setBooleanStates((prevState) => ({
        ...prevState,
        isSearching: false
    }));
  }


  useEffect(() => {
    let timerId;

    if (booleanStates.isFocused && queryTyped) {
      timerId = setTimeout(() => {
        setBooleanStates((prevState) => ({
          ...prevState,
          isSearching: true
        }));

        fetchData();
      }, 250);
    } else {
      setBooleanStates((prevState) => ({
        ...prevState,
        isSearching: false
      }));
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [queryTyped, booleanStates.isFocused]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${queryTyped}`
      );
      const data = await response.json();
      console.info('data example', JSON.stringify(data.results[0], 0));
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div className="flex flex-col justify-center items-center">
      <input
        className="text-lg text-primary border-primary border rounded-md w-48 focus:w-96 transition-all focus:outline-none p-1 mb-2 focus:border-blue-500"
        placeholder="Search"
        type="text"
        onChange={handleSearch}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      />
      {booleanStates.isSearching ? <SuggestionsList suggestions={movies} /> : ''}
      
    </div>
  );
}
