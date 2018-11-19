import React, { Component } from 'react';
import './penguinlist.css';
import Table from '@material-ui/core/Table';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  findAll as findAllPenguins,
  create as creatPenguin,
  deletePenguin,
} from '../../services/penguinService';

class Penguinlist extends Component {
  constructor(props) {
    super(props);
    this.state = { penguins: new Array() };
    this.findPenguins();
  }

  findPenguins() {
    findAllPenguins().then(result => {
      this.setState({
        penguins: result.data,
      });
    });
  }

  deletePenguin(penguin) {
    deletePenguin(penguin._id).then(result => {
      this.findPenguins();
    });
  }

  render() {
    return this.renderTable();
  }

  renderTable() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell numeric>age</TableCell>
              <TableCell>color</TableCell>
              <TableCell>specie</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.penguins.map(penguin => {
              return (
                <TableRow key={penguin.id}>
                  <TableCell component="th" scope="row">
                    {penguin.name}
                  </TableCell>
                  <TableCell numeric>{penguin.age}</TableCell>
                  <TableCell>{penguin.color}</TableCell>
                  <TableCell>{penguin.specie}</TableCell>
                  <TableCell>
                    <div className="flex-item">
                      <IconButton
                        className="button"
                        aria-label="Delete"
                        onClick={() => this.deletePenguin(penguin)}
                      >
                        <Delete />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default Penguinlist;
