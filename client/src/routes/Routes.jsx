import React from "react";
import {
  BrowserRouter as Router,
  Routes as RoutesList,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

import { Auth } from "../pages/student";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesList>
        <Route path="/student/auth" element={<Auth />} />
      </RoutesList>
    </BrowserRouter>
  );
};

export default Routes;
