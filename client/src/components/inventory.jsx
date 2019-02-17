import React, { Component } from "react";
import axios from "axios";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/products/")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  addToList(term) {
    return axios
      .post(
        "http://localhost:8080:/products/create",
        {
          title: term
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then(function(response) {
        console.log(response);
      });
  }

  render() {
    let { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div className="App">
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
          ;
        </ul>
      </div>
    );
  }
}

export default Inventory;
