document.addEventListener('DOMContentLoaded', function () {
    const player = new Plyr('#modalVideo');

    
    document.getElementById('openModalButton').addEventListener('click', function () {
        document.getElementById('modal').style.display = 'block';
    });

    
    window.addEventListener('click', function (event) {
        if (event.target === document.getElementById('modal')) {
            document.getElementById('modal').style.display = 'none';
            player.stop();
        }
    });
});
