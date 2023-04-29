import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = ({title}) => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img className="mb-3" src={logo} alt="" />
        <p className="text-secondary">Journalism Without Fear or Favor</p>
        <p className="text-secondary"><strong>{moment().format("dddd")}</strong>, {moment().format("MMMM D, YYYY")}</p>
      </div>
      <div style={{background: "#f3f3f3"}} className="d-flex mb-4 gap-4 p-3 rounded">
        <Button className="px-4 fw-bold" style={{letterSpacing: "2px"}} variant="danger">Latest</Button>
        <Marquee
          className="fw-bold fs-6"
          style={{color: "#8b8b8b"}}
          gradient={true}
          gradientColor={[243, 243, 243]}
          speed={50}
          pauseOnHover={true}
        >
          {title}
        </Marquee>
      </div>     
    </Container>
  );
};

export default Header;
