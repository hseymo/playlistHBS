const addBtn = document.querySelector("#addFormSubmit");
const songName = document.querySelector('#songName');
const artist = document.querySelector('#artist');
const genre = document.querySelector('#genre');
const userName = document.querySelector('#user');

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    // fetch post user - if success, use user id
    // if not successful, read all user and match for id
    const user = userName.value;
    
    const songObj = {
        song_name:songName.value,
        artist:artist.value,
        genre:genre.value,
        // UserId:
    }
    console.log(songObj)
})

// e.target.dataset.id for grabbing delete and update id