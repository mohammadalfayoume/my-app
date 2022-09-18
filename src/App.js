import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import data from "./assest/data.json";
import SelectedBeast from './Components/SelectedBeast';
import Filter from './Components/Filter';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       show:false,
       currentBeast:[],
       filterdBeast:data
    }
  }
  

  openModal=(title)=>{
    let selected=data.find(item=>{
      return item.title===title
    })
    this.setState({
      show:true,
      currentBeast: selected
    })
  }
  handleClose=()=>{
    this.setState({
      show:false
    })
  }

  handleFilter=(horns)=>{
    console.log(horns);
    let filterArr= data.filter(item=>{
      return item.horns==horns
    })
    console.log(filterArr);
    let selection = data
    if (horns != 0) {
      selection=filterArr
    }
    this.setState({
      filterdBeast: selection
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Filter handleFilter={this.handleFilter} />
        <Main data={this.state.filterdBeast} openModal={this.openModal} />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose} selected={this.state.currentBeast}/>
        <Footer />
      </div>
    )
  }
}

export default App
