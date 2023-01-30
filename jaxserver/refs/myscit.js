// $(document).ready(function(){
    $("#check").submit(function(e){
        alert("but clocked");
        //e.preventDefault();

        const one=$("#skill").val();
        const two=$("#exp").val();

        alert("About to send "+one+" "+two);

        // $.post("/bson",{

        // },function(d,s){
        //     alert(JSON.stringify(d)+" "+s)
        // });
    })
// })

$(document).ready(function(){
    $("#beg").click(function(){
        alert("Button clicked")
    })
})