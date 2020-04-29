import React, {Component, Fragment} from 'react';
import styles from './BlinkingCursor.scss';
import classNames from 'classnames/bind';
import {TimelineMax} from 'gsap/all';

const cx = classNames.bind(styles);

class BlinkingCursor extends Component{
   data = {
      textColor: '#ffffff',
      text: ''
   };
   state = {
      text: null, //쓰여질 글자
      ogText: null,//원본 텍스트
      textSplit: null, //글자를 숫자로 나눈것
      curIndex: 0,
      length: 0,
      brIndex: 0, // \n 으로 입력된 글자를 줄바꿈 처리 위한 인덱스.
   };
   cursorEl = null;
   textEl = null;
   cursorTimeline = null;
   setFn = null
   
   constructor(props){
      super(props);
      this.cursorTimeline = new TimelineMax({repeat: -1, repeatDelay: 1});
   }

   // 글 작성
   writeText = ()=>{
      const {textEl} = this;
      const {delay} = this.props;
      this.setFn = setTimeout(()=>{
         let beforeText = textEl.innerHTML||'';
         if(this.state.curIndex <= this.state.length-1){ 
            this.setState({
               curIndex: this.state.curIndex+1,
               text: beforeText+this.state.ogText[this.state.curIndex]
            })
            this.state.text.split('\n').forEach((line, index) => {
               if(index > 0 && index > this.state.brIndex ){
                  textEl.innerHTML = this.state.text+'<br/>';
                  this.setState({
                     brIndex: this.state.brIndex+1
                  });
               }else{
                  textEl.innerHTML = this.state.text;
               }
            })
            this.writeText();
         }
      }, delay*1000);
   };

   componentWillUnmount(){
      clearTimeout(this.setFn);
      this.setState({
         text: null, //쓰여질 글자
         ogText: null,//원본 텍스트
         textSplit: null, //글자를 숫자로 나눈것
         curIndex: 0,
         length: 0,
         brIndex: 0, // \n 으로 입력된 글자를 줄바꿈 처리 위한 인덱스.
      })
   }

   componentDidMount(){
      const {text, delay} = this.props
      const {cursorEl} = this;
      this.setState({
         ogText: text,
         length: text.length
      })
      this.cursorTimeline
         .fromTo(cursorEl, delay,{
            autoAlpha: 0,
         }, {
            autoAlpha: 1,
            yoyo: true,
            repeat: -1
         });
      this.writeText();
   }

   render(){
      const {
         textColor = '#000000',
         cursorColor='#000000',
         fontSize=1
      } = this.props;
      return(
         <Fragment>
            <div className={cx('blinking-cursor-container')} >
               <span ref={el=>this.textEl=el} 
                     style={{color:textColor,fontSize:`${fontSize}em`}}
               ></span>
               <span className={cx('cursor')} ref={el=>this.cursorEl=el}
                  style={{backgroundColor:cursorColor,fontSize:(fontSize*80/100)+'em'}}
               >&nbsp;</span>
            </div>  
         </Fragment>
      );
   }
};

export default BlinkingCursor;