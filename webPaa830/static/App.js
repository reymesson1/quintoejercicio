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

var moment = moment;

var API_URL = 'http://159.203.156.208';

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
                React.createElement(SidebarContainer, null),
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

var SidebarContainer = function (_React$Component2) {
    _inherits(SidebarContainer, _React$Component2);

    function SidebarContainer() {
        _classCallCheck(this, SidebarContainer);

        return _possibleConstructorReturn(this, (SidebarContainer.__proto__ || Object.getPrototypeOf(SidebarContainer)).apply(this, arguments));
    }

    _createClass(SidebarContainer, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                { className: 'sidebar', style: { display: 'none' } },
                React.createElement(
                    'h1',
                    null,
                    '\xA0'
                ),
                React.createElement(
                    'ul',
                    null,
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            Link,
                            { to: '/dashboard' },
                            React.createElement('i', { className: 'fa\nfa-tachometer', 'aria-hidden': 'true' }),
                            '\xA0Dashboard'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            Link,
                            { to: '/orders' },
                            React.createElement('i', { className: 'fa fa-plus',
                                'aria-hidden': 'true' }),
                            '\xA0Orders'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            Link,
                            { to: '/accounts' },
                            React.createElement('i', { className: 'fa\nfa-university', 'aria-hidden': 'true' }),
                            '\xA0Accounts'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            Link,
                            { to: '/tasks' },
                            React.createElement('i', { className: 'fa fa-tasks',
                                'aria-hidden': 'true' }),
                            '\xA0Tasks'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            Link,
                            { to: '/schedule' },
                            React.createElement('i', { className: 'fa\nfa-calendar', 'aria-hidden': 'true' }),
                            '\xA0Schedule'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            Link,
                            { to: '/jobs' },
                            React.createElement('i', { className: 'fa fa-tasks',
                                'aria-hidden': 'true' }),
                            '\xA0Jobs'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            Link,
                            { to: '/timesheet' },
                            React.createElement('i', { className: 'fa\nfa-user', 'aria-hidden': 'true' }),
                            '\xA0TimeSheet'
                        )
                    )
                )
            );
        }
    }]);

    return SidebarContainer;
}(React.Component);

var Actions = function (_React$Component3) {
    _inherits(Actions, _React$Component3);

    function Actions() {
        _classCallCheck(this, Actions);

        var _this4 = _possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).call(this));

        _this4.state = {

            masterAPI: [],
            parameter: ''
        };

        return _this4;
    }

    _createClass(Actions, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this5 = this;

            fetch(API_URL + '/master', { headers: API_HEADERS }).then(function (response) {
                return response.json();
            }).then(function (responseData) {
                _this5.setState({

                    masterAPI: responseData
                });
            }).catch(function (error) {
                console.log('Error fetching and parsing data', error);
            });

            this.setState({

                parameter: this.props.params.actionid
            });
        }
    }, {
        key: 'onPrinted',
        value: function onPrinted() {

            window.print();

            window.location.href = '/';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(ActionsTable, {
                    parameter: this.state.parameter,

                    masterAPI: this.state.masterAPI.filter(function (master) {
                        return master.id == _this6.state.parameter;
                    })
                }),
                React.createElement(
                    Button,
                    { onClick: this.onPrinted.bind(this) },
                    'i\xA0'
                )
            );
        }
    }]);

    return Actions;
}(React.Component);

