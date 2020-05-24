module.exports = function wrapException(fn) {
  const result = fn();
  const fail = result instanceof Error;
  if (fail) return { error: result };
  return { result };
};
