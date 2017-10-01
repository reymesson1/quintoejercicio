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

var Row = ReactBootstrap.Row;
var Panel = ReactBootstrap.Panel;

var Pagination = ReactBootstrap.Pagination;

var Form = ReactBootstrap.Form;
var FormGroup = ReactBootstrap.FormGroup;
var FormControl = ReactBootstrap.FormControl;
var ControlLabel = ReactBootstrap.ControlLabel;
var Col = ReactBootstrap.Col;

var Table = ReactBootstrap.Table;

var API_URL = 'http://localhost';
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
                            { className: 'col-md-4 col-md-offset-4 col-sm-8  col-xs-12' },
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

            document.body.style.backgroundImage = 'none';
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
                            { to: '/' },
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
                            { to: '/repos' },
                            'Details'
                        )
                    ),
                    React.createElement(
                        NavDropdown,
                        { eventKey: 3, title: 'Dropdown',
                            id: 'basic-nav-dropdown' },
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

        _this7.state = { showModal: false };
        return _this7;
    }

    _createClass(Master, [{
        key: 'close',
        value: function close() {
            this.setState({ showModal: false });
        }
    }, {
        key: 'open',
        value: function open() {
            this.setState({ showModal: true });
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
                        React.createElement(MasterModal, {
                            showModal: this.state.showModal,
                            open: this.open,
                            close: this.close
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

var MasterModalTable = function (_React$Component7) {
    _inherits(MasterModalTable, _React$Component7);

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
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                '1'
                            ),
                            React.createElement(
                                'td',
                                null,
                                'Mark'
                            ),
                            React.createElement(
                                'td',
                                null,
                                'Otto'
                            ),
                            React.createElement(
                                'td',
                                null,
                                '@mdo'
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                '2'
                            ),
                            React.createElement(
                                'td',
                                null,
                                'Jacob'
                            ),
                            React.createElement(
                                'td',
                                null,
                                'Thornton'
                            ),
                            React.createElement(
                                'td',
                                null,
                                '@fat'
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                null,
                                '3'
                            ),
                            React.createElement(
                                'td',
                                { colSpan: '2' },
                                'Larry the Bird'
                            ),
                            React.createElement(
                                'td',
                                null,
                                '@twitter'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return MasterModalTable;
}(React.Component);

var MasterModalSearch = function (_React$Component8) {
    _inherits(MasterModalSearch, _React$Component8);

    function MasterModalSearch() {
        _classCallCheck(this, MasterModalSearch);

        return _possibleConstructorReturn(this, (MasterModalSearch.__proto__ || Object.getPrototypeOf(MasterModalSearch)).apply(this, arguments));
    }

    _createClass(MasterModalSearch, [{
        key: 'render',
        value: function render() {

            return React.createElement(
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
            );
        }
    }]);

    return MasterModalSearch;
}(React.Component);

var MasterModal = function (_React$Component9) {
    _inherits(MasterModal, _React$Component9);

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
                    { show: this.props.showModal,
                        onHide: this.props.close.bind(this) },
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
                        React.createElement(MasterModalSearch, null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement(MasterModalTable, null)
                    )
                )
            );
        }
    }]);

    return MasterModal;
}(React.Component);

var MasterPagination = function (_React$Component10) {
    _inherits(MasterPagination, _React$Component10);

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
                    bsSize: 'small',
                    items: 10
                }),
                React.createElement('br', null)
            );
        }
    }]);

    return MasterPagination;
}(React.Component);

var MasterSearch = function (_React$Component11) {
    _inherits(MasterSearch, _React$Component11);

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
                                React.createElement('input', { type: 'text', className: 'form-control',
                                    id: 'first_name', name: 'first_name' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return MasterSearch;
}(React.Component);

var MasterTable = function (_React$Component12) {
    _inherits(MasterTable, _React$Component12);

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

var MasterTableBody = function (_React$Component13) {
    _inherits(MasterTableBody, _React$Component13);

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
                        React.createElement('i', { className: 'fa fa-eye', 'aria-hidden': 'true' })
                    ),
                    ' ',
                    React.createElement(
                        Button,
                        null,
                        React.createElement('i', { className: 'fa fa-trash', 'aria-hidden': 'true' })
                    )
                )
            );
        }
    }]);

    return MasterTableBody;
}(React.Component);

ReactDOM.render(React.createElement(
    Router,
    { history: browserHistory },
    React.createElement(
        Route,
        { path: '/', component: App },
        React.createElement(Route, { path: 'about', component: About }),
        React.createElement(Route, { path: 'repos', component: Repos }),
        React.createElement(Route, { path: 'master', component: Master })
    )
), document.getElementById('contents'));