<template>
  <table class="ui single line {{columnsWord}} column striped unstackable large table">
    <thead>
    <tr>
      <th v-for="col in columnDefs">{{col.display}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="row in visibleData" track-by="$index">
      <td v-for="col in columnKeys">{{row[col]}}</td>
    </tr>
    </tbody>
    <tfoot id="footer">
    <tr>
      <th colspan={{columns}}>
        <div class="ui two column grid">
          <div class="right aligned column">
            <button class="ui right labeled icon basic button" @click="page('prev')" :disabled="atStart">
              <i class="up chevron icon"></i>{{previousRows}} more
            </button>
          </div>
          <div class="left aligned column">
           <button class="ui left labeled icon basic button" @click="page('next')" :disabled="atEnd">
             <i class="down chevron icon"></i>{{followingRows}} more
           </button>
          </div>
        </div>
      </th>
    </tr>
    </tfoot>
  </table>
</template>
<script>
  /**

  https://github.com/groovy9/vue_datagrid_example/blob/master/datagrid.js

  usage:
   <datagrid table="data1" active></datagrid>
   <datagrid table="data2"></datagrid>
   exactly one datagrid MUST have the active prop set
   by default or it won't draw itself.  multiple datagrids
   need a parent to control which one is visible, such as
   via a tab set component, as each datagrid insists on
   filling the viewport
   the REST data needs to be an array of objects:
   [{"col1":"val1", "col2":"val2"}, {"col1":"val3", "col2":"val4"}]

   external requirements:

   <head>
     <link rel="stylesheet" type="text/css" href="semantic-ui/semantic.css">
     <script src="jquery.min.js"/>
     <script src="semantic-ui/semantic.min.js"/>
     <script src="vue.js"/>
     <script src="vue-resource.js"/>
   </head>
   Limitations:
   Not suitable to huge datasets, as it loads the entire set from the REST
   source.  My use case is on the order of 100 to 1000 rows, which doesn't
   require things like paging from the REST source.
  **/

  // grid column definitions for each data type - customize
  // to match your database.  This probably belongs outside the
  // component - in the database itself, etc.
  var columnDefs = {
    dataset1: { // <datagrid table="dataset1"></datagrid>
      'col1': {display: 'First Column'},
      'col2': {display: 'Second Column'}
    },
    dataset2: { // <datagrid table="dataset2"></datagrid>
      'c1': {display: 'Column A'},
      'c2': {display: 'Column B'}
    }
  }

  export default {
    props: ['table', 'active'],

    data () {
      return {
        isActive: typeof this.active !== 'undefined',
        needRedraw: false,
        tableData: {},
        topIndex: 0,
        defaultPageSize: 100,
        pageSize: 0,
        columnDefs: columnDefs[this.table],
        columns: Object.keys(columnDefs[this.table]).length,
        columnKeys: Object.keys(columnDefs[this.table]),
      }
    },

    ready () {
      this.loadData() // pull table data from database
      $(window).resize(this.redraw) // handle zoom/resize events
    },

    events: {
      // $broadcast from our parent component or root Vue
      // instance any time we become newly active,
      // such as having our tab focused.  we may need
      // to redraw after a browser resize, for example
      'setActive' (table) {
        this.isActive = (table === this.table)
        if (this.isActive && this.needRedraw) {
          this.redraw()
        }
      }
    },

    methods: {
      // jump to next/prev page of table data
      page (direction) {
        var first = this.topIndex // top currently visible row
        var total = this.tableData.length
        var last = this.topIndex + this.pageSize - 1 // bottom currently visible row
        last = Math.min(last, total - 1) // limit last to size of data

        // how many more rows are available to display?
        avail = direction === "next" ? total - last - 1 : first

        var scroll = Math.min(this.pageSize, avail) // actual num to scroll
        scroll *= direction === "next" ? 1 : -1 // forward or back?
        this.topIndex += scroll
      },

      loadData () {
        this.$http.get('/db/' + this.table).then(function (response) {
          this.tableData = response.data
          Vue.nextTick(this.redraw)
        }, function (error) {
          this.redraw() // just draw empty table if we can't get the data
        })
      },

      // set the page size to a high default value guaranteed
      // to flow off the screen, then shrink it to fit the number
      // of rows that will actually fit.  Not very efficient,
      // but it's markup-agnostic and redraws don't happen very often.
      redraw () {
        this.needRedraw = true // after any resize event
        if (this.isActive) {
          this.pageSize = this.defaultPageSize // overflow
          Vue.nextTick(this.updatePageSize) // then shrink
          this.needRedraw = false
        }
      },

      // update the page size based on how many rows actually fit
      // in the current viewport so the table footer is
      // always visible and at the bottom of the screen (or content)
      updatePageSize () {
        var e = jQuery(this.$el)
        var tr = e.find('tbody>tr')
        var num = tr.length
        var f = e.find('tfoot')

        // show all rows, then hide them one at a time
        // from the bottom until the footer finally shows up on the page
        tr.show()
        while (!this.isVisible(f) && num > 0) {
          tr.eq(num-- - 1).hide()
        }
        // set pageSize to currently visible rows.  this will trigger
        // a Vue.js cycle where the entire table is replaced with a
        // properly sized table, which stays put until the next resize
        this.pageSize = jQuery(this.$el).find('tbody>tr:visible').length
      },

      // see if an element has scrolled off the page or not
      isVisible (elem) {
        var $elem = $(elem)
        var $window = $(window)
        var docViewTop = $window.scrollTop()
        var docViewBottom = docViewTop + $window.height()
        var elemTop = $elem.offset().top
        var elemBottom = elemTop + $elem.height()
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
      },

      // Semantic UI uses english words in its plain-language class definitions.
      // we want to tell it exactly how many table columns to have based on
      // the columns present in the table we were passed, which requires words
      numToWord (n) {
        var words = [
          "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
          "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
          "eighteen", "nineteen", "twenty"
        ]
        if (n >= 0 && n <= 20) {
          return words[n]
        }
      }
    },

    computed: {
      columnsWord () {
        return this.numToWord(this.columns)
      },

      atStart () {
        return this.previousRows === 0
      },

      atEnd () {
        return this.followingRows === 0
      },

      previousRows () {
        return this.topIndex
      },

      followingRows () {
        return (this.tableData.length - (this.topIndex + this.pageSize))
      },

      visibleData () {
        var data = []
        var existing = this.tableData.length
        for (var i = 0; i < this.pageSize; i++) {
          var idx = this.topIndex + i
          if (idx < existing) {
            data.push(this.tableData[idx])
          }
        }
        return data
      }

    }
  }
</script>
