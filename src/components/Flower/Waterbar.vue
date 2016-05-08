<template>
    <svg>
        <rect x="27" y="85" rx="2" ry="2" height="31" width="8" class="window"></rect>

        <rect x="29" y="87" rx="1" ry="1" height="27" width="4" style="fill: darkgrey;"></rect>

        <rect x="29.1" y="108" height="0.8" width="3.8" style="fill: red;"></rect>

        <rect x="29" y="{{ 87 + 27 - waterLevel }}" rx="1" ry="1" height="{{ waterLevel }}" width="4" style="fill: blue;"></rect>
    </svg>
</template>

<script>
export default {
    props: {
        'level': { default: 0 }
    },
    computed: {
        waterLevel() {
            return parseInt(this.level * 27)
        }
    }
}
</script>
