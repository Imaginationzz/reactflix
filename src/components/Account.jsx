import Navbar from "./Navbar";
import Footer from "./Footer";
<<<<<<< Updated upstream
import { Container, Col, Row, Button } from 'react-bootstrap'

=======
import { Container, Col, Row, Button } from "react-bootstrap";
>>>>>>> Stashed changes

const AccountPage = () => {
  return (
    <>
      <Navbar />
<<<<<<< Updated upstream
      <Container className='accountPage text-white'>
=======
      <Container className="accountPage text-white">
>>>>>>> Stashed changes
        <Row>
          <Col md={4}>
            <h4>MEMBERSHIP & BILLING</h4>
            <Button variant="outline-danger">Cancel Membership</Button>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={6}>
                <p>student@strive.shchool</p>
                <p>Password:********</p>
                <p>Phone: 333 333 3333 22</p>
              </Col>
              <Col md={6}>
<<<<<<< Updated upstream
                <p><a href="#uuu">Change account email</a></p>
                <p><a href="#u">Change Password</a></p>
                <p><a href="#u">Change Phone NUmber</a></p>
=======
                <p>
                  <a href="#uuu">Change account email</a>
                </p>
                <p>
                  <a href="#u">Change Password</a>
                </p>
                <p>
                  <a href="#u">Change Phone NUmber</a>
                </p>
>>>>>>> Stashed changes
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Pay Pal admin@strive.school</p>
              </Col>
              <Col>
                <p>Update payment info</p>
                <p>Billing details</p>
              </Col>
            </Row>
            <Row>
<<<<<<< Updated upstream
              <Col>
              </Col>
=======
              <Col></Col>
>>>>>>> Stashed changes
              <Col>
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>
              </Col>
            </Row>
          </Col>
        </Row>
<<<<<<< Updated upstream
        <Container id='plan-details'>
          <Row>
            <Col>
              <h5 style={{ display: 'inline' }}>PLAN DETAILS</h5>
            </Col>
            <Col>
              <p style={{ display: 'inline' }}>Premium <Button variant="outline-info" style={{ display: 'inline' }}>ULTRAHO</Button></p>
            </Col>
            <Col>
              <p><a href="#ss">Change plan</a></p>
            </Col>
          </Row>
        </Container>
        <Container className='text-white'>
          <Row>
            <Col>
              <h5 style={{ display: 'inline' }}>SETTINGS</h5>
=======
        <Container id="plan-details">
          <Row>
            <Col>
              <h5 style={{ display: "inline" }}>PLAN DETAILS</h5>
            </Col>
            <Col>
              <p style={{ display: "inline" }}>
                Premium{" "}
                <Button variant="outline-info" style={{ display: "inline" }}>
                  ULTRAHO
                </Button>
              </p>
            </Col>
            <Col>
              <p>
                <a href="#ss">Change plan</a>
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="text-white">
          <Row>
            <Col>
              <h5 style={{ display: "inline" }}>SETTINGS</h5>
>>>>>>> Stashed changes
            </Col>
            <Col>
              <a href="#asdfgh">Parental controls</a>
              <a href="#asdfgh">Test particpation</a>
              <a href="#asdfgh">Manage download</a>
              <a href="#asdfgh">Activate a device</a>
              <a href="#asdfgh">Recent device streaming activity</a>
              <a href="#asdfgh">Sighn out all devices</a>
            </Col>
          </Row>
        </Container>
<<<<<<< Updated upstream
        <Container className='text-white'>
          <Row>
            <Col md={3}>
              <h5 style={{ display: 'inline' }}>MY PROFILE</h5>
=======
        <Container className="text-white">
          <Row>
            <Col md={3}>
              <h5 style={{ display: "inline" }}>MY PROFILE</h5>
>>>>>>> Stashed changes
            </Col>
            <Col md={3}>
              <h4>Strive School</h4>
              <a href="#dfg">Language</a>
              <a href="#dfg">Language</a>
              <a href="#dfg">Language</a>
            </Col>
            <Col md={3}>
              <br></br>

              <a href="#dfg">Language</a>
              <a href="#dfg">Language</a>
            </Col>
            <Col md={3}>
              <br></br>
              <a href="#dfg">Manage profile</a>
              <a href="#dfg">Add profile email</a>
            </Col>
<<<<<<< Updated upstream


          </Row>
        </Container>


      </Container>


      <Footer />
    </>
  )
}



export default AccountPage
=======
          </Row>
        </Container>
      </Container>

      <Footer />
    </>
  );
};

export default AccountPage;
>>>>>>> Stashed changes
