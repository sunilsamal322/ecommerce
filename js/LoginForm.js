document.getElementById('login-form').addEventListener('submit',(event)=>{
    event.preventDefault();
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;

    let loginError=document.getElementById('login-error');    
    for(let i=0;i<users.length;i++)
    {
        if(username==users[i].username)
        {
            usernameMatch=true;
            if(password==users[i].password)
            {
                console.log("matched")
                location.href='ProductList.html';
                return;
            }    
        }
    }
    loginError.innerHTML="Invalid Credentials";
})