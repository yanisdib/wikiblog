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
import ArticlesView from '../components/ArticlesView/ArticlesView';
import Login from '../components/Pages/Authentication/Login/Login';
import CreateAccount from '../components/Pages/Authentication/CreateAccount/CreateAccount';
import Userbar from '../components/Userbar/Userbar';
import Footer from '../components/Footer/Footer';

export const history = createHistory();

function AppRouter() {
    return (
        <Router history={history}>
            <Header />
            <main>
                <Switch>
                    <Route path="/" component={App} exact={true} />
                    <Route path="/view/:id" component={ArticlesView} />
                    <Route path="/dashboard" component={Dashboard} exact={true} />
                    <Route path="/dashboard/articles/create" component={AddArticle} />
                    <Route path="/dashboard/articles/edit/:id" component={EditArticle} />
                    <Route path="/dashboard/articles" component={ArticlesList} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={CreateAccount} />
                    <Route path="/404" component={NotFound} />
                </Switch>
            </main>
            <Userbar />
            <Footer />
        </Router>
    );
};

export default AppRouter;