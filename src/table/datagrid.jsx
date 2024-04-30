import React, { useMemo, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable} from 'material-react-table';
import { Box, IconButton, Typography } from '@mui/material';
import SubmitButton from '../Components/Forms/submitButton';
import InputFormat from '../Components/Forms/input';
import Dropdown from '../Components/Forms/dropdown';
import HeaderAppBar, { Header } from './header';
import ProgressBar from '../Components/Forms/ProgressBar';
import axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Datagrid = ({tableData}) => {
  const [selectedRow, setSelectedRow] = useState({
    mergedId: '',
    reason: "",
    remarks: ""
  });
  const [showMap, setShowMap] = useState(false); // State variable to control map visibility
  const [selectedPincode, setSelectedPincode] = useState('');
  
  const generateData = (tableData) => {
    const reasons = [
      'MRP update',
      'Pack size update',
      'Wrong delivery from depot',
      'Brand revamp',
      'Logistics delay',
      'Promo demand spike',
      'Discontinued',
      'GRN / Platform Go-Live Delay',
      'Disputed',
      'Commercial / Contractual issue',
      'Delisted',
      'Tech Issue',
      'Duplicate Seller',
      'Discontinued',
      'MOQ Issue',
      'Order Cancellation',
      'Platform issue',
      'Location not Aligned',
      'Product isn\'t alive at a specific PIN'
    ];
    console.log(tableData);
    const data = tableData.map((row, index) => {
      return {
        ...row,
        serialNumber: index + 1,
        LastDayReason: reasons[index % reasons.length] // Incremental serial number starting from 1
      };
    });
    return data;   
  };
//   const handlePincodeClick = (valueLoss) => {
//   axios.get(`http://localhost:8080/api/location?id=${1}`)
//     .then(response => {
//       const pincodeData = response.data.location; // Access the location object from the response
//       let alertMessage = '';
//       // Iterate over the keys of the location object and construct the alert message
//       for (const key in pincodeData) {
//         if (pincodeData.hasOwnProperty(key)) {
//           alertMessage += `${key}: ${pincodeData[key]}\n`;
//         }
//       }
//       // Display the alert with the constructed message
//       alert(alertMessage);
//       // Optionally, you can also update state to show the map
//       setSelectedPincode(pincodeData);
//       setShowMap(true);
//     })
//     .catch(error => {
//       console.error('Error fetching pincode:', error);
//       // Handle error
//     });
// };
const handlePincodeClick = (valueLoss, mergedId) => {
  console.log('Cell value:', valueLoss); // Log the mergedId

  axios.get(`http://localhost:8080/api/location?id=${mergedId}`)
    .then(response => {
      const pincodeData = response.data.location; // Access the location object from the response
      let alertMessage = '';
      // Iterate over the keys of the location object and construct the alert message
      for (const key in pincodeData) {
        if (pincodeData.hasOwnProperty(key)) {
          alertMessage += `${key}: ${pincodeData[key]}\n`;
        }
      }
      // Display the alert with the constructed message
      alert(alertMessage);
      // Optionally, you can also update state to show the map
      setSelectedPincode(pincodeData);
      setShowMap(true);
    })
    .catch(error => {
      console.error('Error fetching pincode:', error);
      // Handle error
    });
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
        size: 3,
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
        size: 4,
      },
      {
        accessorKey: 'revenue',
        header: 'Revenue',
        size: 4,
      },
      {
        accessorKey: 'internalDivision',
        header: 'Division',
        size: 4,
       
      },
      {
            accessorKey: 'brand',
            header: 'Brand',
            size: 4,
      },
      {
        accessorKey: 'category',
        header: 'Category',
        size: 4,
      },
      {
        accessorKey: 'subCategory',
        header: 'Sub-Category',
        size: 40,
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
    const reversePercentage = 100 - parseFloat(cell.row.original.swoosPercentage); // Calculate the reverse percentage
    return (
      <div style={{ width: '100px', position: 'relative' }}>
        <ProgressBar percentage={reversePercentage} /> {/* Use the reverse percentage */}
      </div>
    );
  },
},

       
        {
          accessorKey: 'location',
          header: 'Sales Loss',
          size: 100,
          Cell: ({ cell }) => (
            <div>
              <span>{cell.row.original.valueLoss}</span>
              <IconButton onClick={() => handlePincodeClick(cell.row.original.valueLoss, cell.row.original.mergedId)} aria-label="show-pincode">
                <LocationOnIcon />
              </IconButton>
            </div>
          ),
        },
        
      
      {
        accessorKey: 'swooscontribution',
        header: 'SWOOS Contribution',
        size: 100,
      },
      {
        accessorKey: 'reason',
        header: 'Reason',
        size: 200,
        Cell: ({ cell }) => (
          <Dropdown
            value={cell.value}
            onChange={(newValue) => {
              console.log(cell.row.original.id,'newValue')
              setSelectedRow({ ...selectedRow, mergedId: cell.row.original.mergedId, reason: newValue });
            }}
          />
        ),
      },
      {
        accessorKey: 'Remarks',
        header: 'Remarks',
        size: 200,
        Cell: ({ cell }) => {
          const { index, value } = cell;
          return (
            <InputFormat
              index={index}
              
              onValueChange={(newValue) => {
                console.log(cell.row.original)
                setSelectedRow({ ...selectedRow, mergedId: cell.row.original.mergedId, remarks: newValue.target.value });
              }}
            />
          );
        },
      },
     
      {
        accessorKey: 'Submit',
        header: 'Submit',
        size: 100,
        Cell: ({ row }) => <SubmitButton  row={row.original} SelectedRow={selectedRow} label={row.Submit} />,
      },
        ],
    [selectedRow]
  );

  const data = useMemo(() => generateData(tableData), []);
  const table = useMaterialReactTable({
    columns,
    data,
    showGlobalFilter: false,
    enableStickyHeader: true,
    enableColumnPinning: true,
    enableFullScreenToggle: true,
    cellClassName: 'customTableCell', // Apply custom cell class
  headerClassName: 'customTableHeader', 
    // renderRowActionMenuItems: () => [<MenuItem key="action">Action</MenuItem>],
    initialState: {
      columnPinning: { left: ['serialNumber','platform', 'pname', 'asin','revenue','internalDivision','brand','category','subCategory'] },
    },
  });

  return (
    <Box  >
  <HeaderAppBar />
  <Box className="customTable"  >
  <MaterialReactTable table={table} className="customTable" columns={columns}
      data={data}
      enableDensityToggle={false}
      initialState={{ density: 'compact' }} />
  </Box>
</Box>
  );
};

export default Datagrid;