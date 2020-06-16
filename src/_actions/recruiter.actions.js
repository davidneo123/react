import { recruiterConstants } from '../_constants';
import { recruiterService } from '../_services';

export const recruiterActions = {
    getCandidates
};

function getCandidates() {
    return dispatch => {
        dispatch(request());
        recruiterService.getCandidates()
            .then(
                candidates => dispatch(success(candidates)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: recruiterConstants.GETCANDIDATES_REQUEST } }
    function success(candidates) { return { type: recruiterConstants.GETCANDIDATES_SUCCESS, candidates } }
    function failure(error) { return { type: recruiterConstants.GETCANDIDATES_FAILURE,error } }
}