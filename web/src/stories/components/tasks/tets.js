
javascript: !function () { 
    function e() { 
        var r = $(".relative_time").text(); 
        var e = r.slice(8,16);  
        return  e 
    }
    function r(e, hora) {
        var r = (new Date).getMilliseconds(); 
        return (1e3 + r - e) - (1e3 * Math.floor((1e3 + r - e) / 1e3)) 
    } 
    function t(e) { 
        var t = setInterval(
            function () { 
                var t = r(e, hora); 
                $("#serverMs").text(":" + ("00" + t).substr(-3)) }, 80);  
                return t  

             
    }
    if (!$("#serverMs").length) { 
        $(".relative_time").after('<span id="serverMs"></span>'), 
        $("#serverMs, .relative_time").css({ color: "red", "font-weight": "Bold", "font-size": "15px" });
        var n, s = e(), i = s, a = setInterval(
        function () { 
            s = e(), s !== i && (n = (new Date).getMilliseconds(), clearInterval(a), t(n)), i = s  
            console.log(a);
        }, 
        20)
       
         

    } 
    
    
}();


