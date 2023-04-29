import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png';
import './RightNav.css';
import { AuthContext } from "../../../providers/AuthProvider";


const RightNav = () => {
  const { googleSignIn, githubSignIn, facebookSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.error(error);
      })
  }

  const handleGitHubSignIn = () => {
    githubSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.error(error);
      })
  }

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button onClick={handleGoogleSignIn} className="mb-2 w-100" variant="outline-danger"> <FaGoogle /> Login with Google</Button>
      <Button onClick={handleGitHubSignIn} className="mb-2 w-100" variant="outline-secondary"> <FaGithub /> Login with Github</Button>
      <Button onClick={handleFacebookSignIn} className="w-100" variant="outline-primary"> <FaFacebook /> Login with Facebook</Button>
      <div className="mt-4">
        <h4 className="mb-3">Find us on</h4>
        <ListGroup>
            <ListGroup.Item className="p-3">
              <h5 className="d-flex gap-4">
                <span><FaFacebookF style={{color: "#4267B2"}}></FaFacebookF></span><span>Facebook</span>
              </h5>
            </ListGroup.Item>
            <ListGroup.Item className="p-3">
              <h5 className="d-flex gap-4">
                <span><FaTwitter style={{color: "#1DA1F2"}}></FaTwitter></span><span>Twitter</span>
              </h5>
            </ListGroup.Item>
            <ListGroup.Item className="p-3">
              <h5 className="d-flex gap-4">
                <span><FaInstagram style={{color: "crimson"}}></FaInstagram></span><span>Instagram</span>
              </h5>
            </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="image-container">
          <img className="rounded-3" src={bg} alt="" />
          <div className="image-text">
            <h2 className="mb-5">Create an Amazing Newspaper</h2>
            <p className="mb-5">
              Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
            </p>
            <Button className="px-4 fw-bold" style={{letterSpacing: "2px"}} variant="danger">Learn More</Button>
          </div>
      </div>
    </div>
  );
};

export default RightNav;
