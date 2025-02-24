const roundOff = (num, scale) => {
  if (!('' + num).includes('e')) {
    return +(Math.round(num + 'e+' + scale) + 'e-' + scale)
  } else {
    var arr = ('' + num).split('e')
    var sig = ''
    if (+arr[1] + scale > 0) {
      sig = '+'
    }
    return +(Math.round(+arr[0] + 'e' + sig + (+arr[1] + scale)) + 'e-' + scale)
  }
}

const setImageSources = (state, imageSources) => {
  state.imageSources = imageSources
}

const setImages = (state, images) => {
  state.images = images
}

const setControls = (state, { show = true, mode = 'preprocess' }) => {
  state.showControls = show
  state.controlMode = mode
}

const zoomIn = state => {
  if (state.zoom >= 2) return
  state.prevZoom = state.zoom
  state.zoom = roundOff(state.zoom + 0.1, 1)
}

const resetZoom = state => {
  state.prevZoom = state.zoom
  state.zoom = 1
}

const zoomOut = state => {
  if (state.zoom <= 0.2) return
  state.prevZoom = state.zoom
  state.zoom = roundOff(state.zoom - 0.1, 1)
}

const maxZoom = state => {
  state.zoom = 4
}

const setFont = (state, font) => {
  state.style.font = font
  state.style.changed = 'fontFamily'
}

const setColor = (state, color) => {
  state.style.color = color
  state.style.changed = 'color'
}

const setFontSize = (state, fontSize) => {
  state.style.fontSize = fontSize
  state.style.changed = 'fontSize'
}

const forceRefresh = state => {
  state.forceRefreshKey++
}

const setCalculatedMarks = (state, marks) => {
  state.marks.calculated = marks
}

const setTotalMarks = (state, marks) => {
  state.marks.total = marks
}

const setMenu = (state, menu) => {
  state.menu = menu
}

const setClipboard = (state, clipboard) => {
  state.clipboard = clipboard
}

const setPreprocessInstructions = (state, instructions) => {
  state.preprocessInstructions = instructions
}

const setProjectID = (state, projectID) => {
  state.projectID = projectID
}

const setNumPages = (state, val) => {
  state.numPages = val
}

const setDefaultSettings = (state, val) => {
  state.defaultSettings = val
}

export default {
  setImageSources,
  setImages,
  setControls,
  zoomIn,
  zoomOut,
  resetZoom,
  setFont,
  setColor,
  setFontSize,
  forceRefresh,
  setCalculatedMarks,
  setTotalMarks,
  setMenu,
  setClipboard,
  maxZoom,
  setPreprocessInstructions,
  setProjectID,
  setNumPages,
  setDefaultSettings
}
