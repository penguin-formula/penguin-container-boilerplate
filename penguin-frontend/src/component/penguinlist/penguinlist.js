import React, { Component } from 'react';
import './penguinlist.css';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import findAll from '../../services/penguinService';

class Penguinlist extends Component {
  constructor(props) {
    super(props);
    findAll().then(promise => {
      console.log(promise);
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
    //return <div className="penguinlist">aa</div>;
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
            </TableRow>
          </TableHead>
          <TableBody>
            {this.penguins.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell numeric>{row.age}</TableCell>
                  <TableCell>{row.color}</TableCell>
                  <TableCell>{row.specie}</TableCell>
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
