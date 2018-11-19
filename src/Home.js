import React, {Component} from 'react';
import Information from "./Information";
import {
  CardActions,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui";
import Chip from "./Chip";
import "./Home.css"
import * as vega from 'vega';

class Home extends Component {

  state =
    {
      openDialog: false,
      data: ""
    };


  openDialog = () => {
    this.setState({openDialog: true});
  };

  handleClose = () => {
    this.setState({openDialog: false});
  };

  handleChange = (selectorFiles) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = vega.read(e.target.result, {type: "csv"});
      this.props.setData(data);
    };
    reader.readAsText(selectorFiles[0]);
  };
  loadData = (value) => {
    if (value === "followers") {
      this.props.loadData("/datasets/all_followers_id.csv")
    }
    else if (value === "momma") {
      this.props.loadData("/datasets/Artworks_less_columns.csv")
    }
    else {
      this.props.loadData("/datasets/Lekagul Sensor Data.csv")
    }
  };

  render() {
    return (
      <div className="home">
        <div className="home__information-column">
          <div className="home__main-title">
            Nautilus
          </div>
          <div className="home__title">
            Voyager & Navio
          </div>
          <Information title="Description"
                       text="Nautilus is an application which offers a fulfilling data exploration and visualization
                        experience by combining two libraries called Navio and Voyager. First, Navio is a visualization
                         widget focused in summarizing, exploring and navigating big datasets. In another hand, Voyager
                          is a data exploration tool which show to the user multiple graphs and visualization suggestions
                           which summarize the desired datasets. By combining both libraries, Nautilus is able to filter
                            the datasets and show the selected data in multiple visualizations by using Voyager."/>
          <Information title="How to use it?"
                       text="Here you can load predefined datasets or your own dataset to begin to summarize, explore,
                       navigate and visualize it. In the bottom part you cand find Navio that has three main interactions,
                       click on a header to sort the data, click on a value to select it, or drag to select a range.
                       In the main view is Voyager that contains wildcards that let users specify multiple charts in parallel
                       and it has related views suggest visualizations relevant to the currently specified chart.
                       "/>
        </div>
        <div className="home__options-column">
          <div className="home__nautilus-gif-container">
            <img className="home__nautilus-gif" src="https://j.gifs.com/59m3RX.gif"/>
          </div>
          <Button variant="raised" className="home__button" color="primary" onClick={this.openDialog}>Get
            started</Button>
          <div className="home__chips-container">
            <Chip link="https://github.com/ljpinzon12" name="Lady Pinzón" image="./LadyPinzon.jpg"/>
            <Chip link="https://github.com/john-guerra" name="John Guerra" image="./JohnGuerra.jpg"/>
          </div>
          <div className="home__learn-more-option">
            <Button variant="outlined" href="https://ljpinzon12.github.io/nautilusPage/" className="home__learn-more-button"
            >Learn more...</Button>
          </div>
        </div>
        <Dialog
          open={this.state.openDialog}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="home__dialog"
        >
          <DialogTitle id="alert-dialog-title">{"Upload data"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" className="home__card-content">
              Explore pre-loaded datasets
            </DialogContentText>
            <div className="home__cards-container">
              <Card className="home__card">
                <CardContent>
                  <div className="home__card-title">
                    Followers of presidential candid
                  </div>
                  <div className="home__card-text">
                    Description: Dataset with information about followers on twitter of the presidential cadidates.
                    Records(rows): 1048575
                    Attributes: 10
                  </div>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => this.loadData("followers")}>Start</Button>
                </CardActions>
              </Card>
              <Card className="home__card">
                <CardContent>
                  <div className="home__card-title">
                    MoMA Collection
                  </div>
                  <div className="home__card-text">
                    Description: Evolving collection contains almost 130,000 works of modern and contemporary art.
                    Records(rows): 131585
                    Attributes: 14
                  </div>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => this.loadData("momma")}>Start</Button>
                </CardActions>
              </Card>
              <Card className="home__card">
                <CardContent>
                  <div className="home__card-title">
                    VAST Challenge 2017
                  </div>
                  <div className="home__card-text">
                    Description: This offered three mini-challenges and a grand challenge dealing with environmental
                    problems.
                    Records(rows): 171477
                    Attributes: 4
                  </div>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => this.loadData("vast")}>Start</Button>
                </CardActions>
              </Card>
            </div>
            <DialogContentText id="alert-dialog-description" className="home__card-content">
              Upload your dataset.
            </DialogContentText>
            <input className="home__dialog-input" type="file" accept=".csv,.tsv,.txt"
                   onChange={(e) => this.handleChange(e.target.files)}/>
          </DialogContent>
          <DialogActions>
            <Button className="dialog-button" onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
      ;
  }
}

export default Home;