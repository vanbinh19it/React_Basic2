import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  // key: value
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Developers", salary: "500 " },
      { id: "abcJob2", title: "Testers", salary: "400 " },
      { id: "abcJob3", title: "Project manager", salary: "1000 " },
    ],
  };

  addNewJob = (job) => {
    console.log("Check job from parent: ", job);
    // let currentJobs = this.state.arrJobs;
    // currentJobs.push(job);

    this.setState({
      arrJobs: [...this.state.arrJobs, job],
      // arrJobs: currentJobs,
    });
  };

  deleteJobs = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">>> Run Did update: ",
      "prev State: ",
      prevState,
      "current State: ",
      this.state
    );
  }
  componentDidMount() {
    console.log(">>> Run component did mount");
  }
  /*
    JSX => return Block
    fragment
  */

  // re-render
  render() {
    console.log(">>>> Call render: ", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJobs={this.deleteJobs}
        />

        {/* props: property */}
      </>
    );
  }
}

export default MyComponent;
