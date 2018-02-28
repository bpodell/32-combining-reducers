import uuid from 'uuid/v4'

export const expenseCreate = expense => {
  console.log(expense);
  expense._id = uuid()
  expense.timestamp = new Date()
  expense.categoryID = expense.catId
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  }
}

export const expenseUpdate = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
})

export const expenseDestroy = expense => ({
  type: 'EXPENSE_DESTROY',
  payload: expense,
})

export const expenseReset = () => ({type: 'EXPENSE_RESET'})