let jllUtil = {}
// jllUtil.formatDate = formatDate;

//转换时间格式
/**
 *
 * @date   时间
 * @fmt    时间格式
 */
jllUtil.formatDate = function (date, fmt) {
  if (date === null || date === '') {
    return '-'
  }
  date = new Date(date);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

/**
 * 获取滚动条高度
 */
jllUtil.getScrollTop = function () {
  let scrollTop = 0;
  let bodyScrollTop = 0;
  let documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}
/**
 * @获取窗口的将高度
 */
jllUtil.getWindowHeight = function () {
  let windowHeight = 0;
  if (document.compatMode == "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}
/**
 * @获取页面文档的高度
 */
jllUtil.getScrollHeight = function () {
  let scrollHeight = 0;
  let bodyScrollHeight = 0;
  let documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}
/**
 * @设置Cookie
 */
jllUtil.setCookie = function (name, value, expiredays) {
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString() + ";path=/")
}
/**
 * @获取Cookie
 */
jllUtil.getCookie = function (name) {
  let c_start = '';
  let c_end = '';
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(name + '=');
    if (c_start != -1) {
      c_start = c_start + name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end))
    }
  }
  return '';
}
/**
 *删除Cookie
 */
jllUtil.delCookie = function (name) {
  var date = new Date();
  date.setTime(date.getTime() - 1);
  var delValue = jllUtil.getCookie(name);
  if (!!delValue) {
    document.cookie = name + '=' + delValue + ';expires=' + date.toGMTString();
  }
}
/**
 * 验证手机号
 * @return {[type]} [description]
 */
jllUtil.verifyCellPhone = function (str) {
  var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (reg.test(str)) {
    return true
  } else {
    return false
  }
}
/**
 * 验证密码
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
jllUtil.verifPassWord = function (str) {
  var reg = /^(?=.*[a-z])(?=.*\d)[^]{8,20}$/;
  // var reg =  /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{8,20}$/;
  if (reg.test(str)) {
    return true
  } else {
    return false
  }
}

/**
 * 验证身份证号
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
jllUtil.verifIdNumber = function (str) {
  var reg = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}

/**
 * 验证邮箱格式
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
jllUtil.verifEmail = function (str) {
  var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}

/**
 * 验证纯数字
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
jllUtil.verifNum = function (str) {
  var reg = /^[0-9]+.?[0-9]*$/;
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}

/**
 *
 *比较两个对象是否完全相同
 *
 */
jllUtil.isObjectValueEqual = function (a, b) {

  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
}
/**
 * 截取指定字符个数
 * @param str
 * @param num
 */

jllUtil.cutOutStr = function (str, num) {
  if (!!str) {
    if (str.length > num) {
      str = str.substring(0, num)
      str += '...'
    }
  }
  return str
}
/**
 * 将base64格式转换成文件格式
 */
jllUtil.dataURLtoFile = function (dataurl, filename) {
  var arr = dataurl.split(',');
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  //转换成file对象
  return new File([u8arr], filename, {type: mime});
  //转换成成blob对象
  //return new Blob([u8arr],{type:mime});
}

/**
 * 保留两位小数增加千分位符
 * @param number
 * @returns {string}
 */

jllUtil.numbers = function (number) {
  number = number.toFixed(2)
  let arr = number.split(".")
  let num = arr[0]
  let str = arr[1]
  let result = [], counter = 0;
  num = (num || 0).toString().split('');
  for (let i = num.length - 1; i >= 0; i--) {
    counter++;
    result.unshift(num[i]);
    if (!(counter % 3) && i != 0) {
      result.unshift(',');
    }
  }
  return result.join('') + '.' + str;
}

export default jllUtil;
