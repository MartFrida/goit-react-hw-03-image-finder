import React from 'react';
import clsx from 'clsx';
import s from './Searchbar.module.css'
import { FaSearchengin } from "react-icons/fa6";

export const Searchbar = () => {
  return (
    <header className={clsx(s.searchbar)}>
      <form className={s.form}>
        <button type="submit" className={s.button}>
          <FaSearchengin width='2em' height='2em' />
          {/* <span className={s.buttonLabel}>Search</span> */}
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}
