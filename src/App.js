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
import ChangePasswordPage from "./pages/ChangePasswordPage"
import CourseDetail from './pages/CourseDetail.js';
//Routes
import PrivateRoute from "./routes/PrivateRoute";
//Context
import AdminpageProvider from "./context/AdminpageContext"
import FunctionModalsProvider from "./context/FunctionModals";

function App() {
  const dayHour = new Date().getHours();
  return (
      <Router>
        <Header dayHour={dayHour}/>
        <Switch>
          <AdminpageProvider>
            <FunctionModalsProvider>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/adminpage" component={AdminPage} />
              <Route exact path="/courses/editar/:idCourse" component={EditCourse} />
              <Route exact path="/courses/detail/:id" component={CourseDetail} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/recoverpassword" component={RecoverPasswordPage} />
              <Route exact path="/changepassword" component={ChangePasswordPage} />
              <Route exact path="/favorites" component={FavoritePage} />
            </FunctionModalsProvider>
          </AdminpageProvider>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
