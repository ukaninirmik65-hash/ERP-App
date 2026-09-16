import { useContext } from "react";
import { FcSearch } from "react-icons/fc";
import { SidebarContext } from "./context/SidebarContext";
const Search = () => {
  const { search, HeandleSearch } = useContext(SidebarContext);

  return (
    <>
      <div className="header-search">
        <span className="search-icon">
          <FcSearch />
        </span>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            HeandleSearch(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Search;
