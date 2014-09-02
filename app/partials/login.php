<form name="login_form">                      
    Email: <input ng-model="login.email" type="text" name="email" />
    Password: <input ng-model="login.password" type="password" name="password" id="password"/>
    <button ng-click="formhash(login)">Login</button>
</form>
<p>If you don't have a login, please <a href="register.php">register</a></p>
<p>If you are done, please <a href="includes/logout.php">log out</a>.</p>

