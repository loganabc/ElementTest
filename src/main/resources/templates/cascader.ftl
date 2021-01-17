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
    基础用法(默认click触发子菜单)：
    <br/>
    <el-cascader v-model="cascadervalue1" placeholder="请选择"
                 :options="cascaderoptions" @change="cascaderChange">
    </el-cascader>


    <el-button type="primary" @click="confirm">确认</el-button>



</div>
</body>
<script src="/vue-v2.6.11/dist/vue.js"></script>
<script src="/element-ui2.13.2/lib/index.js"></script>
<script src="/axios-v0.19.2/dist/axios.js"></script>

<script src="/js/cascader.js"></script>

</html>