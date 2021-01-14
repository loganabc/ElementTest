<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="/element-ui2.13.2/lib/theme-chalk/index.css">
</head>
<body>
<div id="app">

    <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">警告按钮</el-button>
    </el-row>

    <br/>

    <el-row>
        <el-button plain>默认按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>警告按钮</el-button>
    </el-row>

    <br/>

    <el-row>
        <el-button round>默认按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>警告按钮</el-button>
    </el-row>

    <br/>

    <el-row>
        <el-button round plain>默认按钮</el-button>
        <el-button type="primary" round plain>主要按钮</el-button>
        <el-button type="success" round plain>成功按钮</el-button>
        <el-button type="info" round plain>信息按钮</el-button>
        <el-button type="warning" round plain>警告按钮</el-button>
        <el-button type="danger" round plain :loading="true">警告按钮</el-button>
        <el-button type="text">警告按钮</el-button>
    </el-row>

    <br/>

    <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button icon="el-icon-edit" type="primary" circle></el-button>
        <el-button icon="el-icon-check" type="success" circle></el-button>
        <el-button icon="el-icon-message" type="info" circle></el-button>
        <el-button icon="el-icon-star-off" type="warning" circle></el-button>
        <el-button icon="el-icon-star-on" type="warning" circle></el-button>
        <el-button icon="el-icon-delete" type="danger" circle></el-button>
    </el-row>

    <br/>

    <el-row>
        <el-button>默认按钮</el-button>
        <el-button size="medium">默认按钮</el-button>
        <el-button size="small">默认按钮</el-button>
        <el-button size="mini">默认按钮</el-button>
    </el-row>
    <br/>
    <el-button type="primary" @click="jumpUploadFile">文件上传用例</el-button>
    <br/>
    <br/>
    <br/>
    <el-button type="primary" @click="jumpRadio">Radio单选框</el-button>
    <br/>
    <br/>
    <br/>
    <el-button type="primary" @click="jumpCheckbox">Checkbox多选框</el-button>

    <br/>
    <br/>
    <br/>
    <el-button type="primary" @click="jumpInput">Input输入框</el-button>

</div>
</body>
<script src="/vue-v2.6.11/dist/vue.js"></script>
<script src="/element-ui2.13.2/lib/index.js"></script>
<script src="/js/hello.js"></script>
</html>