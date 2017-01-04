import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as SearchUtils from './util/api_util';

window.fetchSearchGiphys = SearchUtils.fetchSearchGiphys;
