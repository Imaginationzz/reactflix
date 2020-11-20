import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../icon.png";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4  text-white">
      <Container fluid>
        <Row>
          <Col>
            <ul>
              <li>
<<<<<<< Updated upstream
                <a href="/"><img id='logo' src={logo} alt='logo' /></a>
=======
                <a href="/">
                  <img id="logo" src={logo} alt="logo" />
                </a>
>>>>>>> Stashed changes
              </li>
              <li>
                <a href="#fff">Audio and subtitles</a>
              </li>
              <li>
                <a href="#ffffffffff">Media center</a>
              </li>
              <li>
                <a href="#fffffffffff">Service code</a>
              </li>
              <li>
                <small>
                  <a href="#ffffffff">
                    Copyright 1997-2019 Netflix Inc.0d00fcda2fdf9c0de
                  </a>
                </small>
              </li>
            </ul>
          </Col>
          <ul>
            <li>
              <a href="#fff">Audio description</a>
            </li>
            <li>
              <a href="#ffffffffff">Investor relations</a>
            </li>
            <li>
              <a href="#fffffffffff">Legacy notices</a>
            </li>
          </ul>
          <Col>
            <ul>
              <li>
                <a href="#fff">Audio description</a>
              </li>
              <li>
                <a href="#ffffffffff">Investor relations</a>
              </li>
              <li>
                <a href="#fffffffffff">Legacy notices</a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <a href="#fff">Audio description</a>
              </li>
              <li>
                <a href="#ffffffffff">Investor relations</a>
              </li>
              <li>
                <a href="#fffffffffff">Legacy notices</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
