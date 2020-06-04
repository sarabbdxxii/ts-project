<template>
    <div>
        <div class="shows">
            <a-table :columns="columns" :data-source="tableData"></a-table>
        </div>
    </div>
</template>

<script lang="ts">
const columns = [
    {
        dataIndex: 'id',
        key: 'id',
        title: 'ID',
    },
    {
        dataIndex: 'name',
        key: 'name',
        title: '名称',
    },
    {
        dataIndex: 'time',
        key: 'time',
        title: '时间',
    },
    {
        dataIndex: 'isJoined',
        key: 'isJoined',
        title: '是否加入',
    }
]
import {Component, Vue} from 'vue-property-decorator'
import showList from './model/showList'

@Component
export default class ShowList extends Vue{
    columns = columns;
    tableData = showList
    mounted () {
        console.log('mounted', showList)
    }
}
</script>
