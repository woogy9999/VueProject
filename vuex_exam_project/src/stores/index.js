/*

    = state : 변경이 가능한 변수 저장 공간
    = props : 고정된 데이터
    actions : 사용자 요청한 기능 설정 => 메소드
    = 모든 .vue에 사용이 가능하게 만든다
    = state에 전송할때 => commit 함수를 사용



*/
import { createStore } from 'vuex'
const store = createStore({
    // View(component)에서 사용할 데이터 선언
    // data(){} , setup()
    // food_data:{} , food_detail:{}

    state() {
        return{
            count:0
        } 
    },
    // 데이터 갱신 => update,delete,insert 
    mutations:{
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        }
    },
    actions:{
        increment({commit}){
            commit('increment')
        },
        decrement({commit}){
            commit('decrement')
        }
    }
})
export default store