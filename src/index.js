import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class ToDoInput extends React.Component {
  state = {
    value: "12345",
    buttonText: "Add item"
  };
  render() {
    return (
      <div className="form-group">
        <input
          className="form-control"
          value={this.state.value}
          onChange={event => {
            this.setState({
              value: event.target.value
            });
          }}
        />
        <button
          className="form-control"
          onClick={() => {
            this.props.onAddItem(this.state.value);
            this.setState({
              value: ""
            });
          }}
        >
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}

class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-group">{this.props.children}</ul>
      </div>
    );
  }
}

class ToDoItem extends React.Component {
  render() {
    return <li className="list-group-item">{this.props.text}</li>;
  }
}

class App extends React.Component {
  state = {
    todos: ["Item 1", "Item 2", "Item 3", "Item 4"]
  };
  render() {
    return (
      <div>
        <ToDoInput
          onAddItem={item => {
            if (item != "") {
              this.setState({
                todos: this.state.todos.concat(item)
              });
            } else {
              alert("Proszę podać wartość!");
            }
          }}
        />
        <ToDoList>
          {this.state.todos.map(item => (
            <ToDoItem text={item} />
          ))}
        </ToDoList>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
