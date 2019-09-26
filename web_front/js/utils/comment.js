var comment ={
    show:function(id,callBack){
        $.get(userUrls.comment_show,{article_id:id},function(res){
            callBack(res);
        })
    },
    add:function(params,callback){
        $.post(userUrls.comment_add,params,function(res){
            callback(res);

        })

    }
}