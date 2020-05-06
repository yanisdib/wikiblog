import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import App from '../App';
import Dashboard from '../components/Pages/Dashboard/Dashboard';
import AddArticle from '../components/Pages/Dashboard/ArticlesList/AddArticle';
import Header from '../components/Header/Header';
import NotFound from '../components/Pages/NotFound/NotFound';
import EditArticle from '../components/Pages/Dashboard/ArticlesList/EditArticle';
import ArticlesList from '../components/Pages/Dashboard/ArticlesList/ArticlesList';

export const history = createHistory();

function AppRouter() {
    return (
        <Router history={history}>
            <Header />
            <main>
                <Switch>
                    <Route path="/" component={App} exact={true} />
                    <Route path="/dashboard" component={Dashboard} exact={true} />
                    <Route path="/dashboard/articles/create" component={AddArticle} />
                    <Route path="/dashboard/articles/edit/:id" component={EditArticle} />
                    <Route path="/dashboard/articles" component={ArticlesList} />
                    <Route path="/404" component={NotFound} />
                </Switch>
            </main>
        </Router>
    );
};

export default AppRouter;