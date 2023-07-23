<template>
    <div :id="uuid" :style="style"></div>
</template>

<script>
import * as echarts from 'echarts';
const idGen = () => new Date().getTime()
export default {
    props: {
        height: {
            type: String,
            default: '400px'
        },
        width: {
            type: String,
            default: '600px'
        },
        optinos: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            uuid: null,
            myChart: null
        }
    },
    created() {
        this.uuid = idGen()
    },
    watch: {
        optinos() {
            if (this.myChart) {
                this.myChart.setOption(this.optinos)
            }
        }
    }
    ,
    computed: {
        style() {
            return {
                height: this.height,
                width: this.width
            }
        }
    },
    mounted() {
        this.myChart = echarts.init(document.getElementById(this.uuid));
        this.myChart.setOption(this.optinos)
    }
}
</script>

<style></style>