<template>
    <!-- turf inside the pot -->
    <polygon points="8,80 12,77 15,79, 19,75 25,75 30,79 36,79 40,76 45,77 50,80" class="pot-turf">
    </polygon>

    <!-- the pot with shadow and light -->
    <polygon points="5,80 10,120 50,120 55,80" class="pot">
    </polygon>
    <polygon points="5,80 10,120 25,120" class="pot-shadow">
    </polygon>
    <polygon points="55,80 50,120 35,80" class="pot-light">
    </polygon>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
    .pot
        fill: orange
    .pot-shadow
        fill: darken(orange, 8%);
    .pot-light
        fill: lighten(orange, 10%);
    .pot-turf
        fill: brown;
</style>
