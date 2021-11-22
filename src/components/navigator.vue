<template>

  <section class="src-components-navigator"> 
    <button id="reset" @click="restart()"> {{ msjButton }} </button>
		<span id="message"> {{ mensaje }} </span>

		<button id="easy" @click="easy()" :style="getColorEasy()" > easy </button>
		<button id="hard" @click="hard()" :style="getColorHard()" > hard </button>
  </section>

</template>

<script>

  import { funcionColor } from '../color'

  export default  {
    name: 'src-components-navigator',
    props: [ 
      'mensaje', 
      'msjButton'
     ],
    mounted () {
        this.restart() 
    },
    mixins: [funcionColor],
    data () {
      return {
        MAX         : 6,
        MIN         : 3, 
        valor       : 6,
        colors      : [],
        pickedColor : '',
        arrContainarColor:[] 
      }
    },
    methods: {
      easy() {
        this.valor = this.MIN
        this.$emit("setCant", this.MIN)
        this.restart() 
      },
      hard() {
        this.valor = this.MAX
        this.$emit("setCant", this.MAX)
        this.restart() 
      },
      
      getColorEasy() {
         return this.valor === this.MIN ? {
                'background-color': 'steelblue',
                  'color': 'white'
          } : ''
      },
      getColorHard() {
          return this.valor === this.MAX ? {
                'background-color': 'steelblue',
                  'color': 'white'
          } : ''
      },
      restart() {
        let posi = this.pickColor( this.valor )
        this.colors = this.createNewColors( this.valor );
        this.arrContainarColor = this.setArrContainarColor(this.colors) 
        this.pickedColor =  this.colors[posi]
        this.$emit( "setColor", this.pickedColor )
        this.$emit( "arrColors", this.colors )
        this.$emit( "arrBackGronunColor", this.arrContainarColor)
      }

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
  .src-components-navigator {

  }

  
</style>
