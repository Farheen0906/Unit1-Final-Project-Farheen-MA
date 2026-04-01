import React from 'react';
import { Link } from 'react-router';

function About() {
 return (
  <div>
    <h1>About Page</h1>
    <p> HomeCookeD is being build to empower stay-at-home mom's who are passoinate about cooking,
        to start a catering business while helping customers who want to access and order clean,homecooked meals
        through this application!!
    </p>
    <Link to="/contact">Contact Us</Link>
  </div>
 );
}
export default About;
