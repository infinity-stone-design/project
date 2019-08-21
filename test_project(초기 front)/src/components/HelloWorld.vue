<!-- component -->

<template>
<table  cellspacing = '10'>
  <tr>
    <table id = "title">
      <tr>
        <category id="category">[금액]</category>
        북한이탈 이주민 사회보장 지원 
      </tr>
      <tr>
        <side id="side">
         <a id="a">작성자 : 관리자</a>  <a id="a"> | </a>  <a id="a">접수기간 : 2019.08.09 ~ 2019.08.20</a>
        </side>
        <content id="content">
          <tr>
              <c id="detail">세부페이지<링크></c>
         <br></br>
          지원대상 - 영유아, 청소년, 노인 
          <c style="font-size:1px">
         <br></br>
         </c>
        지역 - 경기도(수원)
         <br></br>
         지원내용 - 북한에서 온 이주민들에게 사회적 자립을 위한 경제적 지원
        <br></br>
         기관 - OO사회센터
         <br></br>
         <br></br>
         <br></br>
         <br></br>
        </tr>
        </content>
        
      </tr>
    
      
    </table>
  </tr>
 
</table>

  
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap&subset=korean');
#title{
  font-family: 'Nanum Gothic', sans-serif;
  width : 1000px;
  height : 80px;
  font-size : 25px;
  border : 1px solid #BDBDBD;
  padding : 20px;
  background-color : white;
  margin-left : 50px;
  margin-top: 10px
}
#side{
  font-family: 'Nanum Gothic', sans-serif;
  width : 1000px;
   height : 25px;
  font-size : 15px;
  text-align: right;
  
  padding : 10px;
 
  margin-left : 5px;
}
#a{
  font-family: 'Nanum Gothic', sans-serif;
  width : 1000px;
  font-size : 15px;
  
  margin-right : 20px;
}
#category{

  font-size : 20px;
  margin-left: 10px;
  margin-right : 15px;
  color:rgb(42, 114, 156)
}
#content{
   font-family: 'Nanum Gothic', sans-serif;
   height : 30px;
  font-size : 25px;
  padding : 10px;
  margin-left : 50px;
}
#detail
{
  
  font-size : 15px;
  color:blue;
}

</style>
