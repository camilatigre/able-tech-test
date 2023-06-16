export default function SuggestionsList({ suggestions }) {
  return (
    <ul
      data-testid="results-list"
      className="border border-primary rounded-md w-96 text-lg bg-white"
    >
      {suggestions.map((item, i) => (
        <li key={item.id} className="p-1 hover:bg-gray-300">
          <span className="">{item.original_title}</span>
        </li>
      ))}
    </ul>
  );
}
