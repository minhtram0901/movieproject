import * as ActionType from "./constants";

import api from "../../../../utilities/apiUtil";

export const actLogin = (account, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    api
      .post(`/QuanLyNguoiDung/DangNhap`, account)
      .then((result) => {
        //   check loai nguoi dung
        if (result.data.content.maLoaiNguoiDung !== "QuanTri")
          return Promise.reject({
            response: {
              data: {
                content: "Bạn không có quyền truy cập",
              },
            },
          });
        //   luu trang thai login
        localStorage.setItem(
          "accessToken",
          JSON.stringify(result.data.content.accessToken)
        );
        //   redirect sang dashboard
        // history.push("/admin");  // vẫn cho quay về trang trước do có lưu lại lịch sử trước đó
        history.replace("/admin");  //không cho quay về trang trước do đè 
        dispatch(actLoginSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actLoginFailed(error));
      });
  };
};

const actLoginRequest = () => {
  return {
    type: ActionType.LOGIN_REQUEST,
  };
};

const actLoginSuccess = (data) => {
  return {
    type: ActionType.LOGIN_SUCCESS,
    payload: data,
  };
};

const actLoginFailed = (error) => {
  return {
    type: ActionType.LOGIN_FAILED,
    payload: error,
  };
};
