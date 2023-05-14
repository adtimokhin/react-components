/**
 * # CirclePool Component
 *
 * Created by adtimokhin, May 2023.
 *
 * The CirclePool is an interactive component that allows you to place circles within a given area. The circles are placed with a fade-in effect.
 *
 * ## Props
 *
 * - `circleType` (string): The type of circle you want to place within the area. The default value is "solid", and it does not need to be specified. The other available option is "grainy". Both types must be set by the user.
 * - `possibleRadii` (Array<number>): An array of possible radii for the circles. The actual radius will be chosen randomly from this array. The values must be given in the range from 0 to 1. To make some radii more likely to be chosen, they can be included multiple times in the array.
 * - `possibleColors` (Array<string>): An array of possible colors for the circles. The actual color will be chosen randomly from this array. The values can be set as any color that CSS can comprehend, including color names, RGB, HSL, and HEX values. To make some colors more likely to be chosen, they can be included multiple times in the array.
 *
 * ## Usage
 *
 * Passing all of the parameters to the component is necessary. The component will take the full size of its parent. The background of the component is transparent.
 *
 * ## Browser Compatibility
 *
 * This component is compatible with the following browsers and their versions:
 * - Google Chrome: Version 60 and later
 * - Mozilla Firefox: Version 55 and later
 * - Safari: Version 10.1 and later
 * - Microsoft Edge: Version 16 and later
 * - Opera: Version 47 and later
 */

import "./CirclePool.css";

import { useState } from "react";

import ColorCircle from "../ColorCircle/ColorCircle";
import GrainyColorCircle from "../GarinyColorCircle/GrainyColorCircle";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CirclePool({ circleType, possibleRadii, possibleColors }) {
  const [circles, setCircles] = useState([]);

  function addCircle(e) {
    // getting input
    const pool = document.getElementById("circle_pool");
    const rect = pool.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    const s_dimen = Math.min(width, height);

    // Adding some randomness
    const radius =
      possibleRadii[getRandomNumber(0, possibleRadii.length - 1)] * s_dimen;

    // Setting the circle to the circle pool
    let circle;
    if (circleType == "grainy") {
      circle = (
        <GrainyColorCircle
          radius={radius}
          color={possibleColors[getRandomNumber(0, possibleColors.length - 1)]}
          x={x}
          y={y}
          index={circles.length}
          key={`grainy_${circles.length}`}
        />
      );
    } else {
      circle = (
        <ColorCircle
          radius={radius}
          color={possibleColors[getRandomNumber(0, possibleColors.length - 1)]}
          x={x}
          y={y}
          index={circles.length}
          key={`color_${circles.length}`}
        />
      );
    }

    setCircles([...circles, circle]);
  }

  return (
    <div
      id="circle_pool"
      className="main_continer"
      onClick={(e) => addCircle(e)}
    >
      {circles.map((circle, _) => circle)}
    </div>
  );
}

export default CirclePool;
