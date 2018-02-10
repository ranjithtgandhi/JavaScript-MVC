require(['Models/User', 'Router'], function(User, Router){
    if(!localStorage.users){
    	var users = [
	    	new User('Ranjith'),
	    	new User('Gandhi'),
	    	new User('Shiyam'),
	    	new User('Saravanan'),
	    	new User('Bala'),
	    	new User('Shenba')
	    ];
	    
	    localStorage.users = JSON.stringify(users);	
    } 
    Router.startRouting();  
});