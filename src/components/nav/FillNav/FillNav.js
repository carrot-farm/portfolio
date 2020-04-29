/*
    메뉴에 마우스 오버시 전체 메뉴 보기
*/
import React, { Component , Fragment} from 'react';
import styles from './FillNav.scss';
import classNames from 'classnames/bind';
import {withRouter } from 'react-router-dom';
import AnimatedLink from 'components/common/AnimatedLink';
import {IconButton, Icon} from '@material-ui/core';
import { TimelineMax } from 'gsap/all';

const cx = classNames.bind(styles);

//============= 리스트
const Menu = ({ menu , curPath, onClick}) => {
    const menus = menu.map(
        item=>(
            <li key={item.link}>
                <AnimatedLink to={item.link} 
                    className={(curPath===item.link?'active':'')}
                    onClick={onClick}
                    bg={item.bg}
                >{item.text}</AnimatedLink>
            </li>
        )
    );
    return (
        <Fragment>
            <ul className="menu-wrapper">
                <li key="/">
                    <AnimatedLink to={'/'} 
                        className={(curPath==='/'?'active':'')}
                        onClick={onClick}
                    >HOME</AnimatedLink>
                </li>
                { menus }
            </ul>
        </Fragment>
    );
};

//============= 헤더 컴포넌트
class FillNav extends Component {
    menuEl = null;
    lis = null
    tl = null;
    hideTl = null;
    setTl = ()=>{
        this.lis = this.menuEl.querySelectorAll('li');
        this.tl = new TimelineMax()
                    .staggerFromTo(this.lis, 0.3,{
                        autoAlpha: 0,
                        y: '-100%'
                    },{
                        autoAlpha: 1,
                        y: '0%'
                    }, 0.2)
                    .add('exit');
    };
    componentDidMount(){
        this.setTl(this.lis, 0.5,{
            autoAlpha: 0
        });
    }
    componentDidUpdate(prevProps){
        if(prevProps === this.props){
            return false;
        }
        if(this.props.visible){
            console.log('call', prevProps, this.props)
            this.tl.restart();
        }
    }
    
    componentWillUnmount(){
    }

    render() {
        const {
            visible,
            handleOnClose,
            menu,
            location
        } = this.props;
        return (
            <Fragment>
                <nav id="contents_fill-menu-root" style={{display:(visible)?'block':'none'}}>
                    <div className={cx('top-container')}>
                        <IconButton className='close-button' onClick={handleOnClose}>
                            <Icon>close</Icon>
                        </IconButton>
                    </div>
                    <div className={cx('menu-container container')} ref={el=>this.menuEl=el}>
                        <Menu menu={menu} 
                            curPath={location.pathname} 
                            onClick={handleOnClose}
                        />
                    </div>
                </nav>
            </Fragment>
        );
    }
};

export default withRouter(FillNav);