import React, {Component} from 'react';
import "./Information.css"

class Information extends Component {
  render() {
    return (
      <div className="information">
        <div className="information__title">{this.props.title}</div>
        <div className="information__text">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Information;