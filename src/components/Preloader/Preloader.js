import React, { Component } from "react";
import "./Preloader.css";

class Preloader extends Component {
  preloader() {
    let preload = document.querySelector(".preloader");
    setTimeout(() => {
      preload.style.opacity = "0";
      setTimeout(() => {
        preload.style.display = "none";
      }, 1000);
    }, 3000);
  }

  componentDidMount() {
    this.preloader();
  }

  render() {
    return (
      <div className="preloader">
        <div class="spinner_wrap">
            {/* <div class="spinner" /> */}
            <img src={`${process.env.PUBLIC_URL}/faro.jpeg`} className="spinner" style={{ width: 50, height: 50 }} />
        </div>
      </div>
    );
  }
}

export default Preloader;
