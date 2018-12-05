import React, { Component } from "react";

class Counter extends Component {
  /* LOCAL STATE STUFF */
  // state = {
  //   value: this.props.value //This uses the value declared in "Counters" component
  // }; //Object that includes any data the component needs

  //Event handler method, uses the arrow function to avoid errors with escape values
  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    const { counter, onIncrement, onDelete } = this.props;
    return (
      <div>
        <h4>Counter #{counter.id}</h4>
        <span className={this.getBadgeClasses(counter)}>
          {this.formatCount(counter)}
        </span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m2"
        >
          Delete
        </button>
      </div>
    );
  }

  // Dynamic classes
  getBadgeClasses(c) {
    let classes = "badge m2 badge-";
    classes += c.value === 0 ? "warning" : "primary";
    return classes;
  }

  // Conditional values
  formatCount(c) {
    const { value } = c; // Destructuring variable
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
