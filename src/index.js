/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from '../src/components/App';
import reportWebVitals from './reportWebVitals'; */
import React from 'react';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from '../src/components/App/App';

import { createRoot } from 'react-dom/client';
/* document.body.innerHTML = '<div id="app"></div>'; */
const root = createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

/* import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
 */