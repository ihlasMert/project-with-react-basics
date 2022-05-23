import React from 'react';

import classes from './Card.module.css';

const Card = (form) => {
  return <div className={`${classes.card} ${form.className}`}>{form.children}</div>;
};

export default Card;