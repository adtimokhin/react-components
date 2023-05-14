/**
 * # GlowLine Component
 *
 * Created by adtimokhin, April 2023.
 *
 * The GlowLine component is a horizontal line that takes the length of the parent element, and that glows when the user hovers over it. The position of the glow is determined by the user's cursor position.
 *
 * ## Props
 *
 * - `settings` (object): An optional object containing the following properties for customizing the appearance of the GlowLine:
 *   - `mainColor` (string): The main color of the line. Default value is "rgb(0,0,0)".
 *   - `highlightColor` (string): The color of the glow. Default value is "rgb(255,255,255)".
 *   - `glowRadius` (number): The radius (in percentage) of the glow effect in percentage. Value should be in range 0 to 1. Default value is 1.
 *   - `lineThickness` (number): The thickness (in pixels) of the line in pixels. Default value is 4.
 *
 * ## Usage
 *
 * This component should be used inside a parent element. The component takes the full width of the parent element and is horizontally centered.
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

import React, { useEffect, useRef } from "react";
import "./GlowLine.css";

const GlowLine = (props) => {
  const settings = props.settings ? props.settings : {};

  const mainColor = settings.mainColor ? settings.mainColor : "rgb(0,0,0)";
  const highlightColor = settings.highlightColor
    ? settings.highlightColor
    : "rgb(255,255,255)";
  const glowRadius = settings.glowRadius ? settings.glowRadius : 1; // In percentage
  const lineThickness = settings.lineThickness ? settings.lineThickness : 4; // In px

  const containerRef = useRef(null);
  const lineRef = useRef(null);

  const setSolidRedBackground = () => {
    if (!lineRef.current) return;
    lineRef.current.style.background = mainColor;
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current || !lineRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseXPercentage =
      (e.clientX - containerRect.left) / containerRect.width;

    const leftGradientPercentageStart =
      Math.max(0, mouseXPercentage - 0.01 * glowRadius) * 100;
    const leftGradientPercentageEnd =
      Math.max(0, mouseXPercentage - 0.002 * glowRadius) * 100;
    const rightGradientPercentageStart =
      Math.max(0, mouseXPercentage + 0.002 * glowRadius) * 100;
    const rightGradientPercentageEnd =
      Math.max(0, mouseXPercentage + 0.01 * glowRadius) * 100;

    lineRef.current.style.background = `linear-gradient(to right, ${mainColor} 0%, ${mainColor} ${leftGradientPercentageStart}%, ${highlightColor} ${leftGradientPercentageEnd}%, ${highlightColor} ${rightGradientPercentageStart}%, ${mainColor} ${rightGradientPercentageEnd}%, ${mainColor} 100%)`;
  };

  const handleMouseLeave = () => {
    setSolidRedBackground();
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    setSolidRedBackground();
  }, []);

  return (
    <div className="glow-line-container" ref={containerRef}>
      <div
        className="glow-line"
        ref={lineRef}
        style={{ height: `${lineThickness}px` }}
      ></div>
    </div>
  );
};

export default GlowLine;
