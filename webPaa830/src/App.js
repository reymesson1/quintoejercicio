const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const Link = ReactRouter.Link;
const browserHistory = ReactRouter.browserHistory ;

const Button = ReactBootstrap.Button;
const Modal = ReactBootstrap.Modal;
const Nav = ReactBootstrap.Nav;
const Navbar = ReactBootstrap.Navbar;
const NavItem = ReactBootstrap.NavItem;
const NavDropdown = ReactBootstrap.NavDropdown;
const MenuItem = ReactBootstrap.MenuItem;

const Grid = ReactBootstrap.Grid;
const Row = ReactBootstrap.Row;
const Panel = ReactBootstrap.Panel;

const Pagination = ReactBootstrap.Pagination;

const Form = ReactBootstrap.Form;
const FormGroup = ReactBootstrap.FormGroup;
const FormControl = ReactBootstrap.FormControl;
const ControlLabel = ReactBootstrap.ControlLabel;
const Col = ReactBootstrap.Col;

const Table = ReactBootstrap.Table;

const Autosuggest = Autosuggest;

const API_URL = 'http://localhost:8080';

const API_HEADERS = {

    'Content-Type':'application/json',
    Authentication: 'any-string-you-like'
}

class App extends React.Component{

  constructor(){

      super();
      this.state = {

          cookie: false,
          cookies: false
      }
  }

  componentDidMount(){

      fetch(API_URL+'/cookies',{headers: API_HEADERS})
      .then((response)=>response.json())
      .then((responseData)=>{
          this.setState({

              cookies: responseData
          })
      })
      .catch((error)=>{
          console.log('Error fetching and parsing data', error);
      })
  }

  setCookie(event){

      event.preventDefault();

      console.log(event.target.email.value);
      console.log(event.target.password.value);

      let newCookie = {

          "id":"1",
          "username": event.target.email.value,
          "password": event.target.password.value
      }

      fetch(API_URL+'/cookies', {

          method: 'post',
          headers: API_HEADERS,
          body: JSON.stringify(newCookie)
      })


      window.location.reload();

  }

  render() {

    let dashboard = (

          <div>
            <Toolbar />
            <div className="container">
                {this.props.children}
            </div>
          </div>

    )

    let login = (

          <div>
            <Login
                    setcookie={this.setCookie}
            />
          </div>

    )
    if(this.state.cookies){

        return (

            <div>
                {dashboard}
            </div>
        )
    }
        return (

            <div>
                {login}
            </div>
        )
  }
}

class Login extends React.Component{

