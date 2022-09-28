import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Pizza Types",
      flavors: [
        { id: "1", flavor: " Cheese " },
        { id: "2", flavor: " Vegetarian" },
        { id: "3", flavor: "Meat Lover" },
        { id: "4", flavor: "All In" },
        { id: "5", flavor: "Build My Own" }
      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])

      .map(e => arr[e]);

    return unique;
  }

  render() {
    const flavors = require("./pizzas.json");
    const uniqueFlavor = this.getUnique(flavors.variety, "flavor");
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
        <label>
          Looping through Pizza Types
          <select>
            {this.state.flavors.map(item => (
              <option key={item.id} value={item.flavor}>
                {item.flavor}
              </option>
            ))}
            {console.log(this.state.flavors)}
          </select>
        </label>
        <input type="submit" value="Submit" />
        <br />
        <br />
        <label>
          Looping through Json File for variety
          <select>
            {uniqueFlavor.map(item => (
              <option key={item.id} value={item.flavor}>
                {item.flavor}
              </option>
            ))}
            {console.log(this.state.flavors)}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;