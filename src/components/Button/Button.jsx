import clsx from 'clsx';
import s from './Button.module.css'
import React from 'react';

export const Button = () => {
  return (
    <button className={clsx(s.Button)}>Load more</button>
  )
}
