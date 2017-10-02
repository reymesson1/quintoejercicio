'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;

var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var Nav = ReactBootstrap.Nav;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;

var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Panel = ReactBootstrap.Panel;

var Pagination = ReactBootstrap.Pagination;

var Form = ReactBootstrap.Form;
var FormGroup = ReactBootstrap.FormGroup;
var FormControl = ReactBootstrap.FormControl;
var ControlLabel = ReactBootstrap.ControlLabel;
var Col = ReactBootstrap.Col;

var Table = ReactBootstrap.Table;

var Autosuggest = Autosuggest;

var API_URL = 'http://localhost:8080';

var API_HEADERS = {

    'Content-Type': 'application/json',
    Authentication: 'any-string-you-like'
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {

            cookie: false,
            cookies: false
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            fetch(API_URL + '/cookies', { headers: API_HEADERS }).then(function (response) {
                return response.json();
            }).then(function (responseData) {
                _this2.setState({

                    cookies: responseData
                });
            }).catch(function (error) {
                console.log('Error fetching and parsing data', error);
            });
        }
    }, {
        key: 'setCookie',
        value: function setCookie(event) {

            event.preventDefault();

            console.log(event.target.email.value);
            console.log(event.target.password.value);

            var newCookie = {

                "id": "1",
                "username": event.target.email.value,
                "password": event.target.password.value
            };

            fetch(API_URL + '/cookies', {

                method: 'post',
                headers: API_HEADERS,
                body: JSON.stringify(newCookie)
            });

            window.location.reload();
        }
    }, {
        key: 'render',
        value: function render() {

            var dashboard = React.createElement(
                'div',
                null,
                React.createElement(Toolbar, null),
                React.createElement(
                    'div',
                    { className: 'container' },
                    this.props.children
                )
            );

            var login = React.createElement(
                'div',
                null,
                React.createElement(Login, {
                    setcookie: this.setCookie
                })
            );
            if (this.state.cookies) {

                return React.createElement(
                    'div',
                    null,
                    dashboard
                );
            }
            return React.createElement(
                'div',
                null,
                login
            );
        }
    }]);

    return App;
}(React.Component);

var Login = function (_React$Component2) {
    _inherits(Login, _React$Component2);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        'div',
                        { className: 'row vertical-offset-100' },
                        React.createElement(
                            'div',
                            { className: 'col-md-4 col-md-offset-4' },
                            React.createElement(
                                'div',
                                { className: 'panel panel-default' },
                                React.createElement(
                                    'div',
                                    { className: 'panel-heading' },
                                    React.createElement(
                                        'h3',
                                        { className: 'panel-title' },
                                        'Please sign in'
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'panel-body' },
                                    React.createElement(
                                        'form',
                                        { onSubmit: this.props.setcookie.bind(this) },
                                        React.createElement(
                                            'fieldset',
                                            null,
                                            React.createElement(
                                                'div',
                                                { className: 'form-group' },
                                                React.createElement('input', { className: 'form-control', placeholder: 'E-mail', name: 'email', type: 'text' })
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'form-group' },
                                                React.createElement('input', { className: 'form-control', placeholder: 'Password', name: 'password', type: 'password' })
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'checkbox' },
                                                React.createElement(
                                                    'label',
                                                    null,
                                                    React.createElement('input', { name: 'remember', type: 'checkbox', value: 'Remember Me' }),
                                                    ' Remember Me'
                                                )
                                            ),
                                            React.createElement(
                                                'button',
                                                { className: 'btn btn-lg btn-success btn-block' },
                                                'Login'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(React.Component);

var Toolbar = function (_React$Component3) {
    _inherits(Toolbar, _React$Component3);

    function Toolbar() {
        _classCallCheck(this, Toolbar);

        return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
    }

    _createClass(Toolbar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            document.body.style.backgroundImage = "none";
        }
    }, {
        key: 'onClicked',
        value: function onClicked() {

            window.location.reload();
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                Navbar,
                null,
                React.createElement(
                    'div',
                    { className: 'navbar-header' },
                    React.createElement(
                        'div',
                        { className: 'navbar-brand' },
                        React.createElement(
                            Link,
                            { to: '/', onClick: this.onClicked.bind(this) },
                            'React-Bootstrap'
                        )
                    )
                ),
                React.createElement(
                    Nav,
                    null,
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            Link,
                            { to: '/master' },
                            'Master'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            Link,
                            { to: '/detail' },
                            'Details'
                        )
                    ),
                    React.createElement(
                        NavDropdown,
                        { eventKey: 3, title: 'Dropdown', id: 'basic-nav-dropdown' },
                        React.createElement(
                            MenuItem,
                            { eventKey: 3.1 },
                            'Actions'
                        ),
                        React.createElement(
                            MenuItem,
                            { eventKey: 3.2 },
                            'Another action'
                        ),
                        React.createElement(
                            MenuItem,
                            { eventKey: 3.3 },
                            'Something else here'
                        ),
                        React.createElement(MenuItem, { divider: true }),
                        React.createElement(
                            MenuItem,
                            { eventKey: 3.4 },
                            'Separated link'
                        )
                    ),
                    React.createElement(
                        'li',
                        { style: { 'float': 'right', 'position': 'absolute', 'left': '80%' } },
                        React.createElement(
                            Link,
                            { to: '/detail' },
                            'Login'
                        )
                    )
                )
            );
        }
    }]);

    return Toolbar;
}(React.Component);

