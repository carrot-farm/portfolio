import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import {withRouter} from 'react-router-dom'; //history 객체에 연결하기 위해
import * as baseActions from 'store/modules/base';
import Head from 'components/common/Head';

class HeadContainer extends Component{
   componentDidMount = ()=>{
       const {BaseActions} = this.props;
       BaseActions.setHeadTitle('김수현의 포트폴리오');
       BaseActions.setHeadDescription('김수현의 포트 폴리오 사이트 입니다.');
   }
   render(){
      const {headTitle, headDescription} = this.props;
      return(
         <div>
             <Head headTitle={headTitle} headDescription={headDescription} />
         </div>
      )
   }
}

export default connect(
   state=>({
      headTitle: state.base.get('headTitle'),
      headDescription: state.base.get('headDescription')
   }),
   dispatch=>({
      BaseActions: bindActionCreators(baseActions, dispatch),
   })
)(withRouter(HeadContainer));