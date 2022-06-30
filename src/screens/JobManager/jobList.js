import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import OpenIconSpeedDial from '../components/speedDial';
import Grid from '@mui/material/Grid';
const styles = (theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    // justifyContent: "flex-start"
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      ...(theme.direction === 'rtl' && {
        paddingLeft: '0 !important',
      }),
      ...(theme.direction !== 'rtl' && {
        paddingRight: undefined,
      }),
    },
    paddingLeft:10,
    // justifyContent:'center'
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 60,
    rowHeight: 48,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight ,justifyItems:'center'}}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? 'right'
            : 'left'
        }
      >
        {cellData}
        {console.log("CellData==>",cellData)}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight , backgroundColor:'#e6e6e6' , alignItems:'center'}}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: 'inherit',
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
           
          >
            {columns.map(({ dataKey, ...other }, index) => {
              console.log("DATAKEY--",dataKey,"---",index)
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired, 
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const defaultTheme = createTheme();
const VirtualizedTable = withStyles(styles, { defaultTheme })(MuiVirtualizedTable);

// ---

const sample = [
  [159, 'Flooring', 'Ashwin', '12/05/2021', 'Active', 'false', 'No-Alert'],
  [102, 'Roofing', 'Mark', '10/11/2020', 'Estimate', 'false', 'No-Alert'],
  [694, 'Gardening', 'Elon Musk', '17/11/2021', 'Active', 'false', 'No-Alert'],
  [15, 'Roofing', 'Nelson', '05/11/2019', 'Inactive', 'false', 'Alert'],
];

function createData(id, dessert, calories, fat, carbs, protein ,closed ,alerts) {
  return { id, dessert, calories, fat, carbs, protein,closed ,alerts };
}

const rows = [];

for (let i = 0; i < 50; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}
console.log("rows-->",rows)

const top100Films = [
  { label: 'Open Jobs Only' },
  { label: 'Closed Jobs Only'},
  { label: 'Both Open and Closed Jobs'}];

  //button

  // const [selectedValue, setSelectedValue] = React.useState('c');

  // const controlProps = (item) => ({
  //   checked: selectedValue === item,
  //   onChange: handleChange,
  //   value: item,
  //   name: 'color-radio-button-demo',
  //   inputProps: { 'aria-label': item },
  // });
  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

export default function JobList() {
  const [selectedValue , setSelectedValue] = React.useState('c');
  const controlProps = (item) => ({
    // checked: selectedValue === item,
    checked: 1 === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
          <Typography paddingRight="1px" paddingBottom="20px" fontSize= '25px'>Job List</Typography>
          <div style={{display:'flex'}}>
          {/* <Checkbox  defaultChecked /> */}
          <Radio {...controlProps('c')} sx={{color:"#ff7500",'&.Mui-checked':{color: "#ff7500" }}} />
          <Typography paddingTop='8px' paddingRight="4px ">All</Typography>
          {/* <Checkbox /> */}
          <Radio {...controlProps('c')} sx={{color:"#ff7500",'&.Mui-checked':{color: "#ff7500" }}} />
          <Typography paddingTop='8px' paddingRight="4px ">Estimate </Typography>
          {/* <Checkbox   /> */}
          <Radio {...controlProps('c')} sx={{color:"#ff7500",'&.Mui-checked':{color: "#ff7500" }}} />
          <Typography paddingTop='8px' paddingRight="4px ">Contract</Typography>
          {/* <Checkbox  /> */}
          <Radio {...controlProps('c')} sx={{color:"#ff7500",'&.Mui-checked':{color: "#ff7500" }}} />
          <Typography paddingTop='8px' paddingRight="4px ">Active</Typography>
          {/* <Checkbox name="All"  /> */}
          <Radio {...controlProps('c')} sx={{color:"#ff7500",'&.Mui-checked':{color: "#ff7500" }}} />
          <Typography paddingTop='8px' paddingRight="4px ">On Hold </Typography>
          {/* <Checkbox   /> */}
          <Radio {...controlProps('c')} sx={{color:"#ff7500",'&.Mui-checked':{color: "#ff7500" }}} />
          <Typography paddingTop='8px' paddingRight="4px ">Cancelled </Typography>
          {/* <Checkbox name="All"  /> */}
          <Radio {...controlProps('c')} sx={{color:"#ff7500",'&.Mui-checked':{color: "#ff7500" }}} />
          <Typography paddingTop='8px' paddingRight="4px ">Finished </Typography>  
          </div>
          </Grid>
          {/* <div style={{justifyContent:"flex-end" , display:'flex', paddingLeft:"150px"}}> */}
          <Grid item xs={6} md={4}>
            <div>
          <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 250   , display:'flex', paddingLeft: '5px'}}
                renderInput={(params) => <TextField {...params} label="Filter By" />}
          />
          </div>
          </Grid>

        
    <Grid xs={12} style={{textAlign:'center'}}>
    <Paper style={{ height: 600, width: '90%' ,alignItems:"center", justifyContent:'center', alignItems:'center'}}>
        
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 200,
            label: 'Job No.',
            dataKey: 'dessert',
          },
          {
            width: 350,
            label: 'Job Name',
            dataKey: 'calories'
          },
          {
            width: 350,
            label: 'Customer Name',
            dataKey: 'fat',
          },
          {
            width: 246,
            label: 'Contract Date',
            dataKey: 'carbs',
          },
          {
            width: 220,
            label: 'Job Status',
            dataKey: 'protein'
          },
          {
            width: 200,
            label: 'Closed',
            dataKey: 'closed',
          },
          {
            width: 200,
            label: 'Alerts',
            dataKey: 'alerts'
          }
        ]}
      />
      {/* <Grid 
      //  container direction="row" justifyContent="flex-end" alignItems="flex-end" 
        >
          <OpenIconSpeedDial 
          // style={{dire}}
          />
     </Grid> */}
    </Paper>
    </Grid >
    
     {/* <Grid  container direction="row" justifyContent="flex-end" alignItems="flex-end"  >
          <OpenIconSpeedDial 
          // style={{dire}}
          />
     </Grid> */}
    </Grid>
    
    // </Container>
  );
}
