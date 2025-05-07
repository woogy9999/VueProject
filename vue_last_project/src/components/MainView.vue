<template>
    <div></div>
</template>

<!-- 
    
    1. 생명주기
       beforeCreate() : vue객체 생성전
       **created() : vue객체 생성
          = router를 이용한 데이터 전송
       beforeMount() : onload가 되기 전상태
                       ------브라우저에 HTML을 출력(DOM생성)
       **mounted() : onload가 된 상태
         = 서버에서 데이터 읽을 경우
         = 변수의 초기화 :생성자
       beforeUpdate() : 데이터가 변경되기 전상태
       **updated() : 데이터가 변경완료
       ------- HTML의 데이터를 자동으로 변경
       beforeDestroy() : 화면이 변경 전
       destroyed() : 화면이 변경 완료
        형식)
            export default{
                1. data(){} => 멤버변수 지정
                => setup(){}
                2. 생명주기 함수
                created(){},mounted()
                3. computed:{
                    계산된 데이터 => 총합 , 문자열 변경
                }
                4. components:{
                   컴포넌트 등록
                }
                5. methods:{
                    함수 등록
                }
            }
            export default App
            예)
                메뉴 : 컴포넌트
                    검색기
                    이미지 목록
                    페이지
                Footer : 컴포넌트
    2. 디렉티브 : 제어문 관련 / 화면 출력
        => 태그안에서 처리
        v-text
        v-html

        예) 
            data(){
                return{
                    msg : '<font color="red">Hello</font>'
                }
            }
            <div>{{msg}}</div> => <font color="red">Hello</font>
            <div v-text="msg"></div> => <font color="red">Hello</font>
            <div v-html="msg"></div> => 빨간색 => Hello
        v-bind => data()안에 설정된 데이터를 사용할때
                 => 속성에 값을 첨부 (v-bind는 생략 가능)
                 <img v-bind:src=""> => <img src="">
                

    3. 값 출력
    4. component
    5. router
    6. 외부 데이터 읽기
    7. vuex
    

-->

