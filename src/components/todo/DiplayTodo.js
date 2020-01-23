import React from 'react'

class DisplayTodo extends React.Component{ 

  render(){
    return (
      <table className="table table-striped table-gray mt-5 text-center">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Todo Item</th>
            <th>Date created</th>
            <th>Actions</th>   
          </tr>
        </thead>
        <tbody id="add-item">
          {this.props.todo.map((value,index) => (
            <tr key={value.id}>
              <td className="pt-4">{index + 1}</td>
              <td className="pt-4">{value.item}</td>
              <td className="pt-4">{value.date}</td>
              <td>
                <button onClick={this.props.delTodo.bind(this, index)} className="btn btn-danger py-2 px-2 mr-3 del">Delete</button>
                <button onClick={this.props.editTodo.bind(this, index)} className="btn btn-primary py-2 px-3 edit">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>  
    )
  } 
}

export default DisplayTodo