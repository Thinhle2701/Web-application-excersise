import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/example/Example';
import Header from './components/header/Header';
import States from './components/states/States';


ReactDOM.render(
  <div>
    <Header />
    <h1>Problem 4</h1>
    <States/>
  </div>,
  document.getElementById('reactapp4'),
);
