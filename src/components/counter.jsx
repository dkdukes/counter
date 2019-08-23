import React, { Component } from "react";
class Counter extends Component {
  /* state = {
    value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
  /*constructor(){
        super();
        this.handleIncrement=this.handleIncrement.bind(this);
    }*/
  /* handleIncrement = product => {
    //console.log(product);
    this.setState({ value: this.state.counter.value + 1 });
  };
  handleDecrement = price => {
    this.setState({ value: this.state.counter.value - 1 });
  };*/
  componentDidUpdate(prevProps, prevState) {
    console.log("prevprops", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.value) {
      console.log("err");
    }
  }
  componentWillMount() {
    console.log("counter-unmount");
  }
  render() {
    //console.log('props',this.props);
    //console.log(this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
