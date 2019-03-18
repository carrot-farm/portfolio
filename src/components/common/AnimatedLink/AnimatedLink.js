import React, { Fragment, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import {withRouter} from 'react-router-dom'; //history 객체에 연결하기 위해
import * as baseActions from 'store/modules/base';

class AnimatedLink extends Component {
    state = {
        animated: false
    };

    handleLinkClick = (e, to, bg, onClick)=>{
        const {BaseActions, history} = this.props;
        e.preventDefault();
        //동일 페이지일 경우 페이지 이동 방지.
        if(history.location.pathname === to){return false;}
        BaseActions.setLink(to);
        BaseActions.showLoadingAction('staggerPannel');
        BaseActions.setStaggerPannelBg(bg);
        if(typeof onClick === 'function'){onClick(e);}
    };
    
    render() {
        const {to, children, className, bg, onClick} = this.props;
        return (
            <Fragment>
                <a onClick={e=>this.handleLinkClick(e, to, bg, onClick)} 
                    style={{cursor:'pointer'}}
                    className={className} 
                >
                    {children}
                </a>
            </Fragment>
        )
    };
};

export default connect(
	state=>({
      visible: state.base.getIn(['loadingAction','staggerPannel']),
	}),
	dispatch=>({
		BaseActions: bindActionCreators(baseActions, dispatch)
	})
)(withRouter(AnimatedLink));