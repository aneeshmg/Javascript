import { createStore } from 'redux'


const incrementBy = ({ incrementBy = 1 } = {}) => ({
    type: 'INC',
    incrementBy
})

const decrementBy = ({ decrementBy = 1 } = {}) => ({
    type: 'INC',
    decrementBy
})
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INC':
            return {
                count: state.count + action.incrementBy
            }
        case 'DEC':
            return {
                count: state.count - action.decrementBy
            }
        case 'RES':
            return {
                count: 0
            }
        default: return { 
            count: state.count
        }
    }
})

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch({
//     type: 'INC',
//     incrementBy: 5
// })

store.dispatch(incrementBy())

store.dispatch(incrementBy({ incrementBy: 5 }))

// unsubscribe()

// store.dispatch({
//     type: 'DEC'
// })

store.dispatch(decrementBy())

store.dispatch(decrementBy({ decrementBy: 5 }))


store.dispatch({
    type: 'RES'
})

