import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg--lightest-bue" 
                type="search" 
                placeholder="search your robot"
                onChange={ searchChange }
            />
        </div>
    );
}

export default SearchBox;