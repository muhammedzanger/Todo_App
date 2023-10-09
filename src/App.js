/** @format */

import React, { Component } from "react"
import "./App.css"
import TodoItem from "./Components/TodoItem/TodoItem"
import AddItem from "./Components/AddItem/AddItem"

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Zanger", age: 35 },
      { id: 2, name: "Muhammed", age: 25 },
      { id: 3, name: "Amr", age: 20 },
    ],
  }
  deleteItem = (id) => {
    // let items = this.state.items
    // let i = items.findIndex((item) => item.id === id)
    // items.splice(i, 1)
    // this.setState({ items })
    let items = this.state.items.filter((item) => {
      return item.id !== id
    })
    this.setState({ items })
  }
  addItem = (item) => {
    item.id = Math.floor(Math.round() * 100)
    let items = this.state.items
    items.push(item)
    this.setState({ items })
  }
  render() {
    return (
      <div className='App container'>
        <h1 className='text-center'>Todo List</h1>
        <TodoItem items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    )
  }
}
export default App
