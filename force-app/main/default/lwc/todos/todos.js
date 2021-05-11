import { LightningElement, api } from 'lwc';

/**
 * A todo item
 * @typedef Todo
 * @property {number} id
 * @property {string} description
 * @property {boolean} isComplete
 */

export default class Todos extends LightningElement {
  _todos;

  /** @type {Todo[]} */
  @api
  get todos() {
    return this._todos;
  }
  set todos(value) {
    this._todos = value;
    this.filterTodos();
  }

  /** @param {string} direction */
  /** @returns {Todo[]} */
  filterTodos(direction) {
    //
    this.todos.test;
    return this.todos;
  }
}
