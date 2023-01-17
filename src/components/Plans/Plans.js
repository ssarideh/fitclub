import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur blur-p-1"></div>
      <div className="blur blur-p-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">Ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now with us</span>
      </div>

      {/* plan card */}
      <div className="plans">
        {plansData?.map(({ name, icon, price, features }, i) => (
          <div className="plan" key={i}>
            {icon}
            <span>{name}</span>
            <span>${price}</span>
            <div className="features">
              {features?.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -></span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
