module.exports = function formatMoney (val) {
  var num = (val)
  // return '$ ' + num.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  return '$' + num
}

// export default {
//   read (val) {
//     return '$' + num
//   },

//   write (val) {
//     var number = +val.replace
//     return isNaN(number) ? 0 : parseFloat(number.toFixed(0))
//   }

// }
