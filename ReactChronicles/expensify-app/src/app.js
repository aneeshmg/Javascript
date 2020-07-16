import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import 'normalize.css/normalize.css'

import './styles/styles.scss'


const ExpenseDashboardPage = () => (
    <div>
        This is expense dashboard
    </div>
)

const AddExpensePage = () => (
    <div>
        This is add expense
    </div>
)

const EditExpensePage = () => (
    <div>
        This is Edit expense
    </div>
)

const HelpPage = () => (
    <div>
        This is help
    </div>
)

const NotFoundPage = () => (
    <div>
        404 - <Link to="/"></Link>
    </div>
)

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/" exact={true}>Dashboard</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
        <NavLink activeClassName="is-active" to="/edit">Edit Expense</NavLink>
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </header>
)



const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)


ReactDOM.render(routes, document.getElementById('app'))