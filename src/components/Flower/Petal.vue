<template>
    <circle cx="{{ x }}" cy="{{ y }}" r="{{ r }}" :style="{fill:bg}" class="petal">
        <animate
            attributeName="r"
            begin="0s"
            dur="2s"
            values="
                {{ r }};
                {{ r + 1 }};
                {{ r }}"
            repeatCount="indefinite">
        </animate>
        <animate
            attributeName="cx"
            begin="0s"
            dur="10s"
            values="
                {{ x }};
                {{ x + 3 }};
                {{ x + 4 }};
                {{ x + 3 }};
                {{ x }};
                {{ x - 3 }};
                {{ x - 4 }};
                {{ x - 3 }};
                {{ x }}"
            repeatCount="indefinite">
        </animate>
        <animate
            attributeName="cy"
            begin="0s"
            dur="10s"
            values="
                {{ y }};
                {{ y + 0.5 }};
                {{ y + 0.7 }};
                {{ y + 0.5 }};
                {{ y }};
                {{ y - 0.5 }};
                {{ y - 0.7 }};
                {{ y - 0.5 }};
                {{ y }}"
            repeatCount="indefinite">
        </animate>
        <slot></slot>
    </circle>
</template>

<script>
export default {
    props: {
        x: null,
        y: null,
        r: null,
        bg: 'green'
    }
}
</script>

<style lang="stylus">
.petal
    animation-direction: alternate
</style>
