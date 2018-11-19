import React, { Component } from 'react';
import './penguinlist.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  findAll as findAllPenguins,
  create,
} from '../../services/penguinService';

class Penguinlist extends Component {
  constructor(props) {
    super(props);
    this.state = { penguins: new Array() };
    findAllPenguins().then(result => {
      this.setState({
        penguins: result.data,
      });
    });
    this.penguins = [
      {
        name: 'Mad Max',
        age: 5,
        color: 'Yellow',
        specie: 'Emperor',
      },
      {
        name: 'Ice cream sandwich',
        age: 237,
        color: 'Yellow',
        specie: 'Emperor',
      },
      { name: 'Eclair', age: 262, color: 'Yellow', specie: 'Emperor' },
      { name: 'Cupcake', age: 305, color: 'Yellow', specie: 'Emperor' },
      {
        name: 'Gingerbread',
        age: 356,
        color: 'Yellow',
        specie: 'Emperor',
      },
    ];
  }

  render() {
    console.log(this.state);
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
            {this.state.penguins.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell numeric>{row.age}</TableCell>
                  <TableCell>{row.color}</TableCell>
                  <TableCell>{row.specie}</TableCell>
                  <TableCell />
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
