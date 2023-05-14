const Search = ({ setInput, onClick }) => {
  return (
    <form className="my-8 flex gap-1 w-full justify-center items-center">
      <input
        type="text"
        className="border-2 rounded border-solid w-8/12 max-w-lg"
        onChange={(e) => setInput(e.target.value)}
        placeholder="cat"
      />
      <input
        type="submit"
        value="Search"
        className="bg-blue-400 px-2 rounded"
        onClick={onClick}
      />
    </form>
  );
};

export default Search;