var About = function (_React$Component4) {
    _inherits(About, _React$Component4);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'h1',
                null,
                'About'
            );
        }
    }]);

    return About;
}(React.Component);

var Repos = function (_React$Component5) {
    _inherits(Repos, _React$Component5);

    function Repos() {
        _classCallCheck(this, Repos);

        return _possibleConstructorReturn(this, (Repos.__proto__ || Object.getPrototypeOf(Repos)).apply(this, arguments));
    }

    _createClass(Repos, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'h1',
                null,
                'Repos'
            );
        }
    }]);

    return Repos;
}(React.Component);

/*components*/


var masterAPI = [{

    "id": "1",
    "date": "2017-04-01",
    "name": "Juan Perez",
    "items": [{
        "id": "1",
        "name": "sample",
        "details": "data"
    }],
    "status": "pending"
}];

var Master = function (_React$Component6) {
    _inherits(Master, _React$Component6);

    function Master() {
        _classCallCheck(this, Master);

        var _this7 = _possibleConstructorReturn(this, (Master.__proto__ || Object.getPrototypeOf(Master)).call(this));

        _this7.state = {
            showModal: false,
            masterDetail: [{

                "id": "1",
                "firstname": "juanperez",
                "item": "masterdetail"
            }]
        };
        return _this7;
    }

    _createClass(Master, [{
        key: 'close',
        value: function close() {
            this.setState({
                showModal: false
            });
        }
    }, {
        key: 'open',
        value: function open() {
            this.setState({
                showModal: true
            });
        }
    }, {
        key: 'onSaveMaster',
        value: function onSaveMaster(event) {

            event.preventDefault();

            var newMaster = {

                "id": Date.now(),
                "date": "2017-10-02",
                "name": "empty",
                "item": this.state.masterDetail,
                "status": "pending"

            };

            masterAPI.push(newMaster);

            this.setState({
                showModal: false,
                masterDetail: []
            });
        }
    }, {
        key: 'onSaveDetail',
        value: function onSaveDetail(event) {

            event.preventDefault();
            console.log(event.target.firstname.value);
            console.log(event.target.suggest.value);

            var nextState = this.state.masterDetail;

            var newItem = {

                "id": Date.now(),
                "firstname": event.target.firstname.value,
                "item": event.target.suggest.value
            };

            nextState.push(newItem);

            this.setState({

                masterDetail: nextState
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    Row,
                    null,
                    React.createElement(MasterSearch, null)
                ),
                React.createElement(
                    Row,
                    null,
                    React.createElement(
                        'div',
                        { className: 'pull-right' },
                        React.createElement(
                            Button,
                            { onClick: this.open.bind(this) },
                            'Add Master'
                        ),
                        React.createElement(MasterModal, { masterDetail: this.state.masterDetail,
                            showModal: this.state.showModal,
                            open: this.open,
                            close: this.close.bind(this),
                            masterCallback: {
                                onsavedetail: this.onSaveDetail.bind(this),
                                onsavemaster: this.onSaveMaster.bind(this)
                            }
                        })
                    )
                ),
                React.createElement('br', null),
                React.createElement(
                    Row,
                    null,
                    React.createElement(
                        Panel,
                        null,
                        React.createElement(MasterTable, { masterData: masterAPI
                        }),
                        React.createElement(
                            'div',
                            { className: 'pull-right' },
                            React.createElement(MasterPagination, null)
                        )
                    )
                )
            );
        }
    }]);

    return Master;
}(React.Component);

