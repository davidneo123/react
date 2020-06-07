import { recruiterConstants } from '../_constants';

export function recruiters(state = {}, action) {
  switch (action.type) {
    case recruiterConstants.GETUSERS_REQUEST:
      return {
        loading: true
      };
    case recruiterConstants.GETUSERS_SUCCESS:
      return {
        items: action.users
      };
    case recruiterConstants.GETUSERS_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}