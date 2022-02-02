<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">Produtos</h2>
        <hr />
      </div>
    </div>

    <div class="row sub-container">
      <div class="col-sm-4">
        <Button :callback="adicionarProduto" value="Adicionar"></Button>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Data de cadastro</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in produtos" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.nome }}</td>
              <td>{{ item.quantidadeEstoque }}</td>
              <td>{{ item.valor | real }}</td>
              <td>{{ item.dataCadastro | formatData }}</td>

              <td>
                <i
                  @click="editarProduto(item)"
                  class="fas fa-pencil-alt icones-tabela"
                ></i>
              </td>
              <td>
                <i
                  @click="deletarProduto(item)"
                  class="fas fa-trash-alt icones-tabela"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/button/Button.vue";
import produtoService from "../services/produto-service";
import Produto from "../models/Produto";
import conversorData from "../utils/conversor-data";
import conversorMoeda from "../utils/conversor-moeda";

export default {
  name: "ControleDeProdutos",
  components: {
    Button,
  },

  filters: {
    formatData(data) {
      return conversorData.aplicarMascaraEmDataIso(data);
    },

    real(valor) {
      return conversorMoeda.aplicarMascaraParaRealComPrefixo(valor);
    },
  },

  data() {
    return {
      produtos: [],
    };
  },

  methods: {
    adicionarProduto() {
      this.$router.push({ name: "/NovoProduto" });
    },

    editarProduto(produto) {
      this.$router.push({ name: "EditarProduto", params: { id: produto.id } });
    },

    deletarProduto(produto) {
      this.$swal({
        icon: "question",
        title: "Deseja excluir o produto?",
        text: `Código: ${produto.id} - Nome: ${produto.nome}`,
        showCancelButton: true,
        confirmButtonColor: "#FF3D00",
        confirmButtonText: "Sim",
        cancelButonText: "Não",
        animate: true,
      }).then((result) => {
       
        if (result.isConfirmed) {
          produtoService
          .deletar(produto.id)
          .then(() => {
            let indice = this.produtos.findIndex((p) => p.id == produto.id);
            this.produtos.splice(indice, 1);

            this.$swal({
              icon: "success",
              title: "Produto deletado com sucesso ",
              confirmButtonColor: "#FF3D00",
              animate: true,
            });

          })
          .catch((error) => {
            console.log(error);
          });
        }
      });
    },

    obterTodosOsProdutos() {
      produtoService
        .obterTodos()
        .then((response) => {
          let produtos = response.data.map((p) => new Produto(p));

          this.produtos = produtos.sort(produtos.Valor).reverse();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    this.obterTodosOsProdutos();
  },
};
</script>

<style scoped>
.icones-tabela {
  margin: 5px;
  cursor: pointer;
  color: var(--cor-primaria);
}
</style>
