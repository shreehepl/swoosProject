// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Datagrid from './datagrid';

// import { Box, Typography, TextField, Button, Link, IconButton } from '@mui/material';
// // import axios from 'axios'; // Adjust the import path accordingly
// import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer
// import 'react-toastify/dist/ReactToastify.css';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


// const PostDataForm = () => {
//   const [setResponse] = useState('');
//   const [inputValue, setInputValue] = useState({ excelFile: '', csvFile: '' });
//   const [data, setData] = useState([]);

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
 
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };
 
//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };


 
  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue((prevInputValue) => ({
//       ...prevInputValue,
//       [name]: value,
//     }));
//   };
//   const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:8080/api/signin', {
//         email: email,
//         password: password
//       });
//      sessionStorage.setItem('accessToken',true)
//      handleSubmit();
     
//  } catch (error) {
//       console.error('Error:', error);
//     }
//   };  
//   const handleSubmit = async () => {
   
//     try {
//       const res = await axios.get('http://localhost:8080/api/postURL');
//       setData(res.data.data);
//       setResponse(JSON.stringify(res.data.data));                                                       
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

// useEffect( () => {
//   if(sessionStorage.getItem('accessToken')){
//     handleSubmit();
//   }
// },[])

// console.log(data.length ===0  && !sessionStorage.getItem('accessToken') ,data.length)
//   return (
//     <>
//     <Box>
//         {data?.length ===0  ? 
//     <Box sx={{ display: 'flex', flexDirection: 'row' }}>
//     <Box sx={{ height: '100vh' }}>
//       {/* <img src={backgroundimg} alt="description_here" style={{ height: '98vh', width: '100%', margin: '8px' }} /> */}
//     </Box>
//     <Box sx={{ display: 'flex', justifyContent: 'center', pl: '240px' }}>
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           backgroundColor: 'white',
//         }}
//       >
//         <Box
//           sx={{
//             borderRadius: 6,
//             width: '380px',
//             height: '400px',
//           }}
//         >
//           <Typography sx={{ fontSize: '18px', fontWeight: '600', textAlign: 'center' }}>
//             Welcome to
//           </Typography>
//           <Typography sx={{
//             textAlign: 'center',
//             fontSize: '20px',
//             fontWeight: '750',
//             background: 'linear-gradient(183.5deg, #DF7FF7 -6.25%, #511FBB 94.45%)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//           }} gutterBottom>
//             SWOOS!
//           </Typography>
//           <Typography sx={{ paddingLeft: '26px', fontSize: '16px', fontWeight: '700' }}>
//             Login
//           </Typography>
//           <form onSubmit={handleLoginSubmit} style={{ marginTop: '8px' }}>
//             <TextField
//               placeholder="Enter Email ID"
//               value={email}
//               onChange={handleEmailChange}
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               sx={{ flex: 'direction', alignItems: 'center' }}
//               InputProps={{
//                 style: { color: 'black', width: '328px', height: '48px' },
//               }}
//             />
//             <TextField
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Enter Password"
//               value={password}
//               onChange={handlePasswordChange}
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               sx={{ flex: 'direction', alignItems: 'center' }}
//               InputProps={{
//                 endAdornment: (
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
//                   </IconButton>
//                 ),
//                 style: { color: 'black', width: '328px', height: '48px' },
//               }}
//             />
//             <Box sx={{ pl: '26px' }}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 sx={{
//                   mt: 4,
//                   width: '328px',
//                   height: '48px',
//                   backgroundColor: '#511FBB',
//                   borderRadius: '8px',
//                   '&:hover': {
//                     backgroundColor: '#511FBB',
//                   },
//                   '&:focus': {
//                     outline: 'none',
//                   },
//                 }}
//               >
//                 LOGIN
//               </Button>
//             </Box>
//             <Link href="#" underline="none" sx={{ paddingLeft: '26px', paddingTop: 4, display: 'block', color: '#511FBB', fontSize: '12px', fontWeight: '600' }}>
//               Forgot Password?
//             </Link>
//           </form>
//         </Box>
//       </Box>
//     </Box>
//     <ToastContainer position="top-right" /> {/* Initialize ToastContainer */}
//   </Box>      
//         :
       
//             <Datagrid tableData={data} />
//         }
//     </Box>
    
    
//   </>
// );
// };

// export default PostDataForm;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Datagrid from './datagrid';
import { Box, Typography, TextField, Button, Link, IconButton } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import backgroundimg from '../src/Components/Assets/backgroundimg.svg';
 
 
const PostDataForm = ({ handleLanding }) => {
  // const [setResponse] = useState('');
  const [inputValue, setInputValue] = useState({  email: '',
  password: '', });
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [response, setResponse] = useState('');

 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleClicwPassword = () => {
    setShowPassword(!showPassword);
  };
 
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };
  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      // Display a message or toast indicating that both fields are required
      toast.error('Both email and password are required.');
      return;
    }
    try {
      const res = await axios.post('http://localhost:8080/api/signin', {
        email: email,
        password: password
      }
    );
      console.log(res.data)
     sessionStorage.setItem('accessToken',true)
     handleSubmit();
     
 } catch (error) {
      console.error('Error:', error);
       toast.error('Login failed. Please try again.');
    }
  };  
  const handleSubmit = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/postURL');
      const retrievedData = res.data?.data ?? []; // Use fallback if data is null
      setData(retrievedData);
      setResponse(JSON.stringify(retrievedData));                                                      
    } catch (error) {
      console.error('Error:', error);
    }
  };
