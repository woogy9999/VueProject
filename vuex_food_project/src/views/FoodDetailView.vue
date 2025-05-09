<template>
    <div class="contaier">
        <div class="row">
            <table class="table">
                <tbody>
                <tr>
                    <td width="30%" class="text-center" rowspan="8">
                        <img :src="'https://www.menupan.com'+foods.food_detail.poster" style="width:400px;height: 350px;">
                    </td>
                </tr>
                <td colspan="2" width="70%" class="text-center">
                    <h3>{{foods.food_detail.name}}&nbsp;<span style="color: orange;">{{ foods.food_detail.score }}</span></h3>                    
                </td>
                <tr>
                    <th width="15%">주소</th>
                    <td width="55%">{{ foods.food_detail.address }}</td>
                </tr>
                <tr>
                    <th width="15%">전화</th>
                    <td width="55%">{{ foods.food_detail.phone }}</td>
                </tr>
                <tr>
                    <th width="15%">음식종류</th>
                    <td width="55%">{{ foods.food_detail.type }}</td>
                </tr>
                <tr>
                    <th width="15%">주차</th>
                    <td width="55%">{{ foods.food_detail.parking }}</td>
                </tr>
                <tr>
                    <th width="15%">영업시간</th>
                    <td width="55%">{{ foods.food_detail.time }}</td>
                </tr>
                <tr>
                    <th width="15%">테마</th>
                    <td width="55%">{{ foods.food_detail.theme }}</td>
                </tr>
             </tbody>
            </table>
            <table class="table">
                <tbody>
                    <tr>
                        <td>{{ foods.food_detail.content }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>
<script>
   import { defineComponent,onMounted } from 'vue';
   import { useFoodsStore } from '@/stores/foods';
   import { useRoute } from 'vue-router'; 
   export default defineComponent({
    setup(){
       const foods= useFoodsStore()
       const route = useRoute()
       
       onMounted(()=>{
         foods.foodDetailData(route.params.fno)
       })
       return {
          foods,
          route
       }
     }
   })
</script>
<style>
.container{
    margin-top:50px;
}
.row{
    margin: 0px auto;
    width: 800px;
}

</style>