var ActionsTable = function (_React$Component4) {
    _inherits(ActionsTable, _React$Component4);

    function ActionsTable() {
        _classCallCheck(this, ActionsTable);

        return _possibleConstructorReturn(this, (ActionsTable.__proto__ || Object.getPrototypeOf(ActionsTable)).apply(this, arguments));
    }

    _createClass(ActionsTable, [{
        key: 'render',
        value: function render() {

            var today = moment(new Date()).format('DD-MM-YYYY');

            return React.createElement(
                'div',
                { id: 'printcss', style: { 'margin': '0' } },
                React.createElement(
                    Grid,
                    null,
                    React.createElement(
                        Row,
                        null,
                        React.createElement(
                            Col,
                            { xs: 12 },
                            React.createElement('img', { src: '/logoprint.png' }),
                            React.createElement(
                                'h5',
                                null,
                                '"Las mejores adaptaciones de pelos de todo el pais"'
                            ),
                            React.createElement(
                                'h5',
                                null,
                                'Ubicado en la Plaza Carmen Renata III'
                            ),
                            React.createElement(
                                'h5',
                                null,
                                'Tel.: 809-937-5052 Cel:.809-817-3349'
                            ),
                            React.createElement('br', null),
                            React.createElement('br', null),
                            React.createElement(
                                'h5',
                                { className: 'col-xs-offset-7' },
                                'Fecha: ',
                                today
                            ),
                            React.createElement('br', null)
                        )
                    ),
                    React.createElement(
                        Row,
                        null,
                        React.createElement(
                            Col,
                            { xs: 12 },
                            React.createElement(
                                Table,
                                { striped: true, bordered: true, condensed: true, hover: true, style: { 'position': 'relative', 'width': '55%', 'margin': '0' } },
                                React.createElement(
                                    'thead',
                                    null,
                                    React.createElement(
                                        'tr',
                                        null,
                                        React.createElement(
                                            'th',
                                            { style: { 'width': '15px', 'font-size': '25px', 'border-spacing': '0 30px' } },
                                            '#'
                                        ),
                                        React.createElement(
                                            'th',
                                            { style: { 'width': '15px', 'font-size': '25px' } },
                                            'Articulo'
                                        ),
                                        React.createElement(
                                            'th',
                                            { style: { 'width': '15px', 'font-size': '25px' } },
                                            'Precio'
                                        ),
                                        React.createElement(
                                            'th',
                                            { style: { 'width': '15px', 'font-size': '25px' } },
                                            'Peluquera'
                                        )
                                    )
                                ),
                                this.props.masterAPI.map(function (master, index) {
                                    return React.createElement(ActionsTableBody, {
                                        key: index,
                                        index: index,
                                        id: master.id,
                                        item: master.item
                                    });
                                }),
                                React.createElement(
                                    'tfoot',
                                    null,
                                    React.createElement(ActionsTableBodyFooter, {
                                        parameter: this.props.parameter,
                                        masterAPI: this.props.masterAPI
                                    })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ActionsTable;
}(React.Component);

var ActionsTableBodyFooter = function (_React$Component5) {
    _inherits(ActionsTableBodyFooter, _React$Component5);

    function ActionsTableBodyFooter() {
        _classCallCheck(this, ActionsTableBodyFooter);

        return _possibleConstructorReturn(this, (ActionsTableBodyFooter.__proto__ || Object.getPrototypeOf(ActionsTableBodyFooter)).apply(this, arguments));
    }

    _createClass(ActionsTableBodyFooter, [{
        key: 'render',
        value: function render() {

            var nextState = this.props.masterAPI;

            var zoom = 0;

            if (nextState[0]) {

                zoom = nextState[0].project;
            }

            return React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    null,
                    '\xA0'
                ),
                React.createElement(
                    'td',
                    null,
                    '\xA0'
                ),
                React.createElement(
                    'td',
                    { style: { 'width': '15px', 'font-size': '20px' } },
                    'Total'
                ),
                React.createElement(
                    'td',
                    { style: { 'width': '15px', 'font-size': '20px' } },
                    'RD$',
                    zoom,
                    '.00'
                ),
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement('br', null)
            );
        }
    }]);

    return ActionsTableBodyFooter;
}(React.Component);

var ActionsTableBody = function (_React$Component6) {
    _inherits(ActionsTableBody, _React$Component6);

    function ActionsTableBody() {
        _classCallCheck(this, ActionsTableBody);

        return _possibleConstructorReturn(this, (ActionsTableBody.__proto__ || Object.getPrototypeOf(ActionsTableBody)).apply(this, arguments));
    }

    _createClass(ActionsTableBody, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'tbody',
                null,
                this.props.item.map(function (master, index) {
                    return React.createElement(ActionsTableBodyDetail, {
                        key: index,
                        index: index + 1,
                        id: master.id,
                        name: master.firstname,
                        item: master.item,
                        development: master.development,
                        project: master.project
                    });
                })
            );
        }
    }]);

    return ActionsTableBody;
}(React.Component);

var ActionsTableBodyDetail = function (_React$Component7) {
    _inherits(ActionsTableBodyDetail, _React$Component7);

    function ActionsTableBodyDetail() {
        _classCallCheck(this, ActionsTableBodyDetail);

        return _possibleConstructorReturn(this, (ActionsTableBodyDetail.__proto__ || Object.getPrototypeOf(ActionsTableBodyDetail)).apply(this, arguments));
    }

    _createClass(ActionsTableBodyDetail, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    { style: { 'font-size': '20px' } },
                    '\xA0'
                ),
                React.createElement(
                    'td',
                    { style: { 'font-size': '20px' } },
                    this.props.item
                ),
                React.createElement(
                    'td',
                    { style: { 'font-size': '20px' } },
                    this.props.project,
                    '.00'
                ),
                React.createElement(
                    'td',
                    { style: { 'font-size': '20px' } },
                    this.props.development
                )
            );
        }
    }]);

    return ActionsTableBodyDetail;
}(React.Component);

