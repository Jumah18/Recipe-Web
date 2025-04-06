import '../index.css'

export default function SearchBar({ query, setQuery }) {
    return (

      <>
      <p className='text-2xl font-bold text-white bg-[#213547]'>Need a particular Recipe, Use the search option below</p>
      <input
        type="text"
        placeholder="Search for a recipe..."
        className="w-full p-2 border mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      </>
    );
  }
  