import React, { useState } from 'react';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './searchStyle.css';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    // e.preventDefault();
    const newQuery = e.target.value;
    setQuery(e.target.value);
    
    onSearch(newQuery);
  };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (query.trim()) {
//       onSearch(query);
//     }
//   };

  return (
    <div className="search-container">
      <Form className="search-form">
        <InputGroup className={`custom-search-group ${isFocused ? 'focused' : ''}`}>
          <FormControl
            placeholder="Rechercher par nom de restaurant"
            aria-label="Search"
            value={query}
            onChange={handleInputChange}
            className="custom-search-input"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <InputGroup.Text className="custom-search-icon">
            <FaSearch /> {/* Always show search icon */}
          </InputGroup.Text>
        </InputGroup>
      </Form>
    </div>
  );
};

export default Search;