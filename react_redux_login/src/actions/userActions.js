import axios from 'axios';
import { createAction } from 'redux-actions';

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants/ActionTypes';

export const registerRequest = createAction('REGISTER_REQUEST');
export const registerSuccess = createAction('REGISTER_SUCCESS');
export const registerFailed = createAction('REGISTER_FAILURE');
export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFailure = createAction('LOGIN_FAILURE');
