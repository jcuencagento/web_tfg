import { Types, Creators } from './actions';
import { LoginTypes, loginCreators } from '../../login';
import { getUsers, deleteUser, deleteAllUsers } from '../../../lib/requests';

export default store => next => action => {
    switch (action.type) {
        default:
            next(action);
    }
};
