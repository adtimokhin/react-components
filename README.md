# React Components Collection

This project contains source code for various components I have created in my free time. These components are designed to be easily integrated into your projects. Below, you'll find a list of the components available, along with links to their respective documentation and usage examples.

## Table of Contents

1. [CirclePool Component](#circlepool-component)
2. [ColorCircle Component](#colorcircle-component)
3. [GrainyColorCircle Component](#grainycolorcircle-component)
4. [GlowLine Component](#glowline-component)

## CirclePool Component

The CirclePool is an interactive component that allows you to place circles within a given area. The circles are placed with a fade-in effect.

### Props

- `circleType` (string): The type of circle you want to place within the area. The default value is "solid", and it does not need to be specified. The other available option is "grainy". Both types must be set by the user.
- `possibleRadii` (Array<number>): An array of possible radii for the circles. The actual radius will be chosen randomly from this array. The values must be given in the range from 0 to 1. To make some radii more likely to be chosen, they can be included multiple times in the array.
- `possibleColors` (Array<string>): An array of possible colors for the circles. The actual color will be chosen randomly from this array. The values can be set as any color that CSS can comprehend, including color names, RGB, HSL, and HEX values. To make some colors more likely to be chosen, they can be included multiple times in the array.

### Usage

Passing all of the parameters to the component is necessary. The component will take the full size of its parent. The background of the component is transparent.

```jsx
import CirclePool from "./CirclePool";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <CirclePool
        circleType="grainy"
        possibleRadii={[0.1, 0.15, 0.2, 0.2]}
        possibleColors={[
          "red",
          "red",
          "rgb(0, 0, 255)",
          "hsl(120, 100%, 50%)",
          "#FFFF00",
        ]}
      />
    </div>
  );
}

export default App;
```

### Compitability

This component is compatible with the following browsers and their versions:

- Google Chrome: Version 60 and later
- Mozilla Firefox: Version 55 and later
- Safari: Version 10.1 and later
- Microsoft Edge: Version 16 and later
- Opera: Version 47 and later

## ColorCircle Component

Created by adtimokhin, May 2023.

The ColorCircle is a circle component that can be placed within a parent element. The position of the circle is relative to the parent using absolute positioning.

### Props

- `radius` (number): The radius of the circle in pixels.
- `x` (number): The X-coordinate of the circle's center relative to the parent element.
- `y` (number): The Y-coordinate of the circle's center relative to the parent element.
- `index` (number): The index of the circle, used as a unique key.
- `color` (string): The background color of the circle. Can be any valid CSS color value.

### Usage

This component should be used inside a parent element with a position set to "relative" or "absolute" to ensure proper positioning.

```jsx
import ColorCircle from "./ColorCircle";

function App() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <ColorCircle radius={50} x={100} y={100} index={0} color="blue" />
    </div>
  );
}

export default App;
```

### Compitability

This component is compatible with the following browsers and their versions:

- Google Chrome: Version 60 and later
- Mozilla Firefox: Version 55 and later
- Safari: Version 10.1 and later
- Microsoft Edge: Version 16 and later
- Opera: Version 47 and later

## GrainyColorCircle Component

Created by adtimokhin, May 2023.

The GrainyColorCircle is a circle component that can be placed within a parent element. The position of the circle is relative to the parent using absolute positioning. It uses fractal noise to create a grainy appearance.

Upon component loading, a fade-in animation will be played. This animation cannot be configured in any way.

### Props

- `radius` (number): The radius of the circle in pixels.
- `x` (number): The X-coordinate of the circle's center relative to the parent element.
- `y` (number): The Y-coordinate of the circle's center relative to the parent element.
- `index` (number): The index of the circle, used as a unique key.
- `color` (string): The background color of the circle. Can be any valid CSS color value.

### Usage

This component should be used inside a parent element with a position set to "relative" or "absolute" to ensure proper positioning.

```jsx
import GrainyColorCircle from "./GrainyColorCircle";

function App() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <GrainyColorCircle radius={50} x={100} y={100} index={0} color="blue" />
    </div>
  );
}

export default App;
```

### Compatibility

This component is compatible with the following browsers and their versions:

- Google Chrome: Version 60 and later
- Mozilla Firefox: Version 55 and later
- Safari: Version 10.1 and later
- Microsoft Edge: Version 16 and later
- Opera: Version 47 and later

## GlowLine Component

Created by adtimokhin, April 2023.

The GlowLine component is a horizontal line that glows when the user hovers over it. The position of the glow is determined by the user's cursor position.

### Props

- `settings` (object): An optional object containing the following properties for customizing the appearance of the GlowLine:
  - `mainColor` (string): The main color of the line. Default value is "rgb(0,0,0)".
  - `highlightColor` (string): The color of the glow. Default value is "rgb(255,255,255)".
  - `glowRadius` (number): The radius (in percentage) of the glow effect in percentage. Value should be in range 0 to 1. Default value is 1.
  - `lineThickness` (number): The thickness (in pixels) of the line in pixels. Default value is 4.

### Usage

This component should be used inside a parent element. The component takes the full width of the parent element and is horizontally centered.

```jsx
import GlowLine from "./GlowLine";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <GlowLine />
    </div>
  );
}

export default App;
```

### Compatibility

This component is compatible with the following browsers and their versions:

- Google Chrome: Version 60 and later
- Mozilla Firefox: Version 55 and later
- Safari: Version 10.1 and later
- Microsoft Edge: Version 16 and later
- Opera: Version 47 and later
