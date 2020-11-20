import React, { PureComponent } from "react";
import "../index.css";

export default class SingleMovie extends PureComponent {
  render() {
    let { img } = this.props;
    let { title } = this.props;
    let { year } = this.props;
    return (
      <div className="thumbnails">
        <img src={img} alt="" />
        <p className="title">{title}</p>
        <p className="year">{year}</p>
      </div>
    );
  }
}
