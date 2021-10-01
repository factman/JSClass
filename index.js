"use strict";

const TodoApp = require('./src/TodoApp');

console.log(TodoApp);

TodoApp.createCategory("Work", "red");
console.table(TodoApp.dataIndex);
TodoApp.createCategory("Home", "green");
console.table(TodoApp.dataIndex);
TodoApp.createCategory("Shopping", "blue");
console.table(TodoApp.dataIndex);
console.table(TodoApp.categories);

TodoApp.createTask("Go to Work", "Get to the office before 8am", 1);
TodoApp.createTask("Go to Work", "Get to the office before 8am", 1);
console.table(TodoApp.dataIndex);
TodoApp.createTask("Go to Work", "Get to the office before 8am", 3);
TodoApp.createTask("Go to Work", "Get to the office before 8am", 3);
TodoApp.createTask("Go to Work", "Get to the office before 8am", 3);
console.table(TodoApp.dataIndex);
TodoApp.createTask("Go to Work", "Get to the office before 8am", 2);
console.table(TodoApp.dataIndex);
console.table(TodoApp.tasks);

TodoApp.toggleTask(1);
TodoApp.toggleTask(3);
console.table(TodoApp.tasks);

TodoApp.categories.forEach((category) => {
    console.table(category);
    console.table(TodoApp.tasks.filter((task) => task.categoryId === category.id));
});