var MasterPagination = function (_React$Component7) {
    _inherits(MasterPagination, _React$Component7);

    function MasterPagination() {
        _classCallCheck(this, MasterPagination);

        return _possibleConstructorReturn(this, (MasterPagination.__proto__ || Object.getPrototypeOf(MasterPagination)).apply(this, arguments));
    }

    _createClass(MasterPagination, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(Pagination, {
                    prev: true,
                    next: true,
                    first: true,
                    last: true,
                    ellipsis: true,
                    boundaryLinks: true,
                    bsSize: 'small',
                    items: 5
                }),
                React.createElement('br', null)
            );
        }
    }]);

    return MasterPagination;
}(React.Component);

var MasterSearch = function (_React$Component8) {
    _inherits(MasterSearch, _React$Component8);

    function MasterSearch() {
        _classCallCheck(this, MasterSearch);

        return _possibleConstructorReturn(this, (MasterSearch.__proto__ || Object.getPrototypeOf(MasterSearch)).apply(this, arguments));
    }

    _createClass(MasterSearch, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    Panel,
                    { header: 'Search Master' },
                    React.createElement(
                        'form',
                        null,
                        React.createElement(
                            'div',
                            { className: 'form-group' },
                            React.createElement(
                                'div',
                                { className: 'col-md-2 col-sm-2' },
                                React.createElement(
                                    'label',
                                    null,
                                    'Search:'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-md-10 col-sm-10' },
                                React.createElement('input', { type: 'text', className: 'form-control', id: 'first_name', name: 'first_name' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return MasterSearch;
}(React.Component);

var MasterTable = function (_React$Component9) {
    _inherits(MasterTable, _React$Component9);

    function MasterTable() {
        _classCallCheck(this, MasterTable);

        return _possibleConstructorReturn(this, (MasterTable.__proto__ || Object.getPrototypeOf(MasterTable)).apply(this, arguments));
    }

    _createClass(MasterTable, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    Table,
                    { striped: true, bordered: true, condensed: true, hover: true },
                    React.createElement(
                        'thead',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'th',
                                null,
                                '#'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Date'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Name'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Items'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Status'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Actions'
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        this.props.masterData.map(function (master, index) {
                            return React.createElement(MasterTableBody, {
                                key: master.id,
                                id: master.id,

                                date: master.date,

                                name: master.name,

                                items: master.name,

                                status: master.status
                            });
                        })
                    )
                )
            );
        }
    }]);

    return MasterTable;
}(React.Component);

var MasterTableBody = function (_React$Component10) {
    _inherits(MasterTableBody, _React$Component10);

    function MasterTableBody() {
        _classCallCheck(this, MasterTableBody);

        return _possibleConstructorReturn(this, (MasterTableBody.__proto__ || Object.getPrototypeOf(MasterTableBody)).apply(this, arguments));
    }

    _createClass(MasterTableBody, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    null,
                    this.props.id
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.date
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.name
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.items
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.status
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        Button,
                        null,
                        React.createElement('i', { className: 'fa fa-eye',
                            'aria-hidden': 'true' })
                    ),
                    ' ',
                    React.createElement(
                        Button,
                        null,
                        React.createElement('i', { className: 'fa fa-trash',
                            'aria-hidden': 'true' })
                    )
                )
            );
        }
    }]);

    return MasterTableBody;
}(React.Component);

