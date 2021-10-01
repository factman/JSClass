"use strict";

/**
 * @typedef {object} Task - A todo taskItem
 * @prop {string} task
 * @prop {string} description
 * @prop {boolean} status
 * @prop {Date} date
 * @prop {number} categoryId
 * @prop {number} id
 */

/**
 * @typedef {object} Category - A todo category
 * @prop {string} label
 * @prop {string} color
 * @prop {number} id
 */

/**
 * @typedef {object} DataIndex
 * @prop {number} tasks
 * @prop {number} categories
 */

/**
 * @typedef {object} TodoApp
 * @prop {DataIndex} dataIndex
 * @prop {Category[]} categories
 * @prop {Task[]} tasks
 * @prop {CreateCategory} createCategory
 * @prop {CreateTask} createTask
 * @prop {ToggleTask} toggleTask
 */

/**
 * Possible Datasets
 * @readonly
 * @enum {('tasks' | 'categories')}
 */
const Dataset = {
    /** @type {string} */
    Category: 'categories',
    /** @type {string} */
    Task: 'tasks',
};

+
(
    /**
     * Closure
     * @param {(window | Node)} root - Global scope instance
     * @returns TodoApp
     */
    function(root) {

        /**
         * @type {DataIndex}
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
         * @alias GetNextId
         * @param {Dataset} dataset
         * @returns {number}
         * @example
         * const { TodoApp } = require('./src/TodoApp');
         *
         * // dataset: 'tasks' or 'categories'
         * // OR
         * // dataset: Dataset.Task or Dataset.Category
         * TodoApp.getNextId('tasks');
         */
        function getNextId(dataset) {
            const newId = dataIndex[dataset] + 1;
            dataIndex[dataset] = newId;
            return newId;
        }

        /**
         * createCategory
         * @alias CreateCategory
         * @param {string} label
         * @param {string} color
         * @example
         * const { TodoApp } = require('./src/TodoApp');
         *
         * // color: colorName(blue) or colorCode(#0000FF)
         * TodoApp.createCategory('Office', 'blue');
         */
        function createCategory(label, color) {
            categories.push({
                label,
                color,
                id: getNextId(Dataset.Category),
            });
        }

        /**
         * createTask
         * @alias CreateTask
         * @param {string} task
         * @param {string} description
         * @param {number} categoryId
         * @example
         * const { TodoApp } = require('./src/TodoApp');
         *
         * TodoApp.createTask('Task title', 'Task description', 1);
         */
        function createTask(task, description, categoryId) {
            tasks.push({
                task,
                description,
                categoryId,
                status: false,
                date: new Date(),
                id: getNextId(Dataset.Task),
            });
        }

        /**
         * getTaskById
         * @alias GetTaskById
         * @param {number} id
         * @param {(Task[] | Category[])} list
         * @returns {{index: number, value: (Task | Category)}}
         * @example
         * const { TodoApp } = require('./src/TodoApp');
         *
         * // list: Task[] or Category[]
         * const task = TodoApp.getTaskById(1, list);
         */
        function getTaskById(id, list) {
            let data;
            list.forEach((value, index) => {
                if (value.id === id) {
                    data = { index, value };
                    return;
                }
            });
            return data;
        }

        /**
         * toggleTask
         * @alias ToggleTask
         * @param {number} taskId
         * @example
         * const { TodoApp } = require('./src/TodoApp');
         *
         * TodoApp.toggleTask(1);
         */
        function toggleTask(taskId) {
            const task = getTaskById(taskId, tasks);
            tasks[task.index] = {
                ...task.value,
                status: !task.value.status,
            };
        }

        // delete task
        // update task

        /**
         * @type {TodoApp}
         */
        const TodoApp = {
            dataIndex,
            categories,
            tasks,
            createCategory,
            createTask,
            toggleTask
        };

        // Module export
        if (typeof module === 'object' && module.exports) {
            module.exports = TodoApp;
        } else {
            root.TodoApp = TodoApp;
        }

    }
)(this);