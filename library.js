/*
    Library Function
*/

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 5,
    e: ''
}
// 对象的属性key转换格式
function format(obj) {
    let newObj = {};
    for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
            let K = k.toUpperCase();
            if (k !== K) {
                obj[K] = obj[k]
                delete obj[k]
            }
        }
    }
    newObj = obj;
    return newObj
}

// 过滤属性的值是否为空
function filterParams(obj) {
    let newObj = {};
    for (let key in obj) {
        if ((obj[key] === 0 || obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

// 生成随机数
function randomNumber(count) {
    return Math.random().toString(count).substring(2);
}

// 获取url参数
function getUrlPrmt(url) {
    url = url ? url : window.location.href;
    let _pa = url.substring(url.indexOf('?') + 1),
        _arrS = _pa.split('&'),
        _rs = {};

    for (let i = 0, _len = _arrS.length; i < _len; i++) {
        let pos = _arrS[i].indexOf('=');
        if (pos == -1) {
            continue;
        }
        let name = _arrS[i].substring(0, pos),
            value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
        _rs[name] = value;
    }
    return _rs;
}

// 设置url参数
function setUrlPtmt(obj) {
    let _params = [];
    for (let key in obj) {
        if (obj[key] != null && obj[key] != '') {
            _params.push(key + '=' + obj[key])
        }
    }
    return _params.join('&');
}

// 筛选数组
function removeArrayForValue(arr, val, type) {
    arr.filter(function(item) {
        return type === '%' ? item.indexOf(val) !== -1 : item !== val;
    })
}

// 校验字符串
function checkType(str, type) {
    switch (type) {
        case 'email':
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'phone':
            return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
        case 'tel':
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'number':
            return /^[0-9]$/.test(str);
        case 'english':
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese':
            return /^[\u4E00-\u9FA5]+$/.test(str);
        case 'lower':
            return /^[a-z]+$/.test(str);
        case 'upper':
            return /^[A-Z]+$/.test(str);
        default:
            return true;
    }
}

// 数组去重 ES6 from()
function removeRepeatArray(arr) {
    return Array.from(new Set(arr))
}

// 节流函数
var func = debounce(function() {
    // 繁重、耗性能的操作
}, 300);
window.addEventListener('resize', func);

function debounce(fn, wait) {
    var td;
    return function() {
        clearTimeout(td);
        td = setTimeout(fn, wait);
    }
}

// 只执行一次的函数
function once(fn, context) {
    var result;
    return function() {
        if (fn) {
            result = fn.apply(context, arguments);
        }
        return result;
    }
}

// 取出一个数组中的最大值和最小值
var numbers = [5, 458, 120, -215, 228, 400, 122205, -85411];
var max = Math.max.apply(Math, numbers);
var min Math.min.apply(Math, numbers);

// m(6) n(8)
Array(6).fill(8);

// 最短的代码实现数组去重
[...new Set([1, "1", 2, 1, 1, 3])]

// 正则的实现金钱格式化
var test = '1234567890';
var format = test.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// 优雅实现金钱格式化
function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}

// 日期格式化
Date.prototype.format = function(fmt) {
    let t = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in t) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (t[k]) : (("00" + t[k]).substr(("" + t[k]).length)));
        }
    }
    return fmt;
}

new Date().format('yy-M-d h:m:s')

// 格式化数量
function formatNum(str) {
  return str.split('').reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + ',')) + prev
  });
}

formatNum('2313323');