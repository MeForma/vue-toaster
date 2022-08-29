// https://stackoverflow.com/a/3969760
export default class Timer {
  constructor(callback, delay) {
    this.pausedAt = 0
    this.startedAt = Date.now()
    this.callback = callback
    this.delay = delay

    this.timer = setTimeout(callback, delay)
  }

  pause() {
    this.stop()
    this.pausedAt = Date.now()
  }

  resume() {
    this.stop()
    this.delay -= this.pausedAt - this.startedAt
    this.startedAt = Date.now()
    this.pausedAt = 0
    this.timer = setTimeout(this.callback, this.delay)
  }

  stop() {
    clearTimeout(this.timer)
  }
}
