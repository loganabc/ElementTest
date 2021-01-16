new Vue({
    el: '#app',
    data: {
        input:null,
        textarea:null,
        textareaObject:{},
        selectvalue1:'',
        selectvalue2:'',
        selectvalue3:'',
        selectvalue4:'',
        selectvalue5:'',
        selectvalue6:'',
        selectvalue7:'',
        selectvalue8:'',
        selectvalue9:'',
        cascaderoptions:[
            {
                value:"zhinan",
                label:"指南",
                children:[
                    {
                        value:"shejiyuanze",
                        label:"设计原则",
                        children:[
                            {
                                value:"yizhi",
                                label:"一致"
                            },
                            {
                                value:"fankui",
                                label:"反馈",
                            },
                            {
                                value:"xiaolv",
                                label:"效率",
                            },
                            {
                                value:"kekong",
                                label:"可控"
                            }
                        ]
                    },
                    {
                        value: 'daohang',
                        label: '导航',
                        children: [
                            {
                                value: 'cexiangdaohang',
                                label: '侧向导航'
                            },
                            {
                                value: 'dingbudaohang',
                                label: '顶部导航'
                            }
                        ]
                    }
                ]
            },
            {
                value:"zujian",
                label:"组件",
                children: [
                    {
                        value:"basic",
                        label:"Basic",
                        children: [
                            {
                                value: "layout",
                                label:"Layout 布局"
                            }
                        ]
                    }
                ]
            }

        ]
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