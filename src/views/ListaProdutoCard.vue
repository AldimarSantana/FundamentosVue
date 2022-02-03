<template>
  <div class="class container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulo">Cards de produtos</h1>
        <hr />
      </div>
    </div>
    <div class="row mt-3">
      <Card>
        <template v-slot:nome> Produto B </template>

        <template v-slot:valor> R$ 200,00 </template>

        <template v-slot:observacao> Produto top de linha </template>

        <template v-slot:acoes>
          <i
            @click="editarProduto(item)"
            class="fas fa-pencil-alt icones-tabela"
          ></i>

          <i
            @click="deletarProduto(item)"
            class="fas fa-trash-alt icones-tabela"
          ></i>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/card/Card.vue";

export default {
  name: "ListaProdutodCards",
  components: {
    Card,
  },

  data() {},

  methods: {},
};
</script>