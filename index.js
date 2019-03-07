var app = new Vue({
  el: '#app',
  data: {
    blocks: []
  },

  methods: {
    generateBlocks: function generateBlocks() {
      for (var i = 0; i < 10; i++) {
        this.blocks.push({
          colSpan: Math.floor(Math.random() * 3 + 1),
          rowSpan: Math.floor(Math.random() * 3 + 1),
          colorIndex: Math.floor(Math.random() * 6 + 1)
        });

      }
    },
    setIntervald: function setIntervald() {
      setInterval( ()=>{
        return this.regenerate();
      }, 3000)
    },
    regenerate: function regenerate() {
      var _this = this;
      this.blocks = [];
      setTimeout(function () {
        return _this.generateBlocks();
      }, 0);
    }
  },

  mounted: function mounted() {
    this.generateBlocks();
    this.setIntervald();
  }
});