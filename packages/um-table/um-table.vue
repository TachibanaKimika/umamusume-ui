<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->

<template>
    <div class="um-component um-table">
        <table
        :style="{
            textAlign: align
        }"
        >
            <thead>
                <tr>
                    <th 
                    v-for="skey in columns"
                    :class="{active: sortKey == skey}"
                    :key="`th_${JSON.stringify(skey)}`"
                    :style="{
                        width: skey.width?skey.width:null,
                        backgroundColor: bgColor
                    }"
                    >
                        {{skey.label?skey.label:skey}}
                        <span 
                        class="arrow"
                        :class="sortOrders[skey.name?skey.name:skey] > 0 ? 'asc' : 'dsc'"
                        v-if="sort"
                        @click="sortBy(skey.name?skey.name:skey)"
                        >
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr 
                v-for="entry in filteredData()" 
                :key="`tr_${JSON.stringify(entry)}`"
                >
                    <td 
                    v-for="key in columns" 
                    :key="`td_${JSON.stringify(key)}`"
                    
                    >
                        {{entry[key.name?key.name:key]}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'um-table',
    props: {
        data: Array, // 接收一个对象数组, key为列名, value为数据
        columns: Array,
        filterKey: {
            type: String,
            default: ''
        },
        filterWord: {
            type: String,
            default: ''
        },
        sort: {
            type: Boolean,
            default: false
        },
        align: {
            type: String,
            default: 'left'
        },
        bgColor: {
            type: String,
            default: null
        }
    },
    provide () {
        return {
            UmTabel: this
        }
    },
    data () {
        var sortOrders = {}
        this.columns.forEach((key) => {
            sortOrders[key] = 1
        })
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    methods: {
        sortBy(key) {
            this.sortKey = key
            this.sortOrders[key] *= -1
            // console.log(this.sortKey)
            // console.log(this.sortOrders)

        },
        filteredData() {
            let arr = []
            this.data.forEach((ele)=>{
                if(this.filterWord){
                    let reg = new RegExp(this.filterWord)
                    if(ele[this.filterKey].match(reg)){
                        arr.push(ele)
                    }
                }else {
                    arr.push(ele)
                }
            })

            if(this.sortKey){
                let num = this.sortOrders[this.sortKey]
                arr.sort((a, b)=>{
                    return a[this.sortKey]>b[this.sortKey]?1*num:-1*num
                })
            }
            return arr
        }
    },
}
</script>

<style lang="scss">

.um-table {
    table {
        width: 100%;
        border-collapse: collapse;
        overflow: hidden;
    }
    th,
    td {
        padding: 15px;
        color: #000000;
    }
    thead th {
        border-bottom: 1px solid #27b500;
        /* border-bottom: 1px solid #2b2b2b; */
        color: #2a2a2a;
        font-weight: bold;
    }
    /* tbody tr:hover {
        background-color: rgba(255, 255, 255, 0.3);
    } */
    tbody {
        tr {
            position: relative;
            &:not(:first-child) {
                border-top: 0.5px solid #27b50066;
            }

        }
    }
}
    
</style>