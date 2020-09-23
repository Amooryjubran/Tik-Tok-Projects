import React from "react";
import "./App.css";
import Video from "./Video";
import Video__Kadeemh from "./vids/TikTok__1.mp4";
import Video__Leenh from "./vids/TikTok__2.mp4";
import Video__Jasonderulo from "./vids/TikTok__3.mp4";

function App() {
  return (
    <div className="app">
      <center>
        <div className="app__videos">
          <Video
            url={Video__Kadeemh}
            channel="Kadeemh"
            description="Basement chronicles 4: shawarma medium spice please"
            song=" بام بام - محمد رمضان"
            likes={2019}
            messages={196}
            shares={114}
          />

          <Video
            url={Video__Leenh}
            channel="Leenhabbal"
            description=" مين متلي ما بيشعر بالوقت عالtiktok? #tiktokarab #arab #middleeastern"
            song="Come and Get Your Love"
            likes={123}
            messages={12121}
            shares={12121}
          />
          <Video
            url={Video__Jasonderulo}
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
