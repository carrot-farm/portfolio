import React, { Component } from 'react';
import styles from './ContactContents.scss';
import classNames from 'classnames/bind';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
import { TimelineMax, Power2 } from 'gsap/all';
import { Chip } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const cx = classNames.bind(styles);

class ContactContents extends Component {
   controller = new ScrollMagic.Controller();
   rootEl = null;
   sectionsEl = [];
   tls = [];
   scenes = [];

   //타임 라인 셋팅
   setScene = () => {
      let i = 1;
      let len  = 3;

      this.scenes[0] = new ScrollMagic.Scene({
                              triggerElement: '.section_mobile',
                              duration: 3000,
                           })
                           .setPin('.mobile-pic')
                           .addTo(this.controller);

      for(;i<=len;i++){
         this.sectionsEl[i] = this.rootEl.querySelector('.section_ani_'+i);
         this.tls[i] = new TimelineMax()
                           .staggerFromTo(this.sectionsEl[i].querySelectorAll('.ani'), 1,{
                              autoAlpha: 0,
                              y: '100%;'
                           },{
                              autoAlpha: 1,
                              y: '0%;'
                           }, 2);
   
         this.scenes[i] = new ScrollMagic.Scene({
                                 triggerElement: '.section_ani_'+i,
                                 duration: 400,
                                 offset: 180
                              })
                              .setTween(this.tls[i])
                              .setPin('.section_pin_'+i)
                              .addTo(this.controller);
      }
   };

   componentDidMount() {
      this.setScene();
   }

   shouldComponentUpdate(prevProps) {
      if (this.props === prevProps) {
         return false;
      }
   }

   componentWillUnmount() {
      this.scenes.map((item) => {
         item.destroy();
      });
   }

   render() {
      return (
         <div id="section_contact-contents-root"
            className={cx('section_contact-contents-root section-start')}
            ref={el => this.rootEl = el}
         >
            {/* 그림 */}
            <div className={cx('section_mobile article-section  ')}>
               <div className={cx('container')}>
                  <div className={cx('wrapper')}>
                     <img className={cx('mobile-pic')} src="/data/images/contact/mobile.png" alt="mobile phone" />
                  </div>
               </div>
            </div>
            {/* 전화 */}
            <div className={cx('section_phone article-section  section_ani_1')}>
               <div className={cx('container')}>
                  <div className={cx('wrapper center-align section_pin_1')}>
                        <div className={cx('section-name ani')}>
                           <h3>PHONE</h3>
                        </div>
                        <div className={cx('info-cover ani')}>
                           <div className={cx('icon')}>
                              <Icon>phone</Icon>
                           </div>
                           <div className={cx('info ani')}>
                              <a href="tel:01020646586">
                                 010-2064-6586
                              </a>
                           </div>
                        </div>
                  </div>
               </div>
            </div>
            {/* email */}
            <div className={cx('section_email article-section  section_ani_2')}>
               <div className={cx('container')}>
                  <div className={cx('wrapper center-align section_pin_2')}>
                        <div className={cx('section-name ani')}>
                           <h3>EMAIL</h3>
                        </div>
                        <div className={cx('info-cover ani')}>
                           <div className={cx('icon')}>
                              <Icon>mail</Icon>
                           </div>
                           <div className={cx('info ani')}>
                              <a href="matilto:chohoki@gmail.com">
                                 chohoki@gmail.com
                              </a>
                           </div>
                        </div>
                  </div>
               </div>
            </div>
            {/* git */}
            <div className={cx('section_git article-section  section_ani_3')}>
               <div className={cx('container')}>
                  <div className={cx('wrapper center-align section_pin_3')}>
                        <div className={cx('section-name ani')}>
                           <h3>GITHUB</h3>
                        </div>
                        <div className={cx('info-cover ani')}>
                           <div className={cx('icon')}>
                              <img src="/data/images/contact/Git-Icon-White.png" alt="git icon" />
                           </div>
                           <div className={cx('info ani')}>
                              <a href="https://github.com/carrot-farm">
                                 carrot-farm
                              </a>
                           </div>
                        </div>
                  </div>
               </div>
            </div>

            <div className={cx('space-section')}>

            </div>
         </div>
      );
   }
};

export default ContactContents;