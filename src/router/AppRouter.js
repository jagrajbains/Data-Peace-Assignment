import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UsersTablePage from '../components/UsersTablePage';
import UserDetailsPage from '../components/UserDetailsPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () => ( 
            <BrowserRouter >
                <div>
                    <Header/>
                    <Switch>
                        <Route path='/' component={UsersTablePage} exact={true}/>
                        <Route path='/user/:id' component={UserDetailsPage}/>
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );

export default AppRouter;