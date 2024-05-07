const Search = (props) => {
    console.log(props);
    return (
        <>
            <input type="text" placeholder="Search" onChange = {(e) => props.setSearch(e.target.value)}/>
        </>
    )
}

export default Search;