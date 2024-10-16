/**
 * Adds two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * A special function
 * @param {object} options - The shape is the same as SpecialType above
 * @param {string} options.prop1 A property
 * @param {number} [options.prop2=42] An optional property
 * @returns {number} A special number.
 */
function special(options) {
  return (options.prop2 || 42) + 1;
}