autoscale: true
footer: © New York Code + Design Academy 2016
slidenumbers: true


##[fit] SoundCloud API

###[fit] With JavaScript

^Author: cam.crews@nycda.com
Prepared: 9/23/16
These slides offer guidance to students for the JukeBox API Integration with SoundCloud, introduced in the Fall 2016 curriculum.

---

# Connecting to the API

To use the SC object and make requests, we must first initialize it with our client_id:

```js
SC.initialize({
  client_id: '[YOUR_CLIENT_ID_HERE]'
});
```

---

# Gathering Information for a Track

If you know the url of a song you can do the following:

```js
SC.resolve("http://soundcloud.com/forss/voca-nomen-tuum").then(function(response) {
  // things to do after the track info loads...

  // this should display all relevant information regarding the track
  // e.g title, author, album art
  console.log(response);
});
```

---

# Searching for Songs

If you know the track id, we can use the `.get` method that SoundCloud has provided for us:

```js
SC.get("/tracks/216847995").then(function(response) {
  // things to do after the tracks load...

  // this should display all relevant information regarding the track
  // e.g title, author, album art
  console.log(response);
});
```

---

# Searching for Songs 

To specify a specific search term, we can pass through a `q` option:

```js
SC.get("/tracks", {
  q: "fish"
}).then(function(response) {
  // things to do after the tracks load...
  console.log(response);
});
```

---

# Searching for Songs 

Rather than hard-coding, we could dynamically pull the list of tracks from the user's search entry into an input box...

---

# What's that `then` method?

`then` is a JavaScript method for a `Promise` object.  A `Promise` is a placeholder for the return value of a `function` that we want to do something with immediately after it finishes...

We need to wait until this value is available and `then` allows us to continue with our code after the `Promise` operation completes.

---

# What's that `then` method?

We use `then` here because we need to wait for the SoundCloud `get` method to finish loading the tracks before we do anything with the response.

---

# What's this `then` method?

`then` expects a callback argument; here we use an anonymous function as our callback.

The callback receives as its argument, the return value from the function we were waiting for.  Here, we've called that return value from `SC.get`, *response*.

```js
SC.get("/tracks").then(function(response) {
  // things to do after the tracks load...
  console.log( response );
});
```

---

# Streaming a song

To stream a song, we can pass through a `/tracks/[song id]` relative url to the `SC.stream` method.

```js
SC.stream("/tracks/216847995").then(function(player){
  player.play();
});
```

---

# Streaming a song

We can extract the track id from `SC.resolve("[url]")` to pass them through to our player.

We need only dynamically add the ID of the song we wish to stream to the URL:

```js
SC.stream("/tracks/" + trackId).then(function(player) {
  player.play();
});
```
---

# Streaming a song

Note that the `play()` method may be called on the return value of `SC.stream`.  We can tie the `play` and `pause` methods into our Jukebox programs from Tuesday.

---

# Detecting the end of a Song

To detect the end of a song, we can either use the `duration` value returned within a `setTimeout` (annoyingly complex).

Or, we can listen for the event of the song ending...

```js
SC.stream("/tracks/216847995").then(function(player) {
  player.play();
  player.on("finish", function(){
    console.log("Done-zo");
  });
});
```

---

# Advancing beyond the first song

```js
var songs = [];
var currentSong = 0;

// load Track objects into songs array elsewhere...
function playNext() {
  SC.stream("/tracks/" + songs[currentSong].id).then(function(player) {
    player.play();
    player.on("finish",function(){
      // increase currentSong by 1
      currentSong += 1;

      // call itself
      playNext();
    });
  });
}
```