var Login = function (_React$Component8) {
    _inherits(Login, _React$Component8);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                { id: 'login' },
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
                                        {
                                            onSubmit: this.props.setcookie.bind(this) },
                                        React.createElement(
                                            'fieldset',
                                            null,
                                            React.createElement(
                                                'div',
                                                { className: 'form-group' },
                                                React.createElement('input', {
                                                    className: 'form-control', placeholder: 'E-mail', name: 'email',
                                                    type: 'text' })
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'form-group' },
                                                React.createElement('input', {
                                                    className: 'form-control', placeholder: 'Password', name: 'password',
                                                    type: 'password' })
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'checkbox' },
                                                React.createElement(
                                                    'label',
                                                    null,
                                                    React.createElement('input', { name: 'remember',
                                                        type: 'checkbox', value: 'Remember Me' }),
                                                    ' Remember Me'
                                                )
                                            ),
                                            React.createElement(
                                                'button',
                                                { className: 'btn\nbtn-lg btn-success btn-block' },
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

var Toolbar = function (_React$Component9) {
    _inherits(Toolbar, _React$Component9);

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
                            { to: '/',
                                onClick: this.onClicked.bind(this) },
                            'Info-Solutions SYS'
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
                            'Facturacion'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            Link,
                            { to: '/detail' },
                            'Inventario'
                        )
                    ),
                    React.createElement(
                        NavDropdown,
                        { eventKey: 3, title: 'Reportes',
                            id: 'basic-nav-dropdown' },
                        React.createElement(
                            MenuItem,
                            { eventKey: 3.1 },
                            React.createElement(
                                Link,
                                {
                                    to: '/partials' },
                                'Cuadre'
                            )
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
                        {
                            style: { 'float': 'right', 'position': 'absolute', 'left': '80%' } },
                        React.createElement(
                            Link,
                            {
                                onClick: this.onClicked, to: '/logout' },
                            'Logout'
                        )
                    )
                )
            );
        }
    }]);

    return Toolbar;
}(React.Component);

var About = function (_React$Component10) {
    _inherits(About, _React$Component10);

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

var Repos = function (_React$Component11) {
    _inherits(Repos, _React$Component11);

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
                'Repos ',
                this.props.params.repo_name
            );
        }
    }]);

    return Repos;
}(React.Component);

