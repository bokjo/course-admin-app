/**
 * Created by bstojchevski on 6/1/2017.
 */
import React, { PropTypes } from "react";
import { Link, IndexLink  } from "react-router";

const Footer = () => {
  return (
    <footer>
      {/*<hr/>*/}
      {/*<p>Created by: Bojanche Stojchevski</p>*/}
      {/*<p>Contact information: <a href="mailto:bstojcevski89@gmail.com" target="_blank">*/}
        {/*bstojcevski89@gmail.com</a></p>*/}
      {/*/!*<IndexLink to="/" activeClassName="active">Home</IndexLink>*!/*/}
      {/*/!*{"  |  "}*!/*/}
      {/*/!*<Link to="/courses" activeClassName="active">Courses</Link>*!/*/}
      {/*/!*{"  |  "}*!/*/}
      {/*/!*<Link to="/about" activeClassName="active">About</Link>*!/*/}
      {/*<hr/>*/}
      <div className="navbar navbar-default navbar-fixed-bottom">
        <div className="container text-center">
          <p className="navbar-text text-muted credit col-md-12 col-sm-12 col-xs-12">
            © 2017 - App Built By <Link to="contact">Bojanche Stojchevski</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
