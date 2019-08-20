import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from './../components/DashboardPage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import DummyPage from '../components/DummyPage';
import PlayerPage from '../components/player/PlayerPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={DummyPage} exact={true} />
                <PublicRoute path="/player" component={PlayerPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route path="/player/:playerId" component={PlayerPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
