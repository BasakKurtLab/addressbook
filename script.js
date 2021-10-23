


const app = new Vue(
    {
        el: "#app",
        data:
        {
            persons:[],
            in_firstname: "",
            in_lastname: "",
            in_email: "",
            in_tel: "",
            in_adress: "",
            form_show:false
        
        },
        methods:
        {
            add: function()
            {
                this.persons.push(
                    {
                        bild: "user.png",
                        firstname: this.in_firstname,
                        lastname: this.in_lastname,
                        email: this.in_email,
                        tel: this.in_tel,
                        adress: this.in_adress
                        
                    }),
                    this.form_show = false;
            },

            erase: function (index) {
               
                this.persons.splice(index, 1);




            },
            show: function () {
                this.form_show = true;
            }

        }
        }
    
)