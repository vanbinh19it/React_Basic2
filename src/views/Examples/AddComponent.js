import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Missing title");
      return;
    }
    console.log("Check data input: ", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">Job's title:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleTitleJob(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleSalary(event)}
          />
          <br />
          <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
      </div>
    );
  }
}

export default AddComponent;
