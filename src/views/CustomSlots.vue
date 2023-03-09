<template>
    <h1>Aprendiendo Slots</h1>
    <button>Abrir Modal</button>

    <modal>
        <template v-slot:header>
            <h3>Hola</h3>
        </template>
        <template v-slot:body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </template>
        <template v-slot:footer>
            <button>Cerrar</button>
        </template>
        

        
    </modal>
</template>

<script>
import Modal from "../components/Modal.vue";

export default{
    components: {Modal},
    setup(){

    }

}

</script>