import { Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
//import './App.css';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import Checkout from './pages/Checkout';
import Checkout2 from './pages/Checkout2';
import Checkout3 from './pages/Checkout3';
import SignUp from './pages/SignUp';
import AboutUs from './pages/AboutUs';
import Automotor from './pages/Automotor';
import Vida from './pages/Vida';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Ordenadores from './pages/Ordenadores';
import Moto from './pages/Moto';
import Mascotas from './pages/Mascotas';
import Home from './pages/Home';
import Hogar from './pages/Hogar';
import ForgotPassword from './pages/ForgotPassword';
import Embarcaciones from './pages/Embarcaciones';
import Contact from './pages/Contact';
import Cartera from './pages/Cartera';
import Accidentes from './pages/Accidentes';
import SignInPers from "./pages/SignIn-Pers";
import Profile from "./pages/Profile";
import Eprofile from "./pages/Eprofile";
import Econtacto from "./pages/Econtacto";
import Admin from "./pages/Admin";
import ElimContrato from "./pages/ElimContrato";
import ElimUsuario from "./pages/ElimUsuario";
import CreateContrato from "./pages/CreateContrato";
import CreateUsuario from "./pages/CreateUsuario";
import ModifContrato from "./pages/ModifContrato";
import ModifUsuario from "./pages/ModifUsuario";


var hist = createBrowserHistory();

function App() {
  
  return (
    
    <Router history={hist}>
      <Switch>         
        
        <Route path="/404" component={NotFound} />
        <Route path="/admin" component={Admin} />
        <Route path="/modifcontrato" component={ModifContrato} />
        <Route path="/modifusuario" component={ModifUsuario} />
        <Route path="/crecontrato" component={CreateContrato} />
        <Route path="/creusuario" component={CreateUsuario} />
        <Route path="/elimcontrato" component={ElimContrato} />
        <Route path="/elimusuario" component={ElimUsuario} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/checkout2" component={Checkout2} />
        <Route path="/checkout3" component={Checkout3} />
        <Route path="/nosotros" component={AboutUs} />
        <Route path="/automotor" component={Automotor} />
        <Route path="/vida" component={Vida} />
        <Route path="/contacto/exito" component={Econtacto} />
        <Route path="/perfil/exito" component={Eprofile} />
        <Route path="/terminos" component={Terms} />
        <Route path="/privacidad" component={Privacy} />
        <Route path="/ordenadores" component={Ordenadores} />
        <Route path="/moto" component={Moto} />
        <Route path="/mascotas" component={Mascotas} />
        <Route path="/hogar" component={Hogar} />
        <Route path="/recupclave" component={ForgotPassword} />
        <Route path="/embarcaciones" component={Embarcaciones} />
        <Route path="/contacto" component={Contact} />
        <Route path="/cartera" component={Cartera} />
        <Route path="/accidentes" component={Accidentes} />
        <Route path="/pers-login" component={SignInPers} />
        <Route path="/perfil" component={Profile} />
        <Route path="/registro" component={SignUp} />
        <Route path="/home" component={Home} />
        <Route path="/ingresar" component={SignIn} />
        <Route path="/" component={Home} />
        
      </Switch>
    </Router>
  );
}

export default App;