useEffect( () => {
  if(sessionStorage.getItem('accessToken')){
    handleSubmit();
  }
},[])
console.log(data.length ===0  && !sessionStorage.getItem('accessToken') ,data.length)
  return (
    <>
    <Box >
        {data?.length ===0  ?
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
    <Box sx={{ height: '98vh' }}>
      <img src={backgroundimg} alt="description_here" style={{ height: '96vh', width: '100%', margin: '8px' }} />
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', pl: '240px' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            borderRadius: 6,
            width: '380px',
            height: '400px',
            mr: '46px',
          }}
        >
          <Typography sx={{ fontSize: '18px', fontWeight: '600', textAlign: 'center' }}>
            Welcome to
          </Typography>
          <Typography sx={{
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: '750',
            background: 'linear-gradient(183.5deg, #DF7FF7 -6.25%, #511FBB 94.45%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }} gutterBottom>
            SWOOS
          </Typography>
          <Typography sx={{ paddingLeft: '26px', fontSize: '16px', fontWeight: '700' }}>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit} style={{ marginTop: '8px' }}>
          <TextField
  placeholder="Enter Email ID"
  value={email}
  onChange={handleEmailChange}
  fullWidth
  margin="normal"
  variant="outlined"
  sx={{ flex: 'direction', alignItems: 'center', '& input': { caretColor: 'transparent' } }}
  InputProps={{
    style: { color: 'black', width: '328px', height: '48px' },
  }}
/>
<TextField
  type={showPassword ? 'text' : 'password'}
  placeholder="Enter Password"
  value={password}
  onChange={handlePasswordChange}
  fullWidth
  margin="normal"
  variant="outlined"
  sx={{ flex: 'direction', alignItems: 'center', '& input': { caretColor: 'transparent' } }}
  InputProps={{
    endAdornment: (
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </IconButton>
    ),
    style: { color: 'black', width: '328px', height: '48px' },
  }}
/>

            <Box sx={{ pl: '26px' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  mt: 4,
                  width: '328px',
                  height: '48px',
                  backgroundColor: '#394a51',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#394a51',
                  },
                  '&:focus': {
                    outline: 'none',
                  },
                }}
              >
                LOGIN
              </Button>
            </Box>
            
            <Link href="#" underline="none" sx={{ paddingLeft: '26px', paddingTop: 4, display: 'block', color: '#6e98a2', fontSize: '12px', fontWeight: '600' }}>
              Forgot Password?
            </Link>
          </form>
        </Box>
      </Box>
    </Box>
    <ToastContainer position="top-right" /> {/* Initialize ToastContainer */}
  </Box>      
        :       
            <Datagrid tableData={data} />
        }
    </Box>   
  </>
);
};
 
export default PostDataForm;