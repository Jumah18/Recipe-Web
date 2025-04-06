import '../index.css'

export default function SearchBar({ query, setQuery }) {
    return (

      <>
      <p>Need a particular Recipe, Use the search option below</p>
      <input
        type="text"
        placeholder="Search for a recipe..."
        className="w-full p-2 border rounded mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      </>
    );
  }
  