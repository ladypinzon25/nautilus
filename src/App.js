import React, {Component} from 'react';
import './App.css';
import Navio from 'navio';

const libVoyager = require('../node_modules/datavoyager');

class App extends Component {
  state = {
    voyagerInstance: null
  };

  componentDidMount() {
    const component = this;
    //NAVIO
    let nv = window.navio(window.d3.select("#navio"), 300).updateCallback(this.updateVoyager);

    // NAVIO Step 2. Add the Categorical and Sequential attributes you want to use
    let catColumns = ["user", "follower_screen_name", "follower_default_profile"];
    let seqColumns = ["follower_created_at", "follower_favourites_count", "follower_friends_count", "follower_followers_count", "follower_retweet_count", "follower_statuses_count"];
    catColumns.forEach((c) => nv.addCategoricalAttrib(c));
    seqColumns.forEach((c) => nv.addSequentialAttrib(c));

    //VOYAGER
    const container = document.getElementById("voyager-embed");

    // NAVIO Step 3. Load your data!
    window.d3.csv("/datasets/all_followers_id.csv", function (err, data) {
      if (err) throw err;
      const voyagerData = { values: data.splice(0, 500) };
      nv.data(data);
      delete voyagerData.values.columns;
      component.setState({voyagerInstance: libVoyager.CreateVoyager(container, undefined, voyagerData)}, () => {
        component.state.voyagerInstance.updateData(voyagerData);
      });
    });
  }

  updateVoyager = (updatedData) => {
    this.state.voyagerInstance.updateData({values: updatedData});
  };


  render(){
    return (
      <div className="App">
        <div>
          <div id="voyager-embed"/>
          <div id="navio"/>
        </div>
      </div>
    );
  }
}



export default App;
