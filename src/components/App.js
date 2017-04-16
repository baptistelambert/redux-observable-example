import React from 'react';
import { connect } from 'react-redux';

import { fetchUser, fetchUserCancel } from '../actions/userActions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: 1 };
  }

  handleValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFetchUser() {
    this.props.fetchUser(this.state.id);
  }

  handleFetchUserCancel() {
    this.props.fetchUserCancel();
  }

  render() {
    return (
      <div>
        <h2>{this.props.userError ? 'An error occured' : this.props.user.name || 'no user'}</h2>
        <input type="number" name="id" value={this.state.id} onChange={this.handleValueChange.bind(this)}/>
        <button onClick={this.handleFetchUser.bind(this)}>Fetch User</button>
        <button onClick={this.handleFetchUserCancel.bind(this)}>Cancel</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    userError: state.userError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchUserCancel: () => dispatch(fetchUserCancel()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
