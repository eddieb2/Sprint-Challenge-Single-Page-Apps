import React from "react";

export default function SearchForm({setQuery}) {
  const handleChange = event => {
    setQuery(event.target.value)
    console.log(event.target.value)
  }

  return (
    <section className="search-form">
      <form>
        <input
          type='text'
          name='name'
          placeholder='Search By Name'
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
