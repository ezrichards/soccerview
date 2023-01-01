$(function() {
    $(".draggable").draggable({
        stop: function() {
            var finalOffset = $(this).offset();
            var finalxPos = finalOffset.left;
            var finalyPos = finalOffset.top;

            console.log(finalxPos);
            console.log(finalyPos);
        },
    });

    // https://stackoverflow.com/questions/4903530/how-to-get-the-position-of-a-draggable-object 
    // TODO save to last position variables, and then save to DB afterwards when program ends

    // save list of objects, something like this:
    // [{
    //     draggable: {
    //         xPos: 0,
    //         yPos: 0,
    //     },
    // }]

});