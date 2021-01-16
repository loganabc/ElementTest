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
    <br/>
    基础用法：
    <br/>
    <el-input-number
            v-model="num"
            @change="changeNumber"
            :min="1"
            :max="10"
            label="描述文字"></el-input-number>

    <el-button type="primary" @click="confirminputnumber">确认</el-button>
    <br/>
    <br/>
    按钮位置：
    <br/>
    <el-input-number
            v-model="num2"
            controls-position="right"
            @change="changeNumber"
            :min="1"
            :max="10"
            label="描述文字"></el-input-number>

    <el-button type="primary" @click="confirminputnumber2">确认</el-button>





    <br/>
    <br/>


</div>
</body>
<script src="/vue-v2.6.11/dist/vue.js"></script>
<script src="/element-ui2.13.2/lib/index.js"></script>
<script src="/axios-v0.19.2/dist/axios.js"></script>

<script src="/js/inputnumber.js"></script>

</html>