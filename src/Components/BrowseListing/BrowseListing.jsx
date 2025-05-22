import React from 'react';

fetch("http://localhost:3000/roommatesAll")
.then(res => res.json())
.then(data => {
    console.log(data);
})
const BrowseListing = () => {
    return (
        <div>
            BrowseListing
        </div>
    );
};

export default BrowseListing;