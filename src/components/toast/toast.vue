<template>
  <div
    class="s-toast-wrapper"
    v-show="visible"
  >
    <div
      class="s-toast"
      :class="[`s-toast--${displayStyle}`, `s-toast--${position}`]"
    >
      <div v-if="displayStyle === 'text'">{{message}}</div>
      <div
        v-if="displayStyle === 'html'"
        v-html="message"
      ></div>
    </div>
    <div
      class="s-toast__overlay"
      :class="{'s-toast__overlay--mask': mask}"
    ></div>
  </div>
</template>

<script>
const STYLE_LIST = ["success", "fail", "loading"];
export default {
  name: "s-toast",

  props: {
    mask: Boolean,
    message: [String, Number],
    type: {
      type: String,
      default: "text"
    },
    position: {
      type: String,
      default: "middle"
    }
  },

  data() {
    return {
      visible: false
    };
  },

  computed: {
    displayStyle() {
      return STYLE_LIST.indexOf(this.type) !== -1 ? "default" : this.type;
    }
  }
};
</script>
