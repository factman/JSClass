"use strict";

+(
  /**
   * Closure
   * @constructor
   * @alias TodoApp
   * @param {(window | Node)} root - Global scope instance
   */
  function(root) {

    /**
     * @typedef {Object} Task - A todo taskItem
     * @property {string} task
     * @property {string} description
     * @property {boolean} status
     * @property {Date} date
     * @property {number} categoryId
     * @property {number} id
     */

    /**
     * @typedef {Object} Category - A todo category
     * @property {string} label
     * @property {string} color
     * @property {number} id
     */

    /**
     * @type {{tasks: number, categories: number}}
     */
    const dataIndex = {
      tasks: 0,
      categories: 0,
    };

    /**
     * @type {Task[]}
     */
    const tasks = [];
    /**
     * @type {Category[]}
     */
    const categories = [];

    /**
     * getNextId
     * @param {string} dataset
     * @returns {number}
     */
    function getNextId(dataset) {
      const newId = dataIndex[dataset] + 1;
      dataIndex[dataset] = newId;
      return newId;
    }

    /**
     * createCategory
     * @param {string} label
     * @param {string} color
     */
    function createCategory(label, color) {
      categories.push({
        label,
        color,
        id: getNextId("categories"),
      });
    }

    /**
     * createTask
     * @param {string} task
     * @param {string} description
     * @param {number} categoryId
     */
    function createTask(task, description, categoryId) {
      tasks.push({
        task,
        description,
        categoryId,
        status: false,
        date: new Date(),
        id: getNextId("tasks"),
      });
    }

    /**
     * getTaskById
     * @param {number} id
     * @param {(Task[] | Category[])} list
     * @returns {{index: number, value: (Task | Category)}}
     */
    function getTaskById(id, list) {
      let data;
      list.forEach((value, index) => {
        if (value.id === id) {
          data = {index, value};
          return;
        }
      });
      return data;
    }

    /**
     * toggleTask
     * @param {number} taskId
     */
    function toggleTask(taskId) {
      /**
       * @type {{index: number, value: Task}}
       */
      const task = getTaskById(taskId, tasks);
      tasks[task.index] = {...task.value, status: !task.value.status};
    }

    // delete task
    // update task

    const TodoApp = {
      dataIndex,
      categories,
      tasks,
      createCategory,
      createTask,
      toggleTask
    };

    // Module export
    if (root.module) {
      root.module.exports = TodoApp;
    } else {
      root.TodoApp = TodoApp;
    }
  }
)(this);
