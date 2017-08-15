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
