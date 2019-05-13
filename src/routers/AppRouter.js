import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import MainApp from '../MainApp';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => ( 
        <BrowserRouter>
            <Switch>
                <Route path='/' component={MainApp} exact={true}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
