import React from "react";

function Footer() {
  const fName = "Orin";
  const lName = "Fletcher";
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();

  return (
    <footer>
      Copyright {currentYear}. Made with &#128406; by {fName + " " + lName}.
    </footer>
  );
}

export default Footer;
