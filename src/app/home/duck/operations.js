import { push } from 'connected-react-router';

export const gotoRoute = pathname => dispatch => dispatch(push(pathname));

export default { gotoRoute };
