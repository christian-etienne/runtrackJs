$(document).ready(function(){
    var originalOrder = $('#images img').toArray();

    $("#shuffle").on("click", function(){
        var images = $('#images img').detach();
        images = images.sort(function() { return 0.5 - Math.random() });
        $('#images').append(images);
    });

    $("#check").on("click", function(){
        var currentOrder = $('#container img').toArray();
        if (JSON.stringify(originalOrder) === JSON.stringify(currentOrder)) {
            alert("Vous avez gagné !");
        } else {
            alert("Vous avez perdu !");
        }
    });

    $('img').on('dragstart', function(event) {
        event.originalEvent.dataTransfer.setData('text/plain', event.target.id);
    });

    $('#container').on('dragover', function(event) {
        event.preventDefault();
    });

    $('#container').on('drop', function(event) {
        event.preventDefault();
        var id = event.originalEvent.dataTransfer.getData('text/plain');
        $('#container').append($('#' + id));
    });
});
