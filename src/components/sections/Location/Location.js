import React from 'react';
import styles from './Location.scss';
import classNames from 'classnames/bind';
import Link from 'components/common/AnimatedLink';
// import {Link} from 'react-router-dom';


const cx = classNames.bind(styles);


const Location = (
   ({location, link, description, bg})=>{
      return (
         <div id="section_locaion-root" className={cx('section_locaion-root')} >
            <div className={cx('location-container container')}>
               <h5>{description}</h5>
               <h3>
                  <Link to={link} title={location} bg={bg}>
                     {location} > 
                  </Link>
               </h3>
            </div>
         </div>
      )
   }
);

export default Location;