import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {
   Main,
   Contact,
   About,
} from 'pages';
import Base from 'containers/common/Base';


const App = ()=>{
   return (
      <div>
         <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/About" component={About}></Route>
            <Route exact path="/Contact" component={Contact}></Route>
         </Switch>
         <Base />
      </div>
   )
}

export default App;