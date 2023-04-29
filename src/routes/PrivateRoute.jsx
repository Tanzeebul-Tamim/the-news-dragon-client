import React, { useContext } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="d-flex justify-content-center vh-100 align-items-center">
        <Button variant="dark" disabled>
          <Spinner
            as="span"
            animation="border"
            role="status"
            aria-hidden="true"
          />
          <span className="fs-1 ms-3">Loading...</span>
        </Button>
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
};

export default PrivateRoute;

/* steps
1. check if the user is logged in or not
2. if user is logged in, then allow them to visit the route
3. else redirect the user to the login page
4. setup the private router
5. handle loading */
