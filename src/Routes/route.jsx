
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostDataForm from '../PostDataForm';
import HistoryPage from '../Components/Forms/historyPage';
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