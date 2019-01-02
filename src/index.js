import Hello from './components/1hello';

const components = {
  Hello
};

const install = function(Vue, opts = {}) {
  if (install.installed) {
    return;
  }

  Object.keys(components).forEach(k => {
    let name = `s-${k.toLocaleLowerCase()}`;
    Vue.component(name, components[k]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
