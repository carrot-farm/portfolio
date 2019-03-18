import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import * as baseActions from 'store/modules/base';
import FillNav from 'components/nav/FillNav';


class fillNavContainer extends Component{
   handleOnClose = ()=>{
      const {BaseActions} = this.props;
      BaseActions.closeSideMenu();
   }
   componentDidMount(){
   }
   componentDidUpdate(){
   }
   render(){
      const {
         visible,
         menu
      } = this.props;
      return(
         <Fragment>
            <FillNav 
               visible={visible}
               handleOnClose={this.handleOnClose}
               menu={menu}
            />
         </Fragment>
      )
   }
}

export default connect(
   state=>({
      visible: state.base.get('isSideMenuOpen'),
      menu: state.base.get('menu'),
   }),
   dispatch=>({
      BaseActions: bindActionCreators(baseActions, dispatch),
   })
)(fillNavContainer);