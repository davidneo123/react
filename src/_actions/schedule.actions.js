import { scheduleConstants } from '../_constants';
import { scheduleService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const scheduleActions = {
    create,
    getAll,
    delete: _delete
};


function create(schedule, isCreate) {
    return dispatch => {
        dispatch(request(schedule));
        console.log(isCreate)
      if (isCreate) { 
          scheduleService.create(schedule)
            .then(
                schedule => { 
                    dispatch(success());
                    history.push('/schedules');
                    dispatch(alertActions.success('Registro exitoso'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
        } else{
            scheduleService.update(schedule)
            .then(
                schedule => { 
                    dispatch(success());
                    history.push('/schedules');
                    dispatch(alertActions.success('Actualización exitosa'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
        }
    };

    function request(schedule) { return { type: scheduleConstants.REGISTER_REQUEST, schedule } }
    function success(schedule) { return { type: scheduleConstants.REGISTER_SUCCESS, schedule } }
    function failure(error) { return { type: scheduleConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        scheduleService.getAll()
            .then(
                schedules => dispatch(success(schedules)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: scheduleConstants.GETALL_REQUEST } }
    function success(schedules) { return { type: scheduleConstants.GETALL_SUCCESS, schedules } }
    function failure(error) { return { type: scheduleConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        scheduleService.delete(id)
            .then(
                schedule => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: scheduleConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: scheduleConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: scheduleConstants.DELETE_FAILURE, id, error } }
}