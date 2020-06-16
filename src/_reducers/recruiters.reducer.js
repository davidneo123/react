import { recruiterConstants } from '../_constants';

export function candidates(state = {}, action) {
  switch (action.type) {
    case recruiterConstants.GETCANDIDATES_REQUEST:
      return {
        loading: true
      };
    case recruiterConstants.GETCANDIDATES_SUCCESS:
      return {
        items: action.candidates
      };
    case recruiterConstants.GETCANDIDATES_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}