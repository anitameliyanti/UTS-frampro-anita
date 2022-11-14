import React, { Component } from "react";
import "./about.css";
import galaxy from '../assets/galaxy.jpg';

export class About extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="about" id="about">
          <div className="img-about">
            <img
              src={galaxy}
              alt="bread-about"
            />
          </div>
          <section className="about-us">
            <h1>About <br/> MyCupCakes</h1>
            <p>
            A cupcake is a small, sweet baked good topped with frosting. 
            You might bake cupcakes for your best friend's birthday.
             When you make cupcakes, you mix up cake batter and instead of baking it in large pans, 
             pour it into the small, paper-lined indentations in a cupcake or muffin pan.
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
