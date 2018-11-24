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
  render() {
    return (
      <React.Fragment>
        {/* the counters array from this.state is mapped out to the Counter component with a key */}
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
