import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline className="searchBarForm ml-5">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search "iPhone"'
        className="mr-sm-3 ml-sm-5 "
        id="searchBar"
      ></Form.Control>
      <Button type="submit" className="p-2  searchBarBtn">
        <i className="fas fa-search sIcon px-2 pt-1"></i>
      </Button>
    </Form>
  );
};

export default SearchBox;
