import {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';

const Dashboard = () => {
    return <div>
        <h2>Dashboard</h2>
    </div>
}
const SurveyNew = () => {
    return <div>
        <h2>SurveyNew</h2>
    </div>
}


class App extends Component {

    componentDidMount(){
        this.props.fetchUser()
    }

    render(){
    return (
            <div className='container'>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/" exact component={Landing}/>
                        <Route path="/surveys" exact component={Dashboard}/>
                        <Route path="/surveys/new" component={SurveyNew}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);