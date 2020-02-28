import React, { Fragment,Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SortAlgoOption from './components/SortAlgoOption'
import SortControls from './components/SortControls';

 class App extends React.Component{

  constructor(){
    super();
    let choices=[{name:"QuickSort"}, {name:"Bubble sort"},{name:"Merge sort"},{name:"Insertion sort"},{name:"Breadth-first search"}]

    this.state = {
      algoOptions:choices,
      activeAlgo:choices[0].name,
      isSorting:false,
    }

    this.setDataSize = this.setDataSize.bind(this);
  }

  algoSelect(algo){
    this.setState(state => ({
      activeAlgo:algo
    }));
  }

  startSorting(){
    this.setState(state => ({
      isSorting:true
    }));
    alert("App - sorting");
  }

  stopSorting(){
    this.setState(state => ({
      isSorting:false
    }));
    alert("App - done sorting");
  }

  shuffleData(){
    alert("App - shuffling");
  }

  setDataSize(size){
    alert("App - set size " + size);
  }

  render() {
    return(
      <Fragment>
        <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Sorting Simulator</a>
          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <a class="nav-link" href="https://github.com/bradyfetting">Brady Fetting</a>
            </li>
          </ul>
        </nav>

        <div class="container-fluid" id="root">
          <div class="row">
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
              <div class="sidebar-sticky">
                <ul class="nav flex-column">
                  <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Algorithms</span>
                    <a class="d-flex align-items-center text-muted" href="#">
                      <span data-feather="plus-circle"></span>
                    </a>
                  </h6>
                </ul>
                <ul class="nav flex-column mb-2">
                  {this.state.algoOptions.map(option => <SortAlgoOption algo={option.name} onClick={()=>{this.algoSelect(option.name)}} 
                    activeAlgo={this.state.activeAlgo}/>)}
                </ul>
              </div>
            </nav>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
              <SortControls activeAlgo={this.state.activeAlgo} isSorting={this.state.isSorting} startSorting={()=>{this.startSorting()}}
              stopSorting={()=>{this.stopSorting()}} shuffle={()=>{this.shuffleData()}} setSize={this.setDataSize}/>

              <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>
            </main>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
