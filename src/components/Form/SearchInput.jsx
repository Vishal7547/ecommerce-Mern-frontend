import React from "react";
import { useSearch } from "../../Context/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const navigate = useNavigate();
  const [value, setValue] = useSearch();
  console.log(value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/search/${value.keyword}`
      );
      setValue({ ...value, result: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {" "}
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          value={value.keyword}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setValue({ ...value, keyword: e.target.value })}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
