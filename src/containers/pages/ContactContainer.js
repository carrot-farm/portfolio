import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import * as baseActions from 'store/modules/base';
import * as mainActions from 'store/modules/main';
import AboutMain from 'components/sections/AboutMain';
import ContactContents from 'components/sections/ContactContents';
import Location from 'components/sections/Location';


class ContactContainer extends Component{
   componentDidMount(){
      window.scrollTo(0,0);
   }
   componentDidUpdate(){
   }
   render(){
      return(
         <div>
            <AboutMain
               background={'/data/images/contact/contact_main-section.jpg'}
               title={'최선의 다해\n최고의 결과를\n만들겠습니다.'}
            />
            <ContactContents />
            <Location 
               description={'히스토리 보기'}
               location={'Main'} 
               link={'/'} 
            />
         </div>
      )
   }
}

export default connect(
   state=>({
   }),
   dispatch=>({
      BaseActions: bindActionCreators(baseActions, dispatch),
      MainActions: bindActionCreators(mainActions, dispatch)
   })
)(ContactContainer);