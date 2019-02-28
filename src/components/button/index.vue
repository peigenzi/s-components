<template>
  <component
    :is="tag"
    :type="type"
    :disabled="disabled"
    class="s-button"
    :class="[
      's-button--' + type,
      's-button--' + size,
      {
        's-button--disabled': disabled,
        's-button--loading': loading,
        's-button--unclickable': loading,
        's-button--block': block
      }
    ]"
    @click="onClick"
  >
    <s-loading
      v-if="loading"
      size="1.6em"
      color="#eee"
    ></s-loading>
    <span v-if="loading" class="s-button__loading-text">{{loadingText}}</span>
    <span class="s-button__text">
      <slot>{{text}}</slot>
    </span>
  </component>
</template>

<script>
export default {
  name: "s-button",

  props: {
    tag: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "normal"
    },
    disabled: Boolean,
    loading: Boolean,
    block: Boolean,
    text: String,
    loadingText: {
      type: String,
      default: '加载中...'
    }
  },

  methods: {
    onClick(e) {
      if (!this.loading && !this.disabled) {
        this.$emit("click", e);
      }
    }
  }
};
</script>
