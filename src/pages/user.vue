<template>
    <div>
        <span class="title">user component content</span>
        <Button type="primary" @click="queryUser">Query User Info</Button>
        <p>{{userInfo}}</p>
    </div>
</template>
<script>
    export default {
        name: 'user',
        data() {
            return {
                userInfo: ''
            }
        },
        methods: {
            queryUser() {
                this.$client.queryUser(1).then(({status, data}) => {
                    this.userInfo = JSON.stringify(data);
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }
</script>
<style lang="less" scoped>
    span.title {
        color: red;
    }
</style>