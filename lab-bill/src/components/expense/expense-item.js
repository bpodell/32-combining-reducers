import React from 'react';
import ExpenseForm from '../expense/expense-form';
// import { renderIf } from '../lib/index';

class ExpenseItem extends React.Component{
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
    console.log('props in expense item',this.props)
    return(
        <li>
          <h2>{this.props.expense.name}</h2>
          <p>{this.props.expense.price}</p>
          <button type='submit' onClick={this.props.categoryItemExpenseDestroy}> delete </button>
          <ExpenseForm buttonText='update expense' update={this.props.update} destroy ={this.props.destroy} expense={this.props.expense} categoryId={this.props.categoryId}/>
        </li>
    );
  }
}


export default (ExpenseItem)