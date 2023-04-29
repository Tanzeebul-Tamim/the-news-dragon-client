import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import RightNav from "../pages/Shared/RightNav/RightNav";

const Main = () => {
  const breakingNews = useLoaderData();
  const breakingTitle = breakingNews.map(singleNews => singleNews.title).join(' - ');
  return (
    <div>
      <Header title={breakingTitle}></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
