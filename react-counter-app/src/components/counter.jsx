import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "http://picsum.photos/200" // generates random 200x200 picture
  };

  /* styles = {
    fontSize: "10px",
    fontWeight: "bold"
  }; */
  render() {
    // regardless if the button is yellow or blue, we want to have these classes
    let classes = "badge m-2 badge-";
    // if count = 0 it will display a yellow button, otherwise it will be a blue bottom
    classes += this.state.count === 0 ? "warning" : "primary";
    // () are essential because automatic semi-colon insertion. JS automatically puts a ';' in front of return if there is nothing in front of it.
    return (
      // A common pattern in React is for a component to return multiple elements.
      //Fragments let you group a list of children without adding extra nodes to the DOM.
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span /* style={{ fontSize: 30 }}  */ className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
  // if the count = 0 return 'Zero' otherwise return the value of count itself
  // this refers to the Counter object
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
