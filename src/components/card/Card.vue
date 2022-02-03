<template>
    <div class="Card">
        <img src="https://gmedia.playstation.com/is/image/SIEPDC/console-left_@1x?fmt=png-alpha&scl=1"
        alt=""
        />

        <h4>
            <slot name="nome"></slot>
        </h4>

        <p class="valor">
            <slot name="valor"></slot>
        </p>

        <p>
            <slot name="observacao"></slot>
        </p>

        <div>
            <slot name="acoes"></slot>
        </div>

    </div>
</template>

<script>
export default {
    name:"Card",
    data() {
        return{

        }
    },

    methods:{}
}
</script>
<style scoped>
    .card{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
        max-width: 300px;
        margin: auto;
        margin-bottom: 15px;
        text-align: center;
        padding: 10px;
    }

    .valor{
        color: grey;
        font-size: 22px;
    }

    .icones-tabela{
        margin: 5px;
        cursor: pointer;
        color: var(--cor-primaria);
    }
</style>


