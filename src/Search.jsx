import React, { useState } from 'react'

export default function Search(props) {
    const [searchInput, setSearchInput] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleSearchChange = (event) => {
        const regex = /^[a-zA-Z0-9]+$/;
        setIsValid(regex.test(event.target.value));

        if(isValid) {
            setSearchInput(event.target.value);
        }
    };



  return (
    <div>
      <input 
        type="search" 
        id="search-regex"
        placeholder="Are you happy, sad, or excited?"
        onChange={handleSearchChange}
        value={searchInput} 
        />
        {!isValid && <p>Invalid Input Format: Please use alphanumeric characters</p>}
    </div>
  )
}
