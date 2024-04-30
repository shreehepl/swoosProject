import React from 'react';
import DatagridSubmit from '../../src/table/datagrid-submit';

const rowData = JSON.parse(sessionStorage.getItem('updatedRow'));
console.log(rowData,'rowData')
const HistoryPage = () => {
  
  return <div><DatagridSubmit tableData={rowData} /></div>;
};

export default HistoryPage;
