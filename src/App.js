//Dependencies
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//Components
import EditCourse from './components/Modals/EditCourse.js';
//Pages
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <>
    <Router>
     <Switch>
       <Route exact path="/"  component= {AdminPage}/> 
       <Route exact path="/courses/editar/:idC" component={EditCourse} />
     </Switch>
    </Router>
  </>
  );
}

export default App;
