<template>
    <slot></slot>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.dropdownmenu
  position: absolute
  right: 11px
  top: 30px
  width: 205px
  opacity: 0.95
  z-index: 2
  box-shadow: 1px 1px 0 rgba(0,0,0,0.1);
  .btn
    border-radius: 0 !important
    border: 0
</style>
