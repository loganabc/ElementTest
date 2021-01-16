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
    有禁用选项：
    <br/>
    <br/>
    <el-select v-model="selectvalue2" placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">

        </el-option>
    </el-select>
    <br/>
    <br/>
    禁用状态：
    <br/>
    <el-select v-model="selectvalue3" disabled="true" placeholder="请选择">
        <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled">

        </el-option>
    </el-select>

    <br/>
    <br/>
    可清空单选：
    <br/>
    <el-select v-model="selectvalue4" clearable="true" placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">

        </el-option>
    </el-select>

    <br/>
    <br/>
    基础多选：
    <br/>
    <el-select v-model="selectvalue5" multiple="true" placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">

        </el-option>
    </el-select>

    <br/>
    <br/>
    <el-select v-model="selectvalue6" multiple="true" collapse-tags="true" placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">

        </el-option>
    </el-select>

    <br/>
    <br/>
    自定义模板:
    <br/>
    <el-select v-model="selectvalue7" placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float: left">{{item.label}}</span>
            <span style="float: right;color: #8492a6;font-size: 13px">{{item.value}}</span>
        </el-option>
    </el-select>


</div>
</body>
<script src="/vue-v2.6.11/dist/vue.js"></script>
<script src="/element-ui2.13.2/lib/index.js"></script>
<script src="/axios-v0.19.2/dist/axios.js"></script>

<script src="/js/select.js"></script>

</html>