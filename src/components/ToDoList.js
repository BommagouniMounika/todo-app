import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import "./style.css";

class ToDoList extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item) => (
          <ToDoItem
            id={item.id}
            status={item.status}
            task={item.task}
            deleteItem={this.props.deleteItem}
            markItemComplete={this.props.markItemComplete}
          />
        ))}
      </div>
    );
  }
}

export default ToDoList;
