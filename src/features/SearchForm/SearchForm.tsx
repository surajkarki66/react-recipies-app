import React from "react";
import { Form } from "reactstrap";

import "./SearchForm.scss";

const SearchForm: React.FC = () => {
  return (
    <Form method="post" className="d-flex align-items-start ml-3">
      <div className="d-flex flex-column justify-content-start search-form">
        <input
          type="text"
          placeholder="ex. pizza"
          className="mr-2 search-input border-0"
        />{" "}
        <i className="fas fa-search i-search"></i>
      </div>
    </Form>
  );
};

export default SearchForm;
