/**
 * Created by bstojchevski on 5/29/2017.
 */
import React, { PropTypes } from "react";
import { Link, IndexLink  } from "react-router";
import LoadingDots          from "./LoadingDots";

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {"  |  "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {"  |  "}
      <Link to="/about" activeClassName="active">About</Link>
      {"  |  "}
      <Link to="/contact" activeClassName="active">Contact</Link>
      <br/>
      {loading && <LoadingDots interval={300} dots={3}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
