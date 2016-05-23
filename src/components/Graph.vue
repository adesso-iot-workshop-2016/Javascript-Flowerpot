<template>
  <canvas width="{{ width }}" height="{{ height }}"></canvas>
</template>

<script>

export default {
  data () {
    return {

    }
  },

  props: {
    labels: [],
    values: {},
    width: {},
    height: {},
    scaleSteps: {default: 5},
    scaleStepSize: {default: 0.2}
  },

  computed: {
    chartData: function() {
      var data = {
        labels: this.labels,
        datasets: [
          {
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: this.values
          }
        ]
      }
      return data;
    }
  },

  ready () {
    var Chart = require('chart.js');
    var options = {
      animation: false,
      scaleOverride : true,
      scaleSteps : this.scaleSteps,
      scaleStepWidth : this.scaleStepSize,
      scaleStartValue : 0
    };

    var chart = new Chart(
      this.$el.getContext('2d')
    );
    var lineChart = chart.Line(this.chartData, options)

    var vm = this;
    window.setInterval(function() {
      lineChart.destroy();
      lineChart = chart.Line(vm.chartData, options);
    },500);
  }
}
</script>
