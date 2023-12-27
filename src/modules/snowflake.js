const COLORS = [
  "#ffffff",
  "#ffffff",
  "#ffffff",
  "#ddddff",
  "#b0b0cc",
  "#9a9ab2",
];

export const initSnowflake = (snowflake) => {
  const size = 4 + Math.floor(Math.random() * 4);
  snowflake.style.setProperty("--size", `${size}px`);

  const color = Math.floor(Math.random() * COLORS.length);
  const x = Math.floor(Math.random() * 500);
  const delay = Math.floor(Math.random() * 5000);
  const duration = 4000 + Math.floor(Math.random() * 10000);
  const isBlur = Math.random() < 0.1;
  const offsetX = Math.random() < 0.5 ? 2 + Math.floor(Math.random() * 25) : 0;
  const direction = Math.random() > 0.5 ? "alternate" : "alternate-reverse";

  snowflake.style.setProperty("filter", isBlur ? "blur(2px)" : "none");
  snowflake.style.setProperty("--color", COLORS[color]);

  const keyframes = [
    { transform: `translate(${x}px, 0px)` },
    { transform: `translate(${x}px, 375px)` }
  ];

  const keyframesAxis = [
    { left: `-${offsetX}px`, offset: 0 },
    { left: `${offsetX}px`, offset: 1 }
  ];

  const options = {
    duration,
    fill: "forwards",
    delay,
    iterations: 3
  };

  const optionsAxis = {
    duration: 1500,
    iterations: Infinity,
    easing: "ease-in-out",
    direction
  };

  const fallAnimation = snowflake.animate(keyframes, options);
  snowflake.animate(keyframesAxis, optionsAxis);

  console.log(fallAnimation);

  /*
  setTimeout(() => {
    fallAnimation
  }, 30000); */
};
