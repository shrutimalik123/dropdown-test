import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "pizza",
      types: [
        { id: "1", type: " Cheese" },
        { id: "2", type: "Vegetarian" },
        { id: "3", type: "Meat Lover" },
        { id: "4", type: "All In" },
        { id: "5", type: "Build My Own" }

      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("Your selected type is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };


  render() {
    const countries = require("./countries.json");
    const uniqueCountry = this.getUnique(countries.world, "country");
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />
        <br />
        <form>
          <select>
            {uniqueCountry.map(item => (
              <option key={item.id} value={item.country}>
                {item.country}
              </option>
            ))}
            {console.log(this.state.countries)}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;