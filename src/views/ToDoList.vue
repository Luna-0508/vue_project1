<template>
  <div>
    <div>
      <h1>To Do List</h1>
      <li v-for="todo in todos" v-bind:key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo.id)">X</button>
      </li>
    </div>
    <div>
      <input type="text" v-model="todo" id="todo" placeholder="Add ToDo..." />
      <button @click="addTodo" id="button">ADD</button>
    </div>
  </div>
</template>

<script>
import ToDoList from "../components/ToDoList.vue";

export default {
  name: "App",

  data() {
    return {
      todo: "",
      todos: [
        {
          id: Math.random(),
          text: "apple",
        },
        {
          id: Math.random(),
          text: "orange",
        },
      ],
    };
  },

  methods: {
    addTodo() {
      if (this.todo.length === 0) {
        return;
      }
      this.todos.push({
        id: Math.random(),
        text: this.todo,
      });
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    },
  },
};
</script>
