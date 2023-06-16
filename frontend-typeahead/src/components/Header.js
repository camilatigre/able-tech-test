import AbleLogo from "../assets/AbleLogo";

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center pt-20">
      <AbleLogo color="#2d2d3f" width={300} height={106} />
      <h2 className="text-7xl">Typeahead</h2>
    </header>
  );
}
