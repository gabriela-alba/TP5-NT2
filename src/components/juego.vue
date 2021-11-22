<template>

  <section class="src-components-juego">

      <div id="header" :style="getColorHeader()" >
         <Header  :color="color"
                  :colorHeader="colorHeader"
         ></Header>
      </div>
      
      <div id="navigator">
          <NavigatorA :mensaje="msj" 
                      :msjButton="msjButton"
                      @setCant="setValor"
                      @setColor="setColor"
                      @arrColors="setArrColors"
                      @arrBackGronunColor="setBackGronunColor"
                      >
          </NavigatorA>
      </div>

      <div id="container">
          <Containar :cant="cant" 
                     :arrColors="arrColors"
                     :arrBackGronunColor="arrBackGronunColor"
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
        color               : 'RGB(110, 96, 166)',
        colorHeader         : 'steelblue',
        msj                 : 'dasd',
        cant                : 6,
        arrColors           : [],
        arrBackGronunColor  : [],
        msjButton           : 'New colors'
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
          this.msjButton = 'New colors'
          this.arrColors = valor
          this.arrBackGronunColor = []
      },

      setBackGronunColor( valor ) {
          this.arrBackGronunColor = valor
      },

      getColorHeader() {
          return { 'background': this.colorHeader }
      },

      colorSelect(valor) {
        if( this.color === valor ) {
          this.msjButton = "PLAY AGAIN!"
          this.colorHeader = valor
          console.log("sd")
        } else {
          console.log('no es')
        }
      },
      setStyleBr( color ){
            return {  'background': color  }
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
