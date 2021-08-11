const mapStateToProps = (state) => ({
  session: state.session
})


class Corelayout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

constructor(props) {
  super(props)
  this.handleLogin = this.handleLogin.bind(this)
}

handleLogin(loginObj, e) {
  e.preventDefault()
  this.props.loginAsync(loginObj)
}

render () {
  return (
    <div className= 'container text-center'>
    <Header
    handleLogin={this.handleLogin}
    session={this.props.session} />
    <div className={classes.mainContainer}>
    </div>
    </div>
    }
  )
}
export default connect(mapStateToProps, mapActionCreators)(Corelayout)
