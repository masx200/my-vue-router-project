# 揭秘 Babel-polyfill 如何把普通函数伪装成内置函数？

"function () { [native code] }"

最近在学习大前端的过程中,使用 vue 或者 react 开发前端项目时,为了兼容浏览器,一般都会添加 babel-polyfill

在 IE 浏览器中，不支持 Promise，Symbol，Reflect 等等内置函数和对象，添加 babel-polyfill 之后，控制台查看 Promise 函数，输出的竟然是

```js
console.log(Promise)

function Promise() { [native code] }
```

<hr>

要看`Promise`如何实现的可以看 github 这里的 polyfill

https://github.com/stefanpenner/es6-promise

https://github.com/then/promise

<hr>

顿时就震惊了，它竟然伪装成了内置函数？

研究了一下 babel-polyfill 的源码，找到了答案,有了一些心得，分享一下

文章的最后还有我总结的三种伪装内置函数的方法

由于 ie 浏览器的调试工具不好用,
在 chrome 浏览器中测试一下,

chrome 浏览器中是没有内置`setImmediate`函数的,看一下 babel-polyfill 如何实现内置函数的伪装的

```js
import('https://cdn.bootcss.com/babel-polyfill/7.4.4/polyfill.js')
.then(()=>{console.log(window.setImmediate)})

ƒ setImmediate() { [native code] }
```

查看一下它的属性

```js
console.log([setImmediate])


[ƒ]
0: ƒ setImmediate()
Symbol(src)_1.rlpsogvo8a: "function setImmediate() { [native code] }"
arguments: (...)
caller: (...)
length: 1
name: "setImmediate"
prototype: {constructor: ƒ}
__proto__: ƒ ()
[[FunctionLocation]]: polyfill.js:2434
[[Scopes]]: Scopes[2]
length: 1
__proto__: Array(0)

```

发现了`Symbol(src)_1.rlpsogvo8a`这个属性,

这是用`Symbol`的 polyfill 生成的`Symbol(src)`对象

在源代码中找到了这么一段

```js
{
118: [function(_dereq_, module, exports) {
        var global = _dereq_(70);
        var hide = _dereq_(72);
        var has = _dereq_(71);
        var SRC = _dereq_(147)('src');
        var $toString = _dereq_(69);
        var TO_STRING = 'toString';
        var TPL = ('' + $toString).split(TO_STRING);

        _dereq_(52).inspectSource = function(it) {
            return $toString.call(it);
        }
        ;

        (module.exports = function(O, key, val, safe) {
            var isFunction = typeof val == 'function';
            if (isFunction)
                has(val, 'name') || hide(val, 'name', key);
            if (O[key] === val)
                return;
            if (isFunction)
                has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
            if (O === global) {
                O[key] = val;
            } else if (!safe) {
                delete O[key];
                hide(O, key, val);
            } else if (O[key]) {
                O[key] = val;
            } else {
                hide(O, key, val);
            }
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        }
        )(Function.prototype, TO_STRING, function toString() {
            return typeof this == 'function' && this[SRC] || $toString.call(this);
        });

    }
    , {
        "147": 147,
        "52": 52,
        "69": 69,
        "70": 70,
        "71": 71,
        "72": 72
    }],
    }
```

```js
  {
  147: [function(_dereq_, module, exports) {
        var id = 0;
        var px = Math.random();
        module.exports = function(key) {
            return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
        }
        ;

    }, {}],
    }
```

```js
{
 69: [function(_dereq_, module, exports) {
        module.exports = _dereq_(126)('native-function-to-string', Function.toString);

    }
    , {
        "126": 126
    }],
    }
```

```js
{
 30: [function(_dereq_, module, exports) {
        module.exports = function(bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        }
        ;

    }
    , {}],
    }
```

看到这里明白了`Function.prototype.toString`被修改了,先查找函数的`Symbol(src)`属性,如果存在就返回这个值,否则返回函数原先的`toString`方法的返回值,

控制台打印一个函数时,会去寻找函数的`toString`方法的返回值

