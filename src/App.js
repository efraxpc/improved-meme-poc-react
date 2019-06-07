import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ListaPeliculas from './pages/ListaPeliculas'
import DetallePelicula from './pages/DetallePelicula'
import Layout from './components/Layout';
import PageShell from './components/PageShell'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={PageShell(ListaPeliculas)}></Route>
                        <Route path="/detalle" component={PageShell(DetallePelicula)}></Route>
                    </Switch>
                 </Layout>
            </BrowserRouter>
        );
    }
}

export default App;

