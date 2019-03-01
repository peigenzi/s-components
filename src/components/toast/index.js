import Vue from 'vue';
import VueToast from './toast.vue';

const defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  visible: true,
  duration: 3000,
  position: 'middle',
  forbidClick: false
};

const parseOptions = message =>
  Object.prototype.toString.call(message) === '[object Object]'
    ? message
    : { message };

let queue = [];
let singleton = true;
let currentOptions = { ...defaultOptions };

function createInstance() {
  if (!queue.length || !singleton) {
    const toast = new (Vue.extend(VueToast))({
      el: document.createElement('div')
    });
    document.body.appendChild(toast.$el);
    queue.push(toast);
  }

  return queue[queue.length - 1];
}

function Toast(options = {}) {
  // 如果有 toast 显示，则返回显示的 toast
  const toast = createInstance();

  options = {
    ...currentOptions,
    ...parseOptions(options),
    clear() {
      toast.visible = false;
    }
  };

  // 通过合并配置，修改 toast 状态
  Object.assign(toast, options);
  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(() => {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

const createMethod = type => options =>
  Toast({
    type,
    ...parseOptions(options)
  });

['loading', 'success', 'fail'].forEach(method => {
  // 调用 $toast 相关方法时就相当于执行 createMethod
  Toast[method] = createMethod(method);
});

Toast.clear = all => {
  if (queue.length) {
    if (all) {
      queue.forEach(toast => {
        toast.clear();
      });
      queue = [];
    } else if (singleton) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.install = () => {
  Vue.use(VueToast);
};

Vue.prototype.$toast = Toast;

export default Toast;
