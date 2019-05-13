import React from 'react';
import {Provider} from 'react-redux';
import UserTablePage from './components/UserTablePage';
import configureStore from './store/configureStore';

const store = configureStore();

const MainApp = () => (
    <Provider store={store}>
        <UserTablePage />
    </Provider>

)
 export default MainApp;
                                
                                