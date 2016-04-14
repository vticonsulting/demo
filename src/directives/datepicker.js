// How to make v-model synced while jQuery UI changing values?
// https://github.com/vuejs/vue/issues/812#issuecomment-97852184
// https://github.com/vuejs/Discussion/issues/147
module.exports = {
  bind: function () {
    var vm = this.vm
    var key = this.expression
    $(this.el).datepicker({
      dateFormat: 'dd.mm.yy',
      onSelect: function (date) {
        vm.$set(key, date)
      },
      onClose: function (date) {
        if (date.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}$/)) {
          vm.$set(key, date)
        } else {
          vm.$set(key, '')
          console.log('invalid date')
        }
      }
    })
  },

  update: function (val) {
    $(this.el).datepicker('setDate', val)
  }
}
