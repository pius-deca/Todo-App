import React from 'react'
import Header from "./components/layouts/Header"
import AddTodo from "./components/todo/AddTodo"
import SearchTodo from "./components/todo/SearchTodo"
import DispalyTodo from "./components/todo/DiplayTodo"
import "./App.css";

class App extends React.Component{
  state = {
    todo : [],
    editNo:null,
    text:'',
    type:'ADD TODO'
  }

  componentDidMount(){
    let value = JSON.parse(localStorage.getItem('todo'))
    this.setState({
      todo:value
    })    
  }
  
  addTodo = item =>{
    const newTodo = {
      id: Date.now(),
      item: item,
      date: new Date().toISOString()
    }

    let value = this.state.todo
    if(this.state.editNo != null){
      value[this.state.editNo] = {...newTodo}
      this.setState({ 
        todo:value,
        editNo:null,
        text: "",
        type: "ADD TODO" 
      })
      localStorage.setItem("todo", JSON.stringify(value))
      return true;
    }

    value.push(newTodo)
    this.setState({ todo:value, text:"" })  
    localStorage.setItem("todo", JSON.stringify(value)) 
  }

  delTodo = id =>{
    let value = JSON.parse(localStorage['todo'])
    value.splice(id,1)
    this.setState({ todo: value})
    localStorage['todo'] = JSON.stringify(value)
  }

  editTodo = id =>{
    let value = JSON.parse(localStorage['todo'])
    value = value[id]
    this.setState({
      edit:value.item,
      editNo:id,
      text:value.item,
      type:'SAVE TODO'
    })

  }

  keyPress = e =>{
    e.preventDefault();    
    this.setState({
      text:e.target.value
    })
  }

  keyUp = e =>{
    console.log("hi");    
  }

  render(){    
    return (      
      <div className="App">
        <div className="container p-5">
          <Header />
          <React.Fragment>
            <SearchTodo />
            <AddTodo type={this.state.type} addTodo={this.addTodo} keypress={this.keyPress} text={this.state.text}/>
            <DispalyTodo todo={this.state.todo} delTodo={this.delTodo} editTodo={this.editTodo}/>
          </React.Fragment>  
        </div>
      </div>
    )
  }  
}

export default App;
