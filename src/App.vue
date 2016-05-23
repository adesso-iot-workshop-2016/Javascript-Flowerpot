<template>
  <div id="app">
    <center>
        <flower :light="light" :water="water"></flower>
        <!-- <toggle-box title="debug" color="red" dropdown-disabled v-show="config.debug">
            <label style="width: 60px; text-align: right; padding-right: 5px">Licht:</label><input v-model="light" type="number" min="0" max="1" step="0.05"></input><br />
            <label style="width: 60px; text-align: right; padding-right: 5px">Wasser:</label><input v-model="water" type="number" min="0" max="1" step="0.05"></input>
        </toggle-box> -->

        <data-box :datastore="datastores.Water" color="blue" title="Feuchtigkeit"></data-box>
        <data-box :datastore="datastores.Light" color="gold" title="Lichteinstrahlung"></data-box>
        <data-box :datastore="datastores.Temperature" color="red" title="Lichteinstrahlung" scale-step-size="8" scale-steps="5"></data-box>
    </center>
  </div>
</template>

<script>
// components
  import Flower from './components/Flower.vue'
  import ToggleBox from './components/ToggleBox.vue'
  import DataBox from './components/DataBox.vue'
  import Config from './config.js'


export default {
  components: {
    Flower, ToggleBox, DataBox
  },
  data() {
    return {
      light: 0,
      datastores: Config.datastores,
      config: Config,
    }
  },
  computed: {
    water: function () {
      return this.datastores.Water.currentValue;
    },
    light: function () {
      return this.datastores.Light.currentValue;
    }
  },
}
</script>

<style lang="stylus">
  html,body
    height: 100%
    margin: 0
    padding: 0
  body
    font-family: Helvetica, sans-serif
    background-color: darken(white, 10%)
  .container
    max-width: 350px
    min-height: 100%
    background-color: darken(white, 70%)
    padding: 0
    box-shadow: 3px 0 0 rgba(0,0,0,0.2), -3px 0 0 rgba(0,0,0,0.2), 2px 0 0 rgba(0,0,0,0.2), -2px 0 0 rgba(0,0,0,0.2)

  .el
    background-color: #f3f4f6
    width: 92%
    margin-bottom: 10px
    box-shadow: 3px 3px 0px lighten(black, 25%)

  .heading
    background-color: lightgrey
    position: relative
    padding: 10px
    width: 100%
    font-size: 1.2em
    font-weight: bold
    color: darken(white, 5%)
    text-shadow: 0px -1px 1px rgba(0,0,0,0.3), 1px 0px 1px rgba(50,50,50,0.1)
    cursor: pointer

  .heading:after
    height: 3px;
    background-color: rgba(0,0,0,0.16)
    position: absolute
    bottom: 0
    width: 100%;
    left: 0
    content: ''

  .heading-red
    background-color: crimson

  .heading-blue
    background-color: #2184c2

  .heading-green
    background-color: #5bbf9d

  .heading-brown
    background-color: brown

  .heading-black
    background-color: black

  .heading-orange
    background-color: #ff9900

  .heading-seagreen
    background-color: seagreen

  .heading-gold
    background-color: gold


  .toggle
    position: absolute
    top: 10px
    left: 10px
    width: 25px
    height: 25px
</style>
