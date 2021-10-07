import React, { Component } from "react";
import Loader from "../../../components/Loader";
import { actFetchDetailMovie } from "./Modules/action";
import { connect } from "react-redux";

class DetailMoviePage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchData(id);
  }

  renderTable = () => {
    const { data } = this.props;
    console.log(data);
    return data?.lichChieu?.map((item) => {
      return (
        <tr key={item.maLichChieu}>
          <td>{item.thongTinRap.tenCumRap}</td>
          <td>{item.thongTinRap.tenRap}</td>
          <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
          <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
          <td>
            <a href="#dat-ve">Đặt vé</a>
          </td>
        </tr>
      );
    });
  };

  renderDetailMovie = () => {
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="container">
        <h3>Detail Movie Page</h3>
        <div className="row">
          <div className="col-md-4 mb-5">
            <img
              style={{
                height: "20rem",
                objectFit: "cover",
                objectPosition: "left top",
              }}
              className="img-fluid"
              src={data?.hinhAnh}
            />
          </div>
          <div className="col-md-8">
            <table className="table">
              <tbody>
                <tr>
                  <td>Tên phim</td>
                  <td>{data?.tenPhim}</td>
                </tr>
                <tr>
                  <td>Mô tả</td>
                  <td>{data?.moTa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Cụm rạp</th>
                  <th scope="col">Tên rạp</th>
                  <th scope="col">Ngày chiếu</th>
                  <th scope="col">Giờ chiếu</th>
                  <th scope="col">Đặt vé</th>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h3>Detail Movie Page</h3>
        {this.renderDetailMovie()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.detailMovieReducer.loading,
    data: state.detailMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id) => {
      dispatch(actFetchDetailMovie(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
