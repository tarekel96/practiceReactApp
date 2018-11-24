import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    // importing an array of counter components
    counters: [
      { id: 1, value: 4 }, // value property is used to set the initial value of each counter
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  // event handler
  handleDelete = counterId => {
    //     console.log("Event Handler Called", counterId);
    // filter method gets all of the counters except for the given id, so essentially it deletes the given id
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {/* the counters array from this.state is mapped out to the Counter component with a key */}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
        {/* <h4>Counter #{counter.id}</h4>
          </Counter> */}
      </div>
    );
  }
}

export default Counters;
