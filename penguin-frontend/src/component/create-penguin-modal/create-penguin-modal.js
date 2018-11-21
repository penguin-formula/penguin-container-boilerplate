import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './create-penguin-modal.css';
import { create as createPenguin } from '../../services/penguinService';

class CreatePenguinModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
    console.log(this.props);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  save() {
    createPenguin({
      name: this.state.name,
      age: this.state.age,
      color: this.state.color,
      specie: this.state.specie,
    }).then(() => {
      this.clearModal();
      this.props.updateParent();
    });
  }

  clearModal() {
    this.setState({
      open: false,
      name: null,
      age: null,
      color: null,
      specie: null,
    });
  }

  render() {
    return (
      <div className="main-button-container">
        <Button
          variant="contained"
          color="primary"
          className="main-modal-button"
          onClick={this.handleOpen}
        >
          Create Penguin
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div>
            <div className="modal">
              <div className="modal-header">
                <div className="modal-title">New Penguin</div>
              </div>
              <div className="modal-content">
                <TextField
                  required
                  id="standard-required"
                  label="Name"
                  margin="normal"
                  onChange={this.handleChange('name')}
                />
                <TextField
                  required
                  id="standard-required"
                  label="Age"
                  margin="normal"
                  type="number"
                  onChange={this.handleChange('age')}
                />
                <TextField
                  required
                  id="standard-required"
                  label="Color"
                  margin="normal"
                  onChange={this.handleChange('color')}
                />
                <TextField
                  required
                  id="standard-required"
                  label="Specie"
                  margin="normal"
                  onChange={this.handleChange('specie')}
                />
              </div>
              <div className="modal-footer">
                <Button
                  variant="contained"
                  color="primary"
                  className="modal-button"
                  onClick={() => this.save()}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className="modal-button"
                  onClick={() => this.clearModal()}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CreatePenguinModal;
