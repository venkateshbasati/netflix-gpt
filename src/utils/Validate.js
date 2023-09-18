const loginValidate=(email,password)=>{
   

    {
        // using regex xpression for email and password
    }
    const isEmailCorrect=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordCorrect=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailCorrect){
        return "Email is not Valid"
    }
    if(!isPasswordCorrect){
        return "Password is not Valid"
    }
    return null;
}
export default loginValidate;
