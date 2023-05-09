import { Types, Creators } from './actions';
import { LoginTypes, loginCreators } from '../../login';
import { uploadImage } from '../../../lib/requests';

export default store => next => action => {
    switch (action.type) {
        case Types.UPLOAD_IMAGE_REQUEST: {
            const { user, request } = store.getState().login;
            next(action);
            uploadImage(
                user.token,
                action.image,
                (err, isApiRequest) => {
                    if (err && err.code === '401' && isApiRequest && request === undefined) {
                        store.dispatch(
                            loginCreators.refreshRequest({
                                invoke: Creators.uploadContentRequest,
                                args: [action.content, action.locations, action.hospitalservices]
                            })
                        );

                        return;
                    }

                    if (err) {
                        store.dispatch(Creators.uploadContentFailure(err));
                        return;
                    }

                    store.dispatch(Creators.uploadContentSuccess());
                }
            );
            break;
        }

        default:
            next(action);
    }
};
