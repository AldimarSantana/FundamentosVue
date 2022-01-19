<template>

  <div class="container">

    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">Produtos</h2>
      <hr>
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
                  <td> {{ item.id }} </td>
                  <td> {{ item.nome }} </td>
                  <td> {{ item.quantidadeEstoque }} </td>
                  <td> {{ item.valor | real }} </td>
                  <td> {{ item.dataCadastro | formatData }} </td>

                  <td><i @click="editarProduto(item)" class="fas fa-pencil-alt icones-tabela"></i></td>
                  <td><i @click="deletarProduto(item)" class="fas fa-trash-alt icones-tabela"></i></td>
              </tr>
          </tbody>

        </table>
      </div>
    </div>

    </div>
</template>

<script>
import Button from '../components/button/Button.vue';
import produtoService from '../services/produto-service';
import Produto from "../models/Produto";
import conversorData from '../utils/conversor-data';
import conversorMoeda from '../utils/conversor-moeda'

export default {
    name: "ControleDeProdutos",
    components:{
      Button,
    },

    filters:{
      formatData(data){
        return conversorData.aplicarMascaraEmDataIso(data);
      },

      real(valor){
        return conversorMoeda.aplicarMascaraParaRealComPrefixo(valor);
      }
    },

    data(){
      return{
        produtos: []
      }
    },

    methods:{

      adicionarProduto(){
        this.$router.push({name:"/NovoProduto"})
      },

       editarProduto(produto){
        this.$router.push({name:"EditarProduto", params: {id: produto.id }})
      },

       deletarProduto(){
        alert('Deletar um produto')
      },


      obterTodosOsProdutos(){
        produtoService.obterTodos()
        .then(response => {
          this.produtos = response.data.map(p =>  new Produto(p));
          console.log(this.produtos);
        })
        .catch(error => {
          console.log(error);
        })
      }
  },
    
  mounted(){
    this.obterTodosOsProdutos();
  },
};

</script>

<style scoped>
  .icones-tabela{
    margin: 5px;
    cursor: pointer;
    color: var(--cor-primaria);
  }
</style>
