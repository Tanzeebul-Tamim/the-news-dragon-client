import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h1>Terms and Conditions</h1>
      <br></br>
      <p>
        Welcome to our newspaper website. By registering for an account, you
        agree to the following terms and conditions:
      </p>
      <ol>
        <li>You must be at least 18 years old to register for an account.</li>
        <li>
          You are responsible for maintaining the confidentiality of your
          account information, including your username and password.
        </li>
        <li>
          You agree to use the website only for lawful purposes and in a manner
          that does not violate any applicable laws or regulations.
        </li>
        <li>
          You agree not to use the website to distribute, publish, or display
          any content that is illegal, harmful, offensive, or inappropriate.
        </li>
        <li>
          You acknowledge that we may modify or discontinue the website at any
          time, without prior notice or liability.
        </li>
        <li>
          You agree to indemnify and hold us harmless from any claims, damages,
          or losses arising from your use of the website or any breach of these
          terms and conditions.
        </li>
        <li>
          We reserve the right to terminate your account at any time, without
          prior notice or liability, if we determine that you have violated
          these terms and conditions.
        </li>
        <li>
          These terms and conditions constitute the entire agreement between you
          and us, and supersede all prior or contemporaneous agreements,
          representations, warranties, and understandings, whether oral or
          written.
        </li>
        <li>
          These terms and conditions shall be governed by and construed in
          accordance with the laws of [insert state/country].
        </li>
        <li>
          Any disputes arising out of or relating to these terms and conditions
          or your use of the website shall be resolved exclusively through
          arbitration in accordance with the rules of the American Arbitration
          Association.
        </li>
      </ol>
      <p>
        Go back to <Link to='/register'>Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
