const Search = ({ onchange }) => {
  return (
    <div className="search">
      <input
        onChange={onchange}
        placeholder="name, area, month, year..."
      ></input>
    </div>
  );
};

export default Search;
