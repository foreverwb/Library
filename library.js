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
    for(let k in obj) {
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
    for(let key in obj) {
        if ((obj[key] === 0 || obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
            newObj[key]  = obj[key];
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
        let name = _arrS[i].substring(0, pos), value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
        _rs[name] = value;
    }
    return _rs;
}

// 设置url参数
function setUrlPtmt(obj) {
    let _params = [];
    for(let key in obj) {
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
    switch(type) {
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
        default :
            return true;
    }
}

// 数组去重 ES6 from()
function removeRepeatArray(arr) {
    return Array.from(new Set(arr))
}

