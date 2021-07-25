<template>
  <div v-show="$value" class="modal">
    <div class="modal-overlay" @click="dismiss ? $value = false : undefined"></div>
    <div class="modal-window">
      <div class="modal-header">
        <h6>{{ title }}</h6>
        <span class="modal-close" href="#" @click="$value = false">&times;</span>
      </div>
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    
    title: {
      type: String,
      default: null,
    },

    dismiss: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    $value: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
}
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &-overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(#000, .7);
      cursor: pointer;
    }

    &-window {
      position: relative;
      margin: auto;
      background: #fff;
      overflow: auto;
      max-width: calc(100vw - 60px);
      max-height: calc(100vh - 60px);
    }

    &-header {
      display: flex;
      justify-content: space-between;
    }

    &-close {
      cursor: pointer;
    }
  }
</style>
