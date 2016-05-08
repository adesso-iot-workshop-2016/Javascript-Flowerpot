<template>
    <svg>
        <petal :x="x - r" :y="y" :r="r" :bg="bg" />
        <petal :x="x + r" :y="y" :r="r" :bg="bg" />
        <petal :x="x" :y="y - r" :r="r" :bg="bg" />
        <petal :x="x" :y="y + r" :r="r" :bg="bg" />

        <petal :x="x - (r * 0.7)" :y="y - (r * 0.7)" :r="r" :bg="bg" />
        <petal :x="x - (r * 0.7)" :y="y + (r * 0.7)" :r="r" :bg="bg" />
        <petal :x="x + (r * 0.7)" :y="y + (r * 0.7)" :r="r" :bg="bg" />
        <petal :x="x + (r * 0.7)" :y="y - (r * 0.7)" :r="r" :bg="bg" />

        <petal :x="x" :y="y" :r="r" :bg="fg">
            <slot></slot>
        </petal>
    </svg>
</template>

<script>
import Petal from './Petal.vue'
export default {
    components: { Petal },
    props: {
        bg: { default: 'red' },
        fg: { default: 'orange' },
        x: { default: 30 },
        y: { default: 30 },
        r: { default: 10 }
    }
}
</script>

<style lang="stylus">
</style>
