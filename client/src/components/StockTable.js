import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    table: {
      marginTop:theme.spacing(2)
    },
  }));
  const StockTable = (props) =>  {
    const classes = useStyles(); 
    const stocks =props.items;
 return(
    <TableContainer component={Paper} className={classes.table} >
        <Table aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align="right">Price</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {stocks.map((row) => (
            <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
)
  }
  export default StockTable;