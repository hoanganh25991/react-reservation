/**
 * For fetch data
 * @type {string}
 */
export const BEFORE_SEND_REQ = 'BEFORE_SEND_REQ';
export const POST_FORM = 'POST_FORM';
export const POST_JSON = 'POST_JSON';
export const RECEIVE_RES = 'RECEIVE_RES';

// Decide end_point to fetch data
const END_POINT_FALLBACK = 'https://alfred.hoipos.com/reservation/dev/api/admin'
// Decide endpoint base on .env file
import {END_POINT as end_point} from './.env'
export const END_POINT = end_point ? end_point : END_POINT_FALLBACK

export const FETCH_FAIL = 'FETCH_FAIL'

/**
 * Handle reservations
 * @type {string}
 */
export const UPDATE_RESERVATION  = 'UPDATE_RESERVATION';
export const UPDATE_RESERVATIONS = 'UPDATE_RESERVATIONS';
export const FETCH_RESERVATIONS_FAIL = 'FETCH_RESERVATIONS_FAIL'

export const ASSIGN_DATE_ON_RESERVATIONS = 'ASSIGN_DATE_ON_RESERVATIONS'

/**
 * Handle User
 */
export const UPDATE_USER    = 'UPDATE_USER';
export const LOGGING_IN     = 'LOGGING_IN';
export const LOGIN_SUCCESS  = 'LOGIN_SUCCESS';
export const LOGIN_FAIL     = 'LOGIN_FAIL';

export const LOGGING_OUT    = 'LOGGING_OUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL    = 'LOGOUT_FAIL';
/////

export const TOGGLE_FILTER_DAY = 'TOGGLE_FILTER_DAY';
export const TOGGLE_FILTER_STATUS = 'TOGGLE_FILTER_STATUS';

export const FILTER_DAY = 'FILTER_DAY';
export const FILTER_STATUS = 'FILTER_STATUS';

export const TODAY        = 'TODAY';
export const TOMORROW     = 'TOMORROW';
export const NEXT_3_DAYS  = 'NEXT_3_DAYS';
export const NEXT_7_DAYS  = 'NEXT_7_DAYS';
export const NEXT_30_DAYS = 'NEXT_30_DAYS';

export const TOGGLE_INPUT_PICK_A_DATE  = 'TOGGLE_INPUT_PICK_A_DATE';

// For filter status
export const ARRIVED        = 'ARRIVED';
export const CONFIRMED      = 'CONFIRMED';
export const REMINDER_SENT  = 'REMINDER_SENT';
export const RESERVED       = 'RESERVED';
export const USER_CANCELLED = 'USER_CANCELLED';
export const STAFF_CANCELLED = 'STAFF_CANCELLED';
export const NO_SHOW        = 'NO_SHOW';


