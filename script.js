// Code goes here

var todoList = {
  toDos: [
    {
      todoText: 'item1',
      completed: false
    }, 
    {
      todoText: 'item2',
      completed: false
    }, 
    {
      todoText: 'item3',
      completed: false
    }
  ],
  displayTodos:  function(){
    console.log('My todos', this.toDos);
    if(this.toDos.length === 0) {
      console.log('Todo list is empty');
    }
    else {
      for(var i = 0; i < this.toDos.length; i++) {
        console.log(this.toDos[i].todoText);
      }
    }
  },
  addTodo: function(todoText){
    this.toDos.push({
      todoText : todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.toDos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.toDos.splice(position,1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.toDos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    for(var i = 0; i < totalTodos; i++){
      if(this.toDos[i].completed === true){
        completedTodos++;
      }
    }
    
    if(totalTodos === completedTodos) {
      for(var i = 0; i < totalTodos; i++){
        this.toDos[i].completed = false
      }
    } else {
      for(var i = 0; i < totalTodos; i++){
        this.toDos[i].completed = true;
      }
    }
  }
};


var displayTodosButton = document.getElementById('displayTodosButton');
displayTodosButton.addEventListener('click', function(){
  todoList.displayTodos();
});

var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo : function(){
    var addTodoText = document.getElementById('addTodo');
    todoList.addTodo(addTodoText.value);
    addTodoText.value = '';
  }
};

var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for(var i = 0; i < todoList.toDos.length; i++) {
      var todoLi = document.createElement('li');
      todoLi.textContent = todoList.toDos[i].todoText;
      todosUl.appendChild(todoLi);
    }
  }
}

