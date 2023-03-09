import {createStore} from 'vuex'

export default createStore({
    state:{
        todos:[
            {id: '1', text: 'Recolectar las piedras del infinito', completed: false},
            {id: '2', text: 'Piedra del Alma', completed: true},
            {id: '3', text: 'Piedra de Poder', completed: true},
            {id: '4', text: 'Piedra de Realidad', completed: true},
            {id: '5', text: 'Piedra de Tiempo', completed: false},
            {id: '6', text: 'Piedra de la Mente', completed: false},
        ]
    },
    mutations:{
        toggleTodo(state, id){
            const todoIdx = state.todos.findIndex(todo => todo.id ===id)
            state.todos[todoIdx].completed = !state.todos[todoIdx].completed 
        }    
    },
    actions:{},
    getters:{
        pendingTodos(state, getters, rootState) {
            return state.todos.filter(todo => !todo.completed)
        },
        allTodos(state, getters, rootState){
            return state.todos
        },
        completedTodos(state, getters, rootState) {
            return state.todos.filter(todo => todo.completed)
        },
        getTodosByTab: (_,getters) => (tab) =>{

            switch (tab) {
                case 'all': return getters.allTodos
                case 'pending': return getters.pendingTodos
                case 'completed': return getters.completedTodos
            }
        }
    },
    modules:{}
})