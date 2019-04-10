import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Menu from './menu';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route} from 'react-router-dom'; // Biblioteca de rotas

ReactDOM.render(
    <BrowserRouter>
        <Menu />
        <Switch>
            <Route path="/" exact={true} component={App}/>
            <Route path="/App" component={Home} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();