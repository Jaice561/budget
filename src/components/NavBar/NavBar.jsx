import React from 'react';

const Navbar = ({ pageName }) => {
    return (
        <>
<nav>
    <div class="nav-wrapper">
    <a className=" right" href="/"><spam>Home</spam></a>
    <h5 className="center page-name brand-logo">{pageName}</h5>
      <ul id="nav-mobile" className="left">
      <li><a className="nav-link" href="/budgets">All My Budget List</a></li>
      <li><a className="nav-link-b" href="/budgets/add">Add to your budget</a></li>
      </ul>
    </div>
  </nav>
</>
    )
}

export default Navbar;