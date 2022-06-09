import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

import make_table from '../Table/Make_table'
function Route_l(props) {

 
  return (
      
  <Router>
  <Route exact path={props.title} element={ make_table(props.title)}></Route>
  
  </Router>
  
  );
}

export default Route_l;
