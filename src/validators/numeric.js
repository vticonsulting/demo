module.exports = {
  message: 'invalid numeric value',
  check (val) {
    return /^[-+]?[0-9]+$/.test(val)
  }
}
