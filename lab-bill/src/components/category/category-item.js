import React from 'react';
import {connect} from 'react-redux'
import CategoryForm from './category-form';
import ExpenseForm from '../expense/expense-form';
import {expenseCreate, expenseUpdate, expenseDestroy} from '../../actions/expense-actions'
import ExpenseItem from '../expense/expense-item'

// import { renderIf } from '../lib/index';

class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display:false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.getOrSetState = this.getOrSetState.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.props.destroy(this.props.category);
  }

  handleChangeState(){
    this.setState({display:true});
  }

  getOrSetState() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render(){
    console.log(this.props[this.props.category._id]);
    return(
        <li>
          <h2>{this.props.category.name}</h2>
          <p>{this.props.category.budget}</p>
          <button type='submit' onClick={this.handleClick}> delete </button>
          <CategoryForm buttonText='update' update={this.props.update} category={this.props.category}/>
          <ExpenseForm buttonText='add new expense' onComplete={this.props.categoryItemExpenseCreate} expense={this.props.expenses} categoryId={this.props.category._id}/>
          {this.props.expenses[this.props.category._id] ?
          this.props.expenses[this.props.category._id].map(expense =>
            <ExpenseItem expense={expense} update={this.props.dashboardCategoryUpdate} destroy={this.props.dashboardCategoryDestroy}/>
          )
          :
          undefined
        }
        </li>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses
})

const mapDispatchToProps = (dispatch, getState) => ({
  categoryItemExpenseCreate: expense => dispatch(expenseCreate(expense)),
  categoryItemExpenseUpdate: expense => dispatch(expenseUpdate(expense)),
  categoryItemExpenseDestroy: expense => dispatch(expenseDestroy(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)