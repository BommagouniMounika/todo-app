import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ToDoList from "./components/ToDoList";

class App extends Component {
  constructor() {
    super();
    this.state = { value: "", items: [] };
  }

  handleInput = (e) => {
    this.setState({ value: e.target.value });
  };

  handleAddItem = (e) => {
    e.preventDefault();

    if (this.state.value === "") {
      return;
    }

    const newItem = { task: this.state.value, id: uuidv4(), status: false };

    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      value: "",
    }));
  };

  handleMarkItemComplete = (itemId) => {
    const updatedItems = this.state.items.map((item) => {
      if (itemId === item.id) item.status = !item.status;
      return item;
    });

    this.setState({
      items: [].concat(updatedItems),
    });
  };

  handleDeleteItem = (itemId) => {
    const updatedItems = this.state.items.filter((item) => {
      return item.id !== itemId;
    });

    this.setState({
      items: [].concat(updatedItems),
    });
  };

  render() {
    const btn_style = {
      marginLeft: "10px",
      marginBottom: "5px",
    };

    const input_style = {
      width: "250px",
      padding: "5px",
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="body">
              <h2 className="heading">TODO List</h2>
              <input
                style={input_style}
                placeHolder="Add New Todo"
                type="input"
                onChange={this.handleInput}
                value={this.state.value}
              />
              <button
                style={btn_style}
                type="button"
                className="btn btn-primary btn-md"
                onClick={this.handleAddItem}
              >
                Add
              </button>
              <ToDoList
                items={this.state.items}
                deleteItem={this.handleDeleteItem}
                markItemComplete={this.handleMarkItemComplete}
              />
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default App;
