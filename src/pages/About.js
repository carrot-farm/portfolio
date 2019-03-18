import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import AboutContainer from 'containers/pages/AboutContainer';

const About = ({match})=>{
   return (
      <PageTemplate>
         <AboutContainer />
      </PageTemplate>
   );
};

export default About;