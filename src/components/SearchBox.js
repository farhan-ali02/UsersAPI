// import React from "react";
// const SearchBox = ({searchChange}) => {
//     return (
//         <div className="pa2">
//         <input className="pa3 ba bw2 b--orange bg-light-yellow"
//          type="search" placeholder="Search Robots..." 
//          onChange = {searchChange} />
//         {/* pa3 ba b--green bg-lightest-blue */}
//         </div>
//     );
// }





// export default SearchBox;

// SearchBox.js
import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba bw2 b--orange bg-light-yellow"
                type="search"
                placeholder="Search Robots..."
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
