import React from 'react';
import './Header.css'

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class Header extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div class="header">
  <a href="#default" class="logo">Home Work - React</a>
  <div class="header-right">
    <a class="" href="getting-started.html">Problem 1</a>
    <a href="p2.html">Problem 2</a>
    <a href="p4.html">Problem 3</a>
    <a href="p4.html">Problem 4</a>
  </div>
</div>
    );
  }
}

export default Header;
