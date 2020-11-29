//Dependencies
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//Components
import EditCourse from './components/Modals/EditCourse.js';
//Pages
import AdminPage from "./pages/AdminPage";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home"
import FavoritePage from "./pages/FavoritePage"
import RecoverPasswordPage from "./pages/RecoverPasswordPage"
import CourseDetail from './pages/CourseDetail.js';
//Routes
import PrivateRoute from "./routes/PrivateRoute";
//Context
import AdminpageProvider from "./context/AdminpageContext"
import FunctionModalsProvider from "./context/FunctionModals";

function App() {
  return (
      <Router>
        <Switch>
          <AdminpageProvider>
            <FunctionModalsProvider>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/adminpage" component={AdminPage} />
              <Route exact path="/courses/editar/:idC" component={EditCourse} />
              <Route exact path="/courses/detail/:id" component={CourseDetail} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/recoverpassword" component={RecoverPasswordPage} />
              <Route exact path="/favorites" component={FavoritePage} />
            </FunctionModalsProvider>
          </AdminpageProvider>
        </Switch>
      </Router>
  );
}

export default App;
