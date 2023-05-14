/**
 * # ColorCircle Component
 *
 * Created by adtimokhin, May 2023.
 *
 * The ColorCircle is a circle component that can be placed within a parent element. The position of the circle is relative to the parent using absolute positioning. Upon loading onto the screen a fade in animation (that cannot be modified) will be played.
 *
 * ## Props
 *
 * - `radius` (number): The radius of the circle in pixels.
 * - `x` (number): The X-coordinate of the circle's center relative to the parent element.
 * - `y` (number): The Y-coordinate of the circle's center relative to the parent element.
 * - `index` (number): The index of the circle, used as a unique key.
 * - `color` (string): The background color of the circle. Can be any valid CSS color value.
 *
 * ## Usage
 *
 * This component should be used inside a parent element with a position set to "relative" or "absolute" to ensure proper positioning.
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

import "./ColorCircle.css";

function ColorCircle({ radius, x, y, index, color }) {
  function onCircleClick(e) {
    e.preventDefault();
  }

  return (
    <div
      key={index}
      className="fade-in"
      style={{
        position: "absolute",
        top: y - radius / 2,
        left: x - radius / 2,
        width: radius,
        height: radius,
        borderRadius: "50%",
        backgroundColor: color,
        overflow: "hidden",
      }}
      onClick={(e) => {
        onCircleClick(e);
      }}
    />
  );
}

export default ColorCircle;