    render(){

        return(

            <div>
                <div className="container">
                    <div className="row vertical-offset-100">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Please sign in</h3>
                                </div>
                                <div className="panel-body">
                                    <form onSubmit={this.props.setcookie.bind(this)}>
                                    <fieldset>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="E-mail" name="email" type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Password" name="password" type="password"/>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input name="remember" type="checkbox" value="Remember Me"/> Remember Me
                                            </label>
                                        </div>
                                            <button  className="btn btn-lg btn-success btn-block">Login</button>
                                    </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

class Toolbar extends React.Component{

    componentDidMount(){

        document.body.style.backgroundImage = "none";

    }

    onClicked(){

        window.location.reload();
    }

    render(){

        return(
                <Navbar>
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            <Link to={'/'} onClick={this.onClicked.bind(this)}>React-Bootstrap</Link>
                        </div>
                    </div>
                    <Nav>
                      <li><Link to={'/master'}>Master</Link></li>
                      <li><Link to={'/detail'}>Details</Link></li>
                      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Actions</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                      </NavDropdown>
                      <li style={{'float':'right','position':'absolute','left':'80%'}}><Link to={'/detail'}>Login</Link></li>
                    </Nav>
                </Navbar>
        );
    }

}

class About extends React.Component{

    render(){

        return(

            <h1>About</h1>
        );
    }
}

class Repos extends React.Component{

    render(){

        return(

            <h1>Repos</h1>
        );
    }
}

/*components*/
const masterAPI = [

    {

        "id": "1",
        "date": "2017-04-01",
        "name": "Juan Perez",
        "items": [
            {
                "id":"1",
                "name":"sample",
                "details": "data"
            }
        ],
        "status": "pending",
    }
]

class Master extends React.Component{

    constructor() {

        super();
        this.state = {
            showModal: false,
            masterDetail: [
                {

                    "id":"1",
                    "firstname":"juanperez",
                    "item":"masterdetail"
                }
            ]
        };
    }

    close() {
        this.setState({
            showModal: false
        });
    }

    open() {
        this.setState({
            showModal: true
        });
    }

    onSaveMaster(event){

        event.preventDefault();

        let newMaster = {

            "id": Date.now(),
            "date": "2017-10-02",
            "name": "empty",
            "item": this.state.masterDetail,
            "status":"pending"

        }

        masterAPI.push(newMaster);

        this.setState({
            showModal: false,
            masterDetail: []
        });

    }

    onSaveDetail(event){

        event.preventDefault();
        console.log(event.target.firstname.value);
        console.log(event.target.suggest.value);

        let nextState = this.state.masterDetail;

        let newItem = {

            "id": Date.now(),
            "firstname":event.target.firstname.value,
            "item":event.target.suggest.value
        }

        nextState.push(newItem);

        this.setState({

            masterDetail: nextState
        });

    }

    render(){

        return(
            <div>
                <Row>
                    <MasterSearch />
                </Row>
                <Row>
                        <div className="pull-right">
                            <Button onClick={this.open.bind(this)}>Add Master</Button>
                            <MasterModal    masterDetail={this.state.masterDetail}
                                            showModal={this.state.showModal}
                                            open={this.open}
                                            close={this.close.bind(this)}
                                            masterCallback = {{
                                                onsavedetail:this.onSaveDetail.bind(this),
                                                onsavemaster:this.onSaveMaster.bind(this)
                                            }}
                            />
                        </div>
                </Row>
                <br/>
                <Row>
                    <Panel>
                        <MasterTable masterData={masterAPI}
                        />
                        <div className="pull-right">
                            <MasterPagination />
                        </div>
                    </Panel>
                </Row>
            </div>
        );
    }
}

class MasterPagination extends React.Component{

    render(){

        return(
            <div>
                <Pagination
                  prev
                  next
                  first
                  last
                  ellipsis
                  boundaryLinks
                  bsSize="small"
                  items={5}
                  />
                  <br />
            </div>
        );
    }
}

class MasterSearch extends React.Component{

    render(){

        return(
            <div>
                <Panel header="Search Master">
                  <form>
                    <div className="form-group">
                        <div className="col-md-2 col-sm-2">
                          <label>Search:</label>
                        </div>
                        <div className="col-md-10 col-sm-10">
                          <input type="text" className="form-control" id="first_name" name="first_name"/>
                        </div>
                    </div>
                  </form>
                </Panel>
            </div>
        );
    }
}

class MasterTable extends React.Component{

    render(){
        return(
            <div>

                    <Table striped bordered condensed hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Items</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                        {this.props.masterData.map(
                            (master, index) => <MasterTableBody
                                                                key={master.id}
                                                                id={master.id}

date={master.date}

name={master.name}

items={master.name}

status={master.status}
                                                />
                        )}
                        </tbody>
                      </Table>

                </div>
        );
    }
}

class MasterTableBody extends React.Component{

    render(){

        return(
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.date}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.items}</td>
                    <td>{this.props.status}</td>
                    <td>
                        <Button><i className="fa fa-eye"
aria-hidden="true"></i></Button>{' '}
                        <Button><i className="fa fa-trash"
aria-hidden="true"></i></Button>
                    </td>
                  </tr>
        );
    }
}

class MasterModalButton extends React.Component{

    render(){

        return(
            <Row>
                <Col md={12}>
                    <Button
                                style={{'margin-left':'70%'}}
                                bsStyle={'default'}

onClick={this.props.masterCallback.onsavemaster.bind(this)}>Save</Button>
                </Col>
            </Row>
        );
    }
}

class MasterModal extends React.Component{

