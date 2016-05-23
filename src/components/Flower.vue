<template>
  <div class="flower" style="margin: 0; padding: 0; position: relative; overflow: hidden; height: 330px; width: 320px">
    <svg
      style="position: relative; top: 0; left: 0;"
      viewBox="0 0 150 150">
      <svg>
        <rect x="8" y="6" height="136" width="134" style="fill:#111"></rect>
        <svg :style="{ opacity: light }">
          <rect x="8" y="6" height="136" width="134" style="fill:lightblue"></rect>
          <rect x="8" y="115" height="20" width="134" style="fill:green"></rect>
          <path d="M 6 116 q 65 -30 136 0" style="fill:green"></path>
        </svg>
        <polygon points="
          3,136 3,138 5,141
          145,141 147,138 147,136"
          class="window-bar">
        </polygon>
        <polygon points="
          6,6 6,136
          17,136 17,17
          68,17 68,127
          17,127 17,136
          82,136 82,17
          133,17 133,127
          75,127 75,133
          139,133 139,6"
          class="window-lower">
        </polygon>
        <polygon points="
          6,6 6,136
          14,136 14,14
          70,14 70,130
          14,130 14,136
          80,136 80,14
          136,14 136,130
          75,130 75,136
          143,137 143,6"
          class="window">
        </polygon>
        <rect x="6" y="68" height="2" width="136" class="window"></rect>
        <rect x="6" y="40" height="2" width="136" class="window"></rect>
        <rect x="6" y="98" height="2" width="136" class="window"></rect>
        <rect x="40" y="6" height="130" width="2" class="window"></rect>
        <rect x="106" y="6" height="130" width="2" class="window"></rect>
        <polygon points="7,141 8,144 141,144 142,141" class="window-lower"></polygon>


        <svg viewBox="-70 -62 200 200">
          <stalk></stalk>
          <pot></pot>
          <flower-head bg="#ffffbb" fg="#ffcc22"></flower-head>

          <waterbar :level="water"></waterbar>
        </svg>
      </svg>
    </svg>


  </div>
</template>

<script>
  import Pot from './Flower/Pot.vue'
  import Stalk from './Flower/Stalk.vue'
  import FlowerHead from './Flower/Head.vue'
  import Waterbar from './Flower/Waterbar.vue'

  export default {
    components: { Pot, Stalk, FlowerHead, Waterbar },
    data() {
      return {
        waterLevel: 0.5
      }
    },
    props: {
      light: {},
      water: {}
    }
  }
</script>

<style lang="stylus">
  .window
    fill: darken(white, 14%)
  .window-bar
    fill: darken(white, 20%)
  .window-lower
    fill: darken(white, 24%)
</style>
