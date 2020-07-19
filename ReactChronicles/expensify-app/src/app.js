import React from 'react'
import ReactDOM from 'react-dom'

import AppRouter from './router/AppRouter'

import createStore from './store/configureStore'

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'

import './styles/styles.scss'

const store = createStore()

store.dispatch(addExpense({ description: 'water bill' }))
store.dispatch(addExpense({ description: 'gas bill' }))
store.dispatch(setTextFilter('water'))

const state = store.getState()
const expenses = getVisibleExpenses(state.expenses, state.filters)
console.log(expenses, 'here')

// console.log(store.getState())


ReactDOM.render(<AppRouter />, document.getElementById('app'))