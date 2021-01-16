new Vue({
    el: '#app',
    data: {
        input:null,
        textarea:null,
        textareaObject:{},
        selectvalue1:'',
        options:[
            {
                value:"Shanghai",
                label:"上海",
            },
            {
                value:"Beijing",
                label:"北京",
            },
            {
                value:"Shenzhen",
                label:"深圳"
            }
        ],
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
        confirm(){
            let that = this;
            that.$message({
                message:that.selectvalue1,
                type:"success"
            });
            var parameter = new FormData();
            parameter.append("value", that.selectvalue1);
            axios({
                method: 'post',
                url:'/inputdata',
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
            });
        },
        confirmtextarea(){
            let that = this;
            that.$message({
                message:that.textarea,
                type:"success"
            });
            // 接口一
            var parameter = new FormData();
            parameter.append("value", that.textarea);
            axios({
                method: 'post',
                url:'/textareadata',
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
            });
            //接口二
            that.textareaObject.id=10;
            that.textareaObject.text=that.textarea;
            axios({
                method: 'post',
                url:'/textareaObjectdata',
                data:that.textareaObject
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
            });



        }
    }
})