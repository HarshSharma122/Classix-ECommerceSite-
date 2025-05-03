const name = "";
if(!name.length)
{
    console.log("Name is Required");
    return false;
}
else{
    console.log("You successfuly login");
    return true;
}

// const handleLogin = async ()=>
//     {
//         if(validateLogin)
//         {
//             const response = await apiClient.post(LOGIN_ROUTES, {
//                 email:Inputvalue.email,
//                 password:Inputvalue.password
//             }, {withCredentials:true})
//             console.log(response);

//             if(response.status ===  202)
//             {
//                 navigate('/');
//             }
//         }
//     }