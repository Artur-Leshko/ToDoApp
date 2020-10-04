export const UserActions = {
    SET_USER: 'User/SET_USER'
}

export const UserActionsCreator = {
    loadUser: () => (dispatch, getState, { auth, history }) => {
        auth.onAuthStateChanged(user => {
            const isFirstLoading = getState().user.isFirstLoading;

            dispatch({
                type: UserActions.SET_USER,
                payload: {
                    user
                }
            });

            if(history.location.state?.location) {
                history.replace(history.location.state.location.pathname);
            } else if (!isFirstLoading) {
                history.replace('/todoapp');
            }
        })
    },

    login: ({ login, password }) => (dispatch, getState, { auth }) => {
        auth.signInWithEmailAndPassword(login, password);
    },

    logout: () => (dispatch, getState, { auth }) => {
        auth.signOut();
    },

    register: ({ login, password }) => (dispatch, getState, { auth }) => {
        auth.createUserWithEmailAndPassword(login, password)
    },

    updateProfile: (user, fields) => (dispatch, getState) => {
        user.updateProfile(fields);
    }
}
