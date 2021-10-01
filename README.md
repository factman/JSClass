## Functions

<dl>
<dt><a href="#GetNextId">GetNextId(dataset)</a> ⇒ <code>number</code></dt>
<dd><p>getNextId</p>
</dd>
<dt><a href="#CreateCategory">CreateCategory(label, color)</a></dt>
<dd><p>createCategory</p>
</dd>
<dt><a href="#CreateTask">CreateTask(task, description, categoryId)</a></dt>
<dd><p>createTask</p>
</dd>
<dt><a href="#GetTaskById">GetTaskById(id, list)</a> ⇒ <code>Object</code></dt>
<dd><p>getTaskById</p>
</dd>
<dt><a href="#ToggleTask">ToggleTask(taskId)</a></dt>
<dd><p>toggleTask</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Task">Task</a> : <code>object</code></dt>
<dd><p>A todo taskItem</p>
</dd>
<dt><a href="#Category">Category</a> : <code>object</code></dt>
<dd><p>A todo category</p>
</dd>
<dt><a href="#DataIndex">DataIndex</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#TodoApp">TodoApp</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="Dataset"></a>

## Dataset : <code>enum</code>
Possible Datasets

**Kind**: global enum  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Category | <code>string</code> | <code>&quot;categories&quot;</code> | 
| Task | <code>string</code> | <code>&quot;tasks&quot;</code> | 

<a name="GetNextId"></a>

## GetNextId(dataset) ⇒ <code>number</code>
getNextId

**Kind**: global function  

| Param | Type |
| --- | --- |
| dataset | [<code>Dataset</code>](#Dataset) | 

**Example**  
```js
const { TodoApp } = require('./src/TodoApp');

// dataset: 'tasks' or 'categories'
// OR
// dataset: Dataset.Task or Dataset.Category
TodoApp.getNextId('tasks');
```
<a name="CreateCategory"></a>

## CreateCategory(label, color)
createCategory

**Kind**: global function  

| Param | Type |
| --- | --- |
| label | <code>string</code> | 
| color | <code>string</code> | 

**Example**  
```js
const { TodoApp } = require('./src/TodoApp');

// color: colorName(blue) or colorCode(#0000FF)
TodoApp.createCategory('Office', 'blue');
```
<a name="CreateTask"></a>

## CreateTask(task, description, categoryId)
createTask

**Kind**: global function  

| Param | Type |
| --- | --- |
| task | <code>string</code> | 
| description | <code>string</code> | 
| categoryId | <code>number</code> | 

**Example**  
```js
const { TodoApp } = require('./src/TodoApp');

TodoApp.createTask('Task title', 'Task description', 1);
```
<a name="GetTaskById"></a>

## GetTaskById(id, list) ⇒ <code>Object</code>
getTaskById

**Kind**: global function  

| Param | Type |
| --- | --- |
| id | <code>number</code> | 
| list | [<code>Array.&lt;Task&gt;</code>](#Task) \| [<code>Array.&lt;Category&gt;</code>](#Category) | 

**Example**  
```js
const { TodoApp } = require('./src/TodoApp');

// list: Task[] or Category[]
const task = TodoApp.getTaskById(1, list);
```
<a name="ToggleTask"></a>

## ToggleTask(taskId)
toggleTask

**Kind**: global function  

| Param | Type |
| --- | --- |
| taskId | <code>number</code> | 

**Example**  
```js
const { TodoApp } = require('./src/TodoApp');

TodoApp.toggleTask(1);
```
<a name="Task"></a>

## Task : <code>object</code>
A todo taskItem

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| task | <code>string</code> | 
| description | <code>string</code> | 
| status | <code>boolean</code> | 
| date | <code>Date</code> | 
| categoryId | <code>number</code> | 
| id | <code>number</code> | 

<a name="Category"></a>

## Category : <code>object</code>
A todo category

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| label | <code>string</code> | 
| color | <code>string</code> | 
| id | <code>number</code> | 

<a name="DataIndex"></a>

## DataIndex : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| tasks | <code>number</code> | 
| categories | <code>number</code> | 

<a name="TodoApp"></a>

## TodoApp : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| dataIndex | [<code>DataIndex</code>](#DataIndex) | 
| categories | [<code>Array.&lt;Category&gt;</code>](#Category) | 
| tasks | [<code>Array.&lt;Task&gt;</code>](#Task) | 
| createCategory | [<code>CreateCategory</code>](#CreateCategory) | 
| createTask | [<code>CreateTask</code>](#CreateTask) | 
| toggleTask | [<code>ToggleTask</code>](#ToggleTask) | 