    render(){

        return(

            <div >
                <Modal show={this.props.showModal} onHide={this.props.close}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <MasterModalField
                                          masterCallback={this.props.masterCallback}
                        />
                        <br/>
                        <MasterModalTable

masterDetail={this.props.masterDetail }

masterCallback={this.props.masterCallback}
                        />
                        <MasterModalButton

masterCallback={this.props.masterCallback}
                        />
                  </Modal.Body>
                </Modal>
              </div>
        );
    }
}

const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Clojure',
    year: 2007
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Go',
    year: 2009
  },
  {
    name: 'Haskell',
    year: 1990
  },
  {
    name: 'Java',
    year: 1995
  },
  {
    name: 'Javascript',
    year: 1995
  },
  {
    name: 'Perl',
    year: 1987
  },
  {
    name: 'PHP',
    year: 1995
  },
  {
    name: 'Python',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'Scala',
    year: 2003
  }
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {

    const escapedValue = escapeRegexCharacters(value.trim());

      if (escapedValue === '') {
        return [];
      }

      const regex = new RegExp('^' + escapedValue, 'i');

      return languages.filter(language => regex.test(language.name));

}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

class MasterModalField extends React.Component{

    constructor(){

        super();
        this.state = {

            value: '',
            suggestions: []
        }
    }

    onChange(event, {newValue,method}){
        this.setState({

            value: newValue
        });
    }

    onSuggestionsFetchRequested({value}){
        this.setState({

            suggestions: getSuggestions(value)
        });
    }

    onSuggestionsClearRequested(){

        this.setState({
          suggestions: []
        });

    }

    onSave(event){

        event.preventDefault();

        console.log(event.target.firstname.value);
        console.log(this.state.value);
    }

    render(){

        const { value, suggestions } = this.state;
        const inputProps = {
          placeholder: "Type 'c'",
          value,
          onChange: this.onChange.bind(this)
        };

        return(

            <Grid>
                <Row>
                    <Form horizontal onSubmit={this.props.masterCallback.onsavedetail.bind(this)}>
                        <Row>
                            <FormGroup controlId="formHorizontalName">
                              <Col componentClass={ControlLabel} md={2} sm={2}>
                                Name
                              </Col>
                              <Col md={3} sm={6}>
                                <FormControl type="text" name="firstname" placeholder="Name" />
                              </Col>
                            </FormGroup>
                        </Row>
                        <br/>
                        <Row>
                            <FormGroup controlId="formHorizontalItem">
                                  <Col componentClass={ControlLabel} md={2} sm={2}>
                                    Item
                                  </Col>
                                  <Col md={3} sm={6}>
                                    <Autosuggest
                                               suggestions={suggestions}
                                               onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                                               onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
                                               renderSuggestion={renderSuggestion}
                                               getSuggestionValue={getSuggestionValue}
                                               inputProps={inputProps}
                                    />
                                  </Col>
                                  <Col md={2} sm={2} >
                                    <Button type="submit"><i className="fa fa-plus" aria-hidden="true"></i></Button>
                                </Col>
                            </FormGroup>
                        </Row>
                        <Row>
                            <input style={{'width':'70px','display':'none'}} type="text" name="suggest" placeholder="Name" value={this.state.value} />
                        </Row>
                    </Form>

                  </Row>
            </Grid>
        );
    }
}

class MasterModalTable extends React.Component{


    render(){

        return(

            <div>
                <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.props.masterDetail.map(
                            (masterdetail,index) => <MasterModalTableBody

 key={index}

 id={masterdetail.id}

 firstname={masterdetail.firstname}

 item={masterdetail.item}
                                              />
                        )}
                    </tbody>
                  </Table>
            </div>
        );
    }
}

class MasterModalTableBody extends React.Component{

    render(){

        return(

            <tr>
                <td>{this.props.key}</td>
                <td>{this.props.id}</td>
                <td>{this.props.firstname}</td>
                <td>{this.props.item}</td>
            </tr>

        );
    }

}

class Detail extends React.Component{

