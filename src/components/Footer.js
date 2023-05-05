import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/github-mark-white.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <h2>SAQUIB FRAZ</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.facebook.com/sk.fraz"><img src={navIcon1} alt="link" /></a>
                <a href="https://www.facebook.com/sk.fraz"><img src={navIcon2} alt="fb" /></a>
                <a href="https://www.instagram.com/sk.fraz/"><img src={navIcon3} alt="insta" /></a>
                <a href="https://github.com/SKfraz04"><img src={navIcon4} alt="insta" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
