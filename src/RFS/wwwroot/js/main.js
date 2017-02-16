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
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 179);
	
	var _redux = __webpack_require__(/*! redux */ 190);
	
	var _reducers = __webpack_require__(/*! ./components/ToDo/reducers */ 855);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _App = __webpack_require__(/*! ./components/ToDo/presentation/App */ 858);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PRODUCTS = [{ category: 'Sporting Goods', price: '£49.99', stocked: true, name: 'Football' }, { category: 'Sporting Goods', price: '£9.99', stocked: true, name: 'Cricket ball' }, { category: 'Sporting Goods', price: '£29.99', stocked: false, name: 'Basketball' }, { category: 'Electronics', price: '£99.99', stocked: true, name: 'iPod Touch' }, { category: 'Electronics', price: '£399.99', stocked: true, name: 'iPhone 5' }, { category: 'Electronics', price: '£199.99', stocked: true, name: 'Nexus 7' }];
	
	var store = (0, _redux.createStore)(_reducers2.default);
	
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
	                _react2.default.createElement(
	                    _reactRedux.Provider,
	                    { store: store },
	                    _react2.default.createElement(_App2.default, null)
	                )
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

/***/ 855:
/*!***********************************************!*\
  !*** ./app/components/ToDo/reducers/index.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 190);
	
	var _todos = __webpack_require__(/*! ./todos */ 856);
	
	var _todos2 = _interopRequireDefault(_todos);
	
	var _visibilityFilter = __webpack_require__(/*! ./visibilityFilter */ 857);
	
	var _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var todoApp = (0, _redux.combineReducers)({
	    todos: _todos2.default,
	    visibilityFilter: _visibilityFilter2.default
	});
	
	exports.default = todoApp;

/***/ },

/***/ 856:
/*!***********************************************!*\
  !*** ./app/components/ToDo/reducers/todos.js ***!
  \***********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var todo = function todo() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'ADD_TODO':
	            return {
	                id: action.id,
	                text: action.text,
	                completed: false
	            };
	        case 'TOGGLE_TODO':
	            if (state.id !== action.id) {
	                return state;
	            }
	
	            return Object.assign({}, state, {
	                completed: !state.completed
	            });
	
	        default:
	            return state;
	    }
	};
	
	var todos = function todos() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'ADD_TODO':
	            return [].concat(_toConsumableArray(state), [todo(undefined, action)]);
	        case 'TOGGLE_TODO':
	            return state.map(function (t) {
	                return todo(t, action);
	            });
	        default:
	            return state;
	    }
	};
	
	exports.default = todos;

/***/ },

/***/ 857:
/*!**********************************************************!*\
  !*** ./app/components/ToDo/reducers/visibilityFilter.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var visibilityFilter = function visibilityFilter() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SHOW_ALL';
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'SET_VISIBILITY_FILTER':
	            return action.filter;
	        default:
	            return state;
	    }
	};
	
	exports.default = visibilityFilter;

/***/ },

/***/ 858:
/*!*************************************************!*\
  !*** ./app/components/ToDo/presentation/App.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Footer = __webpack_require__(/*! ./Footer */ 859);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _AddTodo = __webpack_require__(/*! ../containers/AddTodo */ 863);
	
	var _AddTodo2 = _interopRequireDefault(_AddTodo);
	
	var _VisibleTodoList = __webpack_require__(/*! ../containers/VisibleTodoList */ 864);
	
	var _VisibleTodoList2 = _interopRequireDefault(_VisibleTodoList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function App() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_AddTodo2.default, null),
	    _react2.default.createElement(_VisibleTodoList2.default, null),
	    _react2.default.createElement(_Footer2.default, null)
	  );
	};
	
	exports.default = App;

/***/ },

/***/ 859:
/*!****************************************************!*\
  !*** ./app/components/ToDo/presentation/Footer.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FilterLink = __webpack_require__(/*! ../containers/FilterLink */ 860);
	
	var _FilterLink2 = _interopRequireDefault(_FilterLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Footer = function Footer() {
	  return _react2.default.createElement(
	    'p',
	    null,
	    'Show:',
	    " ",
	    _react2.default.createElement(
	      _FilterLink2.default,
	      { filter: 'SHOW_ALL' },
	      'All'
	    ),
	    ", ",
	    _react2.default.createElement(
	      _FilterLink2.default,
	      { filter: 'SHOW_ACTIVE' },
	      'Active'
	    ),
	    ", ",
	    _react2.default.createElement(
	      _FilterLink2.default,
	      { filter: 'SHOW_COMPLETED' },
	      'Completed'
	    )
	  );
	};
	
	exports.default = Footer;

/***/ },

/***/ 860:
/*!******************************************************!*\
  !*** ./app/components/ToDo/containers/FilterLink.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 179);
	
	var _actions = __webpack_require__(/*! ../actions */ 861);
	
	var _Link = __webpack_require__(/*! ../presentation/Link */ 862);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    return {
	        active: ownProps.filter === state.visibilityFilter
	    };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	    return {
	        onClick: function onClick() {
	            dispatch((0, _actions.setVisibilityFilter)(ownProps.filter));
	        }
	    };
	};
	
	var FilterLink = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Link2.default);
	
	exports.default = FilterLink;

/***/ },

