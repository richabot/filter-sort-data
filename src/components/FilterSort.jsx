import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getBooks } from "../Redux/action";

const FilterSort = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const urlSort = searchParams.get("sortBy");
  const urlCategory = searchParams.getAll("category");

  const [sortBy, setSortBy] = useState(urlSort || "");
  const [category, setCategory] = useState(urlCategory || []);

  //filtering
  const handleChange = (e) => {
    let newCategory = [...category];
    const option = e.target.value;

    //if option is already present then remove it else ppush it.
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    if (category || sortBy) {
      let params = {};
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
      // dispatch(getBooks({ params: { category } }));
    }
     // eslint-disable-next-line
  }, [category, searchParams, sortBy]);

  //sorting
  const handleSort = (e) => {
    let radioValue = e.target.value;
    setSortBy(radioValue);
  };

  //reseting
  const handleReset = () => {
    if (category || sortBy) {
      setSortBy("");
      setCategory([]);
      dispatch(getBooks());
    }
  };

  return (
    <div
      style={{
        width: "250px",
        border: "1px solid",
        paddingLeft: "1%",
        height: "95vh",
        fontSize: "18px",
      }}
    >
      <h3>Filter</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="5star"
            checked={category.includes("5star")}
            onChange={handleChange}
          />
          <label>5 star</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="4star"
            checked={category.includes("4star")}
            onChange={handleChange}
          />
          <label>4star</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="3star"
            checked={category.includes("3star")}
            onChange={handleChange}
          />
          <label>3star</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="2star"
            checked={category.includes("2star")}
            onChange={handleChange}
          />
          <label>2 star</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="1star"
            checked={category.includes("1star")}
            onChange={handleChange}
          />
          <label>1star</label>
        </div>
      </div>

      <h3>Sort</h3>
      <div>
        <input
          type="radio"
          value="asc"
          name="soryBy"
          checked={sortBy === "asc"}
          onChange={handleSort}
        />
        <label>By Inc Year</label> <br />
        <input
          type="radio"
          value="desc"
          name="soryBy"
          checked={sortBy === "desc"}
          onChange={handleSort}
        />
        <label>By Dec Year</label>
      </div>
      <br />
      <div>
        <button onClick={handleReset}>Reset Filter</button>
      </div>
    </div>
  );
};

export default FilterSort;
