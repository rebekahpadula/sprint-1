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
    var addButton = document.querySelector('#add-button');
    var numSongs = document.querySelector('.num-songs');
    var cancel = document.querySelector('.create-form-cancel');
    var formAdd = document.querySelector('.create-form-add');
    var createForm = document.querySelector('#create-form');
    var titleInput = document.querySelector('#title-input');
    var artistInput = document.querySelector('#artist-input');
    var genreInput = document.querySelector('#genre-input');

    function renderSongs (song) {
        songsList.innerHTML = '';
    }

    // creating new song and making in into html
    function getsongEl (newSong) {
        var el = document.createElement('div');
        el.classList.add('newSong');
        el.innerHTML =
        '<div class="newSong">' +
            '<h3>' + newSong.title + '</h3>' +
            '<h4>' + newSong.artist + '</h4>' +
            '<h4>' + newSong.genre + '</h4>' +
        '</div>';
        return el;
    };

    // pushing song to data array
    function pushSong (song) {
        data.push(song);
        render(song);
    }

    // appending child to display. el comes from getsongEl function
    // el becomes a real html element.
    function render (song) {
       var el = getsongEl(song);
       songsList.appendChild(el);
    }

    // looping through data array with forEach
    function initialize () {
        data.forEach(render);
    }

        // number of songs
    function songsLength (data) {
        newSong.innerHTML = data.length;
    }

    // hiding/showing add form
    addButton.addEventListener('click', function () {
        createForm.classList.add('active');
        addButton.classList.add('hide-button');
    });

    cancel.addEventListener('click', function () {
        createForm.classList.remove('active');
        addButton.classList.remove('hide-button');
    });

    // using user inputs to add to object that gets pushed into data array
    formAdd.addEventListener('click', function () {
        var inputs = {
            title: titleInput.value,
            artist: artistInput.value,
            genre: genreInput.value
        };
        createForm.classList.remove('active');
        titleInput.value = '';
        artistInput.value = '';
        genreInput.value = '';
        pushSong(inputs);
        addButton.classList.remove('hide-button');
    });

    initialize();
})();