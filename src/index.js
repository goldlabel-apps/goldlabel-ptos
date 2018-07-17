/**
 * Listingslab
 *
 * @package     ptos
 * @author      Chris Dorward <listingslab@gmail.com>
 * @repo        https://github.com/listingslab/ptos
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
