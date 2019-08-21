<!-- component -->

<template>
<div class="wrap">
  <ul class="datas">
    <div>fjfskfjs</div>
    <li v-for="d in datas">
      <span>{{d.title}}</span>

  </ul>
</div>
  
  
</template>

<script>
export default {
  create(){
    this.$http.get('/api/datas')
    .then((response) => {
      this.datas = response.data
    })
  },
  data(){
    return {
      datas:[]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sunflower:300&display=swap&subset=korean');
.table{
  font-family: 'Sunflower', sans-serif;
  width : 1000px;
  height : 80px;
  font-size : 20px;
  border : 1px solid #BDBDBD;
  padding : 10px;
  background-color : white;
  margin-left : 50px;
}

</style>
