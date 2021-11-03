import React, { PureComponent } from "react";
import "./Progressbar.style.scss";
export class Progressbar extends PureComponent {
  render() {
    const { currentStep, steps } = this.props;
    const onePiece = 100 / Object.keys(steps).length;
    const stepsArr = Object.values(steps).slice(0, -1);

    return (
      <div className="progressbar">
        {stepsArr.map((step, idx) => (
          <div
            className={`progressbar__item ${
              idx <= currentStep - 1 && "active"
            }`}
          >
            {step.title.value}
          </div>
        ))}
        <div
          style={{
            width: `${onePiece * currentStep}%`,
          }}
          className="progressbar__fill"
        ></div>
      </div>
    );
  }
}

export default Progressbar;
