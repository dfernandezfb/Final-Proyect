//Dependencies
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//Components
import EditCourse from './components/Modals/EditCourse.js';
import Footer from './components/Footer/Footer'
//Pages
import AdminPage from "./pages/AdminPage";
import LandingPage from "./pages/LandingPage";
//Routes
import PrivateRoute from "./routes/PrivateRoute"

function App() {
  return (
  
    <>
    {/* <LandingPage /> */}
    <Router>
     <Switch>
       <Route exact path="/"  component= {Footer}/> 
       <Route exact path="/courses/editar/:idC" component={EditCourse} />
     </Switch>
    </Router>
  </>
  );
}

export default App;
