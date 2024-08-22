
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
            todos: window.todoList
        }
    }
};

Vue.createApp(todosApp).mount('#app');