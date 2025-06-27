const Searchbar = ({search, setSearch}) => {
    return(
        <div className="searchbar-container">
        <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchbar"
        />
        </div>
    )
}

export default Searchbar