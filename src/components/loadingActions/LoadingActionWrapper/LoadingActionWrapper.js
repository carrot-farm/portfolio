import React, {Component} from 'react';
import styles from './LoadingActionWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class LoadingActionWrapper extends Component{
   state = {
      animate: false
   };
   //======= 애니메이션 시작
   startAnimation = ()=>{
      this.setState({
         animate: true
      })
      setTimeout(()=>{
         this.setState({
            animate: false
         })
      }, 5000);
   };

   componentDidUpdate(prevProps, prevState){
      if(prevProps.visible !== this.props.visible){
         this.startAnimation();
      }
   }
   render(){
      const {children, visible} = this.props;
      const {animate} = this.state;
      // //visible 과 animation 둘다 활성화 되야 랜더링
      // if(!visible &&!animate){return null;}
      //enter, leave 중 어느 애니메이션인지 상태 설정.
      // const animation = animate && (visible?'enter':'leave');
      const animation = (visible?'enter':'leave');
      return(
         <div className={cx('components_loading-action-wrapper-root')}>
            <div className={cx('background', animation)}>
               <div className={cx('loading', animation)}>
                  {children}
               </div>
            </div>
         </div>
      )

   }
}

export default LoadingActionWrapper;