var MasterModalButton = function (_React$Component11) {
    _inherits(MasterModalButton, _React$Component11);

    function MasterModalButton() {
        _classCallCheck(this, MasterModalButton);

        return _possibleConstructorReturn(this, (MasterModalButton.__proto__ || Object.getPrototypeOf(MasterModalButton)).apply(this, arguments));
    }

    _createClass(MasterModalButton, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                Row,
                null,
                React.createElement(
                    Col,
                    { md: 12 },
                    React.createElement(
                        Button,
                        {
                            style: { 'margin-left': '70%' },
                            bsStyle: 'default',

                            onClick: this.props.masterCallback.onsavemaster.bind(this) },
                        'Save'
                    )
                )
            );
        }
    }]);

    return MasterModalButton;
}(React.Component);

var MasterModal = function (_React$Component12) {
    _inherits(MasterModal, _React$Component12);

    function MasterModal() {
        _classCallCheck(this, MasterModal);

        return _possibleConstructorReturn(this, (MasterModal.__proto__ || Object.getPrototypeOf(MasterModal)).apply(this, arguments));
    }

    _createClass(MasterModal, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    Modal,
                    { show: this.props.showModal, onHide: this.props.close },
                    React.createElement(
                        Modal.Header,
                        { closeButton: true },
                        React.createElement(
                            Modal.Title,
                            null,
                            'Modal heading'
                        )
                    ),
                    React.createElement(
                        Modal.Body,
                        null,
                        React.createElement(MasterModalField, {
                            masterCallback: this.props.masterCallback
                        }),
                        React.createElement('br', null),
                        React.createElement(MasterModalTable, {

                            masterDetail: this.props.masterDetail,

                            masterCallback: this.props.masterCallback
                        }),
                        React.createElement(MasterModalButton, {

                            masterCallback: this.props.masterCallback
                        })
                    )
                )
            );
        }
    }]);

    return MasterModal;
}(React.Component);

var languages = [{
    name: 'C',
    year: 1972
}, {
    name: 'C#',
    year: 2000
}, {
    name: 'C++',
    year: 1983
}, {
    name: 'Clojure',
    year: 2007
}, {
    name: 'Elm',
    year: 2012
}, {
    name: 'Go',
    year: 2009
}, {
    name: 'Haskell',
    year: 1990
}, {
    name: 'Java',
    year: 1995
}, {
    name: 'Javascript',
    year: 1995
}, {
    name: 'Perl',
    year: 1987
}, {
    name: 'PHP',
    year: 1995
}, {
    name: 'Python',
    year: 1991
}, {
    name: 'Ruby',
    year: 1995
}, {
    name: 'Scala',
    year: 2003
}];

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {

    var escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    var regex = new RegExp('^' + escapedValue, 'i');

    return languages.filter(function (language) {
        return regex.test(language.name);
    });
}

function renderSuggestion(suggestion) {
    return React.createElement(
        'span',
        null,
        suggestion.name
    );
}

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

