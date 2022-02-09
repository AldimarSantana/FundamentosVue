import produtoService from "../services/produto-service";
import Produto from "../models/Produto";
import conversorData from "../utils/conversor-data";
import conversorMoeda from "../utils/conversor-moeda";

let ProdutoMixin = {
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
          }
      },

      mounted() {
        this.obterTodosOsProdutos();
      },

      methods: {
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
}

export default ProdutoMixin