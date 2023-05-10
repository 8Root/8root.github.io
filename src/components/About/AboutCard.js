import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Rootqit </span>
            from <span className="purple">Bayern, Germany.</span>
            <br />I just like coding as a hobby, but I will try getting
            <br /> a job that involves tech/coding.
            <br />
          </p>
          <ul>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Yes."{" "}
          </p>
          <footer className="blockquote-footer">Rootqit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
