import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { media } from '../../globalStyles';



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

const GridContainer = styled.div`
height:100vh;
width:80%;

${media.mobile} {
  width:99% !important;
}

`



const columns = [
  { field: 'id', headerName: 'SN', maxWidth: 90, flex:1  },
  {
    field: 'trackingId',
    headerName: 'Tracking ID',
    maxWidth: 130,
    minWidth: 90,
    flex:1.4,
    editable: true,
  },
  {
    field: 'customerName',
    headerName: 'Customer Name',
    maxWidth: 180,
    minWidth: 120,
    flex:1.6,
    editable: true,
  },
  {
    field: 'mobileName',
    headerName: 'Mobile Name',
    minWidth: 150,
    maxWidth: 220,
    flex:2,
    editable: true,
  },
  {
    field: 'contactNo',
    minWidth: 170,
    headerName: 'Contact Number',
    maxWidth: 200,
    flex:2.5,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    maxWidth: 180,
    minWidth: 100,
    flex:1,
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
  { id: 1, trackingId: '112398', customerName: 'Amjad', mobileName: 'Samsung A50', contactNo:'+92 345 9972884', status: 'Repaired' },
  { id: 2, trackingId: '826312', customerName: 'Raheel', mobileName: 'iPhone 12', contactNo:'+92 314 6789034', status: 'Pending' },
  { id: 3, trackingId: '917382', customerName: 'Fahad', mobileName: 'OnePlus 8', contactNo:'+92 345 1234567', status: 'Pending' },
  { id: 4, trackingId: '637124', customerName: 'Mohammed', mobileName: 'Samsung S20', contactNo:'+92 321 9876543', status: 'Repaired' },
  { id: 5, trackingId: '557834', customerName: 'Mansoor', mobileName: 'Google Pixel 5', contactNo:'+92 312 3456789', status: 'N.R' },
  { id: 6, trackingId: '987321', customerName: 'Zeeshan', mobileName: 'Samsung Galaxy Note 20', contactNo:'+92 334 5678234', status: 'Repaired' },
  { id: 7, trackingId: '223456', customerName: 'Azlan', mobileName: 'LG V60', contactNo:'+92 345 1234567', status: 'Pending' },
  { id: 8, trackingId: '111223', customerName: 'Kashif', mobileName: 'Sony Xperia 1 II', contactNo:'+92 333 1234567', status: 'Pending' },
  { id: 9, trackingId: '456789', customerName: 'Asad jamal', mobileName: 'Huawei P40 Pro', contactNo:'+92 335 1234567', status: 'Repaired' },
  { id: 10, trackingId: '345678', customerName: 'Mansoor shah', mobileName: 'Xiaomi Mi 10T Pro', contactNo:'+92 337 1234567', status: 'Repaired' },
  { id: 11, trackingId: '789101', customerName: 'Jameel Iqbal', mobileName: 'Asus ROG Phone 3', contactNo:'+92 321 1234567', status: 'Repaired' },
  { id: 12, trackingId: '234567', customerName: 'Zakir', mobileName: 'Oppo Find X2 Pro', contactNo:'+92 323 1234567', status: 'Pending' },
  { id: 13, trackingId: '891011', customerName: 'Kamal zahoor', mobileName: 'OnePlus 8T', contactNo:'+92 325 1234567', status: 'Repaired' },
  { id: 14, trackingId: '111222', customerName: 'Umer Ali', mobileName: 'Samsung Galaxy S21', contactNo:'+92 327 1234567', status: 'Pending' },
  { id: 15, trackingId: '334445', customerName: 'Gulab Khan', mobileName: 'Google Pixel 4a', contactNo:'+92 329 1234567', status: 'Pending' },
  ];


const Table = () => {
    return (
        <GridContainer style={{ height: '90vh', width: '80%' }}>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </GridContainer>
      );
}

export default Table


