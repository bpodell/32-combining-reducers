import React from 'react'

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = 
    this.props.expense 
    ? {
      name: this.props.expense.name,
      price: this.props.expense.price,
      categoryId: this.props.expense.categoryId,
      catId: this.props.expense.catId,
      _id: this.props.expense._id,
      timestamp: this.props.expense.timestamp,
    }
    :
      {
        name: '',
        price: '',
        catId: this.props.categoryId,
      }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.props.buttonText === 'add new expense') this.props.onComplete(this.state)
    if (this.props.buttonText === 'update expense') this.props.update(this.state);
    // this.setState({
    //   name: '',
    //   budget: '',

    // })
  }

  render() {
    return  (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}/>
        
        <input
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    )
  }
}

export default ExpenseForm