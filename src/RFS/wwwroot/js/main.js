webpackJsonp([0],{

/***/ 0:
/*!********************!*\
  !*** ./app/App.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _Products = __webpack_require__(/*! ./components/Products */ 178);
	
	var _ItemList = __webpack_require__(/*! ./components/ItemList */ 179);
	
	var _ItemList2 = _interopRequireDefault(_ItemList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PRODUCTS = [{ category: 'Sporting Goods', price: '£49.99', stocked: true, name: 'Football' }, { category: 'Sporting Goods', price: '£9.99', stocked: true, name: 'Cricket ball' }, { category: 'Sporting Goods', price: '£29.99', stocked: false, name: 'Basketball' }, { category: 'Electronics', price: '£99.99', stocked: true, name: 'iPod Touch' }, { category: 'Electronics', price: '£399.99', stocked: true, name: 'iPhone 5' }, { category: 'Electronics', price: '£199.99', stocked: true, name: 'Nexus 7' }];
	
	(0, _reactDom.render)(_react2.default.createElement(
	    'table',
	    null,
	    _react2.default.createElement(
	        'tbody',
	        null,
	        _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	                'td',
	                null,
	                _react2.default.createElement(_Products.FilterableProductTable, { products: PRODUCTS })
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                _react2.default.createElement(_ItemList2.default, null)
	            )
	        )
	    )
	), document.getElementById('root'));

/***/ },

/***/ 178:
/*!************************************!*\
  !*** ./app/components/Products.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FilterableProductTable = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SearchBar = function (_Component) {
	    _inherits(SearchBar, _Component);
	
	    function SearchBar(props) {
	        _classCallCheck(this, SearchBar);
	
	        var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));
	
	        _this.handleChange = _this.handleChange.bind(_this);
	        return _this;
	    }
	
	    _createClass(SearchBar, [{
	        key: "handleChange",
	        value: function handleChange() {
	            this.props.onUserInput(this.filterTextInput.value, this.inStockOnlyInput.checked);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                "form",
	                null,
	                _react2.default.createElement("input", { type: "text", placeholder: "Search...", value: this.props.filterText, ref: function ref(input) {
	                        return _this2.filterTextInput = input;
	                    }, onChange: this.handleChange }),
	                _react2.default.createElement(
	                    "p",
	                    null,
	                    _react2.default.createElement("input", { type: "checkbox", checked: this.props.inStockOnly, ref: function ref(input) {
	                            return _this2.inStockOnlyInput = input;
	                        }, onChange: this.handleChange }),
	                    ' ',
	                    "Only show products in stock"
	                )
	            );
	        }
	    }]);
	
	    return SearchBar;
	}(_react.Component);
	
	var ProductCategoryRow = function (_Component2) {
	    _inherits(ProductCategoryRow, _Component2);
	
	    function ProductCategoryRow() {
	        _classCallCheck(this, ProductCategoryRow);
	
	        return _possibleConstructorReturn(this, (ProductCategoryRow.__proto__ || Object.getPrototypeOf(ProductCategoryRow)).apply(this, arguments));
	    }
	
	    _createClass(ProductCategoryRow, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "tr",
	                null,
	                _react2.default.createElement(
	                    "th",
	                    { colSpan: "2" },
	                    this.props.category
	                )
	            );
	        }
	    }]);
	
	    return ProductCategoryRow;
	}(_react.Component);
	
	var ProductRow = function (_Component3) {
	    _inherits(ProductRow, _Component3);
	
	    function ProductRow() {
	        _classCallCheck(this, ProductRow);
	
	        return _possibleConstructorReturn(this, (ProductRow.__proto__ || Object.getPrototypeOf(ProductRow)).apply(this, arguments));
	    }
	
	    _createClass(ProductRow, [{
	        key: "render",
	        value: function render() {
	            var name = this.props.product.stocked ? this.props.product.name : _react2.default.createElement(
	                "span",
	                { style: { color: 'red' } },
	                this.props.product.name
	            );
	            return _react2.default.createElement(
	                "tr",
	                null,
	                _react2.default.createElement(
	                    "td",
	                    null,
	                    name
	                ),
	                _react2.default.createElement(
	                    "td",
	                    null,
	                    this.props.product.price
	                )
	            );
	        }
	    }]);
	
	    return ProductRow;
	}(_react.Component);
	
	var ProductTable = function (_Component4) {
	    _inherits(ProductTable, _Component4);
	
	    function ProductTable() {
	        _classCallCheck(this, ProductTable);
	
	        return _possibleConstructorReturn(this, (ProductTable.__proto__ || Object.getPrototypeOf(ProductTable)).apply(this, arguments));
	    }
	
	    _createClass(ProductTable, [{
	        key: "render",
	        value: function render() {
	            var _this6 = this;
	
	            var rows = [];
	            var lastCategory = null;
	            this.props.products.forEach(function (product) {
	                if (product.name.indexOf(_this6.props.filterText) === -1 || !product.stocked && _this6.props.inStockOnly) {
	                    return;
	                }
	                if (product.category !== lastCategory) {
	                    rows.push(_react2.default.createElement(ProductCategoryRow, { category: product.category, key: product.category }));
	                }
	                rows.push(_react2.default.createElement(ProductRow, { product: product, key: product.name }));
	                lastCategory = product.category;
	            });
	            return _react2.default.createElement(
	                "table",
	                null,
	                _react2.default.createElement(
	                    "thead",
	                    null,
	                    _react2.default.createElement(
	                        "tr",
	                        null,
	                        _react2.default.createElement(
	                            "th",
	                            null,
	                            "Name"
	                        ),
	                        _react2.default.createElement(
	                            "th",
	                            null,
	                            "Price"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "tbody",
	                    null,
	                    rows
	                )
	            );
	        }
	    }]);
	
	    return ProductTable;
	}(_react.Component);
	
	var FilterableProductTable = exports.FilterableProductTable = function (_Component5) {
	    _inherits(FilterableProductTable, _Component5);
	
	    function FilterableProductTable(props) {
	        _classCallCheck(this, FilterableProductTable);
	
	        var _this7 = _possibleConstructorReturn(this, (FilterableProductTable.__proto__ || Object.getPrototypeOf(FilterableProductTable)).call(this, props));
	
	        _this7.state = {
	            filterText: '',
	            inStockOnly: false
	        };
	
	        _this7.handleUserInput = _this7.handleUserInput.bind(_this7);
	        return _this7;
	    }
	
	    _createClass(FilterableProductTable, [{
	        key: "handleUserInput",
	        value: function handleUserInput(filterText, inStockOnly) {
	            this.setState({
	                filterText: filterText,
	                inStockOnly: inStockOnly
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(SearchBar, { filterText: this.state.filterText, inStockOnly: this.state.inStockOnly, onUserInput: this.handleUserInput }),
	                _react2.default.createElement(ProductTable, { products: this.props.products, filterText: this.state.filterText, inStockOnly: this.state.inStockOnly })
	            );
	        }
	    }]);

	    return FilterableProductTable;
	}(_react.Component);

/***/ },

