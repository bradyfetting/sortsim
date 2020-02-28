import React, {Component} from 'react';

class SortAlgoOption extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            algo: props.algo,
            click: props.onClick
        };
    }

    render() {
      return (
            <li class="nav-item" onClick={this.state.click}>
              <a class={this.props.activeAlgo===this.state.algo?"nav-link":"nav-link active"}>
                {this.state.algo}
              </a>
            </li>
            );
    }
  }


  export default SortAlgoOption;