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
   //     auxArr              : [],
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
     //     this.auxArr = []
          this.arrBackGronunColor = []
      },

      setBackGronunColor( valor ) {
//        console.log(this.auxArr.length)
 //       if(this.auxArr.length === 0) {
          this.arrBackGronunColor = valor
 //         this.auxArr = valor
  //      }else
 //         this.arrBackGronunColor = this.auxArr
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
        //  let arr = []
       /*   let col = ''
          for ( let index = 0; index < this.arrColors.length; index++ ) {
                col = this.arrColors[index] === valor ? this.setStyleBr("rgb(35, 35, 35)") : this.auxArr[index]
                arr.push(col)
           }
           console.log(arr)
           this.auxArr = arr
           console.log(this.auxArr.length)
        } */
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
