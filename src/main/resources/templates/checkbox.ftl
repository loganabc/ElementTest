<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Radio单选框</title>
    <link rel="stylesheet" href="/element-ui2.13.2/lib/theme-chalk/index.css">
</head>
<body>
<div id="app">

    <br/>
    <br/>
    <br/>

    <el-checkbox-group v-model="checkGroup1" @change="cityChange">
        <el-checkbox label="备选项1" border></el-checkbox>
        <el-checkbox label="备选项2" border></el-checkbox>
    </el-checkbox-group>


    <br/>
    <br/>
    <br/>


</div>
</body>
<script src="/vue-v2.6.11/dist/vue.js"></script>
<script src="/element-ui2.13.2/lib/index.js"></script>
<script src="/axios-v0.19.2/dist/axios.js"></script>

<script src="/js/checkbox.js"></script>

</html>