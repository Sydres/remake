$(function()
{
    window.addEventListener('message', function(event)
    {
        var item = event.data;
        var buf = $('#wrap');
        buf.find('table').append("<h1 class=\"heading\" style=\"font-size: 18px\"><th><strong class=\"strongest\">TITANIUM ROLEPLAY</strong><a class=\"player-list-name\">SPELARLISTA</a></th></h1>");
        if (item.meta && item.meta == 'close')
        {
            document.getElementById("ptbl").innerHTML = "";
            $('#wrap').hide();
            return;
        }
        buf.find('table').append(item.text);
        $('#wrap').show();
    }, false);
});