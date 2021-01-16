<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Radio单选框</title>
    <link rel="stylesheet" href="/element-ui2.13.2/lib/theme-chalk/index.css">
<#--    <link rel="stylesheet" href="/css/input.css">-->
</head>
<body>
<div id="app">
    <br/>
    <br/>
    基础用法：
    <br/>
    <el-select v-model="selectvalue1" placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.label"
            :value="item.value"
            :label="item.label"></el-option>
    </el-select>

    <el-button type="primary" @click="confirm">确认</el-button>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


</div>
</body>
<script src="/vue-v2.6.11/dist/vue.js"></script>
<script src="/element-ui2.13.2/lib/index.js"></script>
<script src="/axios-v0.19.2/dist/axios.js"></script>

<script src="/js/select.js"></script>

</html>