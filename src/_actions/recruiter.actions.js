import { recruiterConstants } from '../_constants';
import { recruiterService } from '../_services';

export const recruiterActions = {
    getUsers
};

function getUsers(q) {
    console.log('action: '+q)
    return dispatch => {
        dispatch(request(q));

        recruiterService.getUsers(q)
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(q,error.toString()))
            );
    };

    function request(q) { return { type: recruiterConstants.GETUSERS_REQUEST,q } }
    function success(users) { return { type: recruiterConstants.GETUSERS_SUCCESS, users } }
    function failure(error) { return { type: recruiterConstants.GETUSERS_FAILURE, q,error } }
}