<template>
  <transition name="s-fade">
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

        <!-- 默认 toast 有 icon -->
        <template v-if="displayStyle === 'default'">
          <s-loading
            v-if="type === 'loading'"
            color="white"
            size="2.5em"
          ></s-loading>
          <s-icon
            v-else
            :name="type === 'fail' ? 'close-circle' : 'check-circle'"
            color="white"
            size="2.5em"
          ></s-icon>
          <div
            class="s-toast__text"
            v-if="hasMessage"
          >{{message}}</div>
        </template>
      </div>
      <div
        class="s-toast__overlay"
        :class="{'s-toast__overlay--mask': mask}"
        v-if="forbidClick || mask"
      ></div>
    </div>
  </transition>
</template>

<script>
const STYLE_LIST = ['success', 'fail', 'loading'];
export default {
  name: 's-toast',

  props: {
    mask: Boolean,
    message: [String, Number],
    forbidClick: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
    }
  },

  data() {
    return {
      visible: false
    };
  },

  computed: {
    displayStyle() {
      return STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type;
    },

    hasMessage() {
      return this.message || this.message === 0;
    }
  }
};
</script>
