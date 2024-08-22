
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
                localStorage.setItem("todos", JSON.stringify(this.todos));
            } else {
                alert("To-do text is required")
            }
        },
        storeTodos() {
            localStorage.setItem("todos", JSON.stringify(this.todos));
        }
    },
    created() {
        this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
    }
};

Vue.createApp(todosApp).mount('#app');