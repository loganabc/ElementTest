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
    <el-radio v-model="radio" label="1" @change="choice1">备选项1</el-radio>
    <el-radio v-model="radio" label="2" >备选项2</el-radio>
    <br/>
    <br/>
    <br/>
    <el-radio-group v-model="radioTreaty" @change="agreeChange">
        <el-radio :label="1">不同意</el-radio>
        <el-radio :label="2">同意</el-radio>
    </el-radio-group>
    <br/>
    <br/>
    <el-button type="primary" :disabled="btnstatus" @click="orderSubmit" style="width: 180px;">提交</el-button>


    <br/>
    <br/>
    <br/>
    <el-radio-group v-model="radio1" @change="cityChange">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>

</div>
</body>
<script src="/vue-v2.6.11/dist/vue.js"></script>
<script src="/element-ui2.13.2/lib/index.js"></script>
<script src="/js/radio.js"></script>
</html>