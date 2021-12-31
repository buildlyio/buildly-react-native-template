import React, { useMemo, useReducer, useContext } from 'react';
import crudActions from './crudActions';
import httpService from '../services/httpService';
import reducer, { initialState } from './crudReducer';
import { Config } from 'react-native-config';

/**
 * Context for the CRUD state
 */
const CrudContext = React.createContext(initialState);

function CrudProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState || {});

  /**
   * Makes a get request and stores the state
   * @param {object} payload the load action payload
   * @param {string} payload.endpoint endpoint to make the call
   * @param {string} payload.idProp id to get the data
   * @param {string} payload.dataProp field name where the data will be in response
   */
  const loadData = payload => {
    dispatch(
      crudActions.crudLoadData(
        payload.endpoint,
        payload.idProp,
        payload.dataProp,
      ),
    );
    httpService
      .makeRequest('get', `${Config.API_URL}${payload.endpoint}`, {}, true)
      .then(res => {
        dispatch(
          crudActions.crudLoadDataCommit(
            res.data,
            payload.endpoint,
            payload.idProp,
            payload.dataProp,
          ),
        );
      })
      .catch(error => {
        dispatch(crudActions.crudLoadDataFail(error, payload.endpoint));
      });
  };

  /**
   * Makes a post request and updates the state
   * @param {object} payload the create action payload
   * @param {string} payload.endpoint endpoint to make the call
   * @param {string} payload.idProp id to get the data
   * @param {string} payload.dataProp field name where the data will be in response
   */
  const createItem = payload => {
    dispatch(
      crudActions.crudCreate(
        payload,
        payload.endpoint,
        payload.idProp,
        payload.dataProp,
      ),
    );
    httpService
      .makeRequest(
        'post',
        `${Config.API_URL}${payload.endpoint}`,
        payload.data,
        true,
      )
      .then(res => {
        dispatch(
          crudActions.crudCreateCommit(
            res.data,
            payload.endpoint,
            payload.idProp,
            payload.dataProp,
          ),
        );
      })
      .catch(error => {
        dispatch(crudActions.crudCreateFail(error, payload.endpoint));
      });
  };

  /**
   * Makes a patch request and updates the state
   * @param {object} payload the update action payload
   * @param {string} payload.endpoint endpoint to make the call
   * @param {string} payload.idProp id to get the data
   * @param {string} payload.dataProp field name where the data will be in response
   */
  const updateItem = payload => {
    dispatch(crudActions.crudUpdate(payload, payload.endpoint, payload.idProp));
    httpService
      .makeRequest(
        'patch',
        `${Config.API_URL}${payload.endpoint}${payload.data[payload.idProp]}/`,
        payload.data,
        true,
      )
      .then(res => {
        dispatch(
          crudActions.crudUpdateCommit(
            res.data,
            payload.endpoint,
            payload.idProp,
            payload.dataProp,
          ),
        );
      })
      .catch(error => {
        dispatch(crudActions.crudUpdateFail(error, payload.endpoint));
      });
  };

  /**
   * Makes a delete request and updates the state
   * @param {object} payload the load action payload
   * @param {string} payload.endpoint endpoint to make the call
   * @param {string} payload.idProp id to get the data
   * @param {string} payload.dataProp field name where the data will be in response
   */
  const deleteItem = payload => {
    dispatch(crudActions.crudDelete(payload.endpoint, payload.idProp));
    httpService
      .makeRequest(
        'delete',
        `${Config.API_URL}${payload.endpoint}${payload.data[payload.idProp]}/`,
        {},
        true,
      )
      .then(res => {
        dispatch(
          crudActions.crudDeleteCommit(
            res.data,
            payload.endpoint,
            payload.idProp,
            payload.dataProp,
          ),
        );
      })
      .catch(error => {
        dispatch(crudActions.crudDeleteFail(error, payload.endpoint));
      });
  };

  const value = useMemo(() => {
    return {
      state,
      loadData,
      createItem,
      updateItem,
      deleteItem,
    };
  }, [state]);

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
}

/**
 * Returns the current CrudContext value
 */
const useCrud = () => useContext(CrudContext);
export { CrudContext, useCrud };
export default CrudProvider;
