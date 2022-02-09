<template>
    <div class="Card">
        <img src="https://cdn.iset.io/assets/54224/produtos/1728/thumb_250-250-9975197747-baixo-sterling-by-music-man-sub-ray-4-mint-green-4-cordas-2.jpg"
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
    name: "Card",
    data() {
        return{}
    },

    methods:{}
}
</script>
<style scoped>
    .card{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
        max-width: 270;
        margin: 5px;
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


