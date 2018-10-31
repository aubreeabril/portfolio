import React from "react";

const Contact = props => {
  return (
    <div className="contact-text">
      <a
        href="https://twitter.com/aubreeabril"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i class="fab fa-twitter" />
      </a>
      <a
        href="https://github.com/aubreeabril"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i class="fab fa-github" />
      </a>
      <a
        href="mailto:aubree.abril@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i class="fas fa-envelope" />
      </a>
    </div>
  );
};

export default Contact;
