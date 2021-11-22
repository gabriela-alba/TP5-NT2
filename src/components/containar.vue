<template>

  <section class="src-components-color">
    
    <div  class="square" 
          v-for="i in cant " 
          :key='i' 
          @click="verificarColor(i)"
          :style="arrBackGronunColor[i-1]"
    ></div>
  
  </section>

</template>

<script>   
  export default  {
    name: 'src-components-color',
    props: [
      'cant',
      'arrColors',
      'arrBackGronunColor'
    ],
    mounted () {
      
    },
    data () {
      return {
        arrBackColor  : []
      }
    },
    methods: {

        setBackgronuncolor( indice ) {
          return this.arrBackGronunColor[indice-1]// {  'background': this.arrColors[ indice - 1 ]  }
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
  .src-components-color {

  }
</style>
