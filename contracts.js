// check a primitive type
const abstract = (input, expectedType) => {
  const actualType = typeof input;
  if (actualType === expectedType) { return true; }
  throw new TypeError(`Contract violated: expected '${expectedType}', got '${actualType}'`);
};

// check a ctor
const abstractCtor = (input, expectedCtor) => {
  const actualCtor = input.constructor.name;
  if (actualCtor === expectedCtor) { return true; }
  throw new Error(`Contract violated: expected ctor '${expectedCtor}', got '${actualCtor}'`);
};

const isNumber = input => abstract(input, 'number');
const isString = input => abstract(input, 'string');
const isBoolean = input => abstract(input, 'boolean');
const isObject = input => abstract(input, 'object');
const isFunction = input => abstract(input, 'function');

const ctor = (input, expectedCtor) => isObject(input)
  && isString(expectedCtor)
  && abstractCtor(input, expectedCtor);

// combining the above functions, we can type-check objects
const isNull = input => abstract(input, 'object') && (Boolean(input) === false);
const isArray = input => ctor(input, 'Array');

module.exports = {
  number: isNumber,
  string: isString,
  boolean: isBoolean,
  object: isObject,
  function: isFunction,

  null: isNull,
  Array: isArray,

  // aliases
  num: isNumber,
  str: isString,
  bool: isBoolean,
  obj: isObject,
  func: isFunction,
};
