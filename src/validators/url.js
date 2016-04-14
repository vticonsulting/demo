module.exports = {
  message (field) {
    return 'invalid "' + field + '" url format field'
  },

  check (val) {
    return /^(http\:\/\/|https\:\/\/)(.{4,})$/.test(val)
  }
}
