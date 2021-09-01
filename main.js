var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var new_width;
var new_height;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    //Below to change size of canvas
    new_width=screen.width-70;
    new_height=screen.height-300;
    if(screen.width<992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";
    }
     canvas.addEventListener("mousedown", my_mousedown);
    canvas.addEventListener("touchstart",tou_sta);
    
     function my_mousedown(e)
     {
         //Addictonal Activity start
         color = document.getElementById("color").value;
         width_of_line = document.getElementById("line").value;
         //Addictonal Activity ends

         mouseEvent = "mouseDown";
     }
    function tou_sta(e){
        console.log("tou");
        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
        
    }
    canvas.addEventListener("mouseup", my_mouseup);
     function my_mouseup(e)
    {
         mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
         mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    canvas.addEventListener("touchmove",tou_mov)
    function my_mousemove(e)
    {

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x; 
    last_position_of_y = current_position_of_mouse_y;
    }
    function tou_mov(e){
        current_position_of_touches_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touches_y = e.touches[0].clientY - canvas.offsetTop;
        console.log("curX = "+current_position_of_touches_x);
        console.log("curY = "+current_position_of_touches_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_touches_x,current_position_of_touches_y);
        ctx.stroke();
        last_position_of_y=current_position_of_touches_y;
        last_position_of_x=current_position_of_touches_x;
    }
    function clear_can(){
        ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
    }