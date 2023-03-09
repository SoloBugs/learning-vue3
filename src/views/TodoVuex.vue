<template>
    <h1>Thanos ToDo List</h1>
    <hr>
    <button 
    :class="{'active':currentTab==='all' }"
    @click="currentTab='all'"
    >
    Todos
    </button>
    <button 
    :class="{'active':currentTab==='pending' }"
    @click="currentTab='pending'"
    >
    Pendientes
    </button>
    <button 
    :class="{'active':currentTab==='completed' }"
    @click="currentTab='completed'"
    >
    Completados
    </button>
    
    <hr>

    <div>
        <ul>
            <li v-for="todos in getTodosByTab" :key="todos.id"
            :class="{'completed': todos.completed}"
            @dblclick="toggleTodo(todos.id)"
            >
                {{todos.text}}
            </li>
        </ul>
    </div>

</template>

<script>
import useTodos from '../composables/useTodos'
export default {
    setup(){

        const {pending, currentTab, getTodosByTab, toggleTodo} = useTodos()

        return{
            pending, 
            currentTab, 
            getTodosByTab, 
            toggleTodo 
        }
    }
}

</script>

<style scoped>

div{
    display: flex;
    justify-content: center;
    text-align: center;
}

ul{
    width: 300px;
    text-align: left;
}

li{
    cursor: pointer;
}

.active{
    background-color: #2c3e50;
    color: white;
}

.completed {
    text-decoration: line-through;
}

</style>