/**
 * Created by bstojchevski on 5/29/2017.
 */
import React, { PropTypes}   from "react";
// import PropTypes from "prop-types";
import Header                from "./common/Header";
import Footer                from "./common/Footer";
import { connect }           from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
        {this.props.children}
        {/*{console.log("DECA... ", this.props.children)}*/}
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
