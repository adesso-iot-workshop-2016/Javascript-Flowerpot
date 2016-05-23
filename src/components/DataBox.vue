<template>
    <toggle-box :title="title" :color="color" :dropdown-disabled="dropdownDisabled">
      <graph :labels="keys" :values="values" :scale-steps="scaleSteps" :scale-step-size="scaleStepSize"></graph>
      <dd-menu slot="dropdown">
        <dd-element @click="changeView('live')">Live</dd-element>
        <dd-element @click="changeView('today')">Heute</dd-element>
        <dd-element @click="changeView('week')">Diese Woche</dd-element>
        <dd-element @click="changeView('year')">Dieses Jahr</dd-element>
      </dd-menu>
    </toggle-box>
</template>

<script>
import Graph from './Graph.vue'
import ToggleBox from './ToggleBox.vue'
import DdMenu from './Dropdown.vue'
import DdElement from './DropdownElement.vue'

var moment = require('moment');

export default {
    components: {
        Graph, ToggleBox, DdMenu, DdElement
    },
    data() {
        return {
            
        }
    },
    props: {
        datastore: { default: [] },
        dataContainer: { default: 'liveData' },
        title: { default: 'Titel' },
        color: { default: 'blue' },
        dropdownDisabled: { type: Boolean, default: false },
        scaleStepSize: {},
        scaleSteps: {}
    },
    computed: {
        keys: function() {
            return this.data.slice(-10).map(function (point) {
                return moment.unix(point.timestamp).format("HH:mm:ss")
            })
        },
        values: function() {
            return this.data.slice(-10).map(function (point) {
                return point.value * 1/2048
            })
        },
        data: function() {
            return this.datastore[this.dataContainer];
        }
    },
    methods: {
        changeView: function(label) {
            console.log(label)
            this.datastore.getTodaysData();
        }
    }
}
</script>
