import React from 'react'

class SearchTodo extends React.Component{

  render(){
    return (
      <div className="mt-3">
        <input 
          type="search" 
          placeholder="Search..." 
          name="search" 
          className="p-2 w-75"
        />      
      </div>
    )
  }
}

export default SearchTodo