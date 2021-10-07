import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="card my-3" style={{ width: "18rem", height:"30rem"}}>
        <img
        style={{ height: "75%", objectFit: "cover", objectPosition: "left top" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "./img/no-poster-available.jpg";
          }}
          src={movie.hinhAnh}
          className="card-img-top"
          alt={movie.tenPhim}
        />
        <div className="card-body ">
          <h5 className="card-title movieTitle">{movie.tenPhim}</h5>
          {/* <p className="card-text">
            {movie.moTa}
          </p> */}
          <Link className="btn btn-primary" to={`/detail/${movie.maPhim}`}>
            Chi tiết
          </Link>
        </div>
      </div>
    );
  }
}
