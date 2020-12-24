import React from "react";

function Footer() {
  const fName = "Orin";
  const lName = "Fletcher";
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();

  return (
    <footer>
      <p>
        Copyright {currentYear}. Made with &#128406; by {fName + " " + lName}.
      </p>
    </footer>
  );
}

export default Footer;
