<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Radio单选框</title>
    <link rel="stylesheet" href="/element-ui2.13.2/lib/theme-chalk/index.css">
    <link rel="stylesheet" href="/css/input.css">
</head>
<body>
<div id="app">
    <br/>
    <br/>
    <br/>
    <el-input v-model="input" placeholder="请输入内容"></el-input>

    <el-button type="primary" @click="confirm">确认</el-button>
    <br/>
    <br/>

    <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea">
    </el-input>

    <el-button type="primary" @click="confirmtextarea">确认</el-button>


    <br/>
    <br/>
    <br/>


</div>
</body>
<script src="/vue-v2.6.11/dist/vue.js"></script>
<script src="/element-ui2.13.2/lib/index.js"></script>
<script src="/axios-v0.19.2/dist/axios.js"></script>

<script src="/js/input.js"></script>

</html>