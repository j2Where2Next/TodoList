
var todoList = [
    {
        text: "Learn Vue.js",
        done: true
    },
    {
        text: "Learn Tailwind CSS",
        done: false
    }
]

const todosApp = {
    data() {
        return {
            todos: window.todoList,
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        addTodo: function() {
            if (this.newTodo.text) {
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                };
            } else {
                alert("To-do text is required")
            }
        }
    }
};

Vue.createApp(todosApp).mount('#app');