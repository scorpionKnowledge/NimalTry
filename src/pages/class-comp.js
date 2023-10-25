import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

class SubComponent extends React.Component {
  render() {
    return <h2>This is sub Component</h2>;
  }
}

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = { date: new Date(), name: "Nimal", count: 1 };
    this.state1 = { name: "Nimal", count: 1 };
    // this.nameChange = this.nameChange.bind(this);
    this.countIncress = this.countIncress.bind(this);
    this.countDecrement = this.countDecrement.bind(this);
    console.log("App - run Constructor");
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log("App - run componentDidMount");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("App - run componentWillUnmount");
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  //   nameChange(e) {
  //     e.preventDefault();
  //   }

  nameChange = () => {
    if (this.state.name === "Nimal") {
      this.setState({ name: "Raj" });
    } else {
      this.setState({ name: "Nimal" });
    }
  };
  countIncress() {
    this.setState({ count: this.state.count + 1 }, () =>
      console.log("increment Done")
    );
  }
  countDecrement() {
    this.setState({ count: this.state.count - 1 }, () =>
      console.log("Decrement Done")
    );
  }

  Arrowfun = () => console.log(this);

  render() {
    console.log("App - run render");

    return (
      <>
        <Header />
        <SubComponent />
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <h2>{this.state.name}</h2>
        <h2> Increment Counter : {this.state.count}</h2>
        <button onClick={this.nameChange}>Clickme</button>
        {/* <button onClick={this.nameChange(this.state.name)}>Clickme</button> */}
        <button onClick={this.countIncress}>Increment</button>
        <button onClick={this.countDecrement}>Decrement</button>
        <button onClick={this.Arrowfun}>Clickme arrow function</button>

        <Footer />
      </>
    );
  }
}

export default ClassComponent;
