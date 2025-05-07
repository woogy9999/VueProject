<template>
    <div>
        <ul>
            <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
        <ul>
            <li v-for="(item, index) in items2" :key="index">
                <span v-if="index % 2 == 0">{{ item.id }}:{{ item.name }}</span>
            </li>
        </ul>
        
    </div>
</template>

<script>
    export default{
        setup(){
            const items=["홍길동","이순신","강감찬","춘향이","이몽룡"]
            const items2=[
                {id:1,name:"홍길동"},
                {id:2,name:"이순신"},
                {id:3,name:"강감찬"},
                {id:4,name:"춘향이"},
                {id:5,name:"이몽룡"}]
            return {
                items,
                items2
            }
        }
    }

</script>