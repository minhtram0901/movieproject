import * as ActionType from "./constants";
import axios from "axios";
import api from "../../../../utilities/apiUtil";

export const actFetchDetailMovie = (id) => {
  return (dispatch) => {
    dispatch(actDetailMovieRequest());
    // axios({
    //   url: `http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    //   method: "GET",
    //   headers: {
    //     TokenCybersoft:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE4LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzU2MTYwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjQ3NzA5MjAwfQ.Gn_duD0LZ6aamu893NNv17QlXn6HTFtyfWIFAIMBjEM",
    //   },
    // })
    api.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(actDetailMovieSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actDetailMovieFailed(error));
      });
  };
};

const actDetailMovieRequest = () => {
  return {
    type: ActionType.DETAIL_MOVIE_REQUEST,
  };
};

const actDetailMovieSuccess = (data) => {
  return {
    type: ActionType.DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};

const actDetailMovieFailed = (error) => {
  return {
    type: ActionType.DETAIL_MOVIE_FAILED,
    payload: error,
  };
};
