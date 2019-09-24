var article ={
    show:function(params,callback){
        $.get(userUrls.article_show,params,function(res){
            callback(res);
        })
    },
    del:function(id,callback){
        $.get(userUrls.article_del,{id:id},function(res){
            callback(res);
        })
    },
    publish:function(fd,callback){
        $.ajax({
            url:userUrls.article_publish,
            type:'post',
            data:fd,
            processData:false,
            contentType:false,
            success:function(res){
                callback(res)
            }

        })

    }

}