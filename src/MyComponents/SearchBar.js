import React from 'react';
import change_choice from './Content'

export default function SearchBar(props) {
    return (
        <div>
            <input id="query" onChange={() => change_choice()} className="form-control form-control-dark w-100 text-center" type="text" placeholder="Search" aria-label="Search"></input>
        </div>
    )
}
