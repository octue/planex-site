/* hexToAlphaHex - Function that converts from hex color eg #123456 to Hex with alpha eg #123456FF
 *
 * Example:
 * hexToAlphaHex('FF0000', 1); // returns 'FF0000FF'
 * hexToAlphaHex('FF0000', 0.5); // returns 'FF000080'
 *
 */
const hexToAlphaHex = (color, opacity) => {
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
  return color + _opacity.toString(16).toUpperCase()
}

export default hexToAlphaHex