var MasterModalField = function (_React$Component13) {
    _inherits(MasterModalField, _React$Component13);

    function MasterModalField() {
        _classCallCheck(this, MasterModalField);

        var _this14 = _possibleConstructorReturn(this, (MasterModalField.__proto__ || Object.getPrototypeOf(MasterModalField)).call(this));

        _this14.state = {

            value: '',
            suggestions: []
        };
        return _this14;
    }

    _createClass(MasterModalField, [{
        key: 'onChange',
        value: function onChange(event, _ref) {
            var newValue = _ref.newValue,
                method = _ref.method;

            this.setState({

                value: newValue
            });
        }
    }, {
        key: 'onSuggestionsFetchRequested',
        value: function onSuggestionsFetchRequested(_ref2) {
            var value = _ref2.value;

            this.setState({

                suggestions: getSuggestions(value)
            });
        }
    }, {
        key: 'onSuggestionsClearRequested',
        value: function onSuggestionsClearRequested() {

            this.setState({
                suggestions: []
            });
        }
    }, {
        key: 'onSave',
        value: function onSave(event) {

            event.preventDefault();

            console.log(event.target.firstname.value);
            console.log(this.state.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                value = _state.value,
                suggestions = _state.suggestions;

            var inputProps = {
                placeholder: "Type 'c'",
                value: value,
                onChange: this.onChange.bind(this)
            };

            return React.createElement(
                Grid,
                null,
                React.createElement(
                    Row,
                    null,
                    React.createElement(
                        Form,
                        { horizontal: true, onSubmit: this.props.masterCallback.onsavedetail.bind(this) },
                        React.createElement(
                            Row,
                            null,
                            React.createElement(
                                FormGroup,
                                { controlId: 'formHorizontalName' },
                                React.createElement(
                                    Col,
                                    { componentClass: ControlLabel, md: 2, sm: 2 },
                                    'Name'
                                ),
                                React.createElement(
                                    Col,
                                    { md: 3, sm: 6 },
                                    React.createElement(FormControl, { type: 'text', name: 'firstname', placeholder: 'Name' })
                                )
                            )
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            Row,
                            null,
                            React.createElement(
                                FormGroup,
                                { controlId: 'formHorizontalItem' },
                                React.createElement(
                                    Col,
                                    { componentClass: ControlLabel, md: 2, sm: 2 },
                                    'Item'
                                ),
                                React.createElement(
                                    Col,
                                    { md: 3, sm: 6 },
                                    React.createElement(Autosuggest, {
                                        suggestions: suggestions,
                                        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested.bind(this),
                                        onSuggestionsClearRequested: this.onSuggestionsClearRequested.bind(this),
                                        renderSuggestion: renderSuggestion,
                                        getSuggestionValue: getSuggestionValue,
                                        inputProps: inputProps
                                    })
                                ),
                                React.createElement(
                                    Col,
                                    { md: 2, sm: 2 },
                                    React.createElement(
                                        Button,
                                        { type: 'submit' },
                                        React.createElement('i', { className: 'fa fa-plus', 'aria-hidden': 'true' })
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            Row,
                            null,
                            React.createElement('input', { style: { 'width': '70px', 'display': 'none' }, type: 'text', name: 'suggest', placeholder: 'Name', value: this.state.value })
                        )
                    )
                )
            );
        }
    }]);

    return MasterModalField;
}(React.Component);

var MasterModalTable = function (_React$Component14) {
    _inherits(MasterModalTable, _React$Component14);

    function MasterModalTable() {
        _classCallCheck(this, MasterModalTable);

        return _possibleConstructorReturn(this, (MasterModalTable.__proto__ || Object.getPrototypeOf(MasterModalTable)).apply(this, arguments));
    }

    _createClass(MasterModalTable, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    Table,
                    { striped: true, bordered: true, condensed: true, hover: true },
                    React.createElement(
                        'thead',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'th',
                                null,
                                '#'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'First Name'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Last Name'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Username'
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        this.props.masterDetail.map(function (masterdetail, index) {
                            return React.createElement(MasterModalTableBody, {

                                key: index,

                                id: masterdetail.id,

                                firstname: masterdetail.firstname,

                                item: masterdetail.item
                            });
                        })
                    )
                )
            );
        }
    }]);

    return MasterModalTable;
}(React.Component);

