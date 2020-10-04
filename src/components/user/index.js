import { connect } from 'react-redux';
import { Login as LoginPresentational } from './Login';
import { Register as RegisterPresentational } from './Register';
import { UserActionsCreator } from './actions';

export { UserActionsCreator } from './actions';
export { userReducer } from './userReducer';

const getUserState = state => state.user;
export const userSelector = state => getUserState(state).user;
export const isFirstLoading = state => getUserState(state).isFirstLoading;

export const Login = connect(null, {
    onLogin: UserActionsCreator.login
})(LoginPresentational);

export const Register = connect(null, {
    onRegister: UserActionsCreator.register
})(RegisterPresentational);

