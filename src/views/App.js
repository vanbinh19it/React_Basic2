import logo from "./logo.svg";
import "./App.scss";
// import MyComponent from "./Examples/MyComponent";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyComponent from "./Examples/MyComponent";

import Navigation from "./Navigations/Navigation";
import Home from "./Examples/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import ListUser from "./User/ListUser";
import DefaultUser from "./User/DefaultUser";

function App() {
  /* 
     2 Components: class component / function component (function / arrow)
     - JSX
  */
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>

            <Route path="/user" exact>
              <ListUser />
            </Route>

            <Route path="/user/:id">
              <DefaultUser />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
