var userURl='http://localhost:8000'
// 管理员登录
function userLogin(userName,password,callback){
    $.post(userUrls.userLoginUrl,{user_name:userName,password:password},function(res){
        callback(res);
    })
}
function userLogout(callback){
  $.post(userUrls.userLogoutUrl,function(res){
    callback(res);

  })
}