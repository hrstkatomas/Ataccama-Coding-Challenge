import { action } from '../helpers/objects/actionFactory'


export const EXPAND_OBJECT = 'EXPAND_OBJECT'


/**
 * Will dispatch object telling to expand an object
 * @param {Object} value Value to be dispatched, expanded in visualization
 * @returns {Object} redux action object
 */
export const expandObject = action(EXPAND_OBJECT)
