<template>
    <svg class="stalk">
        <path d="M 30 84 q 0 -12 0 -24">
            <animate
                attributeName="d"
                begin="0s"
                dur="10s"
                values="
                    M 30 84 q 0 -12 0 -24;
                    M 30 84 q 6 -12 0 -24;
                    M 30 84 q 0 -12 0 -24;
                    M 30 84 q -6 -12 0 -24;
                    M 30 84 q 0 -12 0 -24;"
                repeatCount="indefinite">
            </animate>
        </path>
        <path d="M 30 60 q 0 -10 0 -20">
            <animate
                attributeName="d"
                begin="0s"
                dur="10s"
                values="
                    M 30 60 q 0 -10 0 -20;
                    M 30 60 q -6 -10 0 -20;
                    M 30 60 q 0 -10 0 -20;
                    M 30 60 q 6 -10 0 -20;
                    M 30 60 q 0 -10 0 -20;"
                repeatCount="indefinite">
            </animate>
        </path>
    </svg>
</template>

<script>
export default {
    data: function() {
        return {
            pos: 1
        }
    }
}
</script>

<style lang="stylus">
.stalk path
    stroke: lime
    stroke-width: 4
    fill: none
</style>
