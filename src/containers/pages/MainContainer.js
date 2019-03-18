import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import * as baseActions from 'store/modules/base';
import * as mainActions from 'store/modules/main';
import PopIcons from 'components/sections/PopIcons';
import HistoryTree from 'components/sections/HistoryTree';
import Location from 'components/sections/Location';


class MainContainer extends Component{
   componentDidMount(){
      window.scrollTo(0,0);
   }
   componentDidUpdate(){
   }
   render(){
      const {history} = this.props;
      
      return(
         <div>
            <PopIcons />
            <HistoryTree history={history} />
            <Location 
               description={'프로필 보기'}
               location={'About'} 
               link={'/about'} 
               bg={'#f7fe00'}
            />
         </div>
      )
   }
}

export default connect(
   state=>({
      history: state.main.get('history')
   }),
   dispatch=>({
      BaseActions: bindActionCreators(baseActions, dispatch),
      MainActions: bindActionCreators(mainActions, dispatch)
   })
)(MainContainer);