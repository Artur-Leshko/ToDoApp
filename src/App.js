import React, { useMemo } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Redirect, Switch, useHistory } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider, useSelector } from 'react-redux';
import { auth, firestore } from './common/firebase';
import { ProtectedRoute } from './common/components/ProtectedRoute';
import { ErrorComponent } from './common/components/error';
import { Menu } from './components/menu/Menu';
import { UserDisplay } from './components/userDisplay/UserDisplay';
import { Welcome } from './components/welcome/Welcome';
import { UserActionsCreator, isFirstLoading, Login, Register, userReducer } from './components/user';

const reducer = combineReducers({
  user: userReducer
});

const Routes = () => {
  const isFirst = useSelector(isFirstLoading);

  if(isFirst) {
    return null;
  }

  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/todoapp' />
      </Route>
      <ProtectedRoute path='/todoapp'>
        <Menu />
        <UserDisplay />
        <div className='body-main'>
          <Switch>
            <ProtectedRoute exact path='/todoapp'>
              <Welcome />
            </ProtectedRoute>
            <ProtectedRoute path='/todoapp/projects'>

            </ProtectedRoute>
            <ProtectedRoute path='/todoapp/inbox'>

            </ProtectedRoute>
            <ProtectedRoute path='/todoapp/focus'>

            </ProtectedRoute>
            <ProtectedRoute path='/todoapp/projects/:projectId'>

            </ProtectedRoute>
            <ProtectedRoute path='/todoapp/tasks/:taskId'>

            </ProtectedRoute>
            <ProtectedRoute path='/todoapp/tasks/new'>

            </ProtectedRoute>
            <ProtectedRoute>
              <ErrorComponent />
            </ProtectedRoute>
          </Switch>
        </div>
      </ProtectedRoute>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route>
        <ErrorComponent />
      </Route>
    </Switch>
  )
}

const ReduxApp = () =>  {
  const history = useHistory();
  const store = useMemo(() => {
    const store = createStore(
      reducer,
      compose(
        applyMiddleware(thunk.withExtraArgument({firestore, auth, history})),  window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );

    store.dispatch(UserActionsCreator.loadUser());
    return store;
  }, []);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

const App = () => (
  <BrowserRouter>
    <ReduxApp />
  </BrowserRouter>
)

export default App;
