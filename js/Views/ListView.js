define(function(){
    
    function render(parameters){
        var appDiv = document.getElementById('app');

        var users = parameters.users;
        
        var html = '<ul>';
        for (var i = 0, len = users.length; i < len; i++){
            html += '<li>' + users[i].name + '&nbsp;&nbsp;<a href="javascript:;" class="del" ref="'+i+'" style="color:red;cursor:pointer;"> x </a> </li>';
        }
        html += '</ul>';
        
        appDiv.innerHTML = html; 
        bindEvents(users);  
        window.location.hash = '#list';        
    }
    function bindEvents(users){
        for (var i = 0, len = users.length; i < len; i++){        
            document.getElementsByClassName('del')[i].addEventListener("click", deleteUser,false);
        }     
    }

    function deleteUser(){
        var users = JSON.parse(localStorage.users);
        var id = this.getAttribute("ref");
            users.splice(id,1);
            localStorage.users = JSON.stringify(users);
            var elem = document.querySelectorAll('.del[ref="'+id+'"]');
                if(elem.length>1){
                    elem[0].parentNode.parentNode.removeChild(elem[0].parentNode);
                }else{
                    this.parentNode.replaceChild('textnode', this.parentNode.childNodes);    
                }
                
    }

    return {
        render:render
    };
});