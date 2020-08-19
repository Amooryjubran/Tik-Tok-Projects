import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <center>
        <div className="app__videos">
          <Video
            url="https://download1080.mediafire.com/rw0uldkwwgvg/a18d1edgelq90mo/Kadeem+Hemmings+%E2%9A%A1%EF%B8%8F%E2%9C%A8+%28%40kadeemh%29+TikTok+-+Watch+Kadeem+Hemmings+%E2%9A%A1%EF%B8%8F%E2%9C%A8%5C%27s+Newest+TikTok+Videos.mp4"
            channel="Kadeemh"
            description="Basement chronicles 4: shawarma medium spice please"
            song=" بام بام - محمد رمضان"
            likes={2019}
            messages={196}
            shares={114}
          />

          <Video
            url="http://download1642.mediafire.com/54whkejck3hg/1gnwnkjetsmflqg/%D9%88%D8%A7%D9%84%D9%84%D9%87+%D8%AC%D8%AF%D9%88+%D8%B7%D9%84%D8%B9+%D9%85%D8%B9%D9%88+%D8%AD%D9%82+%F0%9F%98%82%F0%9F%98%82%F0%9F%98%82+%23tiktokarab.mp4"
            channel="Leenhabbal"
            description=" مين متلي ما بيشعر بالوقت عالtiktok? #tiktokarab #arab #middleeastern"
            song="Come and Get Your Love"
            likes={123}
            messages={12121}
            shares={12121}
          />
          <Video
            url="http://download1083.mediafire.com/geo1ov15cjug/5bd5aw8s1ez6cz9/Jason+Derulo+%28%40jasonderulo%29+on+TikTok+-+Nobody+gets+between+me+and+my+%40littlecaesarspizza+Stuffed+Crazy+Bread+%23GoCrazy+%23littlecaesars+%23ad+%23whoisUzo.mp4"
            channel="Jasonderulo"
            description=" Nobody gets between me and my @littlecaesarspizza Stuffed Crazy Bread"
            song="Go Crazy - Little Caesars"
            likes={97223}
            messages={8811}
            shares={3298}
          />
        </div>
      </center>
    </div>
  );
}

export default App;
