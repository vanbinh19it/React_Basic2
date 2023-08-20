import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/ps2.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount = () => {
    // setTimeout(() => {
    //   this.props.history.push("./todo");
    // }, 3000);
  };

  handleDeleteUser = (user) => {
    console.log("Check delete User: ", user);
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    this.props.addUserRedux();
  };

  render() {
    let listUser = this.props.dataRedux;
    console.log("Check props redux : ", this.props.dataRedux);
    return (
      <>
        <div>Hello world from Homepage with Eric & Hoi Dan IT</div>
        <div>
          <img
            src={logo}
            alt="logo"
            style={{ width: "200px", height: "200px", marginTop: "20px" }}
          />
        </div>

        <div>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} &#160;{" "}
                  <span onClick={() => this.handleDeleteUser(item)}>X </span>
                </div>
              );
            })}
          <button onClick={() => this.handleCreateUser()}>Add user</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
