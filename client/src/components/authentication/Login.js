import React, {Component} from 'react';
import Header from '../user/Header';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Footer from '../user/Footer';
import { connect } from 'react-redux';
import { validateLogin } from '../../utils/validation/auth';
import { login } from '../../actions/login';



class Login extends Component {

constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

handleLogin(event) {
    event.preventDefault();
    const { errors, isValid } = validateLogin(this.state);
    if (!isValid) {
      return this.setState({ errors });
    }
    return this.props.login(this.state);
}


handleChange(event) {
    event.preventDefault();
    const formField = event.target.name;
    const user = { ...this.state };
    user[formField] = event.target.value.trim();
    this.setState(() => user);
}

	render() {

		return (

			<div>
			<Header login="true" />
			<div class="wrapper">
				<div class="container">
					<div class="row">
						<div class="module module-login span4 offset4">
							<form class="form-vertical" onSubmit={this.handleLogin}>
								<div class="module-head">
									<h3>Log In</h3>
								</div>
								<div class="module-body">
									<div class="control-group">
										<div class="controls row-fluid">
											<input class="span12" type="text" name="email" onChange={this.handleChange} id="inputEmail" placeholder="Username" required />
											<span>
                                				{this.state.errors &&
                                				this.state.errors.username}
                              				</span>
										</div>
									</div>
									<div class="control-group">
										<div class="controls row-fluid">
											<input class="span12" name="password" type="password" onChange={this.handleChange} id="inputPassword" placeholder="Password" required />
											<span className="red-text">
                               					 {this.state.errors &&
                                			  this.state.errors.password}
                                			</span>
										</div>
									</div>
								</div>
								<div class="module-foot">
									<div class="control-group">
										<div class="controls clearfix">
											<button type="submit" name="submit" class="btn btn-primary pull-right">Login</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<br /><br /><br />
				</div>
			</div>
			<Footer />
			</div>
		);
	}
}


Login.propTypes = {
  login: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
  isLoading: PropTypes.bool,
};

const mapStateToProps = ({ authReducer }) => (
  { isLoggedIn: authReducer.isLoggedIn, isLoading: authReducer.authLoading }
);

export default connect(mapStateToProps, { login })(Login);
