class Person {
    constructor(id, firstName, lastName, email, phone){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }
    isNull(){
        return (
            this.firstName === null || this.firstName.length === 0 || 
            this.lastName === null || this.lastName.length === 0 ||
            this.email === null || this.email.length === 0 ||
            this.phone === null || this.phone.length === 0
        );
    }
}

export default Person;