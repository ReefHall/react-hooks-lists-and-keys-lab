import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const aLinks = links.map(link => <a href = {`#${link}`} key ={link}>{link}</a>
     
  )

  return <nav>{aLinks}</nav>;
}

export default NavBar;
