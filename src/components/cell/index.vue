<template>
  <div
    class="s-cell"
    :class="{
    's-cell--required':required,
    's-cell--clickable':isLink || clickable
  }"
    @click="onClick"
  >
    <!-- title -->
    <div
      class="s-cell__title"
      v-if="title || icon "
    >
      <s-icon
        v-if="icon"
        :name="icon"
        :color="iconColor"
      ></s-icon>
      <slot name="title">
        <span class="s-cell__text">{{title}}</span>
        <div
          class="s-cell__label"
          v-if="label"
          v-text="label"
        ></div>
      </slot>
    </div>

    <!-- value -->
    <div
      class="s-cell__value"
      :class="{
      's-cell__value--link':isLink,
      's-cell__value--alone': !title && !label
    }"
      v-if="value"
    >
      <span v-text="value"></span>
    </div>

    <!-- r-icon -->
    <span class="s-cell__right-icon">
      <s-icon
        name="chevron-right"
        v-if="isLink"
      ></s-icon>
    </span>

  </div>
</template>

<script>
export default {
  name: 'cell',

  props: {
    icon: String,
    iconColor: String,
    title: String,
    label: String,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    value: [String, Number],
    url: String,
    to: [String, Object],
    replace: Boolean,
    border: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    routerLink() {
      const { to, url, $router, replace } = this;

      if (to && $router) {
        $router[replace ? 'replace' : 'push'](to);
      } else if (url) {
        replace ? location.repalce(url) : (location.href = url);
      }
    },

    onClick() {
      this.$emit('click');
      this.routerLink();
    }
  }
};
</script>
