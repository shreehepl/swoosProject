// import React, { useState } from 'react';
// import { Box, Typography, TextField, Button, Link, IconButton } from '@mui/material';
// import axios from 'axios'; // Adjust the import path accordingly
// import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer
// import 'react-toastify/dist/ReactToastify.css';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
 
// interface LoginFormProps {
//   onLogin: (email: string, password: string) => void;
// }
 
// const LoginForm: React.FC<LoginFormProps> = ({handleLanding, onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
 
//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };
 
//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//   };
 
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:8080/api/signin', {
//         email: email,
//         password: password
//       });
//      sessionStorage.setItem('accessToken',true)
//       handleLanding();
//  } catch (error) {
//       console.error('Error:', error);
//     }
//   };  

//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //     toast.error('Failed to login. Please try again.');
//   //   }
//   // }
 
//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };
 
//   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//   };
 
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'row' }}>
//       <Box sx={{ height: '100vh' }}>
//         {/* <img src={backgroundimg} alt="description_here" style={{ height: '98vh', width: '100%', margin: '8px' }} /> */}
//       </Box>
//       <Box sx={{ display: 'flex', justifyContent: 'center', pl: '240px' }}>
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             backgroundColor: 'white',
//           }}
//         >
//           <Box
//             sx={{
//               borderRadius: 6,
//               width: '380px',
//               height: '400px',
//             }}
//           >
//             <Typography sx={{ fontSize: '18px', fontWeight: '600', textAlign: 'center' }}>
//               Welcome to
//             </Typography>
//             <Typography sx={{
//               textAlign: 'center',
//               fontSize: '20px',
//               fontWeight: '750',
//               background: 'linear-gradient(183.5deg, #DF7FF7 -6.25%, #511FBB 94.45%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//             }} gutterBottom>
//               SWOOS!
//             </Typography>
//             <Typography sx={{ paddingLeft: '26px', fontSize: '16px', fontWeight: '700' }}>
//               Login
//             </Typography>
//             <form onSubmit={handleSubmit} style={{ marginTop: '8px' }}>
//               <TextField
//                 placeholder="Enter Email ID"
//                 value={email}
//                 onChange={handleEmailChange}
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//                 sx={{ flex: 'direction', alignItems: 'center' }}
//                 InputProps={{
//                   style: { color: 'black', width: '328px', height: '48px' },
//                 }}
//               />
//               <TextField
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//                 sx={{ flex: 'direction', alignItems: 'center' }}
//                 InputProps={{
//                   endAdornment: (
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       onMouseDown={handleMouseDownPassword}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
//                     </IconButton>
//                   ),
//                   style: { color: 'black', width: '328px', height: '48px' },
//                 }}
//               />
//               <Box sx={{ pl: '26px' }}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   sx={{
//                     mt: 4,
//                     width: '328px',
//                     height: '48px',
//                     backgroundColor: '#394a51',
//                     borderRadius: '8px',
//                     '&:hover': {
//                       backgroundColor: '#394a51',
//                     },
//                     '&:focus': {
//                       outline: 'none',
//                     },
//                   }}
//                 >
//                   Login
//                 </Button>
//               </Box>
//               <Link href="#" underline="none" sx={{ paddingLeft: '26px', paddingTop: 4, display: 'block', color: '#6e98a2', fontSize: '12px', fontWeight: '600' }}>
//                 Forgot Password?
//               </Link>
//             </form>
//           </Box>
//         </Box>
//       </Box>
//       <ToastContainer position="top-right" /> {/* Initialize ToastContainer */}
//     </Box>
//   );
// };
 
// export default LoginForm;//login.jsx