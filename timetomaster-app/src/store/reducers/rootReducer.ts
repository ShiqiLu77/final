import { combineReducers } from 'redux';
import userReducer from './userReducer'; // 导入你的用户 reducer


const rootReducer = combineReducers({
  user: userReducer,
  
  // 添加其他的 reducer
});

export default rootReducer;
