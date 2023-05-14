/**
 * # GrainyColorCircle Component
 *
 * Created by adtimokhin, May 2023.
 *
 * The GrainyColorCircle is a circle component that can be placed within a parent element. The position of the circle is relative to the parent using absolute positioning. It uses fractal noise to create a grainy appearance.
 *
 * Upon component loading, a fade-in animation will be played. This animation cannot be configured in any way.
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
import "./GrainyColorCircle.css";

function GrainyColorCircle({ radius, x, y, index, color }) {
  function onCircleClick(e) {
    e.preventDefault();
  }

  return (
    <svg
      key={index}
      className="fade-in"
      style={{
        position: "absolute",
        top: y - radius / 2,
        left: x - radius / 2,
        width: radius,
        height: radius,
      }}
      onClick={(e) => {
        onCircleClick(e);
      }}
    >
      <defs>
        <filter id={`noise-${index}`} x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.43"
            numOctaves="2"
            result="NOISE"
          />
          <feComposite
            in="SourceGraphic"
            in2="NOISE"
            operator="in"
            result="COMPOSITE"
          />
        </filter>
        <radialGradient id={`gradient-${index}`}>
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="83%" stopColor={color} stopOpacity="0.74" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle
        cx={radius / 2}
        cy={radius / 2}
        r={radius / 2}
        fill={`url(#gradient-${index})`}
        filter={`url(#noise-${index})`}
      />
    </svg>
  );
}

export default GrainyColorCircle;
