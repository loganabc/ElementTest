new Vue({
    el: '#app',
    methods:{
        jumpUploadFile() {
            window.location.href='/uploadfile';
        },
        jumpRadio() {
            window.location.href='/radio';
        },
        jumpCheckbox(){
            window.location.href='/checkbox';
        },
        jumpInput(){
            window.location.href='/input';
        },
        jumpInputNumber(){
            window.location.href='/inputnumber';
        },
        jumpSelect(){
            window.location.href='/select';
        },
    }
})

