 var category ={
     show:function(callBack){
         $.get(userUrls.category_show,function(res){
            callBack(res);

         })
     },
     add:function(name,slug,callBack){
         $.post(userUrls.category_add,{name:name,slug:slug},function(res){
             callBack(res);
         })
     },
     edit:function(id,name,slug,callBack){
         $.post(userUrls.category_edit,{id:id,name:name,slug:slug},function(res){
            callBack(res);
         })
     },
     del:function(id,callBack){
         $.post(userUrls.category_del,{id:id},function(res){
             callBack(res);
         })
     }

        
 }