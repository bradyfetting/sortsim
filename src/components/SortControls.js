import React, {Component} from 'react';

class SortControls extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeAlgo: props.activeAlgo,
            startSorting: props.startSorting,
            stopSorting: props.stopSorting,
            shuffle: props.shuffle,
            setSize: props.setSize,
        };

        this.startTheSorting = this.startTheSorting.bind(this);
        this.setDataSize = this.setDataSize.bind(this);
    }

    startTheSorting(){
        if(!this.props.isSorting){
            this.state.startSorting();
        }
    }

    stopTheSorting(){
        if(this.props.isSorting){
            this.state.stopSorting();
        }
    }

    shuffleData(){
        if(!this.props.isSorting){
            this.state.shuffle();
        }
    }

    setDataSize(size){
        if(!this.props.isSorting){
            this.state.setSize(size);
        }
    }

    render() {
      return (
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">{this.props.activeAlgo}</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2" role="group">
                <button type="button" class={this.props.isSorting?"btn btn-sm btn-outline-success disabled":"btn btn-sm btn-outline-success"} 
                    onClick={()=>this.startTheSorting()}>Start Sorting</button>
                <button type="button" class={this.props.isSorting?"btn btn-sm btn-outline-warning disabled":"btn btn-sm btn-outline-warning"} 
                    onClick={()=>this.shuffleData()}>Shuffle</button>
                <button type="button" class={this.props.isSorting?"btn btn-sm btn-outline-danger":"btn btn-sm btn-outline-danger disabled"} 
                    onClick={()=>this.stopTheSorting()}>Stop Sorting</button>
                <div class="btn-group">
                <button class={this.props.isSorting?"btn btn-sm btn-outline-secondary dropdown-toggle disabled":"btn btn-sm btn-outline-secondary dropdown-toggle"} 
                    type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Data Size
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" onClick={()=>{this.setDataSize("small")}}>Small</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" onClick={()=>{this.setDataSize("medium")}}>Medium</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" onClick={()=>{this.setDataSize("large")}}>Large</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}


  export default SortControls;