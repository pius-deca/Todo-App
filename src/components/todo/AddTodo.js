import React from 'react'

class AddTodo extends React.Component{
  state = {
    item: ''
  }

  onClick = () => {
    this.props.addTodo(this.state.item)
    this.setState({ item: this.props.text })
  }
  
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    this.props.keypress(e)
  }

  render(){
    return (
      <div className="d-flex justify-content-between mt-3">
        <input 
          type="text" 
          placeholder="Enter todo here" 
          name="item" 
          value={this.props.text}
          className="p-2 w-75"
          onChange={this.onChange}
        />
        <button className="btn btn-success p-3 add" onClick={this.onClick}>{this.props.type}</button>
      </div>  
    )
  }
}

export default AddTodo