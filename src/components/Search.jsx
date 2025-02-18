import React from "react";

const Search = ({ searchTerm, onSearchChange, onSearch }) => {

  return (
    <section className="search">

      <form 
            className="search__form" 
            onSubmit={(e) => { e.preventDefault(); onSearch(); }}
      >
        <fieldset className="search__name">
          <input 
            type="text" 
            name="form-question" 
            className="search__form-input"
            placeholder="Task name" 
            required 
            value={searchTerm}
            minLength="1" 
            maxLength="500" 
            id="name"
            onChange={onSearchChange}
          />
          <span className="search__input-error" id="name-error"></span>
        </fieldset>

        <button 
          className="search__add-button" 
          type="submit"
          >Search</button>

        <img src="./images/search_icon.png" 
             alt="иконка поиска" 
             className="search__button-logo"/>

      </form>

    </section>
  );
};

export default Search;
