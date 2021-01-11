<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文件上传用例</title>
    <link rel="stylesheet" href="/element-ui2.13.2/lib/theme-chalk/index.css">
</head>
<body>
<div id="app">

    <br/>
    <br/>
    <br/>
    <el-upload
            class="upload-demo"
            accept=".png,.jpg"
            :on-progress="progressUpload"
            :on-success="successRes"
            drag
            action="/uploading"
            :before-upload="beforeAvatarUpload"
            multiple
            :show-file-list="true">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖拽到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过10M</div>
    </el-upload>

    <br/>
    <br/>
    <br/>
    <el-upload
            class="upload-demo"
            accept=".png,.jpg,.docx"
            :on-progress="progressUpload"
            :on-success="successRes"
            action="/uploading"
            :before-upload="beforeAvatarUpload"
            multiple
            :show-file-list="true">
        <el-button size="small" type="primary">点击上传</el-button>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过10M</div>
    </el-upload>

</div>
</body>
<script src="/vueCDN/vue.js"></script>
<script src="/element-ui2.13.2/lib/index.js"></script>
<script src="/js/uploadfile.js"></script>
</html>