let validar = new Vue ({
    el: '#app',
    data: {
        errors: [],
        name: null,
        secondName: null,
        email: null,
        password: null,
        submitted: false,
        expression: /\w+@\w+\.+[a-z]/,
    },
    computed: {
        hasErrors: function(){
            return !!this.errors.length;
        },
        inputVisible() {
            return this.choice == 3;
        }
    },
    methods: {
        checkForm: function(e) {
            this.errors = [];
            this.submitted = true;

            if (this.name && this.secondName && this.email && this.password && this.validateChoice() && this.expression.test(this.email)){
                 return true;                
            }
            
            if (!this.name) this.errors.push('Nombre requerido');
            if (!this.secondName) this.errors.push('Apellido requerido');
            if (!this.email) this.errors.push('Email requerido');
            if (!this.password) this.errors.push('Password requerido');
        },
    }  
});