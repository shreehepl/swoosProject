import React, { useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable, MRT_ColumnDef } from 'material-react-table';
import { Box, Typography } from '@mui/material';
import ProgressBar from '../Components/Forms/ProgressBar';
import HeaderAppBar from './header';

const Datagrid = ({tableData}) => {
  const [editedRemarks, setEditedRemarks] = useState({});
  const generateData = (tableData) => {  
  const data = tableData?  [tableData]:[];
    console.log(tableData);
    return data;
    
  };

  const columns = useMemo(
    () => [  
      {
        accessorKey: 'serialNumber', // Accessor key for the serial number column
        header: 'S:No', // Header title for the serial number column
        size: 5, // Adjust the size as needed
      },
      {
        accessorKey: 'platform',
        enableColumnPinning: true,
        header: 'Channel',
        size: 80,
      },
      {
        accessorKey: 'pname',
        enableColumnPinning: true,
        header: 'SAP Description',
        size: 305,
      },
      {
        accessorKey: 'asin',
        header: 'ASIN',
        size: 80,
      },
      {
        accessorKey: 'revenue',
        header: 'Revenue',
        size: 80,
      },
      {
        accessorKey: 'internalDivision',
        header: 'Division',
        size: 80,
       
      },
        {
            accessorKey: 'brand',
            header: 'Brand',
            size: 80,
          },
           {
            accessorKey: 'category',
            header: 'Category',
            size: 80,
          },
          {
            accessorKey: 'subCategory',
            header: 'Sub-Category',
            size: 80,
          },
         {
           accessorKey: 'indore',
           header: 'Indore',
           size: 100,
           Cell: ({ cell }) => {
          return(
        <Typography sx={{color:cell?.row?.original.indore ==='NA'? '#B9B4C7':(cell?.row?.original.indore ==="Available"? 'green' :'red' ), fontSize:'14px',fontWeight:'600'}} gutterBottom>
             {cell?.row?.original.indore}
        </Typography>
           )
         }
      },
      {
        accessorKey: 'delhi',
        header: 'Delhi',
        size: 100,
        Cell: ({ cell }) => {
          return(
     <Typography sx={{color:cell?.row?.original.delhi ==='NA'? '#B9B4C7':(cell?.row?.original.delhi ==="Available"? 'green' :'red' ), fontSize:'14px',fontWeight:'600'}} gutterBottom>
             {cell?.row?.original.delhi}
           </Typography>
           )
         }
      },
      {
        accessorKey: 'mumbai',
        header: 'Mumbai',
        size: 100,
        Cell: ({ cell }) => {
          return(
     <Typography sx={{color:cell?.row?.original.mumbai ==='NA'? '#B9B4C7':(cell?.row?.original.mumbai ==="Available"? 'green' :'red' ), fontSize:'14px',fontWeight:'600'}} gutterBottom>
             {cell?.row?.original.mumbai}
           </Typography>
           )
         }
      },
      {
        accessorKey: 'nagpur',
        header: 'Nagpur',
        size: 100,
        Cell: ({ cell }) => {
          return(
     <Typography sx={{color:cell?.row?.original.nagpur ==='NA'? '#B9B4C7':(cell?.row?.original.nagpur ==="Available"? 'green' :'red' ), fontSize:'14px',fontWeight:'600'}} gutterBottom>
             {cell?.row?.original.nagpur}
           </Typography>
           )
         }
      },
      {
        accessorKey: 'patna',
        header: 'Patna',
        size: 100,
        Cell: ({ cell }) => {
          return(
     <Typography sx={{color:cell?.row?.original.patna ==='NA'? '#B9B4C7':(cell?.row?.original.patna ==="Available"? 'green' :'red' ), fontSize:'14px',fontWeight:'600'}} gutterBottom>
             {cell?.row?.original.patna}
           </Typography>
           )
         }
      },
      {
        accessorKey: 'pune',
        header: 'Pune',
        size: 100,
        Cell: ({ cell }) => {
          return(
     <Typography sx={{color:cell?.row?.original.pune ==='NA'? '#B9B4C7':(cell?.row?.original.pune ==="Available"? 'green' :'red' ), fontSize:'14px',fontWeight:'600'}} gutterBottom>
             {cell?.row?.original.pune}
           </Typography>
           )
         }
      },
      {
        accessorKey: 'ahmedabad',
        header: 'Ahmedabad',
        size: 100,
        Cell: ({ cell }) => {
          return(
     <Typography sx={{color:cell?.row?.original.ahmedabad ==='NA'? '#B9B4C7':(cell?.row?.original.ahmedabad ==="Available"? 'green' :'red' ), fontSize:'14px',fontWeight:'600'}} gutterBottom>
             {cell?.row?.original.ahmedabad}
           </Typography>
           )
         }
        },
 
  {
    accessorKey: 'bangalore',
    header: 'Bangalore',
    size: 100,
    Cell: ({ cell }) => {
      return(
 <Typography sx={{color:cell?.row?.original.bangalore ==='NA'? '#B9B4C7':(cell?.row?.original.bangalore ==="Available"? 'green' :'red' ), fontSize:'14px',fontWeight:'600'}} gutterBottom>
         {cell?.row?.original.bangalore}
       </Typography>
       )
     }
  },
  {
    accessorKey: 'chennai',
    header: 'Chennai',
    size: 100,
    Cell: ({ cell }) => {
    console.log(cell,'asf')
      return(

<Typography sx={{color:cell?.row?.original.chennai ==='NA'? '#B9B4C7':(cell?.row?.original.chennai ==="Available"? 'green' :'red' ), fontSize:'14px',fontWeight:'600'}} gutterBottom>
        {cell?.row?.original.chennai|| 'jkj'}
      </Typography>
      )
    }
  },
  {
    accessorKey: 'hyderabad',
    header: 'Hyderabad',
    size: 100,
    Cell: ({ cell }) => {
      return(
 <Typography sx={{color:cell?.row?.original.hyderabad ==='NA'? '#B9B4C7':(cell?.row?.original.hyderabad ==="Available"? 'green' :'red' ), fontSize:'14px',fontWeight:'600'}} gutterBottom>
         {cell?.row?.original.hyderabad}
       </Typography>
       )
     }
  },
  {
  accessorKey: 'calcutta',
  header: 'Calcutta',
  size: 100,
  Cell: ({ cell }) => {
     return(
<Typography sx={{color:cell?.row?.original.calcutta ==='NA'? '#B9B4C7':(cell?.row?.original.calcutta ==="Available"? 'green' :'red' ), fontSize:'14px',fontWeight:'600'}} gutterBottom>
        {cell?.row?.original.calcutta}
      </Typography>
      )
    }

},
        {
          accessorKey: 'swoosPercentage',
          header: 'SWOOS %',
          size: 100,
          Cell: ({ cell }) => {
            const percentage = parseFloat(cell.value);
      console.log(cell.row.original.swoosPercentage)
            return (
              <div style={{ width: '100px', position: 'relative' }}>
                <ProgressBar percentage={cell.row.original.swoosPercentage } />
              </div>
            );
          },
        },
          {
            accessorKey: 'valueLoss',
            header: 'Value Loss',
            size: 100,
          },
          {
            accessorKey: 'swooscontribution',
            header: 'SWOOS Contribution',
            size: 100,
          },
          {
            accessorKey: 'SelectedRow.reason',
            header: 'Reason',
            size: 200,
          },
          {
            accessorKey: 'SelectedRow.remarks',
            header: 'Remarks',
            size: 100,
          },
          {
            accessorKey: 'LastDayReason',
            header: 'Last Day Reason',
            size: 200,
          },
    
        ],
    [editedRemarks]
  );

  const data = useMemo(() => generateData(tableData), []);

  const table = useMaterialReactTable({
    columns,
    data,
    enableStickyHeader: true,
    enableColumnPinning: true,
    enableFullScreenToggle: true,
    initialState: {
      columnPinning: { left: ['serialNumber','platform', 'pname', 'asin','revenue','internalDivision','brand','category','subCategory'] },
    },
  });

  return (
    <Box>
    <HeaderAppBar/>
      <MaterialReactTable table={table} />
      </Box>
  );
};

export default Datagrid;
