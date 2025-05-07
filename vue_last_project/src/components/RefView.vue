<template>
    <input type="text" v-bind:value="Hello" />
    <input type="text" v-model="msg" />
    <hr>
    <abbr v-bind:title="msg">{{ abbr }}</abbr>
</template>
<!-- 
    v-bind => 변수값을 대입할떄 사용
    v-model => 입출력값을 제어
    MVVM
     Model => 데이터 제어 => data() ,setup() (Spring => VO)    
     View => 화면 출력 => template (Spring => JSP)
     ViewModel : 생명주기함수 / 사용자 정의 함수 => 요청에 따라  데이터 제어

     Viewmodel <=> model <=> View
                 변경시마다 HTML에 전송

-->
<script>
import {ref} from 'vue'
export default{
        setup(){
            const abbr = ref("Hello")
            const msg = ref("Hello Vue3")
        return {
            abbr,
            msg
        }
    }
}
</script>