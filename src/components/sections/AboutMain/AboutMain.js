import React, {Component} from 'react';
import styles from './AboutMain.scss';
import classNames from 'classnames/bind';
import {TimelineMax} from 'gsap/all';
// import {convertBr} from 'lib/tools';
// import BlinkingCursor from 'components/typography/BlinkingCursor';
import Icon from '@material-ui/core/Icon';

const cx = classNames.bind(styles);

class PopIcons extends Component{
   state = {
      title: null
   };
   titleEl = null;
   tl = new TimelineMax({paused:true});

   setTitle = ()=>{
      this.titleEl.innerHTML = '<div>'+this.props.title.split('\n').join('</div><div>')+'</div>';
   };

   componentDidMount(){
      const { setTitle, tl } = this;
      setTitle();
      tl.staggerFromTo(this.titleEl.children, 0.5,{
         x: '-100%'
      },{
         x: '0%'
      }, 0.2);

      setTimeout(()=>{
         tl.play();
      }, 1200)
   }

   componentDidUpdate(prevProps, prevState){
      if(prevProps === this.props){
         return false;
      }
      this.setTitle();
   }

   render(){
      const {
         background,
      } = this.props;

      return(
         <div className={cx('about-main-root')} style={{backgroundImage:`url(${background})`}}>
            <div className={cx('title-container container')}>
               <div className={cx('title')} ref={ el =>this.titleEl=el}></div>
            </div>
            <div className={cx('filter')}></div>
            <div className={cx('bottom-arrow-container')}>
               <Icon className={cx('bottom-arrow')}>keyboard_arrow_down</Icon>
            </div>
         </div>
      );
   }
};

export default PopIcons;