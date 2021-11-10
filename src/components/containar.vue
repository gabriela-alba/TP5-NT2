<template>

  <section class="src-components-containar">
    
    <div  class="square" 
          v-for="i in cant " 
          :key='i' 
          @click="verificarColor(i)"
          :style="setBackgronuncolor(i)"
    ></div>
  
  </section>

</template>

<script>

  export default  {
    name: 'src-components-containar',
    props: [
      'cant',
      'arrColors'
    ],
    mounted () {
      
    },
    data () {
      return {
        arrBackColor        : [],
        arrBackGronunColor  : []
      }
    },
    methods: {

        setBackgronuncolor( indice ) {
          return {  'background': this.arrColors[ indice - 1 ]  }
        },

        verificarColor(indice) {
          this.$emit( "colorSelect", this.arrColors[ indice - 1 ] )
        }
    
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-containar {

  }
</style>
