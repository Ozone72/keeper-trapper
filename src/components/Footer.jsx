import React from "react";

const fName = "Orin";
const lName = "Fletcher";
const currentDate = new Date();

const currentYear = currentDate.getFullYear();

function Footer() {
  return (
    <p>
      Copyright {currentYear}. Made with &#128406; by {fName + " " + lName}.
    </p>
  );
}

export default Footer;
