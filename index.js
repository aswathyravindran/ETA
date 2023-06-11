import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // document.getElementById('root')
);

reportWebVitals();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Table1 from './Table1';

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/Table1" component={Table1} />
//       {/* Other routes */}
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById('root')
// );
