import React, { PureComponent } from "react";
import "./SingleMovie.scss";
import "../../index.css";

export default class SingleMovie extends PureComponent {
  render() {
    let { img } = this.props;
    let { title } = this.props;
    return (
      <div className="thumbnails">
        <img src={img} alt="" />
        <p>{title}</p>
      </div>
    );
  }
}
