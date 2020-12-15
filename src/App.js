//Dependencies
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components
import EditCourse from './components/Modals/EditCourse.js';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
//Pages
import AdminPage from "./pages/AdminPage";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home"
import FavoritePage from "./pages/FavoritePage"
import RecoverPasswordPage from "./pages/RecoverPasswordPage"
import CourseDetail from './pages/CourseDetail.js';
//Routes
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from './routes/AdminRoute';
//Context
import AdminpageProvider from "./context/AdminpageContext"
import FunctionModalsProvider from "./context/FunctionModals";
import AuthState from './context/auth/authState';
import authToken from './config/token';

const token = localStorage.getItem('token');
if(token) {
  authToken(token);
}

function App() {
  const dayHour = new Date().getHours();

  return (
      <Router>
        <AuthState>
        <AdminpageProvider>
          <FunctionModalsProvider>
            <Header dayHour={dayHour} />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/recoverpassword" component={RecoverPasswordPage} />
              <PrivateRoute exact path="/adminpage" component={AdminPage} />
              <PrivateRoute exact path="/courses/editar/:idCourse" component={EditCourse} />
              <PrivateRoute exact path="/courses/detail/:id" component={CourseDetail} />
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/favorites" component={FavoritePage} />
            </Switch>
            <Footer />
          </FunctionModalsProvider>
        </AdminpageProvider>
        </AuthState>
      </Router>
  );
}

export default App;
