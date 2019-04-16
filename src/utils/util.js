export function typeOf(obj) {
  let map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };

  return map[Object.prototype.toString.call(obj)];
}

export function deepCopy(data) {
  let type = Object.prototype.toString.call(data);
  let res = '';

  if (type == '[object Array]') {
    res = [];
  } else if (type == '[object Object]') {
    res = {};
  } else {
    res = data;
  }

  if (type == '[object Array]') {
    for (let i = 0; i < data.length; i++) {
      res.push(deepCopy(data[i]));
    }
  } else if (type == '[object Object]') {
    for (let i in data) {
      res[i] = deepCopy(data[i]);
    }
  }

  return res;
}

function camelCase(name) {
  return name
    .replace(/([\:\-\_]+(.))/g, function(_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    })
    .replace(/^moz([A-Z])/, 'Moz$1');
}

export function getStyle(element, styleName) {
  if (!element || !styleName) {
    return null;
  }

  styleName = camelCase(styleName);

  if (styleName === 'float') {
    styleName = 'cssFloat';
  }

  let computed = document.defaultView.getComputedStyle(element, '');

  return computed[element];
}

export function setStyle(element, styleName, value) {
  if (!element || !styleName) {
    return;
  }

  if (typeof styleName === 'object') {
    for (let i in styleName) {
      if (styleName.hasOwnProperty(i)) {
        setStyle(element, i, styleName[i]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    element.style[styleName] = value;
  }
}
