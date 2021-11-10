<template>

  <section class="src-components-header">
    
      <h1>The Great <br>
        <span id="colorDisplay">{{ color }}</span>
        <br>
        Guessing Game
      </h1>
    
  </section>

</template>

<script>

  export default  {
    name: 'src-components-header',
    props: [
      'color',
      'colorHeader'
      ],
    mounted () {
       
    },
    data () {
      return {
        
      }
    },
    methods: {
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-header {

  }
</style>
