const Search = (props) => {
  console.log(props);
  return (
    <>
      <input
        placeholder='Search...'
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </>
  );
};
export default Search;
