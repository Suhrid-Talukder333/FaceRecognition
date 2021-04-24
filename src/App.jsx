import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import ImageLinkForm from "./components/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition";
import Rank from "./components/Rank";
import SignInForm from "./components/SignInForm";
import RegisterForm from "./components/RegisterForm";

import ParticlesBg from "particles-bg";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY,
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      boxes: [],
      logger: "unsigned",
    };
  }

  logUpdate = (value) => {
    this.setState({ logger: value });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  calculationFace = (response) => {
    var faces = response.outputs[0].data.regions.map(
      (items) => items.region_info.bounding_box
    );
    var image = document.getElementById("inputImage");
    var width = Number(image.width);
    var height = Number(image.height);
    var faceBox = faces.map((face) => ({
      top: face.top_row * height,
      left: face.left_col * width,
      right: width - (face.right_col * width),
      down: height - (face.bottom_row * height),
    }));
    console.log(faceBox);
    this.setState({ boxes: faceBox });
    console.log(this.state.boxes);
  };

  onSubmit = (event) => {
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        this.calculationFace(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <ParticlesBg color="rgb(94, 179, 248)" num={50} type="cobweb" bg={true} />
        <Navigation logUpdate={this.logUpdate} />
        <Logo />
        {this.state.logger === "unsigned" ?
          (<SignInForm logUpdate={this.logUpdate} />)
          : this.state.logger === "register" ? (<>
            <RegisterForm logUpdate={this.logUpdate} />
          </>) : (
            <>
              <Rank />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onSubmit={this.onSubmit}
              />
              <FaceRecognition url={this.state.input} box={this.state.boxes} />
            </>
          )}
      </div >
    );
  }
}
export default App;

