import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import {withRouter} from 'react-router-dom'; //history 객체에 연결하기 위해
import * as baseActions from 'store/modules/base';
import HoverViewAll from 'components/headers/HoverViewAll';

class HoverViewAllContainer extends Component{
   handleMobileMenuOpen = ()=>{
      const {BaseActions} = this.props;
      BaseActions.openSideMenu();
   }

   render(){
      return(
         <div>
            <HoverViewAll 
               mobileMenuOpen={this.handleMobileMenuOpen}
            />
         </div>
      )
   }
}

export default connect(
	state=>({
      visible: state.base.getIn(['loadingAction','staggerPannel']),
	}),
	dispatch=>({
		BaseActions: bindActionCreators(baseActions, dispatch)
	})
)(withRouter(HoverViewAllContainer));