/***/ 179:
/*!************************************!*\
  !*** ./app/components/ItemList.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ItemList = function (_Component) {
	    _inherits(ItemList, _Component);
	
	    function ItemList() {
	        _classCallCheck(this, ItemList);
	
	        var _this = _possibleConstructorReturn(this, (ItemList.__proto__ || Object.getPrototypeOf(ItemList)).call(this));
	
	        _this.state = {
	            items: []
	        };
	        return _this;
	    }
	
	    _createClass(ItemList, [{
	        key: 'fetchData',
	        value: function fetchData(url) {
	            var _this2 = this;
	
	            this.setState({ isLoading: true });
	
	            fetch(url).then(function (response) {
	                if (!response.ok) {
	                    throw Error(response.statusText);
	                }
	                _this2.setState({ isLoading: false });
	                return response;
	            }).then(function (response) {
	                return response.json();
	            }).then(function (items) {
	                return _this2.setState({ items: items });
	            }).catch(function () {
	                return _this2.setState({ hasErrored: true });
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.state.hasErrored) {
	                return _react2.default.createElement(
	                    'p',
	                    null,
	                    'Sorry! There was an error loading the items'
	                );
	            }
	            if (this.state.isLoading) {
	                return _react2.default.createElement(
	                    'p',
	                    null,
	                    'Loading'
	                );
	            }
	            return _react2.default.createElement(
	                'ul',
	                null,
	                this.state.items.map(function (item) {
	                    return _react2.default.createElement(
	                        'li',
	                        { key: item.id },
	                        item.label
	                    );
	                })
	            );
	        }
	    }]);
	
	    return ItemList;
	}(_react.Component);
	
	exports.default = ItemList;

/***/ }

});
//# sourceMappingURL=main.js.map