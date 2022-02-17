import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/numbers', () => {
      return [
        {
          id: 24,
          value: '+55 84 91234-4321',
          monthyPrice: '0.03',
          setupPrice: '3.40',
          currency: 'U$',
        },
        {
          id: 43,
          value: '+55 84 91236-4323',
          monthyPrice: '0.05',
          setupPrice: '3.50',
          currency: 'U$',
        },
        {
          id: 54,
          value: '+55 84 91238-4325',
          monthyPrice: '0.07',
          setupPrice: '3.50',
          currency: 'U$',
        },
        {
          id: 56,
          value: '+55 84 91230-4327',
          monthyPrice: '0.09',
          setupPrice: '3.60',
          currency: 'U$',
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
