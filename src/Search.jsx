const Search = ({ onchange }) => {
  return (
    <div className="search">
      <input onChange={onchange} name="search" placeholder="search..."></input>
    </div>
  );
};

export default Search;
