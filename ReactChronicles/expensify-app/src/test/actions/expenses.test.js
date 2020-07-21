import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {
        note: 'new note'
    })

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note'
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const providedValues = {
        description: 'some description',
        amount: 100,
        createdAt: 1000,
        note: 'new note'
    }

    const action = addExpense(providedValues)

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...providedValues,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with defaults', () => {
    const action = addExpense()

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            createdAt: 0,
            amount: 0
        }
    })
})