<template>
    <div id="m1">{{ date }}</div>
    <div id="m2">{{ date2 }}</div>
</template>
<!--
        <script> = 데이터 제어 = <template>안에 있는 HTML제어 => index.html
        main.js = App.vue = components = index.html

-->
<script>
    export default{
        data(){
            return{
                date:Date().toString()
            }
        },
        setup(){
            const date2=Date().toString()
            return {
                date2
            }
        }
    }
</script>
<style scoped>
#m1{
    color:blue

}
#m2{
    color:blueviolet
}
</style>