import React from "react";

import './search-box.styles.css'

export const SearchBox = ({ placeholder, hanldeChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={hanldeChange}
    />
)