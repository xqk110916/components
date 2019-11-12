function cloneFunction(func) {
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  if (func.prototype) {
      const param = paramReg.exec(funcString);
      const body = bodyReg.exec(funcString);
      if (body) {
          if (param) {
              const paramArr = param[0].split(',');
              return new Function(...paramArr, body[0]);
          } else {
              return new Function(body[0]);
          }
      } else {
          return null;
      }
  } else {
      return eval(funcString);
  }
}

const install = function(Vue, ops) {
  Vue.prototype.clone = cloneFunction
}

export default install