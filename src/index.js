import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/AppUi/App';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://ka1anda.github.io'
}));

// Add your routes and other middleware here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



