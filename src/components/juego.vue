<template>

  <section class="src-components-juego">

      <div id="header" :style="getColorHeader()" >
         <Header :color="color"></Header>
      </div>
      
      <div id="navigator">
          <NavigatorA :mensaje="msj" 
                      @setCant="setValor"
                      @setColor="setColor"
                      @arrColors="setArrColors"
                      >
          </NavigatorA>
      </div>

      <div id="container">
          <Containar :cant="cant" 
                     :arrColors="arrColors"
                     @colorSelect="colorSelect"
                     >
          </Containar>
      </div>

  </section>

</template>

<script>

  import Header from './header.vue'
  import NavigatorA from './navigator.vue'
  import Containar from './containar.vue'

  export default  {
    name: 'src-components-juego',
    props: [],
    components: {
        Header,
        NavigatorA,
        Containar
    },
    mounted () {

    },
    data () {
      return {
        color       : 'RGB(110, 96, 166)',
        colorHeader : 'steelblue',
        msj         : 'dasd',
        cant        : 6,
        arrColors   : []
      }
    },
    methods: {
      
      setValor(valor) {
        this.cant = valor
      },

      setColor(valor) {
        this.color = valor
        this.colorHeader = "steelblue"
      },

      setArrColors(valor) {
          this.arrColors = valor
      },

      getColorHeader() {
          return { 'background': this.colorHeader }
      },

      colorSelect(valor) {
        if( this.color === valor ) {
          this.msj = "You Picked Right!"
          console.log("sd")
        } else {
          console.log("no es")
        }
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-juego {

  }
</style>
