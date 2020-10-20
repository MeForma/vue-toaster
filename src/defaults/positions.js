const POSITIONS = {
  TOP_RIGHT: 'top-right',
  TOP: 'top',
  TOP_LEFT: 'top-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM: 'bottom',
  BOTTOM_LEFT: 'bottom-left'
}
export default Object.freeze(POSITIONS)

export function definePosition(position, top, bottom) {
  let result = null
  switch (position) {
    case POSITIONS.TOP:
    case POSITIONS.TOP_RIGHT:
    case POSITIONS.TOP_LEFT:
      result = top
      break

    case POSITIONS.BOTTOM:
    case POSITIONS.BOTTOM_RIGHT:
    case POSITIONS.BOTTOM_LEFT:
      result = bottom
      break
  }
  return result
}
