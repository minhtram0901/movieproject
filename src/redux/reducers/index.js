import {combineReducers} from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/Modules/reducer";
import detailMovieReducer from "../../containers/HomeTemplate/DetailMoviePage/Modules/reducer";

const rootReducer = combineReducers({
	//List reducers khai báo ở đây
	listMovieReducer,
	detailMovieReducer,
});

export default rootReducer ;
