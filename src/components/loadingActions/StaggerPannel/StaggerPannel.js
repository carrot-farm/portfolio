import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import {withRouter} from 'react-router-dom'; //history 객체에 연결하기 위해
import * as baseActions from 'store/modules/base';
import LoadingActionWrapper from 'components/loadingActions/LoadingActionWrapper';
import styles from './StaggerPannel.scss';
import classNames from 'classnames/bind';
import {TimelineMax, Power2} from 'gsap/all';

const cx = classNames.bind(styles);

class StaggerPannel extends Component{
   state = {
      isMobileView: false,// 현재 뷰가 모바일인지 아닌지 표시.
      animate: false, //현재 애니메이션이 진행중인이 아닌지 표시
   };
   pannelsEl= [];
   tl = new TimelineMax({paused: true});

   //현재가 모바일 뷰인제 체크
   checkMobileView(){
      if(window.innerWidth < 600){
         this.setState({
            isMobileView: true
         })
      }else{
         this.setState({
            isMobileView: false
         })
      }
   }

   //횡 스크롤 애니
   setAni = ()=>{
      const {pannelsEl} = this;
      let cnt = 0;
      this.tl
         .staggerFromTo(pannelsEl, 0.3,{
            y: '-100%',
         },{
            y: '0%',
            ease: Power2.easeInOut,
         }, 0.15, 0, ()=>{
            const {handleHideComplete} = this.props;
            cnt = 0;
            handleHideComplete();
         })
         .staggerTo(pannelsEl, 0.3,{
            y: '+100%',
            delay: 0.5,
            ease: Power2.easeInOut,
            onComplete: ()=>{
               const {handleAniComplete} = this.props;
               cnt ++;
               if(cnt === 4){
                  // console.log('ani end',cnt)
                  this.setState({
                     animate: false
                  });
                  handleAniComplete();
               }
            }
         }, 0.15, )
         .add('exit')
   };

   componentDidMount(){
      this.checkMobileView();
      window.addEventListener('resize.test', (e)=>{
         this.checkMobileView();
      });
      this.setAni();
   }

   componentDidUpdate(prevProps, prevState){
      if(prevProps === this.props ){
         return false;
      }
      if(prevState !== this.state){
         this.checkMobileView();
      }
      // console.log('componentDidUpdate', this.state.animate, prevProps, this.props)
      // 애니메이션 실행
      if(!this.state.animate && this.props.visible){
         this.setState({
            animate: true
         })
         // console.log('play')
         this.tl.restart();
      }
      return true;
   }

   componentWillUnmount(){
      window.removeEventListener('resize.test');
   }

   render(){
      const {visible,
         backgroundColor = '#ff9547'
      } = this.props;
      const {isMobileView} = this.state;
      this.pannelsEl = [];
      return (
         <LoadingActionWrapper visible={visible} >
            <div className={cx('component_stagger-pannel-root', (isMobileView?'is-mobile-view':''))}>
               <div className={cx('pannel-divider')}>
                  <div className={cx('pannel')} 
                     ref={el=> this.pannelsEl[0] = el }
                     style={{backgroundColor: backgroundColor}}
                  >
                     <div className={cx('text text-1 center-align')}>
                        <img src="/data/images/logo/logo-darken-light.png" alt="logo" />
                        <br />
                        CARROT FARM 
                     </div>
                  </div>
               </div>
               <div className={cx('pannel-divider')}>
                  <div className={cx('pannel')}
                     ref={el=> this.pannelsEl[1] = el }
                     style={{backgroundColor: backgroundColor}}
                  >
                     <div className={cx('text text-2')}>
                        <img src="/data/images/logo/logo-darken-light.png" alt="logo" />
                        <br />
                        CARROT FARM 
                     </div>
                  </div>
               </div>
               <div className={cx('pannel-divider')}>
                  <div className={cx('pannel')}
                     ref={el=> this.pannelsEl[2] = el }
                     style={{backgroundColor: backgroundColor}}
                  >
                     <div className={cx('text text-3')}>
                        <img src="/data/images/logo/logo-darken-light.png" alt="logo" />
                        <br />
                        CARROT FARM 
                     </div>
                  </div>
               </div>
               <div className={cx('pannel-divider')}>
                  <div className={cx('pannel')}
                     ref={el=> this.pannelsEl[3] = el }
                     style={{backgroundColor: backgroundColor}}
                  >
                     <div className={cx('text text-4')}>
                        <img src="/data/images/logo/logo-darken-light.png" alt="logo" />
                        <br />
                        CARROT FARM 
                     </div>
                  </div>
               </div>
            </div>
         </LoadingActionWrapper>
      )
   }
};

export default StaggerPannel;