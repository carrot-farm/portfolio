import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import MainContainer from 'containers/pages/MainContainer';

const Main = ({match})=>{
   return (
      <PageTemplate>
         <MainContainer />
      </PageTemplate>
   );
};

export default Main;