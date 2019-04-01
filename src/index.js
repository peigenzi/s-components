import Button from './components/button';
import Icon from './components/icon';
import Loading from './components/loading';
import Toast from './components/toast';
import Cell from './components/cell';
import Radio from './components/radio';
import RadioGroup from './components/radio-group';

const version = '0.0.1';

const components = {
  Button,
  Icon,
  Loading,
  Toast,
  Cell,
  Radio,
  RadioGroup,
};

const install = function(Vue, opts = {}) {
  if (install.installed) {
    return;
  }

  Object.keys(components).forEach(k => {
    let name = `s-${k.toLocaleLowerCase()}`;
    console.log(`注册组件${name}`);
    Vue.component(name, components[k]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const sui = {
  install,
  version,
  ...components
};

export { sui };

export default {
  install
};
