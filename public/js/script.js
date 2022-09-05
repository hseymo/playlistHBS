const addBtn = document.querySelector("#addFormSubmit");
const songName = document.querySelector('#songName').value;
const artist = document.querySelector('#artist').value;
const genre = document.querySelector('#genre').value;
const user = document.querySelector('#user').value;

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    const songObj = {
        song_name:songName,
        artist:artist,
        genre:genre
        // 
    }
    console.log('clicked')
})