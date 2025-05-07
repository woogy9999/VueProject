<template>
<div class="wrapper row3">
    <main class="container clear"> 
        <h2 class="sectiontitle">인기 레시피 Top 12</h2>
        <table class="table">
            <tr>
                 <td width="30%" class="text-center" rowspan="8">
                    <img :src="'https://www.menupan.com'+food_detail.poster" style="width:300px;height:350px">
                </td>
                <td colspan="2">
                    <h3>{{food_detail.name}}&nbsp;
                        <span style="color:orange">{{food_detail.score }}</span></h3>
                </td>
            </tr>
            <tr>
                 <th style="color:gray" width="20%">주소</th>
                 <td width="50%">{{food_detail.address}}</td>
            </tr>
            <tr>
                 <th style="color:gray">전화번호</th>
                 <td width="50%">{{food_detail.phone}}</td>
            </tr>
            <tr>
                 <th style="color:gray">음식종류</th>
                 <td width="50%">{{food_detail.type}}</td>
            </tr>
            <tr>
                 <th style="color:gray">가격대</th>
                 <td width="50%">{{food_detail.price}}</td>
            </tr>
            <tr>
                 <th style="color:gray">주차</th>
                 <td width="50%">{{food_detail.parking}}</td>
            </tr>
            <tr>
                 <th style="color:gray">영업시간</th>
                 <td width="50%">{{food_detail.time}}</td>
            </tr>
            <tr>
                 <th style="color:gray">테마</th>
                 <td width="50%">{{food_detail.theme}}</td>
            </tr>
            <tr> 
                <td colspan="3" class="text-right inline">
                    <button class="btn-sm btn-success">교통상황</button>
                    <button class="btn-sm btn-warning">맛집통계</button>
                    <button class="btn-sm btn-info" @click="go()">목록</button>
                </td>
               
            </tr>
        </table>
    </main>
</div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return {
            fno: 0,
            food_detail: {},

        }
    },
    created(){
        this.fno = this.$route.params.fno
    },
    mounted(){

        axios.get('http://localhost:8000/web/food/detail_vue/',
        {
            params: {
                fno: this.fno
            }
        })
        .then(res => {
            console.log(res.data);
            this.food_detail = res.data 
        }).catch(error => {
            console.log(error.response)
        })
    },
    methods:{
        go(){
            location.href='/food'
        }
    }
}
</script>
