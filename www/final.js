webpackJsonp([0],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _basic = __webpack_require__(27);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * Created by spikeyan on 2017/12/19.
   */

var NumberList = function (_React$Component) {
    _inherits(NumberList, _React$Component);

    function NumberList() {
        _classCallCheck(this, NumberList);

        return _possibleConstructorReturn(this, (NumberList.__proto__ || Object.getPrototypeOf(NumberList)).call(this));
    }

    _createClass(NumberList, [{
        key: 'render',
        value: function render() {
            var numbers = this.props.numbers;
            /*        const listItems = numbers.map((number,count)=>
                        <div key={count.toString()}>{number}</div>
                    )
                    console.log(listItems)*/
            var listItems = [];
            for (var i in numbers) {
                listItems.push(_react2.default.createElement('div', { key: i }, numbers[i] + 10));
            }
            return _react2.default.createElement('div', null, listItems);
        }
    }]);

    return NumberList;
}(_react2.default.Component);

var Clock = function (_React$Component2) {
    _inherits(Clock, _React$Component2);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this2 = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this2.state = {
            date: new Date(),
            job: true,
            numbers: [1, 2, 3, 4, 5]
        };
        return _this2;
    }

    _createClass(Clock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            this.timerID = setInterval(function () {
                return _this3.tick();
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timerID);
        }
    }, {
        key: 'tick',
        value: function tick() {
            this.setState({
                date: new Date()
            });
        }
    }, {
        key: 'alert',
        value: function alert(e) {
            this.setState({
                job: !this.state.job
            });
            console.log(this.state.job);
            this.state.numbers.push(this.state.numbers[this.state.numbers.length - 1] + 1);
            this.setState({
                numbers: this.state.numbers
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var T = this;
            var S = T.state;
            return _react2.default.createElement('div', { className: _basic.hello }, S.job ? _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'Hello, world!'), _react2.default.createElement('h2', null, 'It is ', S.date.toLocaleTimeString(), '.'), _react2.default.createElement(NumberList, { numbers: S.numbers }), _react2.default.createElement('button', { onClick: function onClick(e) {
                    T.alert(e);
                } }, 'hello')) : _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'im h1'), _react2.default.createElement('button', { onClick: function onClick(e) {
                    T.alert(e);
                } }, 'hello me')));
        }
    }]);

    return Clock;
}(_react2.default.Component);

function cao() {
    alert(998);
}

_reactDom2.default.render(_react2.default.createElement(Clock, null), document.getElementById('root'));

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hello":"_39gnw8FQy4Gi-xQ0xSiSw4","hello1":"_5gjHGiFnHpwi_b5ilC1lr"};

/***/ })

},[15]);