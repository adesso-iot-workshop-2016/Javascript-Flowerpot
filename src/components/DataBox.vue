<template>
    <toggle-box :title="title" :color="color" :dropdown-disabled="dropdownDisabled">
      <graph :labels="keys" :values="values"></graph>
      <dd-menu slot="dropdown">
        <dd-element @click="changeWaterView('live')">Live</dd-element>
        <dd-element @click="changeWaterView('today')">Heute</dd-element>
        <dd-element @click="changeWaterView('week')">Diese Woche</dd-element>
        <dd-element @click="changeWaterView('year')">Dieses Jahr</dd-element>
      </dd-menu>
    </toggle-box>
</template>

<script>
import Graph from './Graph.vue'
import ToggleBox from './ToggleBox.vue'
import DdMenu from './Dropdown.vue'
import DdElement from './DropdownElement.vue'

export default {
    components: {
        Graph, ToggleBox, DdMenu, DdElement
    },
    data() {
        return {
            waterId: 'water',
        }
    },
    props: {
        datastore: { default: [] },
        title: { default: 'Titel' },
        color: { default: 'blue' },
        dropdownDisabled: { type: Boolean, default: false },
    },
    computed: {
        keys: function() {
            return Object.keys(this.datastore).slice(-10)
        },
        values: function() {
            return Object.values(this.datastore).slice(-10)
        }
    }
}
</script>
