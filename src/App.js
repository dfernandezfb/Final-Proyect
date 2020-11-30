//Dependencies
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//Components
import EditCourse from './components/Modals/EditCourse.js';
import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
//Pages
import AdminPage from "./pages/AdminPage";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home"
//Routes
import PrivateRoute from "./routes/PrivateRoute"

function App() {
  const dayHour = new Date().getHours();
  return (
  
    <>
    {/* <LandingPage /> */}
    <Router>
      <Header dayHour={dayHour}/>
     <Switch>
       <Route exact path="/"  component={LandingPage}/> 
       <Route exact path="/courses/editar/:idC" component={EditCourse} />
       <Route exact path="/adminpage" component={AdminPage}/>
       <Route exact path="/home" component={Home} />
     </Switch>
     {/* <Footer/> */}
    </Router>
  </>
  );
}

export default App;
