import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';

class Button extends Component {
  static defaultProps = {
    children: "Salve"
  };
  static propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
  }

  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>  
    );
  }
};

class App extends Component {
  handleClick() {
    alert('Button Clicked');
  }
  render() {
    return (
      <Fragment>
        <h1>ReactApp</h1>
        <Button onClick={ () => {
          alert("Button");  
        }}/>
        <Button onClick={this.handleClick}> Send </Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));