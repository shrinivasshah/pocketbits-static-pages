import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    borderRadius: "15px",
    overflow: "hidden",
  },
  table: {
    borderRadius: "15px",
    overflow: "hidden",
    color: "white",
    minWidth: 650,
    backgroundColor: "#171717",
  },
  tableHead: {
    backgroundColor: "#252933",
  },
});

function createData(
  withdrawlFee,
  minimumWithdrawlFee,
  MinimumDeposit,
  Confirmations,
  withdrawStatus
) {
  return {
    withdrawlFee,
    minimumWithdrawlFee,
    MinimumDeposit,
    Confirmations,
    withdrawStatus,
  };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

export default function FeeTable() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell align="right">Asset</TableCell>
              <TableCell align="right">Withdrawl fee</TableCell>
              <TableCell align="right">Minimum withdrawl Amount</TableCell>
              <TableCell align="right">Minimum Deposit</TableCell>
              <TableCell align="right">Confirmations</TableCell>
              <TableCell align="right">Withdrawl Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.withdrawStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
