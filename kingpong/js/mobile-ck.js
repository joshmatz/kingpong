$(function(){$("#player-toggle").switchify();$("#submitted").hide();$("#player-toggle").data("switch").bind("switch:slide",function(e,t){$("#doubles-partner").slideToggle("fast")});$("label").addClass("visuallyhidden");$(".submit").click(function(e){e.preventDefault();var t=$.trim($("#player1-name").val()),n=$.trim($("#player2-name").val()),r=$.trim($("#player1-email").val()),i=$.trim($("#player2-email").val()),s=$.trim($("#player1-agency").val()),o=$.trim($("#player-toggle").val()),u=/^[a-zA-Z ]+/;if(!u.test(t)){alert("Please enter a valid name for player 1.");$("#player1-name").focus();return!1}if(o=="doubles"){var u=/^[a-zA-Z ]+/;if(!u.test(n)){alert("Please enter a valid name for player 2.");$("#player2-name").focus();return!1}var a=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;if(!a.test(i)){alert("Please enter a valid Email address for player 2.");$("#player2-email").focus();return!1}}var a=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;if(!a.test(r)){alert("Please enter a valid Email address for player 1.");$("#player1-email").focus();return!1}var u=/^[a-zA-Z ]+/;if(!u.test(s)){alert("Please enter a valid agency you for which you will be participating.");$("#player1-agency").focus();return!1}$.ajax({type:"POST",url:"/kingpongform.aspx",data:{p1name:t,p2name:n,p1email:r,p2email:i,agency:s,team:o,formtype:"request"},beforeSend:function(){$("body").css({cursor:"wait"});console.log("Sending...")},error:function(e){$("body").css({cursor:"default"});alert("Our server seems to be having problems. Try again?");return!1},success:function(e,t){$("body").css({cursor:"default"});$("#signup-form").slideUp();$("#submitted").slideDown("slow");console.log("Success!")}})})});