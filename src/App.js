import './App.scss';
import './Assets/Sass/apps.scss'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navigation from './Components/Home/Navigation';
import Hometext from './Components/Home/Hometext';
import Abouttitle from './Components/About/Abouttitle';
import Aboutcontent from './Components/About/Aboutcontent';
import Aboutskills from './Components/About/Aboutskills';
import Workstitle from './Components/Works/Workstitle';
import Workproject from './Components/Works/Workproject';

import Contactgroup from './Components/Contact/Contactgroup';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
            <Redirect to="/#Abouttitle-id" />
        </Route>
        <Route exact path='/' component={Navigation} />
        <Route exact path='/' component={Hometext} />

        <Route exact path='/' component={Abouttitle} />
        <Route exact path='/' component={Aboutcontent} />
        <Route exact path='/' component={Aboutskills} />

        <Route exact path='/' component={Workstitle} />
        <Route exact path='/' component={Workproject} />

        <Route exact path='/' component={Contactgroup} />
      </div>
    </Router>


  );
}

export default App;
