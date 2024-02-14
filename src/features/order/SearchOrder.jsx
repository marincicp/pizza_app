import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input className="rounded-full px-4 py-2 text-sml placeholder:text-stone-400 w-28 sm:w-64 sm:focus:w-72 transition-all bg-yellow-100 duration-400 focus:outline-none focus:ring focus:ring-yellow-700 focus:ring-opacity-50"
        placeholder="Search order #"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchOrder;
