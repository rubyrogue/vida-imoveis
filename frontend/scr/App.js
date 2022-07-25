import {Home} from './pages/Home.js';
import {Imoveis} from './pages/Imoveis.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Administrador} from './pages/Administrador.js';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import {AdmConfig} from './pages/AdministradorConfig.js';
import {AddImoveis} from './pages/AddImoveis';
import React from 'react';
import PrivateRoute from './components/PrivateRoute/index.js';
import Logout from './components/Login/LoginSection/logout.js';
import { Sobre } from './pages/Sobre.js';
import { Contato } from './pages/Contato.js';
import { EditImoveis } from './pages/EditImoveis.js';
import { ViewImoveis } from './pages/ViewImoveis.js';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/sobre' exact component={Sobre}/>
        <Route path='/contato' exact component={Contato}/>
        <Route path='/imoveis' exact component={Imoveis}/>
        <Route path='/administrador' exact component={Administrador}/>
        <Route path='/imoveis/view/:id' exact component={ViewImoveis}/>
        <PrivateRoute path='/administrador/imoveis' exact component={AdmConfig}/>
        <PrivateRoute path='/administrador/imoveis/add' exact component={AddImoveis}/>
        <PrivateRoute path='/administrador/imoveis/edit/:id' exact component={EditImoveis}/>
        <PrivateRoute path='/administrador/logout' exact component={Logout}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
