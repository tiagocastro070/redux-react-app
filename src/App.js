import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Reducers from "./redux/actions/actions.js";
import ListItem from "./components/List.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

class App extends Component {
  state = {
    myTodos: []
  };

  render() {
    const { todos } = this.props;

    console.log(99, this.props);

    return (
      <div className="App">
        <h1 className="text-center">Hello Redux</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="card">
                <div className="card-header">
                  <div className="form-inline justify-content-between">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="newtodo"
                        placeholder="Add new to do"
                      />
                    </div>
                    <button className="btn btn-primary">Add</button>
                  </div>
                </div>
                <div className="my-todos">
                  <ul className="list-group list-group-flush">
                    {/* {todos.map(todo => {
                      return <ListItem todoName={todo.todoname} />;
                    })} */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    todos: store.todos
  };
};

const mapDispatchToProps = dispatch => {
  bindActionCreators(Reducers, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
// export default App;
