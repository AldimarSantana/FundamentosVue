import Vue from 'vue'
import App from './App.vue'
import router from './router' //Está importanto o arquivo index, e chamando de 'router'

Vue.config.productionTip = false

//Criando uma instancia do Vue de maneira global, 
//para poder ser acessada de qualquer lugar

//Informa o router.
//E basicamente está pedindo para renderizar o 'App' assim que aplicação iniciar
new Vue({
  router,
  render: h => h(App)
}).$mount('#app') //Busca um elemento que tenha um id chamado 'app', para poder renderizar.
//Ou seja, está indo na pasta public/index.html, captura o elemento com o id app.
//No lugar do <div id="app"></div>, ele vai renderizar o arquivo App.vue, que está importado no escopo desse arquivo.
