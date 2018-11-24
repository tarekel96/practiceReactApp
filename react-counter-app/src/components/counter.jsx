import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
    imageUrl: "http://picsum.photos/200", // generates random 200x200 picture
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    // when the 'tags' array is empty it will return 'There are no tags!'
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {/* maps each tag into a list item */}
        {/*must put key with map method to uniquely identify the list items*/}
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  constructor(props) {
    /* since we added a constructor to the child class (Counter) 
    we need to call the constructor of the parent class (Component) by using super */
    super(props);
    /* now we have access to the 'Counter' object */
    console.log(this);
    /* JS functions are objects so they have the bind method. 
    Bind allows us to set value of 'this' */
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement = product => {
    /* here there is no access to 'this' because it is a standalone function 
    as oppoed to a method of an object. 
    Because we binded above 'this' will always reference the current object. */
    console.log("increment pressed", this);
    console.log("product: " + product);
    /* cannot change the value of state data manually,so must use this.setState, 
    which tells React that the state is updating. Only state properties (in the form of an object) 
    go inside setState() */
    this.setState({ count: this.state.count + 1 });
  };

  /* styles = {
    fontSize: "10px",
    fontWeight: "bold"
  }; */
  render() {
    // Every React Component has a property called 'props'.
    // 'value' and 'selector' from counters.jsx will be the properties of the props object. 'key' is not included because it is a special attribute
    console.log("props", this.props);
    // () are essential because automatic semi-colon insertion. JS automatically puts a ';' in front of return if there is nothing in front of it.
    return (
      // A common pattern in React is for a component to return multiple elements.
      //Fragments let you group a list of children without adding extra nodes to the DOM.
      <React.Fragment>
        {this.props.children}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span
          /* style={{ fontSize: 30 }}  */ className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
          /* when the button is pressed, the id of the current product is passed through the handleIncrement method as an argument */
          /* eslint-disable-next-line */
          onClick={product => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* if the length of the tags array is = '0', it will return the expression (conditionally rendering content with && and truthy/falsy concepts) */}
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    // regardless if the button is yellow or blue, we want to have these classes
    let classes = "badge m-2 badge-";
    // if count = 0 it will display a yellow button, otherwise it will be a blue bottom
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  // if the count = 0 return 'Zero' otherwise return the numerical value of count itself
  // 'this' refers to the Counter object
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
