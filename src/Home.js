import React, {Component} from 'react';
import Information from "./Information";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from "./Chip";
import "./Home.css"

class Home extends Component {

  state =
    {
      openDialog: false
    };


  openDialog = () => {
    this.setState({openDialog: true});
  };

  handleClose = () => {
    this.setState({openDialog: false});
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
                       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                       mollit anim id est laborum."/>
          <Information title="How to use it?"
                       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                       mollit anim id est laborum.
                       "/>
        </div>
        <div className="home__options-column">
          <Button variant="contained" className="home__button" color="primary" onClick={this.openDialog}>Get started</Button>
          <div className="home__chips-container">
            <Chip link="https://github.com/ljpinzon12" name="Lady Pinzón" image="./LadyPinzon.jpg"/>
            <Chip link="https://github.com/john-guerra" name="John Guerra" image="./JohnGuerra.jpg"/>
          </div>
          <div className="home__learn-more-option">
            <Button variant="outlined" href="#outlined-buttons" className="home__learn-more-button"
                    >Learn more...</Button>
          </div>
        </div>
        <Dialog
          open={this.state.openDialog}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Upload data"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Continue
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
      ;
  }
}

export default Home;