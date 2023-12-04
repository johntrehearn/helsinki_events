const Search = ({ onchange }) => {
  return (
    <div className="search">
      <input onChange={onchange} placeholder="filter results..."></input>
    </div>
  );
};

export default Search;
