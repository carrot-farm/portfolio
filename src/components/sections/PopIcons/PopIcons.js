import React, {Component} from 'react';
import styles from './PopIcons.scss';
import classNames from 'classnames/bind';
import {TimelineMax, Elastic} from 'gsap/all';
import BlinkingCursor from 'components/typography/BlinkingCursor';
import Icon from '@material-ui/core/Icon';

const cx = classNames.bind(styles);

class PopIcons extends Component{
   data = {
      backgroundUrl: '/data/images/sections/main_main-section.jpg'
   };
   icons = null;
   iconsTween = null;
   // iconsTween = new TimelineMax({paused:true});
   constructor(props){
      super(props);
      this.iconsTween = new TimelineMax({paused:true});
   }

   componentDidMount(){
      const icons = this.icons.children;
      this.iconsTween
         .set(icons, {
            autoAlpha: 1,
            scale: 1
         })
         .staggerFrom(icons, 0.5, {
            autoAlpha: 0, 
            scale:0,
            ease: Elastic.easeOut
         }, 0.25)
         .staggerFromTo(icons, 1,{
            scale: 1,
            y: '+=10'
         }, {
            scale: 0.9,
            y: '-=10',
            yoyo: true,
            repeat: -1
         }, 0.2)

      setTimeout(()=>{
         this.iconsTween.play();
      }, 500);
   }

   render(){
      const {backgroundUrl} = this.data;
      return(
         <div className={cx('pop-icons-root')} style={{backgroundImage:`url(${backgroundUrl})`}}>
            <div className={cx('title-container container')}>
               <BlinkingCursor 
                  text={'풀스택을\n지향하는\n개발자입니다.'}
                  textColor={'#ffffff'}
                  cursorColor={'#ff9900'}
                  fontSize={5}
                  delay={0.2}
               />
            </div>
            <div className={cx('filter')}></div>
            <div className="icons-container" ref={div=>this.icons=div}>
               <div className="icon PHP" >PHP</div>
               <div className="icon NODEJS">NODEJS</div>
               <div className="icon MYSQL">MYSQL</div>
               <div className="icon REACT">REACT</div>
               <div className="icon HTML">HTML</div>
               <div className="icon MONGODB">MONGODB</div>
               <div className="icon CORDOVA">CORDOVA</div>
            </div>
            <div className={cx('bottom-arrow-container')}>
               <Icon className={cx('bottom-arrow')}>keyboard_arrow_down</Icon>
            </div>
         </div>
      );
   }
};

export default PopIcons;