var MasterModalTableBody = function (_React$Component15) {
    _inherits(MasterModalTableBody, _React$Component15);

    function MasterModalTableBody() {
        _classCallCheck(this, MasterModalTableBody);

        return _possibleConstructorReturn(this, (MasterModalTableBody.__proto__ || Object.getPrototypeOf(MasterModalTableBody)).apply(this, arguments));
    }

    _createClass(MasterModalTableBody, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    null,
                    this.props.key
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.id
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.firstname
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.item
                )
            );
        }
    }]);

    return MasterModalTableBody;
}(React.Component);

var Detail = function (_React$Component16) {
    _inherits(Detail, _React$Component16);

    function Detail() {
        _classCallCheck(this, Detail);

        var _this17 = _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).call(this));

        _this17.state = {
            showModal: false,
            detailData: [{

                "id": "1",
                "date": "2017-10-02",
                "name": "detail",
                "item": "detailcomponent"
            }]
        };
        return _this17;
    }

    _createClass(Detail, [{
        key: 'close',
        value: function close() {
            this.setState({
                showModal: false
            });
        }
    }, {
        key: 'open',
        value: function open() {
            this.setState({
                showModal: true
            });
        }
    }, {
        key: 'onSaveDetail',
        value: function onSaveDetail(event) {

            event.preventDefault();

            var newDetail = {

                "id": Date.now(),
                "date": "2017-10-02",
                "name": event.target.name.value,
                "item": event.target.name.value
            };

            var nextState = this.state.detailData;

            nextState.push(newDetail);

            this.setState({

                detailData: nextState,
                showModal: false
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                Grid,
                null,
                React.createElement(
                    Row,
                    null,
                    React.createElement(DetailSearch, null)
                ),
                React.createElement(
                    Row,
                    null,
                    React.createElement(
                        'div',
                        { className: 'pull-right' },
                        React.createElement(
                            Button,
                            { onClick: this.open.bind(this) },
                            'Add Detail'
                        ),
                        React.createElement(DetailModal, {
                            showModal: this.state.showModal,
                            detailCallback: {
                                open: this.open,
                                close: this.close.bind(this),
                                onsavedetail: this.onSaveDetail.bind(this)
                            }
                        })
                    )
                ),
                React.createElement('br', null),
                React.createElement(
                    Row,
                    null,
                    React.createElement(DetailTable, {
                        detailData: this.state.detailData
                    })
                )
            );
        }
    }]);

    return Detail;
}(React.Component);

var DetailPagination = function (_React$Component17) {
    _inherits(DetailPagination, _React$Component17);

    function DetailPagination() {
        _classCallCheck(this, DetailPagination);

        var _this18 = _possibleConstructorReturn(this, (DetailPagination.__proto__ || Object.getPrototypeOf(DetailPagination)).call(this));

        _this18.state = {
            activePage: 1
        };
        return _this18;
    }

    _createClass(DetailPagination, [{
        key: 'handleSelect',
        value: function handleSelect(eventKey) {
            this.setState({
                activePage: eventKey
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(Pagination, {
                prev: true,
                next: true,
                first: true,
                last: true,
                ellipsis: true,
                boundaryLinks: true,
                items: 5,
                maxButtons: 5,
                activePage: this.state.activePage,
                onSelect: this.handleSelect
            });
        }
    }]);

    return DetailPagination;
}(React.Component);

var DetailSearch = function (_React$Component18) {
    _inherits(DetailSearch, _React$Component18);

    function DetailSearch() {
        _classCallCheck(this, DetailSearch);

        return _possibleConstructorReturn(this, (DetailSearch.__proto__ || Object.getPrototypeOf(DetailSearch)).apply(this, arguments));
    }

    _createClass(DetailSearch, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    Panel,
                    { header: 'Search Detail' },
                    React.createElement(
                        'form',
                        null,
                        React.createElement(
                            'div',
                            { className: 'form-group' },
                            React.createElement(
                                'div',
                                { className: 'col-md-2 col-sm-2' },
                                React.createElement(
                                    'label',
                                    null,
                                    'Search:'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-md-10 col-sm-10' },
                                React.createElement('input', { type: 'text', className: 'form-control', id: 'first_name', name: 'first_name' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DetailSearch;
}(React.Component);

var DetailTable = function (_React$Component19) {
    _inherits(DetailTable, _React$Component19);

    function DetailTable() {
        _classCallCheck(this, DetailTable);

        return _possibleConstructorReturn(this, (DetailTable.__proto__ || Object.getPrototypeOf(DetailTable)).apply(this, arguments));
    }

    _createClass(DetailTable, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                Panel,
                { header: 'Search List' },
                React.createElement(
                    Table,
                    { striped: true, bordered: true, condensed: true, hover: true },
                    React.createElement(
                        'thead',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'th',
                                null,
                                '#'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'First Name'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Last Name'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Username'
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        this.props.detailData.map(function (detail, index) {
                            return React.createElement(DetailTableBody, {
                                key: index,
                                id: detail.id,
                                name: detail.name,
                                item: detail.item
                            });
                        })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'pull-right' },
                    React.createElement(DetailPagination, null)
                )
            );
        }
    }]);

    return DetailTable;
}(React.Component);

var DetailTableBody = function (_React$Component20) {
    _inherits(DetailTableBody, _React$Component20);

    function DetailTableBody() {
        _classCallCheck(this, DetailTableBody);

        return _possibleConstructorReturn(this, (DetailTableBody.__proto__ || Object.getPrototypeOf(DetailTableBody)).apply(this, arguments));
    }

    _createClass(DetailTableBody, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    null,
                    this.props.key
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.id
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.name
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.item
                )
            );
        }
    }]);

    return DetailTableBody;
}(React.Component);

