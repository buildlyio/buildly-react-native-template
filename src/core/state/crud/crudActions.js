const CRUD_LOAD_DATA = 'CRUD_LOAD_DATA';
const CRUD_LOAD_DATA_COMMIT = 'CRUD_LOAD_DATA_COMMIT';
const CRUD_LOAD_DATA_FAIL = 'CRUD_LOAD_DATA_FAIL';

const CRUD_CREATE = 'CRUD_CREATE';
const CRUD_CREATE_COMMIT = 'CRUD_CREATE_COMMIT';
const CRUD_CREATE_FAIL = 'CRUD_CREATE_FAIL';

const CRUD_UPDATE = 'CRUD_UPDATE';
const CRUD_UPDATE_COMMIT = 'CRUD_UPDATE_COMMIT';
const CRUD_UPDATE_FAIL = 'CRUD_UPDATE_FAIL';

const CRUD_DELETE = 'CRUD_DELETE';
const CRUD_DELETE_COMMIT = 'CRUD_DELETE_COMMIT';
const CRUD_DELETE_FAIL = 'CRUD_DELETE_FAIL';

/**
 * Load data action
 * @param {string} endpoint endpoint to make the call
 * @param {string} idProp id to get the data
 * @param {string} dataProp field name where the data will be in response
 */
const crudLoadData = (endpoint, idProp, dataProp) => {
  return {
    type: CRUD_LOAD_DATA,
    endpoint,
    idProp,
    dataProp,
    loading: true,
    loaded: false,
    loadingFailed: false,
  };
};

/**
 * Load data commit action
 * @param {object} data the response object
 * @param {string} endpoint endpoint to make the call
 * @param {string} idProp id to get the data
 * @param {string} dataProp field name where the data will be in response
 */
const crudLoadDataCommit = (data, endpoint, idProp, dataProp) => {
  return {
    type: CRUD_LOAD_DATA_COMMIT,
    endpoint,
    idProp,
    dataProp,
    data,
    loading: false,
    loaded: true,
    loadingFailed: false,
  };
};

/**
 * Load data fail action
 * @param {object} error the response object
 * @param {string} endpoint endpoint to make the call
 */
const crudLoadDataFail = (error, endpoint) => {
  return {
    type: CRUD_LOAD_DATA_FAIL,
    endpoint,
    error,
    loading: false,
    loaded: false,
    loadingFailed: true,
  };
};

/**
 * Create data action
 * @param {object} data the data to be added
 * @param {string} endpoint endpoint to make the call
 * @param {string} idProp id to get the data
 * @param {string} dataProp field name where the data will be in response
 */
const crudCreate = (data, endpoint, idProp, dataProp) => {
  return {
    type: CRUD_CREATE,
    endpoint,
    idProp,
    dataProp,
    data,
    loading: true,
    loaded: false,
    loadingFailed: false,
  };
};

/**
 * Create data commit action
 * @param {object} data the response object
 * @param {string} endpoint endpoint to make the call
 * @param {string} idProp id to get the data
 * @param {string} dataProp field name where the data will be in response
 */
const crudCreateCommit = (data, endpoint, idProp, dataProp) => {
  return {
    type: CRUD_CREATE_COMMIT,
    endpoint,
    idProp,
    dataProp,
    data,
    loading: false,
    loaded: true,
    loadingFailed: false,
  };
};

/**
 * Create data fail action
 * @param {object} error the response object
 * @param {string} endpoint endpoint to make the call
 */
const crudCreateFail = (error, endpoint) => {
  return {
    type: CRUD_CREATE_FAIL,
    endpoint,
    error,
    loading: false,
    loaded: false,
    loadingError: true,
  };
};

/**
 * Update data action
 * @param {object} data the data to be updated
 * @param {string} endpoint endpoint to make the call
 * @param {string} idProp id to get the data
 * @param {string} dataProp field name where the data will be in response
 */
const crudUpdate = (data, endpoint, idProp, dataProp) => {
  return {
    type: CRUD_UPDATE,
    endpoint,
    idProp,
    dataProp,
    data,
    loading: true,
    loaded: false,
    loadingFailed: false,
  };
};

/**
 * Update data commit action
 * @param {object} data the response object
 * @param {string} endpoint endpoint to make the call
 * @param {string} idProp id to get the data
 * @param {string} dataProp field name where the data will be in response
 */
const crudUpdateCommit = (data, endpoint, idProp, dataProp) => {
  return {
    type: CRUD_UPDATE_COMMIT,
    data,
    endpoint,
    idProp,
    dataProp,
    loading: false,
    loaded: true,
    loadingFailed: false,
  };
};

/**
 * Update data fail action
 * @param {object} error the response object
 * @param {string} endpoint endpoint to make the call
 */
const crudUpdateFail = (error, endpoint) => {
  return {
    type: CRUD_UPDATE_FAIL,
    endpoint,
    error,
    loading: false,
    loaded: false,
    loadingFailed: true,
  };
};

/**
 * Delete data action
 * @param {string} endpoint endpoint to make the call
 * @param {string} idProp id to get the data
 */
const crudDelete = (endpoint, idProp) => {
  return {
    type: CRUD_DELETE,
    endpoint,
    idProp,
    loading: true,
    loaded: false,
    loadingFailed: false,
  };
};

/**
 * Delete data commit action
 * @param {string} endpoint endpoint to make the call
 * @param {string} idProp id to get the data
 */
const crudDeleteCommit = (endpoint, idProp) => {
  return {
    type: CRUD_DELETE_COMMIT,
    endpoint,
    idProp,
    loading: false,
    loaded: true,
    loadingFailed: false,
  };
};

/**
 * Delete data fail action
 * @param {object} error the response object
 * @param {string} endpoint endpoint to make the call
 */
const crudDeleteFail = (error, endpoint) => {
  return {
    type: CRUD_DELETE_FAIL,
    endpoint,
    error,
    loading: false,
    loaded: false,
    loadingFailed: true,
  };
};

export default {
  crudLoadData,
  crudLoadDataCommit,
  crudLoadDataFail,
  crudCreate,
  crudCreateCommit,
  crudCreateFail,
  crudUpdate,
  crudUpdateCommit,
  crudUpdateFail,
  crudDelete,
  crudDeleteCommit,
  crudDeleteFail,
};
