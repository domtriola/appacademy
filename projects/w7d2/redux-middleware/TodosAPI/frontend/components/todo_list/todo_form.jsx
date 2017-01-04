import React from 'react';
import { uniqueId } from '../../util/id.js';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      done: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.createTodo({ todo })
      .then(() => this.setState({ title: "", body: "" }));
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>

          <label>Title
            <input onChange={(e) => this.updateTitle(e)}
                   type="text"
                   name="title"
                   value={this.state.title} />
          </label>

          <label>Body
            <input onChange={(e) => this.updateBody(e)}
                   type="text"
                   name="body"
                   value={this.state.body}/>
          </label>

          <button>Add Todo</button>
        </form>
    );
  }
}

export default TodoForm;
