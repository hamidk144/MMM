import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';



const StatusCell= styled.div`

    padding: 5px;
    border-radius: 5px;
    border: 1px solid green;


    /* background-color: ${ ({variant})=>{return(variant==='Repaired'? 'rgba(0, 128, 0, 0.05);' : 'white')} }; */

    &.Repaired {
      background-color: rgba(0, 128, 0, 0.05);
      color: green;
    }
    &.Pending {
      background-color: rgba(255, 217, 0, 0.05);
      color: goldenrod;
    }
    &.N-Repairable {
      background-color: rgba(255, 0, 0, 0.05);
      color: crimson;
    }
  


`



const columns = [
  { field: 'id', headerName: 'SN', width: 90 },
  {
    field: 'trackingId',
    headerName: 'Tracking ID',
    width: 200,
    editable: true,
  },
  {
    field: 'customerName',
    headerName: 'Customer Name',
    width: 220,
    editable: true,
  },
  {
    field: 'mobileName',
    headerName: 'Mobile Name',
    width: 220,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    editable: true,
    renderCell: (params)=>{

      console.log(params.row.status);
      return(
        <div >
        <StatusCell /* variant={`${params.row.status}`} */ className={`${params.row.status}`} >
          
          {params.row.status}
      
          </StatusCell>
        </div>
      )
    } 
  },
];

const rows = [
  { id: 1, trackingId: '112', customerName: 'Amjad', mobileName: 'Samsung A50', status: 'Repaired'  },
  { id: 2, trackingId: '112', customerName: 'Amjad', mobileName: 'Samsung A50', status: 'Pending' },
  { id: 3, trackingId: '112', customerName: 'Amjad', mobileName: 'Samsung A50', status: 'Repaired' },
  { id: 4, trackingId: '112', customerName: 'Amjad', mobileName: 'Samsung A50', status: 'Repaired' },
  { id: 5, trackingId: '112', customerName: 'Amjad', mobileName: 'Samsung A50', status: 'Repaired' },
  { id: 6, trackingId: '112', customerName: 'Amjad', mobileName: 'Samsung A50', status: 'Repaired' },
  { id: 7, trackingId: '112', customerName: 'Amjad', mobileName: 'Samsung A50', status: 'Pending' },
  { id: 8, trackingId: '112', customerName: 'Amjad', mobileName: 'Samsung A50', status: 'Pending' },
  { id: 9, trackingId: '112', customerName: 'Amjad', mobileName: 'Samsung A50', status: 'N-Repairable' },
];


const Table = () => {
    return (
        <div style={{ height: '100vh', width: '80%' }}>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      );
}

export default Table


