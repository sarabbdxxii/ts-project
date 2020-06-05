<template>
    <a-modal
        title="show列表"
        :visible="visible"
        @ok="handleOk"
        @cancel="handleCancel"
    >
        <p>当前数据的信息：</p>
        <p>ID:{{id}}</p>
    </a-modal>
</template>

<script lang="ts">

import {Component, Vue, Prop} from 'vue-property-decorator'

@Component
export default class ShowDetail extends Vue {
    visible: boolean = true
    
    @Prop([Number, String]) id!: string | number

    mounted () {
        console.log('id:', this.id)
    }
    handleOk (): void {}
    handleCancel (): void {}
}
</script>
