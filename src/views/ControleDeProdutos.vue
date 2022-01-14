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
        <Button value="Adicionar"></Button>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <table class="table">
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
                  <td> {{item.id}} </td>
                  <td> {{item.nome}} </td>
                  <td> {{item.quantidadeEstoque}} </td>
                  <td> {{item.Valor}} </td>
                  <td> {{item.dataCadastro}} </td>

                  <td>Editar / Excluir</td>
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
//import axios from "axios";

export default {
    name: "ControleDeProdutos",
    components:{
      Button
      
    },
    data(){
      return{
        produtos: []
      }
    },

    methods:{
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

</style>
