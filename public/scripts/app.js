'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appRoot = document.querySelector("#app");

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.lowerCount = _this.lowerCount.bind(_this);
        _this.addCount = _this.addCount.bind(_this);
        _this.state = {
            count: 0,
            animation: 'counter'
        };
        return _this;
    }

    _createClass(App, [{
        key: 'lowerCount',
        value: function lowerCount() {
            var _this2 = this;

            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1,
                    animation: prevState.animation += ' lower-animation'
                };
            });

            setTimeout(function () {
                _this2.setState(function (prevState) {
                    return {

                        animation: 'counter'
                    };
                });
            }, 1000);
        }
    }, {
        key: 'addCount',
        value: function addCount() {
            var _this3 = this;

            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1,
                    animation: prevState.animation += ' higher-animation'
                };
            });
            setTimeout(function () {
                _this3.setState(function (prevState) {
                    return {

                        animation: 'counter'
                    };
                });
            }, 1000);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'button',
                    { onClick: this.lowerCount, className: 'lower' },
                    '<'
                ),
                React.createElement(
                    'button',
                    { className: this.state.animation },
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.addCount, className: 'higher' },
                    '>'
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), appRoot);
