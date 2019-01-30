import { action } from '../helpers/objects/actionFactory'


export const REMOVE_OBJECT = 'REMOVE_OBJECT'


/**
 * Will dispatch object telling to remove object from store
 * @param {Object} value Value to be dispatched, removed from data store
 * @returns {Object} redux action object
 */
export const removeObject = action(REMOVE_OBJECT)
