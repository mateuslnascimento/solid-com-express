'use strict';

class User{
    constructor(user){
    this.user = user;
    this.initiateUser();
    this.setupOptions = user.options
    }
   initiateUser(){
    this.name = this.user.name
    this.setupOptions()
    }
}
   
   const user = new User({userProperties, options: {validateUser()}{}});