var Master = function (_React$Component12) {
    _inherits(Master, _React$Component12);

    function Master() {
        _classCallCheck(this, Master);

        var _this15 = _possibleConstructorReturn(this, (Master.__proto__ || Object.getPrototypeOf(Master)).call(this));

        _this15.state = {
            showModal: false,
            filterText: '',
            activePage: 1,
            masterAPI: [],
            masterDetail: []
        };
        return _this15;
    }

    _createClass(Master, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this16 = this;

            fetch(API_URL + '/master', { headers: API_HEADERS }).then(function (response) {
                return response.json();
            }).then(function (responseData) {
                _this16.setState({

                    masterAPI: responseData
                });
            }).catch(function (error) {
                console.log('Error fetching and parsing data', error);
            });

            this.setState({

                parameter: this.props.params.actionid
            });
        }
    }, {
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

            var today = moment(new Date()).format('YYYY-MM-DD');

            var details = this.state.masterDetail;

            var name = details[0].firstname;

            var zoom = 0;

            for (var x = 0; x < details.length; x++) {
                zoom += parseInt(details[x].project);
            }

            var newMaster = {

                "id": Date.now(),
                "date": today,
                "name": name,
                "item": this.state.masterDetail,
                "project": zoom,
                "status": "pending"

            };

            var nextState = this.state.masterAPI;

            nextState.push(newMaster);

            this.setState({

                masterAPI: nextState
            });

            this.setState({
                showModal: false,
                masterDetail: []
            });

            fetch(API_URL + '/master', {

                method: 'post',
                headers: API_HEADERS,
                body: JSON.stringify(newMaster)
            });
        }
    }, {
        key: 'onSaveDetail',
        value: function onSaveDetail(event) {

            event.preventDefault();

            var nextState = this.state.masterDetail;

            var newItem = {

                "id": Date.now(),
                "firstname": event.target.firstname.value,
                "item": event.target.suggest.value,
                "development": event.target.development.value,
                "project": event.target.project.value
            };

            nextState.push(newItem);

            this.setState({

                masterDetail: nextState
            });
        }
    }, {
        key: 'onDeleteMaster',
        value: function onDeleteMaster(value) {

            var nextState = this.state.masterAPI;

            var index = nextState.findIndex(function (x) {
                return x.id == value;
            });

            nextState.splice(index, 1);

            this.setState({

                masterAPI: nextState
            });

            fetch(API_URL + '/deletemaster', {

                method: 'post',
                headers: API_HEADERS,
                body: JSON.stringify({ "id": index })
            });
        }
    }, {
        key: 'onHandleUserInput',
        value: function onHandleUserInput(event) {

            this.setState({

                filterText: event.target.value
            });
        }
    }, {
        key: 'handleSelect',
        value: function handleSelect(eventKey) {

            this.setState({

                activePage: eventKey
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
                    React.createElement(MasterSearch, {
                        filterText: this.state.filterText,
                        masterCallback: {

                            onsavedetail: this.onSaveDetail.bind(this),

                            onsavemaster: this.onSaveMaster.bind(this),

                            onhandleuserinput: this.onHandleUserInput.bind(this)
                        }

                    })
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
                            'Agregar Factura'
                        ),
                        React.createElement(MasterModal, {

                            masterDetail: this.state.masterDetail,
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
                        { header: 'Listado de Facturas' },
                        React.createElement(MasterTable, {
                            filterText: this.state.filterText,
                            masterData: this.state.masterAPI,
                            masterCallback: {

                                onsavedetail: this.onSaveDetail.bind(this),

                                onsavemaster: this.onSaveMaster.bind(this),

                                ondeletemaster: this.onDeleteMaster.bind(this)
                            }
                        }),
                        React.createElement(
                            'div',
                            { className: 'pull-right' },
                            React.createElement(MasterPagination, {
                                masterCallback: {
                                    handleSelect: this.handleSelect.bind(this)
                                },

                                activePage: this.state.activePage
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Master;
}(React.Component);

var MasterPagination = function (_React$Component13) {
    _inherits(MasterPagination, _React$Component13);

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
                    items: 5,
                    activePage: this.props.activePage,
                    onSelect: this.props.masterCallback.handleSelect
                }),
                React.createElement('br', null)
            );
        }
    }]);

    return MasterPagination;
}(React.Component);

var MasterSearch = function (_React$Component14) {
    _inherits(MasterSearch, _React$Component14);

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
                    { header: 'Busqueda de Factura' },
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
                                    'Buscar:'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-md-10 col-sm-10' },
                                React.createElement('input', {

                                    onChange: this.props.masterCallback.onhandleuserinput.bind(this),
                                    type: 'text',
                                    className: 'form-control',
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

var MasterTable = function (_React$Component15) {
    _inherits(MasterTable, _React$Component15);

    function MasterTable() {
        _classCallCheck(this, MasterTable);

        return _possibleConstructorReturn(this, (MasterTable.__proto__ || Object.getPrototypeOf(MasterTable)).apply(this, arguments));
    }

    _createClass(MasterTable, [{
        key: 'render',
        value: function render() {
            var _this20 = this;

            var filteredMaster = this.props.masterData.filter(function (master) {
                return master.name.indexOf(_this20.props.filterText) !== -1;
            });

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
                                'Fecha'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Nombre'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Articulo'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Estatus'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Acciones'
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        filteredMaster.map(function (master, index) {
                            return React.createElement(MasterTableBody, {
                                key: master.id,
                                id: master.id,

                                date: master.date,

                                name: master.name,

                                items: master.name,

                                status: master.status,

                                masterCallback: _this20.props.masterCallback
                            });
                        })
                    )
                )
            );
        }
    }]);

    return MasterTable;
}(React.Component);

var MasterTableBody = function (_React$Component16) {
    _inherits(MasterTableBody, _React$Component16);

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
                        Link,
                        { className: 'btn btn-default',
                            to: '/actions/' + this.props.id },
                        React.createElement('i', { className: 'fa fa-eye',
                            'aria-hidden': 'true' })
                    ),
                    ' ',
                    React.createElement(
                        Button,
                        { onClick: this.props.masterCallback.ondeletemaster.bind(this, this.props.id) },
                        React.createElement('i', {
                            className: 'fa fa-trash', 'aria-hidden': 'true' })
                    )
                )
            );
        }
    }]);

    return MasterTableBody;
}(React.Component);

