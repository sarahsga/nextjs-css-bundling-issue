import React from 'react';
import defaultcss from '../styles/default.module.css';
import componentcss from '../styles/Home.module.css';

export default function Index() {
  return <p className={`${componentcss.test} ${defaultcss.test}`}>Hello World</p>;
}
