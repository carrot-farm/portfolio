import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ContactContainer from 'containers/pages/ContactContainer';

const Contact = ({match})=>{
   return (
      <PageTemplate>
         <ContactContainer />
      </PageTemplate>
   );
};

export default Contact;