## Classes

<dl>
<dt><a href="#TodoApp">TodoApp</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Task">Task</a> : <code>Object</code></dt>
<dd><p>A todo taskItem</p>
</dd>
<dt><a href="#Category">Category</a> : <code>Object</code></dt>
<dd><p>A todo category</p>
</dd>
</dl>

<a name="TodoApp"></a>

## TodoApp
**Kind**: global class  

* [TodoApp](#TodoApp)
    * [new TodoApp(root)](#new_TodoApp_new)
    * [~dataIndex](#TodoApp..dataIndex) : <code>Object</code>
    * [~tasks](#TodoApp..tasks) : [<code>Array.&lt;Task&gt;</code>](#Task)
    * [~categories](#TodoApp..categories) : [<code>Array.&lt;Category&gt;</code>](#Category)
    * [~getNextId(dataset)](#TodoApp..getNextId) ⇒ <code>number</code>
    * [~createCategory(label, color)](#TodoApp..createCategory)
    * [~createTask(task, description, categoryId)](#TodoApp..createTask)
    * [~getTaskById(id, list)](#TodoApp..getTaskById) ⇒ <code>Object</code>
    * [~toggleTask(taskId)](#TodoApp..toggleTask)
        * [~task](#TodoApp..toggleTask..task) : <code>Object</code>

<a name="new_TodoApp_new"></a>

### new TodoApp(root)
Closure


| Param | Type | Description |
| --- | --- | --- |
| root | <code>window</code> \| <code>Node</code> | Global scope instance |

<a name="TodoApp..dataIndex"></a>

### TodoApp~dataIndex : <code>Object</code>
**Kind**: inner constant of [<code>TodoApp</code>](#TodoApp)  
<a name="TodoApp..tasks"></a>

### TodoApp~tasks : [<code>Array.&lt;Task&gt;</code>](#Task)
**Kind**: inner constant of [<code>TodoApp</code>](#TodoApp)  
<a name="TodoApp..categories"></a>

### TodoApp~categories : [<code>Array.&lt;Category&gt;</code>](#Category)
**Kind**: inner constant of [<code>TodoApp</code>](#TodoApp)  
<a name="TodoApp..getNextId"></a>

### TodoApp~getNextId(dataset) ⇒ <code>number</code>
getNextId

**Kind**: inner method of [<code>TodoApp</code>](#TodoApp)  

| Param | Type |
| --- | --- |
| dataset | <code>string</code> | 

<a name="TodoApp..createCategory"></a>

### TodoApp~createCategory(label, color)
createCategory

**Kind**: inner method of [<code>TodoApp</code>](#TodoApp)  

| Param | Type |
| --- | --- |
| label | <code>string</code> | 
| color | <code>string</code> | 

<a name="TodoApp..createTask"></a>

### TodoApp~createTask(task, description, categoryId)
createTask

**Kind**: inner method of [<code>TodoApp</code>](#TodoApp)  

| Param | Type |
| --- | --- |
| task | <code>string</code> | 
| description | <code>string</code> | 
| categoryId | <code>number</code> | 

<a name="TodoApp..getTaskById"></a>

### TodoApp~getTaskById(id, list) ⇒ <code>Object</code>
getTaskById

**Kind**: inner method of [<code>TodoApp</code>](#TodoApp)  

| Param | Type |
| --- | --- |
| id | <code>number</code> | 
| list | [<code>Array.&lt;Task&gt;</code>](#Task) \| [<code>Array.&lt;Category&gt;</code>](#Category) | 

<a name="TodoApp..toggleTask"></a>

### TodoApp~toggleTask(taskId)
toggleTask

**Kind**: inner method of [<code>TodoApp</code>](#TodoApp)  

| Param | Type |
| --- | --- |
| taskId | <code>number</code> | 

<a name="TodoApp..toggleTask..task"></a>

#### toggleTask~task : <code>Object</code>
**Kind**: inner constant of [<code>toggleTask</code>](#TodoApp..toggleTask)  
<a name="Task"></a>

## Task : <code>Object</code>
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

## Category : <code>Object</code>
A todo category

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| label | <code>string</code> | 
| color | <code>string</code> | 
| id | <code>number</code> | 

