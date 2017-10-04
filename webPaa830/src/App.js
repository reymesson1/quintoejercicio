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

const API_URL = 'http://localhost';

const API_HEADERS = {

    'Content-Type':'application/json',
    Authentication: 'any-string-you-like'
}

class App extends React.Component{

  constructor(){

      super();
      this.state = {

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
            <SidebarContainer />
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

class SidebarContainer extends React.Component{

    render(){

        return(
            <div className="sidebar" style={{display:'none'}}>
                <h1>&nbsp;</h1>
                <ul>
                    <li><Link to="/dashboard"><i className="fa
fa-tachometer" aria-hidden="true"></i>&nbsp;Dashboard</Link></li>
                    <li><Link to="/orders"><i className="fa fa-plus"
aria-hidden="true"></i>&nbsp;Orders</Link></li>
                    <li><Link to="/accounts"><i className="fa
fa-university" aria-hidden="true"></i>&nbsp;Accounts</Link></li>
                    <li><Link to="/tasks"><i className="fa fa-tasks"
aria-hidden="true"></i>&nbsp;Tasks</Link></li>
                    <li><Link to="/schedule"><i className="fa
fa-calendar" aria-hidden="true"></i>&nbsp;Schedule</Link></li>
                    <li><Link to="/jobs"><i className="fa fa-tasks"
aria-hidden="true"></i>&nbsp;Jobs</Link></li>
                    <li><Link to="/timesheet"><i className="fa
fa-user" aria-hidden="true"></i>&nbsp;TimeSheet</Link></li>
                </ul>
            </div>
        );
    }
}

class Actions extends React.Component{

    constructor(){

          super();
          this.state = {

              masterAPI: [],
              parameter: ''
          }

    }

    componentDidMount(){

          fetch(API_URL+'/master',{headers: API_HEADERS})
          .then((response)=>response.json())
          .then((responseData)=>{
              this.setState({

                  masterAPI: responseData
              })
          })
          .catch((error)=>{
              console.log('Error fetching and parsing data', error);
          })

          this.setState({

             parameter: this.props.params.actionid
          });

    }

    onPrinted(){

        window.print();

        window.location.href = '/';
    }

    render(){

        return(
            <div>
                <ActionsTable
                                parameter={this.state.parameter}

masterAPI={this.state.masterAPI.filter((master)=> master.id ==
this.state.parameter)}
                />
                <Button onClick={this.onPrinted.bind(this)} >i&nbsp;</Button>
            </div>
        );
    }
}

class ActionsTable extends React.Component{


    render(){

        return(

            <div  id="printcss" style={{'margin':'0'}}>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <img src="/logoprint.png"/>
                            <h5>"Las mejores adaptaciones de pelos de todo el pais"</h5>
                            <h5>Ubicado en la Plaza Carmen Renata III</h5>
                            <h5>Tel.: 809-937-5052 Cel:.809-817-3349</h5>
                            <br/>                            
                            <br/>                            
                            <h5 className="col-xs-offset-7">Fecha: 04-10-17</h5>                            
                            <br/>                            
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Table striped bordered condensed hover style={{'position':'relative','width':'55%', 'margin':'0'}}>
                                <thead>
                                  <tr>
                                    <th style={{'width':'15px', 'font-size':'25px', 'border-spacing':'0 30px'}}>#</th>
                                    <th style={{'width':'15px', 'font-size':'25px'}}>Articulo</th>
                                    <th style={{'width':'15px', 'font-size':'25px'}}>Precio</th>
                                    <th style={{'width':'15px', 'font-size':'25px'}}>Peluquera</th>
                                  </tr>
                                </thead>
                                    {this.props.masterAPI.map(
                                        (master,index) => <ActionsTableBody
                                                                 key={index}
                                                                 index={index}
                                                                 id={master.id}
                                                                 item={master.item}
                                                          />
                                    )}
                                <tfoot>
                                    <ActionsTableBodyFooter
                                                 parameter = {this.props.parameter}
                                                 masterAPI = {this.props.masterAPI}
                                    />
                                </tfoot>
                                
                              </Table>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

class ActionsTableBodyFooter extends React.Component{

    render(){

        let nextState = this.props.masterAPI;

        let zoom = 0;

        if(nextState[0]){

            zoom = nextState[0].project;
        }

        return(
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td style={{'width':'15px', 'font-size':'20px'}}>Total</td>
                <td style={{'width':'15px', 'font-size':'20px'}}>RD${zoom}.00</td>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </tr>
        );
    }

}

class ActionsTableBody extends React.Component{

    render(){

        return(

                <tbody>
                {this.props.item.map(
                    (master, index) =>  <ActionsTableBodyDetail
                                                key={index}
                                                index={index+1}
                                                id={master.id}
                                                name={master.firstname}
                                                item={master.item}
                                                development={master.development}
                                                project={master.project}
                                        />
                )}
               </tbody>
        );
    }
}

class ActionsTableBodyDetail extends React.Component{

    render(){

        return(
            <tr>
                    <td style={{'font-size':'20px'}}>&nbsp;</td>
                    <td style={{'font-size':'20px'}}>{this.props.item}</td>
                    <td style={{'font-size':'20px'}}>{this.props.project}.00</td>
                    <td style={{'font-size':'20px'}}>{this.props.development}</td>                    
            </tr>
        );
    }
}

class Login extends React.Component{

    render(){

        return(

            <div id="login">
                <div className="container">
                    <div className="row vertical-offset-100">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Please
sign in</h3>
                                </div>
                                <div className="panel-body">
                                    <form
onSubmit={this.props.setcookie.bind(this)}>
                                    <fieldset>
                                        <div className="form-group">
                                            <input
className="form-control" placeholder="E-mail" name="email"
type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <input
className="form-control" placeholder="Password" name="password"
type="password"/>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input name="remember"
type="checkbox" value="Remember Me"/> Remember Me
                                            </label>
                                        </div>
                                            <button  className="btn
btn-lg btn-success btn-block">Login</button>
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
                            <Link to={'/'}
onClick={this.onClicked.bind(this)}>Info-Solutions SYS</Link>
                        </div>
                    </div>
                    <Nav>
                      <li><Link to={'/master'}>Facturacion</Link></li>
                      <li><Link to={'/detail'}>Inventario</Link></li>
                      <NavDropdown eventKey={3} title="Dropdown"
id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}><Link
to="/actions">Actions</Link></MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else
here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                      </NavDropdown>
                      <li
style={{'float':'right','position':'absolute','left':'80%'}}><Link
onClick={this.onClicked} to={'/logout'}>Logout</Link></li>
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

            <h1>Repos {this.props.params.repo_name}</h1>
        );
    }
}

class Master extends React.Component{

    constructor() {

        super();
        this.state = {
            showModal: false,
            filterText: '',
            activePage: 1,
            masterAPI: [],
            masterDetail: []
        };
    }

    componentDidMount(){

          fetch(API_URL+'/master',{headers: API_HEADERS})
          .then((response)=>response.json())
          .then((responseData)=>{
              this.setState({

                  masterAPI: responseData
              })
          })
          .catch((error)=>{
              console.log('Error fetching and parsing data', error);
          })

          this.setState({

             parameter: this.props.params.actionid
          });

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

        let details = this.state.masterDetail;

        let name = details[0].firstname;

        let zoom = 0;

        for(var x=0;x<details.length;x++){
            zoom+=parseInt(details[x].project);
        }

        let newMaster = {

            "id": Date.now(),
            "date": "2017-10-02",
            "name": name,
            "item": this.state.masterDetail,
            "project": zoom,
            "status":"pending"

        }

        let nextState = this.state.masterAPI;

        nextState.push(newMaster);

        this.setState({

            masterAPI: nextState
        });

        this.setState({
            showModal: false,
            masterDetail: []
        });

        fetch(API_URL+'/master', {

              method: 'post',
              headers: API_HEADERS,
              body: JSON.stringify(newMaster)
        })

    }

    onSaveDetail(event){

        event.preventDefault();

        let nextState = this.state.masterDetail;

        let newItem = {

            "id": Date.now(),
            "firstname":event.target.firstname.value,
            "item":event.target.suggest.value,
            "development":event.target.development.value,
            "project":event.target.project.value,
        }

        nextState.push(newItem);

        this.setState({

            masterDetail: nextState
        });

    }

    onDeleteMaster(value){

        let nextState = this.state.masterAPI;

        var index = nextState.findIndex(x=> x.id==value);

        nextState.splice(index,1);

        this.setState({

            masterAPI: nextState
        });

        fetch(API_URL+'/deletemaster', {

              method: 'post',
              headers: API_HEADERS,
              body: JSON.stringify({"id":index})
        })
    }

    onHandleUserInput(event){


        this.setState({

            filterText: event.target.value
        });
    }

    handleSelect(eventKey){

        this.setState({

            activePage: eventKey
        });

    }


    render(){

        return(
            <div>
                <Row>
                    <MasterSearch
                                    filterText={this.state.filterText}
                                    masterCallback = {{

onsavedetail:this.onSaveDetail.bind(this),

onsavemaster:this.onSaveMaster.bind(this),

onhandleuserinput:this.onHandleUserInput.bind(this)
                                    }}

                    />
                </Row>
                <Row>
                        <div className="pull-right">
                            <Button onClick={this.open.bind(this)}>Agregar Factura</Button>
                            <MasterModal

masterDetail={this.state.masterDetail}
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
                    <Panel header="Listado de Facturas">
                        <MasterTable
                                        filterText={this.state.filterText}
                                        masterData={this.state.masterAPI}
                                        masterCallback = {{

onsavedetail:this.onSaveDetail.bind(this),

onsavemaster:this.onSaveMaster.bind(this),

ondeletemaster:this.onDeleteMaster.bind(this)
                                        }}
                        />
                        <div className="pull-right">
                            <MasterPagination
                                                masterCallback={{
                                                      handleSelect:
this.handleSelect.bind(this)
                                                }}

activePage={this.state.activePage}
                            />
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
                  activePage={this.props.activePage}
                  onSelect={this.props.masterCallback.handleSelect}
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
                <Panel header="Busqueda de Factura">
                  <form>
                    <div className="form-group">
                        <div className="col-md-2 col-sm-2">
                          <label>Buscar:</label>
                        </div>
                        <div className="col-md-10 col-sm-10">
                          <input

onChange={this.props.masterCallback.onhandleuserinput.bind(this)}
                                 type="text"
                                 className="form-control"
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

        let filteredMaster = this.props.masterData.filter(

            (master) => master.name.indexOf(this.props.filterText) !== -1
        );

        return(
            <div>

                    <Table striped bordered condensed hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Nombre</th>
                            <th>Articulo</th>
                            <th>Estatus</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                        {filteredMaster.map(
                            (master, index) => <MasterTableBody
                                                                key={master.id}
                                                                id={master.id}

date={master.date}

name={master.name}

items={master.name}

status={master.status}

masterCallback={this.props.masterCallback}
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
                        <Link className="btn btn-default"
to={'/actions/'+this.props.id}><i className="fa fa-eye"
aria-hidden="true"></i></Link>{' '}
<Button onClick={this.props.masterCallback.ondeletemaster.bind(this,this.props.id)}><i
className="fa fa-trash" aria-hidden="true"></i></Button>
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

onClick={this.props.masterCallback.onsavemaster.bind(this)}>Guardar</Button>
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
                    <Modal.Title>Agregar Factura</Modal.Title>
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
    name: 'LAVADO',
    year: 1972
  },
  {
    name: 'PELO CORTO',
    year: 2000
  },
  {
    name: 'PELO LARGO',
    year: 1983
  },
  {
    name: 'EXTENSIONES',
    year: 2007
  },
  {
    name: 'LAVADO CON LINEA',
    year: 2012
  },
  {
    name: 'TRATAMIENTO PROFUNDO',
    year: 2009
  },
  {
    name: 'CELOFEN',
    year: 1990
  },
  {
    name: 'CEJAS',
    year: 1995
  },
  {
    name: 'POSTURAS DE UNAS',
    year: 1995
  },
  {
    name: 'PINTADAS',
    year: 1987
  },
  {
    name: 'MANOS Y PIES',
    year: 1995
  },
  {
    name: 'KERATINA',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'ALIZADO',
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
                    <Form
onSubmit={this.props.masterCallback.onsavedetail.bind(this)}>
                        <Row>
                            <FormGroup controlId="formHorizontalName">
                              <Col componentClass={ControlLabel} md={1} sm={2}>
                                Cliente
                              </Col>
                              <Col md={4} sm={6}>
                                <FormControl type="text"
name="firstname" placeholder="Cliente" required />
                              </Col>
                            </FormGroup>
                        </Row>
                        <br/>
                        <Row>
                            <FormGroup controlId="formHorizontalItem">
                                  <Col componentClass={ControlLabel}
md={1} sm={2}>
                                    Articulo
                                  </Col>
                                  <Col md={4} sm={6}>
                                    <Autosuggest
                                               suggestions={suggestions}

onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}

onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}

renderSuggestion={renderSuggestion}

getSuggestionValue={getSuggestionValue}
                                               inputProps={inputProps}
                                    />
                                  </Col>
                            </FormGroup>
                        </Row>
                        <br/>
                        <Row>
                            <FormGroup controlId="formControlsSelect">
                                <Col md={1} sm={2}>
                                  <ControlLabel>Peluquera</ControlLabel>
                                </Col>
                                <Col md={4} sm={6}>
                                  <FormControl componentClass="select"
name="development" placeholder="Peluquera" required >
                                    <option value="Alexandra">Alexandra</option>
                                    <option value="Dania">Dania</option>
                                    <option value="Daneuri">Daneuri</option>
                                    <option value="Damirky">Damirky</option>
                                    <option value="Dayiana">Dayiana</option>
                                    <option value="Juribel">Juribel</option>
                                    <option value="Kandy">Kandy</option>
                                    <option value="Massiel">Massiel</option>
                                    <option value="Marionaisi">Marionaisi</option>
                                    <option value="Naty">Naty</option>
                                    <option value="Tati">Tati</option>
                                    <option value="Mayi">Mayi</option>
                                    <option value="otras">otras</option>
                                  </FormControl>
                                </Col>
                            </FormGroup>
                        </Row>
                        <br/>
                        <Row>
                            <FormGroup controlId="formHorizontalName">
                              <Col componentClass={ControlLabel} md={1} sm={2}>
                                Precio
                              </Col>
                              <Col md={4} sm={6}>
                                <FormControl type="text"
name="project" placeholder="Precio" required />
                              </Col>
                              <Col md={2} sm={2} >
                                    <Button type="submit"><i
className="fa fa-plus" aria-hidden="true"></i></Button>
                              </Col>
                            </FormGroup>
                        </Row>
                        <br/>
                        <Row>
                            <input
style={{'width':'70px','display':'none'}} type="text" name="suggest"
placeholder="Name" value={this.state.value} />
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
                        <th>Nombre</th>
                        <th>Articulo</th>
                        <th>Peluquera</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.props.masterDetail.map(
                            (masterdetail,index) => <MasterModalTableBody

 index={index+1}

 key={index}

 id={masterdetail.id}

 firstname={masterdetail.firstname}

 item={masterdetail.item}

 development={masterdetail.development}

 project={masterdetail.project}
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
                <td>{this.props.index}</td>
                <td>{this.props.firstname}</td>
                <td>{this.props.item}</td>
                <td>{this.props.development}</td>
                <td>{this.props.project}</td>
            </tr>

        );
    }

}

class Detail extends React.Component{

    constructor() {

        super();
        this.state = {
            showModal: false,
            filterText: '',
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

    onHandleChange(event){

        this.setState({

            filterText: event.target.value
        });
    }

    render(){

        return(
            <Grid>

                <Row>
                    <DetailSearch
                                    filterText={this.state.filterText}
                                    detailCallback={{
                                                onHandleChange:
this.onHandleChange.bind(this)
                                    }}
                    />
                </Row>
                <Row>
                        <div className="pull-right">
                            <Button onClick={this.open.bind(this)}>Add
Detail</Button>
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
                                    filterText={this.state.filterText}
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
                onSelect={this.handleSelect.bind(this)}
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
                          <input
onChange={this.props.detailCallback.onHandleChange.bind(this)}
type="text" className="form-control" id="first_name"
name="first_name"/>
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
        let filteredTable = this.props.detailData.filter(
            (detail) => detail.name.indexOf(this.props.filterText) !== -1
        )

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
                {filteredTable.map(
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
                <Modal show={this.props.showModal}
onHide={this.props.detailCallback.close}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Form horizontal
onSubmit={this.props.detailCallback.onsavedetail.bind(this)}>
                      <Modal.Body>
                                <FormGroup controlId="formHorizontalname">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Name
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text"
name="name" placeholder="Name" />
                                  </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalItem">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Item
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text"
name="item" placeholder="Item" />
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
        <Route path="repos/:repo_name" component={Repos}/>
        <Route path="actions/:actionid" component={Actions}/>
        <Route path="detail" component={Detail}/>
        <Route path="master" component={Master}/>
    </Route>
  </Router>
), document.getElementById('contents'));
