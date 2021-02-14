/* hexToRgb - Function that converts from hex color to rgb color
 *
 * Example: input = #9c27b0 => output = 156, 39, 176
 * Example: input = 9c27b0 => output = 156, 39, 176
 * Example: input = #999 => output = 153, 153, 153
 * Example: input = 999 => output = 153, 153, 153
 */
const hexToRgb = (input) => {
  let convert = `${input}`
  convert = convert.replace('#', '')
  const hexRegex = /[0-9A-Fa-f]/g
  if (
    !hexRegex.test(convert) ||
    (convert.length !== 3 && convert.length !== 6)
  ) {
    throw new Error('convert is not a valid hex color.')
  }
  if (convert.length === 3) {
    const first = convert[0]
    const second = convert[1]
    const last = convert[2]
    convert = first + first + second + second + last + last
  }
  convert = convert.toUpperCase(convert)
  const first = convert[0] + convert[1]
  const second = convert[2] + convert[3]
  const last = convert[4] + convert[5]
  return `${parseInt(first, 16)}, ${parseInt(second, 16)}, ${parseInt(
    last,
    16
  )}`
}

export default hexToRgb
