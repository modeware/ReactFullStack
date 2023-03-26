import {BrowserRouter, Route} from 'react-router-dom'


const Header = () => {
    return <div>
        <h2>Header</h2>
    </div>
}
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
const Landing = () => {
    return <div>
        <h2>Landing</h2>
    </div>
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/surveys" component={Dashboard}/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;