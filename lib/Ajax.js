const xhr = new XMLHttpRequest();

export function Ajax({
                         request, // 接口类型
                         url, // 请求地址
                         port, // 接口
                         contentType, // 请求头
                         parId, // 请求参数 ID
                         parameter, // 参数(JSON对象形式)
                     }, fn) { // fn 为一个回调函数
    request = request.toUpperCase();
    let result;

    switch (contentType) {
        case '':
            break;
        case 'text':
            contentType = 'application/x-www-form-urlencoded';
            break;
        case 'JSON':
            contentType = 'application/json';
            break;
    }
    switch (request) {
        case 'GET':
            xhr.open(request, url + port)
            let parStr = ''
            if (parameter) {
                for (const key in parameter) {
                    parStr += key + '=' + parameter[key] + '$';
                }
                parStr = parStr.slice(parStr.length - 1, 1);
                xhr.send(parStr);
            } else {
                xhr.send();
            }
            break;
        case 'POST':
            xhr.open(request, url + port)
            xhr.setRequestHeader('content-type', contentType)
            xhr.send(JSON.stringify(parameter));
            break;
        case 'DELETE':
            port = port + '/' + parId;
            xhr.open(request, url + port);
            xhr.send();
            break;
        case 'PATCH':
            port = port + '/' + parId;
            xhr.open(request, url + port)
            xhr.setRequestHeader('content-type', contentType)
            xhr.send(JSON.stringify(parameter));
            break;

    }
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState, xhr.status)
        if (xhr.readyState === 4 && /^2/.test(xhr.status)) {
            result = JSON.parse(xhr.responseText);
            if (fn) {
                fn(result);
            }
        }
    }
}