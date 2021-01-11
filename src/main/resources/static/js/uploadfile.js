new Vue({
    el: '#app',
    mounted(){

    },
    methods: {
        successRes(response, file, fileList) { //文件上传成功之后
            loading.close();
            this.$message({
                message: response,
                type: 'success'
            });
        },
        beforeAvatarUpload(file) { //文件上传之前
            console.log("afsdfasdfa");
            var isLt2M = file.size / 1024 / 1024 < 10
            console.log(isLt2M);
            if(!isLt2M) {
                this.$message({
                    message: '上传文件大小不能超过 10MB!',
                    type: 'warning'
                });
                return false;
            }
        },
        progressUpload() { //文件上传时
            loading = this.$loading({
                lock: true,
                text: 'Loading...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
        }
    }
})