var MasterModalButton = function (_React$Component17) {
    _inherits(MasterModalButton, _React$Component17);

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
                        'Guardar'
                    )
                )
            );
        }
    }]);

    return MasterModalButton;
}(React.Component);

var MasterModal = function (_React$Component18) {
    _inherits(MasterModal, _React$Component18);

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
                            'Agregar Factura'
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
    name: 'LAVADO',
    year: 1972
}, {
    name: 'PELO CORTO',
    year: 2000
}, {
    name: 'PELO LARGO',
    year: 1983
}, {
    name: 'EXTENSIONES',
    year: 2007
}, {
    name: 'LAVADO CON LINEA',
    year: 2012
}, {
    name: 'TRATAMIENTO PROFUNDO',
    year: 2009
}, {
    name: 'CELOFEN',
    year: 1990
}, {
    name: 'CEJAS',
    year: 1995
}, {
    name: 'POSTURAS DE UNAS',
    year: 1995
}, {
    name: 'PINTADAS',
    year: 1987
}, {
    name: 'MANOS Y PIES',
    year: 1995
}, {
    name: 'KERATINA',
    year: 1991
}, {
    name: 'Ruby',
    year: 1995
}, {
    name: 'ALIZADO',
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

var MasterModalField = function (_React$Component19) {
    _inherits(MasterModalField, _React$Component19);

    function MasterModalField() {
        _classCallCheck(this, MasterModalField);

        var _this24 = _possibleConstructorReturn(this, (MasterModalField.__proto__ || Object.getPrototypeOf(MasterModalField)).call(this));

        _this24.state = {

            value: '',
            suggestions: []
        };
        return _this24;
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
                        {
                            onSubmit: this.props.masterCallback.onsavedetail.bind(this) },
                        React.createElement(
                            Row,
                            null,
                            React.createElement(
                                FormGroup,
                                { controlId: 'formHorizontalName' },
                                React.createElement(
                                    Col,
                                    { componentClass: ControlLabel, md: 1, sm: 2 },
                                    'Cliente'
                                ),
                                React.createElement(
                                    Col,
                                    { md: 4, sm: 6 },
                                    React.createElement(FormControl, { type: 'text',
                                        name: 'firstname', placeholder: 'Cliente', required: true })
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
                                    { componentClass: ControlLabel,
                                        md: 1, sm: 2 },
                                    'Articulo'
                                ),
                                React.createElement(
                                    Col,
                                    { md: 4, sm: 6 },
                                    React.createElement(Autosuggest, {
                                        suggestions: suggestions,

                                        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested.bind(this),

                                        onSuggestionsClearRequested: this.onSuggestionsClearRequested.bind(this),

                                        renderSuggestion: renderSuggestion,

                                        getSuggestionValue: getSuggestionValue,
                                        inputProps: inputProps
                                    })
                                )
                            )
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            Row,
                            null,
                            React.createElement(
                                FormGroup,
                                { controlId: 'formControlsSelect' },
                                React.createElement(
                                    Col,
                                    { md: 1, sm: 2 },
                                    React.createElement(
                                        ControlLabel,
                                        null,
                                        'Peluquera'
                                    )
                                ),
                                React.createElement(
                                    Col,
                                    { md: 4, sm: 6 },
                                    React.createElement(
                                        FormControl,
                                        { componentClass: 'select',
                                            name: 'development', placeholder: 'Peluquera', required: true },
                                        React.createElement(
                                            'option',
                                            { value: 'Alexandra' },
                                            'Alexandra'
                                        ),
                                        React.createElement(
                                            'option',
                                            { value: 'Dania' },
                                            'Dania'
                                        ),
                                        React.createElement(
                                            'option',
                                            { value: 'Daneuri' },
                                            'Daneuri'
                                        ),
                                        React.createElement(
                                            'option',
                                            { value: 'Damirky' },
                                            'Damirky'
                                        ),
                                        React.createElement(
                                            'option',
                                            { value: 'Dayiana' },
                                            'Dayiana'
                                        ),
                                        React.createElement(
                                            'option',
                                            { value: 'Juribel' },
                                            'Juribel'
                                        ),
                                        React.createElement(
                                            'option',
                                            { value: 'Kandy' },
                                            'Kandy'
                                        ),
                                        React.createElement(
                                            'option',
                                            { value: 'Massiel' },
                                            'Massiel'
                                        ),
                                        React.createElement(
                                            'option',
                                            { value: 'Marionaisi' },
                                            'Marionaisi'
                                        ),
                                        React.createElement(
                                            'option',
                                            { value: 'Naty' },
                                            'Naty'
                                        ),
                                        React.createElement(
                                            'option',
                                            { value: 'Tati' },
                                            'Tati'
                                        ),
                                        React.createElement(
                                            'option',
                                            { value: 'Mayi' },
                                            'Mayi'
                                        ),
                                        React.createElement(
                                            'option',
                                            { value: 'otras' },
                                            'otras'
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            Row,
                            null,
                            React.createElement(
                                FormGroup,
                                { controlId: 'formHorizontalName' },
                                React.createElement(
                                    Col,
                                    { componentClass: ControlLabel, md: 1, sm: 2 },
                                    'Precio'
                                ),
                                React.createElement(
                                    Col,
                                    { md: 4, sm: 6 },
                                    React.createElement(FormControl, { type: 'number',
                                        name: 'project', placeholder: 'Precio', required: true })
                                ),
                                React.createElement(
                                    Col,
                                    { md: 2, sm: 2 },
                                    React.createElement(
                                        Button,
                                        { type: 'submit' },
                                        React.createElement('i', {
                                            className: 'fa fa-plus', 'aria-hidden': 'true' })
                                    )
                                )
                            )
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            Row,
                            null,
                            React.createElement('input', {
                                style: { 'width': '70px', 'display': 'none' }, type: 'text', name: 'suggest',
                                placeholder: 'Name', value: this.state.value })
                        )
                    )
                )
            );
        }
    }]);

    return MasterModalField;
}(React.Component);

