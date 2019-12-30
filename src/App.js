import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./pages/Form";
import Login from "./pages/Login";
import List from "./pages/List";
import { AuthProvider } from "./constants/auth";
import PrivateRoute from "./constants/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Form} />
          <PrivateRoute exact path="/List" component={List} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