而在定义`setImmediate`函数时,先定义了它的`Symbol(src)`属性,然后隐藏这个属性,并且这个属性值不可修改和删除

<hr></hr>

接下来看看`setImmediate`是如何实现的吧?

先是判断当前的环境是哪种浏览器环境还是 nodejs 环境还是 webworker 环境,

使用`process.nextTick`或者`Dispatch`或者`MessageChannel`或者`addEventListener`和`postMessage`实现

或者创建`script`标签设置`onreadystatechange`事件监听,

最后使用`setTimeout`实现

```js
{
136: [function(_dereq_, module, exports) {
        var ctx = _dereq_(54);
        var invoke = _dereq_(76);
        var html = _dereq_(73);
        var cel = _dereq_(59);
        var global = _dereq_(70);
        var process = global.process;
        var setTask = global.setImmediate;
        var clearTask = global.clearImmediate;
        var MessageChannel = global.MessageChannel;
        var Dispatch = global.Dispatch;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = 'onreadystatechange';
        var defer, channel, port;
        var run = function() {
            var id = +this;
            // eslint-disable-next-line no-prototype-builtins
            if (queue.hasOwnProperty(id)) {
                var fn = queue[id];
                delete queue[id];
                fn();
            }
        };
        var listener = function(event) {
            run.call(event.data);
        };
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!setTask || !clearTask) {
            setTask = function setImmediate(fn) {
                var args = [];
                var i = 1;
                while (arguments.length > i)
                    args.push(arguments[i++]);
                queue[++counter] = function() {
                    // eslint-disable-next-line no-new-func
                    invoke(typeof fn == 'function' ? fn : Function(fn), args);
                }
                ;
                defer(counter);
                return counter;
            }
            ;
            clearTask = function clearImmediate(id) {
                delete queue[id];
            }
            ;
            // Node.js 0.8-
            if (_dereq_(48)(process) == 'process') {
                defer = function(id) {
                    process.nextTick(ctx(run, id, 1));
                }
                ;
                // Sphere (JS game engine) Dispatch API
            } else if (Dispatch && Dispatch.now) {
                defer = function(id) {
                    Dispatch.now(ctx(run, id, 1));
                }
                ;
                // Browsers with MessageChannel, includes WebWorkers
            } else if (MessageChannel) {
                channel = new MessageChannel();
                port = channel.port2;
                channel.port1.onmessage = listener;
                defer = ctx(port.postMessage, port, 1);
                // Browsers with postMessage, skip WebWorkers
                // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
            } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
                defer = function(id) {
                    global.postMessage(id + '', '*');
                }
                ;
                global.addEventListener('message', listener, false);
                // IE8-
            } else if (ONREADYSTATECHANGE in cel('script')) {
                defer = function(id) {
                    html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
                        html.removeChild(this);
                        run.call(id);
                    }
                    ;
                }
                ;
                // Rest old browsers
            } else {
                defer = function(id) {
                    setTimeout(ctx(run, id, 1), 0);
                }
                ;
            }
        }
        module.exports = {
            set: setTask,
            clear: clearTask
        };

    }
    , {
        "48": 48,
        "54": 54,
        "59": 59,
        "70": 70,
        "73": 73,
        "76": 76
    }],

}
```

<hr>

还有其他方法伪装内置函数吗?

有以下几种方法实现

1.给函数绑定`this`

```js
(() => {}).bind().toString();

("function () { [native code] }");
```

或者

2.用`Proxy`代理函数

```js
new Proxy(() => {}, {}).toString();

("function () { [native code] }");
```

3.修改函数的`toString`方法

```js
function testa(){return 'aaaaaaaa'}

testa.toString=(()=>{}).toString.bind((()=>{}).bind())


console.log(testa)

ƒ () { [native code] }

testa.toString()

"function () { [native code] }"
```

或者简单粗暴的设置返回一个字符串也行

```javascript
function testa() {
  return "aaaaaaaa";
}

testa.toString = () => "function () { [native code] }";
```
