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

const Row = ReactBootstrap.Row;
const Panel = ReactBootstrap.Panel;

const Pagination = ReactBootstrap.Pagination;

const Form = ReactBootstrap.Form;
const FormGroup = ReactBootstrap.FormGroup;
const FormControl = ReactBootstrap.FormControl;
const ControlLabel = ReactBootstrap.ControlLabel;
const Col = ReactBootstrap.Col;

const Table = ReactBootstrap.Table;

const API_URL = 'http://159.203.156.208';
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
                        <div className="col-md-4 col-md-offset-4 col-sm-8  col-xs-12">
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

    render(){

        return(
                <Navbar>
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            <Link to={'/'}>React-Bootstrap</Link>
                        </div>
                    </div>
                    <Nav >
                      <li><Link to={'/master'}>Master</Link></li>
                      <li><Link to={'/repos'}>Details</Link></li>
                      <NavDropdown eventKey={3} title="Dropdown"
id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Actions</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                      </NavDropdown>
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
        this.state = { showModal: false };
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render(){

        return(
            <div>
                <Row>
                    <MasterSearch />
                </Row>
                <Row>
                        <div className="pull-right">
                            <Button onClick={this.open.bind(this)}>Add
Master</Button>
                            <MasterModal
                                            showModal={this.state.showModal}
                                            open={this.open}
                                            close={this.close}
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
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
            </div>
        );
    }
}

class MasterModalSearch extends React.Component{

    render(){

        return(

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
        );
    }
    
}

class MasterModal extends React.Component{

    render(){

        return(

            <div >
                <Modal show={this.props.showModal}
onHide={this.props.close.bind(this)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <MasterModalSearch />
                        <br/>
                        <br/>
                        <br/>
                        <MasterModalTable />
                  </Modal.Body>
                </Modal>
              </div>
        );
    }
}

class MasterPagination extends React.Component{

    render(){

        return(
            <div>
                <Pagination
                  bsSize="small"
                  items={10}
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
                          <input type="text" className="form-control"
id="first_name" name="first_name"/>
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
                        <Button><i className="fa fa-eye" aria-hidden="true"></i></Button>{' '}
                        <Button><i className="fa fa-trash" aria-hidden="true"></i></Button>
                    </td>
                  </tr>
        );
    }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="repos" component={Repos}/>
        <Route path="master" component={Master}/>
    </Route>
  </Router>
), document.getElementById('contents'));
