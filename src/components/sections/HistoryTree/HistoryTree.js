import React, { Component, Fragment } from 'react';
import styles from './HistoryTree.scss';
import classNames from 'classnames/bind';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
import { TimelineMax, Power2 } from 'gsap/all';
import { Chip } from '@material-ui/core';

const cx = classNames.bind(styles);

class HistoryTree extends Component {
   controller = new ScrollMagic.Controller();
   scenes = [];
   tls = [];
   tl = new TimelineMax();
   index = 0;
   staggerEl = [];
   fadeInEl = [];

   componentDidMount() {
      const {history} = this.props
      const len = history.size||0;
      let i = 0;

      for (; i < len; i++) {
         this.tls[i] = new TimelineMax()
         .fromTo(this.fadeInEl[i], 0.3, {
            autoAlpha: 0,
            ease: Power2.easeOut
         }, {
            autoAlpha: 0.2,
         }, 0.2)
         .staggerFromTo(this.staggerEl[i].children, 0.5, {
            y: '+100%',
            autoAlpha: 0,
            ease: Power2.easeOut
         }, {
            autoAlpha: 1,
            y: '0%',
         }, 0.2);

         this.scenes[i] = new ScrollMagic.Scene({
            triggerElement: ".article-section-" + i,
            triggerHook: 0.7
         })
         .setTween(this.tls[i])
         .addTo(this.controller);
      }
   }

   shouldComponentUpdate(prevProps){
      if(this.props === prevProps){
         return false;
      }
   }

   componentWillUnmount() {
      this.scenes.map(
         (item)=>{
            item.destroy();
         }
      )
   }

   render() {
      const { history } = this.props;

      return (
         <div id="section_history-tree-root"
            className={cx('section_history-tree-root section-start')}
         >
            {
               history.map(
                  (item, index) => (
                     <div className={cx('article-section article-section-'+index)} key={item.get('_id')}>
                        <div className={cx('filter')} ref={el => this.fadeInEl[this.index] = el}
                           style={{backgroundImage: 'url('+item.get('bg')+')', color: '#ff9547'}}
                        ></div>
                        <div className={cx('article container test')}
                           ref={el => this.staggerEl[this.index++] = el}
                        >
                           <span className={cx('text-deco-line stagger-el')}></span>
                           <h2 className={cx('period stagger-el')}>{item.get('period')}</h2>
                           <p className={cx('description stagger-el')}>
                              <b>{item.getIn(['description', 'title'])}</b><br />
                              {
                                 item.getIn(['description', 'list']).map(
                                    (_item, _index) => (
                                       <Fragment key={_index}>
                                          <span>.</span><br />
                                          {_item.get('text')}<br />
                                       </Fragment>
                                    )
                                 )
                              }
                           </p>
                           <div className={cx('link stagger-el')}>
                              <ul>
                                 {
                                    item.get('links').map(
                                       (_item, _index) => (
                                          <li key={_index}>
                                             {_item.get('category')} : <a href={_item.get('link')} target="_blank">{_item.get('text')}</a>
                                          </li>
                                       )
                                    )
                                 }
                              </ul>
                           </div>
                           <div className={cx('participation-rate stagger-el')}>
                              참여율 <em>{item.get('participationRate')}%</em>
                           </div>
                           <div className={cx('stacks stagger-el')}>
                              {
                                 item.get('stacks').map(
                                    (_item, _index)=>(
                                       <Fragment key={_index}>
                                          <Chip label={_item.get('label')} className={'chip'} />
                                       </Fragment>
                                    )
                                 )
                              }
                           </div>
                        </div>
                     </div>
                  )
               )
            }
         </div>
      );
   }
};

export default HistoryTree;