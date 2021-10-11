import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import Loader from "../../../components/Loader";
import {actFetchListMovie} from "./Modules/action";
import {connect} from "react-redux";

class ListMoviePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // this.props.request();
    // axios({
    //   url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP11",
    //   method: "GET",
    // })
    //   .then((result) => {
    //     this.props.success(result.data);
    //   })
    //   .catch((error) => {
    //     this.props.failed(error);
    //   });
    this.props.fetchData();
  }

  renderListMovie = () => {
    const { data, loading } = this.props;
    if (loading) return <Loader/>;
    return data?.map((movie) => {
      return <Movie key={movie.maPhim} movie={movie} />;
    });
  };
  
  render() {
    return (
      <div className="container">
        <h1>List Movie Page</h1>
        <div className="row d-flex justify-content-between">
          {this.renderListMovie()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(actFetchListMovie());
    },


  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ListMoviePage);