console.log('Loaded!');

var element=document.getElementById('main-text')
element.innerHTML="Hello Rahul"


var button=document.getElementById('counter');
var counter=0;


button.onclick=function(){
    
    //1
    //2
    //3
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML= counter.toString();
    
    
    
    
}



