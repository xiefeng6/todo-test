<template>
  <div>
    <BaseInputText
      v-model="newTodoText"
      placeholer="New todo"
      @keydown.enter="addTodo"
    />
    <ul v-if="toItem.length">
      <TodoListItem v-for="todo in todoItem" :key="todo.id" :todo="todo" @remove="removeTodo" />
    </ul>
    <p v-else>Nothing left in the list. Add a new todo in the input above.</p>
  </div>
</template>

<script>
import BaseInputText from "../components/BaseInputText.vue";
import TodoListItem from "../components/TodoListItem.vue";

let newTodoTextId = 1;
export default {
  data() {
    return {
      newTodoText: "",
      todoItem: [
        {
          id: newTodoTextId++,
          text: "Learn Vue",
        },
        {
          id: newTodoTextId++,
          text: "Learn about single-file components",
        },
        {
          id: newTodoTextId++,
          text: "Fall in love",
        },
      ],
    };
  },
  components: {
    BaseInputText,
    TodoListItem,
  },
  methods: {
    addTodo() {
      baseInputText = this.newTodoText.trim();
      if (baseInputText) {
        this.todoItem.push({
          id: newTodoTextId++,
          text: baseInputText,
        });
        this.newTodoText = "";
      }
    },
    removeTodo(idToRemove) {
      this.todoItem = this.todoItem.filter(ele => ele.id != idToRemove)
    }
  },
};
</script>
