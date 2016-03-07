(function () {
    var data = [
        {
            title: 'Gold',
            artist: 'Sleeping With Sirens',
            genre: 'rock'
        },
        {
            title: 'Feel I Bring',
            artist: 'Aer',
            genre: 'reggae/pop'
        }
    ];

    var songsList = document.querySelector('#songs-list');
    var addSong = document.querySelector('.create-form-add-song');
    var addButton = document.querySelector('#add-button');
    var numSongs = document.querySelector('.num-songs');
    var cancel = document.querySelector('.create-form-cancel');
    var formAdd = document.querySelector('.create-form-add');
    var createForm = document.querySelector('#create-form');
    var hidden = document.querySelector('.hidden');

    function renderSongs (song) {
        songsList.innerHTML = '';
    }

    // number of songs
    function songsLength (data) {
        numSongs.innerHTML = data.length;
    }

    // adding song to data array
    function getsongEl (song) {
        var el = document.createElement('div');
        el.classList.Add('song');
        el.innerHTML =
        '<div class="song-content">' +
            '<h1>' + song.title + '</h1>' +
            '<h2>By ' + song.artist + '</h2>' +
            '<h2>' + song.genre + '</h2>' +
        '</div>' +
        '</div>';
    }

    function pushSong (song) {
        data.push(song);
        return song;
    }

    // hiding/showing add form
    addButton.addEventListener('click', function () {
        if (createForm.classList.contains('createForm')) {
            createForm.classList.remove('createForm');
            createForm.classList.add('hidden');
        } else {
            createForm.classList.remove('hidden');
            createForm.classList.add('createForm');
        }
    });
});