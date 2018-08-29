import React from 'react';

import './SearchForm.css';

import InputBox from '../InputBox';

const SearchForm = () => {
    return (
        <form className="SearchForm">

            <InputBox className="InputBox" label="Topic" placeholder="Net Neutrality" />
            <InputBox className="InputBox" label="Start Year" placeholder="2000" />
            <InputBox className="InputBox" label="End Year" placeholder="2018" />

            <a className="button is-success">submit</a>

        </form>
    )
}

export default SearchForm;