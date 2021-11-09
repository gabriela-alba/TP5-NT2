<template>

  <section class="src-components-navigator">
   
    <button id="reset" @click="restart()"> New colors </button>
		<span id="message">{{ mensaje }}</span>

		<button id="easy" @click="easy()" :style="getColorEasy()">easy</button>
		<button id="hard" @click="hard()" :style="getColorHard()">hard</button>

      
  </section>

</template>

<script>

  import { funcionColor } from '../color'

  export default  {
    name: 'src-components-navigator',
    props: [ 'mensaje' ],
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
        pickedColor : '' 
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
        this.pickedColor =  this.colors[posi]
        this.$emit( "setColor", this.pickedColor )
        this.$emit( "arrColors", this.colors )
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
