function useClassState(classStates) {
  return Object.entries(classStates).map(([className, states]) => {
    const statefullClassNames = Object.entries(states).map(([key, value]) => {
      if (value === false || value === void 0 || value === null) {
        return "";
      } else if (value === true) {
        return `${className}${key}`;
      } else {
        return `${className}${key}`.replace("{value}", value);
      }
    }).filter((className2) => className2.trim() !== "").join(" ");
    return [
      className,
      statefullClassNames
    ].join(" ").trim();
  }).join(" ").trim();
}
export { useClassState };
