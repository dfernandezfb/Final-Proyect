//Dependencies
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//Components
import EditCourse from './components/Modals/EditCourse.js';
//Pages
import AdminPage from "./pages/AdminPage";
import LandingPage from "./pages/LandingPage";
import FavoritePage from "./pages/FavoritePage"
//Routes
import PrivateRoute from "./routes/PrivateRoute"

function App() {
  return (
  
    <>
      <Router>
        <Switch>
          <Route exact path="/"  component= {FavoritePage}/> 
          <Route exact path="/courses/editar/:idC" component={EditCourse} />
        </Switch>
      </Router>
  </>
  );
}

export default App;