    constructor() {

        super();
        this.state = {
            showModal: false,
            detailData: [
                {

                    "id":"1",
                    "date":"2017-10-02",
                    "name":"detail",
                    "item":"detailcomponent"
                }
            ]
        }
    }

    close() {
        this.setState({
            showModal: false
        });
    }

    open() {
        this.setState({
            showModal: true
        });
    }

    onSaveDetail(event){

        event.preventDefault();

        let newDetail = {

            "id": Date.now(),
            "date": "2017-10-02",
            "name": event.target.name.value,
            "item": event.target.name.value
        }

        let nextState = this.state.detailData;

        nextState.push(newDetail);

        this.setState({

            detailData: nextState,
            showModal: false
        });

    }

    render(){

        return(
            <Grid>

                <Row>
                    <DetailSearch />
                </Row>
                <Row>
                        <div className="pull-right">
                            <Button onClick={this.open.bind(this)}>Add Detail</Button>
                            <DetailModal
                                            showModal={this.state.showModal}
                                            detailCallback={{
                                                open:this.open,
                                                close:this.close.bind(this),
                                                onsavedetail:this.onSaveDetail.bind(this)
                                            }}
                            />
                        </div>
                </Row>
                <br/>
                <Row>
                    <DetailTable
                                    detailData={this.state.detailData}
                    />
                </Row>
            </Grid>
        );
    }
}

class DetailPagination extends React.Component{

    constructor(){

        super();
        this.state = {
            activePage: 1
        }
    }

    handleSelect(eventKey) {
        this.setState({
          activePage: eventKey
        });
    }

    render(){

        return(

            <   Pagination
                prev
                next
                first
                last
                ellipsis
                boundaryLinks
                items={5}
                maxButtons={5}
                activePage={this.state.activePage}
                onSelect={this.handleSelect}
            />
        );
    }
}

class DetailSearch extends React.Component{

    render(){

        return(
            <div>
                <Panel header="Search Detail">
                  <form>
                    <div className="form-group">
                        <div className="col-md-2 col-sm-2">
                          <label>Search:</label>
                        </div>
                        <div className="col-md-10 col-sm-10">
                          <input type="text" className="form-control" id="first_name" name="first_name"/>
                        </div>
                    </div>
                  </form>
                </Panel>
            </div>
        );
    }
}

class DetailTable extends React.Component{

    render(){
        return(
            <Panel header="Search List">
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                {this.props.detailData.map(
                    (detail,index) => <DetailTableBody
                                                    key={index}
                                                    id={detail.id}
                                                    name={detail.name}
                                                    item={detail.item}
                                />
                )}
                </tbody>
              </Table>
              <div className="pull-right">
                <DetailPagination

                />
              </div>
            </Panel>

        );
    }
}

class DetailTableBody extends React.Component{

    render(){

        return(

              <tr>
                <td>{this.props.key}</td>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.item}</td>
              </tr>

        );
    }
}

class DetailModal extends React.Component{

    render(){

        return(
            <div >
                <Modal show={this.props.showModal} onHide={this.props.detailCallback.close}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Form horizontal onSubmit={this.props.detailCallback.onsavedetail.bind(this)}>
                      <Modal.Body>
                                <FormGroup controlId="formHorizontalname">
                                  <Col componentClass={ControlLabel} md={2} sm={2}>
                                    Name
                                  </Col>
                                  <Col md={6} sm={10}>
                                    <FormControl type="text" name="name" placeholder="Name" />
                                  </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalItem">
                                  <Col componentClass={ControlLabel} md={2} sm={2}>
                                    Item
                                  </Col>
                                  <Col md={6} sm={10}>
                                    <FormControl type="text" name="item" placeholder="Item" />
                                  </Col>
                                </FormGroup>

                      </Modal.Body>
                      <Modal.Footer>
                            <Button type="submit" pullRight>Save</Button>
                      </Modal.Footer>
                  </Form>
                </Modal>
            </div>
        );
    }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="repos" component={Repos}/>
        <Route path="detail" component={Detail}/>
        <Route path="master" component={Master}/>
    </Route>
  </Router>
), document.getElementById('contents'));