var DetailModal = function (_React$Component21) {
    _inherits(DetailModal, _React$Component21);

    function DetailModal() {
        _classCallCheck(this, DetailModal);

        return _possibleConstructorReturn(this, (DetailModal.__proto__ || Object.getPrototypeOf(DetailModal)).apply(this, arguments));
    }

    _createClass(DetailModal, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    Modal,
                    { show: this.props.showModal, onHide: this.props.detailCallback.close },
                    React.createElement(
                        Modal.Header,
                        { closeButton: true },
                        React.createElement(
                            Modal.Title,
                            null,
                            'Modal heading'
                        )
                    ),
                    React.createElement(
                        Form,
                        { horizontal: true, onSubmit: this.props.detailCallback.onsavedetail.bind(this) },
                        React.createElement(
                            Modal.Body,
                            null,
                            React.createElement(
                                FormGroup,
                                { controlId: 'formHorizontalname' },
                                React.createElement(
                                    Col,
                                    { componentClass: ControlLabel, md: 2, sm: 2 },
                                    'Name'
                                ),
                                React.createElement(
                                    Col,
                                    { md: 6, sm: 10 },
                                    React.createElement(FormControl, { type: 'text', name: 'name', placeholder: 'Name' })
                                )
                            ),
                            React.createElement(
                                FormGroup,
                                { controlId: 'formHorizontalItem' },
                                React.createElement(
                                    Col,
                                    { componentClass: ControlLabel, md: 2, sm: 2 },
                                    'Item'
                                ),
                                React.createElement(
                                    Col,
                                    { md: 6, sm: 10 },
                                    React.createElement(FormControl, { type: 'text', name: 'item', placeholder: 'Item' })
                                )
                            )
                        ),
                        React.createElement(
                            Modal.Footer,
                            null,
                            React.createElement(
                                Button,
                                { type: 'submit', pullRight: true },
                                'Save'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DetailModal;
}(React.Component);

ReactDOM.render(React.createElement(
    Router,
    { history: browserHistory },
    React.createElement(
        Route,
        { path: '/', component: App },
        React.createElement(Route, { path: 'about', component: About }),
        React.createElement(Route, { path: 'repos', component: Repos }),
        React.createElement(Route, { path: 'detail', component: Detail }),
        React.createElement(Route, { path: 'master', component: Master })
    )
), document.getElementById('contents'));