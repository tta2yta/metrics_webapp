import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CompaniesStock from './components/CompaniesStock';
import CompaniesDetails from './components/companiesDetails';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: <CompaniesStock />,
  },
  {
    path: '/details/:symbol',
    name: 'Details',
    component: <CompaniesDetails />,
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route path={path} exact key={path}>{component}</Route>
          ))}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
