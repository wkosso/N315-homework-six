export function changePage(pageName){
    console.log("pageName",pageName);

    

    
    $.get(`pages/${pageName}.html`,(data) =>{
        $("#app").html(data);
            }).fail((error)=>{
                console.log("error ",error);
        
              
            });
}
    


