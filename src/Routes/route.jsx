
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostDataForm from '../table/PostDataForm';
import HistoryPage from '../table/historyPage';
const AppRoutes = () => {

  return (
    <Router>
      <Routes>       
        <Route path="/" element={<PostDataForm />} />
        <Route path="/historyPage" element={<HistoryPage />} />
      </Routes>
    </Router>

  );
};
 
export default AppRoutes;