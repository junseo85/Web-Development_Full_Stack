import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Contact() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/LogPage">Practice Log</Link>
        <Link to="/Contact">Conntact</Link>
        <Link to="/Order">Order</Link>
    </nav>
  );
}

export default Contact;
