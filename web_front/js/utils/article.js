var article ={
    show:function(params,callback){
        $.get(userUrls.article_show,params,function(res){
            callback(res);
        })
    },
    
}