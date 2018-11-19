import React, {Component} from 'react';
import './App.css';
import Home from "./Home";

const libVoyager = require('../node_modules/datavoyager');

class App extends Component {
  state = {
    voyagerInstance: null,
    isHome: true,
    data: ""
  };

  buildNautilus = (newData) => {
    if (newData) {
    const columns = [];

      for (let key in newData[0]) {
        if (newData[0].hasOwnProperty(key)) {
          columns.push(key);
        }
      }
      newData.columns = columns;
      this.setState({isHome: false}, () => {
        this.initVoyager(newData);
        this.initNavio(newData);
      });
    } else {
      window.d3.csv(this.state.data, (err, data) => {
        if (err) {
          throw err;
        }

        this.initVoyager(data);
        this.initNavio(data);
      });
    }
  };

  initVoyager = (data) => {
    const voyagerContainer = document.getElementById("voyager-embed");
    const voyagerData = {values: data.splice(0, 500)};
    const voyagerInstance = libVoyager.CreateVoyager(voyagerContainer, undefined, voyagerData);

    delete voyagerData.values.columns;

    this.setState({voyagerInstance}, () => {
      this.state.voyagerInstance.updateData(voyagerData);
    });
  };

  initNavio = (data) => {
    const nv = window.navio(window.d3.select("#navio"), 300).updateCallback(this.updateVoyager);

    data.columns.forEach(columnName => {
      if (this.determineColumnType(columnName, data) === "sequential") {
        nv.addSequentialAttrib(columnName);
      } else {
        nv.addCategoricalAttrib(columnName);
      }
    });

    nv.data(data);
  };

  determineColumnType = (columnName, data) => {
    const max = data.length;
    const sampleSize = 10;
    const sample = [];

    for (let i = 0; i < sampleSize; i++) {
      sample.push(data[Math.floor(Math.random() * max)][columnName]);
    }

    const areAllElementsNumbers = sample.every(c => !isNaN(c));

    return areAllElementsNumbers ? "sequential" : "categorical";
  };

  updateVoyager = (updatedData) => {
    this.state.voyagerInstance.updateData({values: updatedData});
  };

  loadData = (data) => {
    this.setState({
      data,
      isHome: false
    }, () => this.buildNautilus())
  };

  render() {
    return (
      <div className="App">
        {this.state.isHome
          ?
          <Home loadData={this.loadData} setData={this.buildNautilus}/>
          :
          <div>
            <div id="voyager-embed"/>
            <div id="navio"/>
          </div>}
      </div>
    );
  }
}

export default App;
