<template>
    <h1>Aprendiendo Slots</h1>
    <button>Abrir Modal</button>

    <modal>
        <h3>Hola</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <button>Cerrar</button>
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