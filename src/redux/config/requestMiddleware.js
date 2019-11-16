const requestMiddleware = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    const { promise, type, ...rest } = action; // eslint-disable-line no-redeclare

    if (!promise) {
      return next(action);
    }

    const REQUEST = `${type}_REQUEST`
    const SUCCESS = `${type}_SUCCESS`
    const FAILURE = `${type}_FAILURE`

    next({ ...(rest || {}), type: REQUEST });

    promise.then(
      result => next({ ...(rest || {}), payload: result, type: SUCCESS }),
      error => next({ ...(rest || {}), error, type: FAILURE })
    );

    return promise;
};

export default requestMiddleware