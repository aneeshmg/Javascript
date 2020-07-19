import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './router/AppRouter'

import createStore from './store/configureStore'

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'

import './styles/styles.scss'

const store = createStore()

store.dispatch(addExpense({ description: 'water bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000 }))
store.dispatch(addExpense({ description: 'rent', amount: 109500 }))

// store.dispatch(setTextFilter('bill'))

const state = store.getState()
const expenses = getVisibleExpenses(state.expenses, state.filters)
console.log(expenses, 'here')

// console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))