$(function() {
    $(".draggable").draggable({
        stop: function() {
            var finalOffset = $(this).offset();
            var finalxPos = finalOffset.left;
            var finalyPos = finalOffset.top;
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/save", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({ "name": this.id, "x": finalxPos, "y": finalyPos }));
        },
    });
});
