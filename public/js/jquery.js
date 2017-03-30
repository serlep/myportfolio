$(document).ready(function() {
	$('#overlay').fadeOut('slow');	
	var from,to,subject,text;
    $("#send_email").click(function(){  
        to=$("#to").val();
        from =$("#from").val();
        subject=$("#subject").val();
        text=$("#content").val();
        $("#message").text("Sending E-mail...Please wait");
        	$.get("http://serlepsherab.fr/send",{to:to,from:from,subject:subject,text:text},function(data){
        if(data=="sent")
        {
        	$("#message").empty().html("your Email is send succeffully, you will have your response in 24 h thank you!");
        }
        });
    });
});


