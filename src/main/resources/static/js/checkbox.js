new Vue({
    el: '#app',
    data: {
        checkGroup1:[],
    },
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
        },
        agreeChange(val){
            let that = this
            console.log(val)
            console.log(val=='1')
            that.btnstatus=(val=='1')?true:false
        },
        orderSubmit(){
            let that = this
            that.$message({
                message:"确认",
                type:"success"
            })
        },
        choice1(){
            console.log("choice1");
            let that = this
            that.$message({
                message:"确认",
                type:"success"
            })

        },
        cityChange(val){
            let that = this
            that.$message({
                message:val,
                type:"success"
            })
            var parameter = new FormData();
            parameter.append("value", val);
            axios({
                method: 'post',
                url:'/boxdata',
                data:parameter
            }).then(function (res) {
                if (res.data.code == 200){
                    that.$message({
                        message:"成功",
                        type:"success"
                    });
                }else{
                    that.$message({
                        message:"失败",
                        type:"success"
                    });
                }
                // jsonData = eval('(' + data.data[0].json_data + ')');
                // luckysheet.data[0]=eval('(' + data.data[0].json_data + ')');
                // console.log(data.data[0].json_data)
                // console.log("OK")
                // jsonData = eval('(' + data.data[0].json_data + ')');
            });
        }
    }
})