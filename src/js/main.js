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
    var numSongs = document.querySelector('#num-songs');
    var cancel = document.querySelector('.create-form-cancel');
    var formAdd = document.querySelector('.create-form-add');
    var createForm = document.querySelector('#create-form');
    var titleInput = document.querySelector('#title-input');
    var artistInput = document.querySelector('#artist-input');
    var genreInput = document.querySelector('#genre-input');
    var createFormTitle = document.querySelector('.create-form-title');
    var createFormArtist = document.querySelector('.create-form-artist');
    var createFormGenre = document.querySelector('.create-form-genre');
    var favorite = document.querySelector('#checkbox');
    var numFavSongs = document.querySelector('#num-fav-songs');
    // creating new song and making in into html
    function getsongEl (newSong) {
        var el = document.createElement('div');
        el.classList.add('song');
        el.innerHTML =
        '<div class="song">' +
            '<h3>' + newSong.title + '</h3>' +
            '<h4>' + newSong.artist + '</h4>' +
            '<h4>' + newSong.genre + '</h4>' +
        '</div>';
        return el;
    };

    // pushing song to data array
    function pushSong (song) {
        data.push(song);
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
        songsLength(data);
    }

        // number of songs
    function songsLength (data) {
        numSongs.textContent = data.length;
    }

    function hideForm () {
        createForm.classList.remove('active');
        addButton.classList.remove('hide-button');
        titleInput.value = '';
        artistInput.value = '';
        genreInput.value = '';
        createFormTitle.classList.remove('is-invalid');
        createFormArtist.classList.remove('is-invalid');
        createFormGenre.classList.remove('is-invalid');
    }

    // hiding/showing add form
    addButton.addEventListener('click', function () {
        createForm.classList.add('active');
        addButton.classList.add('hide-button');
    });

    cancel.addEventListener('click', function () {
        hideForm();
    });

    function makeInvalid (el, msg) {
        el.parentElement.classList.add('is-invalid');
        el.parentElement.setAttribute('data-msg', msg);
    }

    // using user inputs to add to object that gets pushed into data array
    formAdd.addEventListener('click', function () {
        var inputs;
        // Begin validations
        var willSubmit = true;

        if (!titleInput.value) {
            makeInvalid(titleInput, 'Song title is required');
            willSubmit = false;
        }

        if (!artistInput.value) {
            makeInvalid(artistInput, 'Artist name is required');
            willSubmit = false;
        }

        if (!genreInput.value) {
            makeInvalid(genreInput, 'Genre is required');
            willSubmit = false;
        }

        // End validations

        if (willSubmit) {
            inputs = {
                title: titleInput.value,
                artist: artistInput.value,
                genre: genreInput.value
            };
            pushSong(inputs);
            songsLength(data);
            render(inputs);
            hideForm();
        }
    });

    initialize();
})();