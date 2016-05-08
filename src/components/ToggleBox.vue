<template>
    <div class="el">
        <div class="heading heading-{{ color }}">
            <!-- toggle button -->
            <div class="toggle" @click="toggleUnfold">
                <i class="glyphicon glyphicon-menu-hamburger"></i>
            </div>

            <!-- title -->
            <div class="title">
                {{ title }}
            </div>

            <!-- dropdown button -->
            <div
                class="dropdown"
                :class="{'dropdown-active': dropdownVisible}"
                v-if="!dropdownDisabled"
                @mouseover="openDropdown"
                @mouseleave="closeDropdown">
                <i class="glyphicon glyphicon-triangle-bottom"></i>
            </div>
            <!-- dropdown -->
            <div
                class="btn-group-vertical dropdownmenu"
                role="group"
                v-show="dropdownVisible"
                @mouseover="openDropdown"
                @mouseleave="closeDropdown">
                <slot name="dropdown"></slot>
            </div>
        </div>

        <!-- toggle content area -->
        <div class="content" v-show="unfolded">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            unfolded: true,
            dropdownVisible: false,
        }
    },
    props: {
        title: { default: 'Titel' },
        color: { default: 'green' },
        dropdownDisabled: { type: Boolean, default: false },
    },
    methods: {
        toggleUnfold: function () {
            this.unfolded = !this.unfolded
        },
        openDropdown: function () {
            this.dropdownVisible = true
        },
        closeDropdown: function () {
            this.dropdownVisible = false
        }
    }
}
</script>

<style lang="stylus">
.content
    padding: 5px

.dropdown
  position: absolute
  top: 8px
  right: 10px
  border: 1px solid rgba(255,255,255,0.2)
  box-shadow: 1px 1px 0 rgba(255,255,255,0.1) inset
  padding: 2px
  height: 25px
  width: 25px
  border-radius: 5px

.dropdown-active
  border: 1px solid rgba(0,0,0,0.2)
  box-shadow: 1px 1px 0 rgba(0,0,0,0.1) inset
  background-color: rgba(0,0,0,0.1)
  color: rgba(255,255,255,0.9)
  text-shadow: 0px -1px 1px rgba(0,0,0,0.2), 0 1px 1px rgba(0,0,0,0.2)
</style>
