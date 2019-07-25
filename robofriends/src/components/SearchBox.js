import React from 'react';

function SearchBox({searchText, onChange}) {
  return (
    <div>
      <input
        className="pa3 dib br2 b--green bg-ligtest-blue ma3"
        type="search"
        placeholder="Search for names"
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBox;
