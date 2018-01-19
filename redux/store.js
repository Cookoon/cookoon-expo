import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import reducer from 'redux/reducer';

export default createStore(reducer, {}, applyMiddleware(reduxThunk));