/***/ 861:
/*!**********************************************!*\
  !*** ./app/components/ToDo/actions/index.js ***!
  \**********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var nextTodoId = 0;
	var addTodo = exports.addTodo = function addTodo(text) {
	    return {
	        type: 'ADD_TODO',
	        id: nextTodoId++,
	        text: text
	    };
	};
	
	var setVisibilityFilter = exports.setVisibilityFilter = function setVisibilityFilter(filter) {
	    return {
	        type: 'SET_VISIBILITY_FILTER',
	        filter: filter
	    };
	};
	
	var toggleTodo = exports.toggleTodo = function toggleTodo(id) {
	    return {
	        type: 'TOGGLE_TODO',
	        id: id
	    };
	};

/***/ },

/***/ 862:
/*!**************************************************!*\
  !*** ./app/components/ToDo/presentation/Link.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Link = function Link(_ref) {
	    var active = _ref.active,
	        children = _ref.children,
	        _onClick = _ref.onClick;
	
	    if (active) {
	        return _react2.default.createElement(
	            "span",
	            null,
	            children
	        );
	    }
	
	    return _react2.default.createElement(
	        "a",
	        { href: "#",
	            onClick: function onClick(e) {
	                e.preventDefault();
	                _onClick();
	            }
	        },
	        children
	    );
	};
	
	Link.propTypes = {
	    active: _react.PropTypes.bool.isRequired,
	    children: _react.PropTypes.node.isRequired,
	    onClick: _react.PropTypes.func.isRequired
	};
	
	exports.default = Link;

/***/ },

/***/ 863:
/*!***************************************************!*\
  !*** ./app/components/ToDo/containers/AddTodo.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 179);
	
	var _actions = __webpack_require__(/*! ../actions */ 861);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AddTodo = function AddTodo(_ref) {
	    var dispatch = _ref.dispatch;
	
	    var input = void 0;
	
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'form',
	            { onSubmit: function onSubmit(e) {
	                    e.preventDefault();
	                    if (!input.value.trim()) {
	                        return;
	                    }
	                    dispatch((0, _actions.addTodo)(input.value));
	                    input.value = '';
	                } },
	            _react2.default.createElement('input', { ref: function ref(node) {
	                    input = node;
	                } }),
	            _react2.default.createElement(
	                'button',
	                { type: 'submit' },
	                'Add Todo'
	            )
	        )
	    );
	};
	AddTodo = (0, _reactRedux.connect)()(AddTodo);
	
	exports.default = AddTodo;

/***/ },

/***/ 864:
/*!***********************************************************!*\
  !*** ./app/components/ToDo/containers/VisibleTodoList.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 179);
	
	var _actions = __webpack_require__(/*! ../actions */ 861);
	
	var _TodoList = __webpack_require__(/*! ../presentation/TodoList */ 865);
	
	var _TodoList2 = _interopRequireDefault(_TodoList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getVisibleTodos = function getVisibleTodos(todos, filter) {
	    switch (filter) {
	        case 'SHOW_ALL':
	            return todos;
	        case 'SHOW_COMPLETED':
	            return todos.filter(function (t) {
	                return t.completed;
	            });
	        case 'SHOW_ACTIVE':
	            return todos.filter(function (t) {
	                return !t.completed;
	            });
	    }
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        todos: getVisibleTodos(state.todos, state.visibilityFilter)
	    };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        onTodoClick: function onTodoClick(id) {
	            dispatch((0, _actions.toggleTodo)(id));
	        }
	    };
	};
	
	var VisibleTodoList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TodoList2.default);
	
	exports.default = VisibleTodoList;

/***/ },

/***/ 865:
/*!******************************************************!*\
  !*** ./app/components/ToDo/presentation/TodoList.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Todo = __webpack_require__(/*! ./Todo */ 866);
	
	var _Todo2 = _interopRequireDefault(_Todo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TodoList = function TodoList(_ref) {
	    var todos = _ref.todos,
	        onTodoClick = _ref.onTodoClick;
	    return _react2.default.createElement(
	        'ul',
	        null,
	        todos.map(function (todo) {
	            return _react2.default.createElement(_Todo2.default, _extends({
	                key: todo.id
	            }, todo, {
	                onClick: function onClick() {
	                    return onTodoClick(todo.id);
	                }
	            }));
	        })
	    );
	};
	
	TodoList.propTypes = {
	    todos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	        id: _react.PropTypes.number.isRequired,
	        completed: _react.PropTypes.bool.isRequired,
	        text: _react.PropTypes.string.isRequired
	    }).isRequired).isRequired,
	    onTodoClick: _react.PropTypes.func.isRequired
	};
	
	exports.default = TodoList;

/***/ },

/***/ 866:
/*!**************************************************!*\
  !*** ./app/components/ToDo/presentation/Todo.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Todo = function Todo(_ref) {
	  var onClick = _ref.onClick,
	      completed = _ref.completed,
	      text = _ref.text;
	  return _react2.default.createElement(
	    'li',
	    {
	      onClick: onClick,
	      style: {
	        textDecoration: completed ? 'line-through' : 'none'
	      }
	    },
	    text
	  );
	};
	
	Todo.propTypes = {
	  onClick: _react.PropTypes.func.isRequired,
	  completed: _react.PropTypes.bool.isRequired,
	  text: _react.PropTypes.string.isRequired
	};
	
	exports.default = Todo;

/***/ }

});
//# sourceMappingURL=main.js.map