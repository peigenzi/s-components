import Button from './components/button';

const version = '0.0.1';

const components = {
  Button
};

const install = function(Vue, opts = {}) {
  if (install.installed) {
    return;
  }

  Object.keys(components).forEach(k => {
    let name = `s-${k.toLocaleLowerCase()}`;
    console.log(`注册组件${name}`)
    Vue.component(name, components[k]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  button
};

export default {
  install
}
