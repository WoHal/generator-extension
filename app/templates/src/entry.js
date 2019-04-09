import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';

import store from './store';

import './entry.scss';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);