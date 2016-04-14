// build-in `required` validator customization
module.exports = {
  message (field) { // error message with function
    return 'required "' + field + '" field'
  },
  check: Vue.validator('required') // re-use validator logic
}