var MasterModalTable = function (_React$Component20) {
    _inherits(MasterModalTable, _React$Component20);

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
                                'Nombre'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Articulo'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Peluquera'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Precio'
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        this.props.masterDetail.map(function (masterdetail, index) {
                            return React.createElement(MasterModalTableBody, {

                                index: index + 1,

                                key: index,

                                id: masterdetail.id,

                                firstname: masterdetail.firstname,

                                item: masterdetail.item,

                                development: masterdetail.development,

                                project: masterdetail.project
                            });
                        })
                    )
                )
            );
        }
    }]);

    return MasterModalTable;
}(React.Component);

var MasterModalTableBody = function (_React$Component21) {
    _inherits(MasterModalTableBody, _React$Component21);

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
                    this.props.index
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
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.development
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.project
                )
            );
        }
    }]);

    return MasterModalTableBody;
}(React.Component);

var Detail = function (_React$Component22) {
    _inherits(Detail, _React$Component22);

    function Detail() {
        _classCallCheck(this, Detail);

        var _this27 = _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).call(this));

        _this27.state = {
            showModal: false,
            filterText: '',
            detailData: [{

                "id": "1",
                "date": "2017-10-02",
                "name": "detail",
                "item": "detailcomponent"
            }]
        };
        return _this27;
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
        key: 'onHandleChange',
        value: function onHandleChange(event) {

            this.setState({

                filterText: event.target.value
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
                    React.createElement(DetailSearch, {
                        filterText: this.state.filterText,
                        detailCallback: {
                            onHandleChange: this.onHandleChange.bind(this)
                        }
                    })
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
                        filterText: this.state.filterText,
                        detailData: this.state.detailData
                    })
                )
            );
        }
    }]);

    return Detail;
}(React.Component);

var DetailPagination = function (_React$Component23) {
    _inherits(DetailPagination, _React$Component23);

    function DetailPagination() {
        _classCallCheck(this, DetailPagination);

        var _this28 = _possibleConstructorReturn(this, (DetailPagination.__proto__ || Object.getPrototypeOf(DetailPagination)).call(this));

        _this28.state = {
            activePage: 1
        };
        return _this28;
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
                onSelect: this.handleSelect.bind(this)
            });
        }
    }]);

    return DetailPagination;
}(React.Component);

