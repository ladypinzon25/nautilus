import React, {Component} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import "./Chip.css"

class Chip extends Component {
  render() {
    return (
      <div className="chip">
        <a href={this.props.link}>
          <Tooltip title={this.props.name}>
            <img src={this.props.image} className="chip__circle" alt="chip circle"/>
          </Tooltip>
        </a>
      </div>
    )
      ;
  }
}

export default Chip;

