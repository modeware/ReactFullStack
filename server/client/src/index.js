import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import App from "./components/App";
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers'
import reduxThunk from 'redux-thunk';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, 
        document.querySelector('#root')
    );
