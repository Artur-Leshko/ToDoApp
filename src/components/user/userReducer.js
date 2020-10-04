import { UserActions } from './actions'

export const userReducer = (state = { user: null, isFirstLoading: true }, action) => {
    if(action.type === UserActions.SET_USER) {
        let user = null;
        if(action.payload.user) {
            const { uid, email, displayName } = action.payload.user;

            user = { id: uid, email, displayName};
        }
        return { user, isFirstLoading: false };
    }
    return state;
}
