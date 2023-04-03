const eventMap = new Map<string, string[]>([
  ["blur", ["target"]],
  ["click", ["target"]],
  ["input", ["target", "value"]],
  ["change", ["target", "value"]],
  ["scroll", ["target", "currentTarget.scrollTop", "deltaX", "deltaY"]],
]);

export default eventMap;
