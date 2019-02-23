<template>
    <div>
        <div v-for="data in rdata" :key="data.id">
            <tree2 :data="data"></tree2>
        </div>
        <p>1234</p>
    </div>
</template>

<script>
import tree2 from './tree2'
export default {
    data () {
        return {
            rdata: [{
                "code": 1,
                "data": [
                    {
                        "id":"1.2",
                        "name":"技术部",
                        "userList":[{
                            "id":"788d",
                            "username":"html",
                            "role":"主管"
                        },
                        {
                            "id":"sda",
                            "username":"vue",
                            "role":"普通"
                        }]
                    },
                    {
                        "id":"1.3",
                        "name":"策划部",
                        "userList":[{
                            "id":"dsf",
                            "username":"jack",
                            "role":"主管"
                        },
                        {
                            "id":"asdf",
                            "username":"rose",
                            "role":"普通"
                        }]
                    }
                ]
            }]
        }
    },
    components: {
      tree2
    }
}
</script>

<style>
</style>