var DetailSearch = function (_React$Component24) {
    _inherits(DetailSearch, _React$Component24);

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
                                React.createElement('input', {
                                    onChange: this.props.detailCallback.onHandleChange.bind(this),
                                    type: 'text', className: 'form-control', id: 'first_name',
                                    name: 'first_name' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DetailSearch;
}(React.Component);

var DetailTable = function (_React$Component25) {
    _inherits(DetailTable, _React$Component25);

    function DetailTable() {
        _classCallCheck(this, DetailTable);

        return _possibleConstructorReturn(this, (DetailTable.__proto__ || Object.getPrototypeOf(DetailTable)).apply(this, arguments));
    }

    _createClass(DetailTable, [{
        key: 'render',
        value: function render() {
            var _this31 = this;

            var filteredTable = this.props.detailData.filter(function (detail) {
                return detail.name.indexOf(_this31.props.filterText) !== -1;
            });

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
                        filteredTable.map(function (detail, index) {
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

var DetailTableBody = function (_React$Component26) {
    _inherits(DetailTableBody, _React$Component26);

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

var DetailModal = function (_React$Component27) {
    _inherits(DetailModal, _React$Component27);

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
                    { show: this.props.showModal,
                        onHide: this.props.detailCallback.close },
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
                        { horizontal: true,
                            onSubmit: this.props.detailCallback.onsavedetail.bind(this) },
                        React.createElement(
                            Modal.Body,
                            null,
                            React.createElement(
                                FormGroup,
                                { controlId: 'formHorizontalname' },
                                React.createElement(
                                    Col,
                                    { componentClass: ControlLabel, sm: 2 },
                                    'Name'
                                ),
                                React.createElement(
                                    Col,
                                    { sm: 10 },
                                    React.createElement(FormControl, { type: 'text',
                                        name: 'name', placeholder: 'Name' })
                                )
                            ),
                            React.createElement(
                                FormGroup,
                                { controlId: 'formHorizontalItem' },
                                React.createElement(
                                    Col,
                                    { componentClass: ControlLabel, sm: 2 },
                                    'Item'
                                ),
                                React.createElement(
                                    Col,
                                    { sm: 10 },
                                    React.createElement(FormControl, { type: 'text',
                                        name: 'item', placeholder: 'Item' })
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

var Partials = function (_React$Component28) {
    _inherits(Partials, _React$Component28);

    function Partials() {
        _classCallCheck(this, Partials);

        var _this34 = _possibleConstructorReturn(this, (Partials.__proto__ || Object.getPrototypeOf(Partials)).call(this));

        _this34.state = {

            masterAPI: [],
            searchData: '2017-10-06',
            total: 0
        };

        return _this34;
    }

    _createClass(Partials, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this35 = this;

            fetch(API_URL + '/reporte', { headers: API_HEADERS }).then(function (response) {
                return response.json();
            }).then(function (responseData) {
                _this35.setState({

                    masterAPI: responseData
                });
            }).catch(function (error) {
                console.log('Error fetching and parsing data', error);
            });

            var today = moment(new Date()).format('YYYY-MM-DD');

            this.setState({

                searchData: today
            });
        }
    }, {
        key: 'onChanged',
        value: function onChanged(event) {

            this.setState({

                searchData: event.target.value
            });
        }
    }, {
        key: 'onRun',
        value: function onRun() {
            var _this36 = this;

            var nextState = this.state.masterAPI.filter(function (master) {
                return master.date == _this36.state.searchData;
            });

            var grand = 0;

            for (var x = 0; x < nextState.length; x++) {
                grand += parseInt(nextState[x].project);
            }

            this.setState({

                total: grand
            });

            window.print();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this37 = this;

            return React.createElement(
                Grid,
                null,
                React.createElement(
                    Row,
                    null,
                    React.createElement(
                        Col,
                        { xs: 6 },
                        React.createElement(
                            'h1',
                            null,
                            'Reporte Cuadre'
                        )
                    )
                ),
                React.createElement(
                    Row,
                    null,
                    React.createElement(PartialsSearch, {
                        onChanged: this.onChanged.bind(this)
                    }),
                    React.createElement(PartialsTable, {

                        masterAPI: this.state.masterAPI.filter(function (master) {
                            return master.date == _this37.state.searchData;
                        }),
                        total: this.state.total
                    })
                ),
                React.createElement(
                    Row,
                    null,
                    React.createElement(
                        Button,
                        { onClick: this.onRun.bind(this) },
                        'i'
                    )
                )
            );
        }
    }]);

    return Partials;
}(React.Component);

var PartialsSearch = function (_React$Component29) {
    _inherits(PartialsSearch, _React$Component29);

    function PartialsSearch() {
        _classCallCheck(this, PartialsSearch);

        return _possibleConstructorReturn(this, (PartialsSearch.__proto__ || Object.getPrototypeOf(PartialsSearch)).apply(this, arguments));
    }

    _createClass(PartialsSearch, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                Col,
                { xs: 6 },
                React.createElement(
                    Form,
                    { horizontal: true,
                        onChange: this.props.onChanged.bind(this) },
                    React.createElement(
                        FormGroup,
                        { controlId: 'formHorizontalEmail' },
                        React.createElement(Col, { componentClass: ControlLabel, xs: 2 }),
                        React.createElement(
                            Col,
                            { xs: 6 },
                            React.createElement(FormControl, { type: 'date', placeholder: 'Email' })
                        )
                    )
                )
            );
        }
    }]);

    return PartialsSearch;
}(React.Component);

var PartialsTable = function (_React$Component30) {
    _inherits(PartialsTable, _React$Component30);

    function PartialsTable() {
        _classCallCheck(this, PartialsTable);

        return _possibleConstructorReturn(this, (PartialsTable.__proto__ || Object.getPrototypeOf(PartialsTable)).apply(this, arguments));
    }

    _createClass(PartialsTable, [{
        key: 'render',
        value: function render() {
            var _this40 = this;

            return React.createElement(
                Row,
                null,
                React.createElement(
                    Col,
                    { xs: 12 },
                    React.createElement(
                        Table,
                        { striped: true, bordered: true, condensed: true, hover: true,
                            style: { 'width': '55%' } },
                        React.createElement(
                            'thead',
                            null,
                            React.createElement(
                                'tr',
                                null,
                                React.createElement(
                                    'th',
                                    { style: { 'width': '15px', 'font-size': '25px', 'border-spacing': '0 30px' } },
                                    '#'
                                ),
                                React.createElement(
                                    'th',
                                    { style: { 'width': '15px', 'font-size': '25px' } },
                                    'Fecha'
                                ),
                                React.createElement(
                                    'th',
                                    { style: { 'width': '15px', 'font-size': '25px' } },
                                    'Cliente'
                                ),
                                React.createElement(
                                    'th',
                                    { style: { 'width': '15px', 'font-size': '25px' } },
                                    'Precio'
                                )
                            )
                        ),
                        React.createElement(
                            'tbody',
                            null,
                            this.props.masterAPI.map(function (master, index) {
                                return React.createElement(PartialsTableBody, {
                                    key: index,
                                    index: index + 1,
                                    id: master.id,
                                    date: master.date,
                                    name: master.name,
                                    project: master.project,
                                    total: _this40.props.total
                                });
                            })
                        ),
                        React.createElement(
                            'tfoot',
                            null,
                            React.createElement(
                                'tr',
                                null,
                                React.createElement(
                                    'td',
                                    null,
                                    '\xA0'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    '\xA0'
                                ),
                                React.createElement(
                                    'td',
                                    { style: { 'width': '10px', 'font-size': '20px' } },
                                    'Total'
                                ),
                                React.createElement(
                                    'td',
                                    { style: { 'width': '10px', 'font-size': '20px' } },
                                    'RD$',
                                    this.props.total,
                                    '.00'
                                ),
                                React.createElement('br', null),
                                React.createElement('br', null)
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PartialsTable;
}(React.Component);

var PartialsTableBody = function (_React$Component31) {
    _inherits(PartialsTableBody, _React$Component31);

    function PartialsTableBody() {
        _classCallCheck(this, PartialsTableBody);

        return _possibleConstructorReturn(this, (PartialsTableBody.__proto__ || Object.getPrototypeOf(PartialsTableBody)).apply(this, arguments));
    }

    _createClass(PartialsTableBody, [{
        key: 'render',
        value: function render() {

            console.log(this.props.masterAPI);

            return React.createElement(
                'tr',
                null,
                React.createElement('td', null),
                React.createElement(
                    'td',
                    { style: { 'font-size': '20px' } },
                    this.props.date
                ),
                React.createElement(
                    'td',
                    { style: { 'font-size': '20px' } },
                    this.props.name
                ),
                React.createElement(
                    'td',
                    { style: { 'font-size': '20px' } },
                    this.props.project,
                    '.00'
                )
            );
        }
    }]);

    return PartialsTableBody;
}(React.Component);

ReactDOM.render(React.createElement(
    Router,
    { history: browserHistory },
    React.createElement(
        Route,
        { path: '/', component: App },
        React.createElement(Route, { path: 'partials', component: Partials }),
        React.createElement(Route, { path: 'about', component: About }),
        React.createElement(Route, { path: 'repos/:repo_name', component: Repos }),
        React.createElement(Route, { path: 'actions/:actionid', component: Actions }),
        React.createElement(Route, { path: 'detail', component: Detail }),
        React.createElement(Route, { path: 'master', component: Master })
    )
), document.getElementById('contents'));