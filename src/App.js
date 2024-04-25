import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from '../src/Routes/route';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <>  
      <AppRoutes />   
    </>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Render the ToastContainer separately
ReactDOM.render(
  <ToastContainer position="top-right" />,
  document.getElementById('toast-container')
);
export default App;
 //App.js
