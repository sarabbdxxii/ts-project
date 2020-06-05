<template>
    <div>
        <div class="searchBar">
            <div class="unitForm">
                userName:<a-input placeholder="请输入姓名" v-model="queryForm.userName" />
            </div>
            <div class="unitForm">
                Tag:<a-input placeholder="请输入标签" v-model="queryForm.tag" />
            </div>
            <div class="unitForm">
                <a-button type="primary" @click="queryShowList">查询</a-button>
            </div>
            <span>{{current}}:{{new Date()}}</span>
        </div>
        <div class="shows">
            <a-table :columns="columns" :data-source="tableData">
                <a slot="name" slot-scope="text">{{text}}</a>
                <!-- <a slot="name" slot-scope="text, record, index">text: {{text}},name:{{ record.name }} ,index: {{index}}</a> -->
                <span slot="tags" slot-scope="tags">
                    <a-tag 
                        v-for="tag in tags" 
                        :key="tag"
                        :color="tag === 'top' ? 'volcano' : tag.length > 4 ? 'geekblue' : 'green'"
                    >
                        {{tag.toUpperCase()}}
                    </a-tag>
                </span>
                <span slot="action" slot-scope="text, record">
                    <a @click="deleteShow(record.id)">删除</a>
                    <a-divider type="vertical" />
                    <a @click="modify(record.id)">修改</a>
                    <a-divider type="vertical" />
                    <a class="ant-dropdown-link"> 更多 <a-icon type="down" /> </a>
                </span>
            </a-table>
        </div>
        <ShowDetail></ShowDetail>
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
        scopedSlots: { customRender: 'name' },
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
        scopedSlots: { customRender: 'isJoined'}
    },
    {
        dataIndex: 'tags',
        key: 'tags',
        title: '标签',
        scopedSlots: { customRender: 'tags'}
    },
    {
        dataIndex: 'action',
        key: 'action',
        title: '操作',
        scopedSlots: { customRender: 'action'}
    }
]
import {Component, Vue} from 'vue-property-decorator'
import showList from './model/showList'
import ShowDetail from './ShowDetail.vue'

@Component({
    components: {ShowDetail}
})
export default class ShowList extends Vue{
    columns: Array<Object> = columns;
    tableData = showList;
    queryForm: object = {
        userName: '',
        tag: ''
    };
    current: string = '时间'
    // data () {
    //     return {
    //         queryForm: {
    //             userName: '',
    //             tag: ''
    //         },
    //         current: '时间'
    //     }
    // }
    mounted () {
        console.log('mounted', showList)
    }
    queryShowList () {
        console.log(this.queryForm)
    }
    deleteShow (id: number | string): void {
        console.log('delete', id)
    }
    modify (id: number | string): void {
        console.log('modify', id)
    }
}
</script>
<style lang="less" scoped>
.searchBar {
    margin: 20px;
    text-align: left;
    .unitForm {
        display: inline-block;
        width: 300px;
        margin-right: 10px;
    }
}
</style>
