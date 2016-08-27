/*Nina Kong*/
function updateData(event) {
    $('.eventDetails span[id]').text('');
    $('#eventType').text(event.type);
    if(event.relatedTarget) $('#eventKey').text(event.relatedTarget.tagName);
    $('#eventTarget').text(event.target.id);
    $('#eventRelatedTarget').text(event.type);
    $('#eventPageX').text(event.pageX);
    $('#eventPageY').text(event.pageY);
    $('#eventClientX').text(event.clientX);
    $('#eventClientY').text(event.clientY);
    $('#eventMeta').text(event.metaKey);
    if (event.data)  $('#eventData').text(event.data.name);  
}
$(document).ready(function () {
    var windowHeight = $( window ).height();
    var con = $(".Content");
    con.parentsUntil($("body")).css("height", windowHeight);

    $('#box1').on('click dblclick', {name: 'Box 1'}, function(event) {
        updateData(event);
        event.stopPropagation();
    });
    $('#box2').on('click dblclick', {name: 'Box 2'}, function(event) {
        updateData(event);
        event.stopPropagation();
    });

    $('.box').on('mouseenter', function(event) {
        updateData(event);
        event.stopPropagation();
    })

    $('.box').on('mouseleave', function(event) {
        updateData(event);
        event.stopPropagation();
    })

    $('.box').on('mousemove', function(event) {
        updateData(event);
        event.stopPropagation();
    })

    $('#inputField').keypress(updateData);
});
