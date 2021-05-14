function header(rootDir){
    $.ajax({
        url: "header.html",
        cache: false,
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            $("#header").html($(html));
        }
    });
}