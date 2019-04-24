import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "store/modules/base";
import AboutMain from "components/sections/AboutMain";
import AboutContents from "components/sections/AboutContents";
import Location from "components/sections/Location";

class MainContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {}
  render() {
    return (
      <div>
        <AboutMain
          background={"/data/images/about/about_main-section.jpg"}
          title={"REACT에\n많은 관심을\n가지고 있습니다."}
        />
        <AboutContents />
        <Location
          description={"언제나 연락주십시요."}
          location={"Contact"}
          link={"/contact"}
        />
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(MainContainer);
