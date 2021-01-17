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
                            },
                            {
                                value: "color",
                                label: "Color 色彩"
                            },
                            {
                                value: "typography",
                                label:"Typography 字体"
                            },
                            {
                                value: "icon",
                                label: "Icon 图标"
                            },
                            {
                                value: "button",
                                label: "Button 按钮"
                            }
                        ]
                    },
                    {
                        value: "form",
                        label: "Form",
                        children: [
                            {
                                value: "radio",
                                label: "Radio 单选框"
                            },
                            {
                                value: "checkbox",
                                label: "Checkbox 多选框"
                            },
                            {
                                value: "input",
                                label: "Input 输入框"
                            },
                            {
                                value: "input-number",
                                label: "InputNumber 计数器"
                            },
                            {
                                value: "select",
                                label: "Select 选择器"
                            },
                            {
                                value: "cascader",
                                label: "Cascader 级联选择器"
                            },
                            {
                                value: "switch",
                                label: "Switch 开关"
                            },
                            {
                                value: "slider",
                                label: "Slider 滑块"
                            },
                            {
                                value: "time-picker",
                                label: "TimePicker时间选择器"
                            },
                            {
                                value: "date-picker",
                                label: "DatePicker 日期选择器"
                            },
                            {
                                value: "upload",
                                label: "Upload 上传"
                            },
                            {
                                value: "rate",
                                label: "Rate 评分"
                            },
                            {
                                value: "form",
                                label: "Form 表单"
                            }
                        ]
                    },
                    {
                        value: "data",
                        label: "Data",
                        children: [
                            {
                                value: "table",
                                label: "Table 表格"
                            },
                            {
                                value: "tag",
                                label: "Tag 标签"
                            },
                            {
                                value: "progress",
                                label: "Progress 进度条"
                            },
                            {
                                value: "tree",
                                label: "Tree 树形结构"
                            },
                            {
                                value: "pagination",
                                label: "Pagination 分页"
                            },
                            {
                                value: "badge",
                                label: "Badge 标记"
                            }
                        ]
                    },
                    {
                        value: "notice",
                        label: "Notice",
                        children: [
                            {
                                value: "alert",
                                label: "Alert 警告"
                            },
                            {
                                value: "loading",
                                label: "Loading 加载"
                            },
                            {
                                value: "message",
                                label: "Message 消息提醒"
                            },
                            {
                                value: "message-box",
                                label: "MessageBox 弹窗"
                            },
                            {
                                value: "notification",
                                label: "Notification 通知"
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