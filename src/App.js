import React from 'react';
import './App.css';
import Video from './Video';



function App() {


  return (
    <div className="app">
      <center>
        <div className="app__videos">
          {/* pulled from firebase database */}
          <Video 
            url="https://v16m.tiktokcdn.com/431ad6ef8d7f0143e60eca911321bc09/5f319509/video/tos/useast2a/tos-useast2a-ve-0068c002/53474faf44e3482a8c3e3191bd9859ea/?a=1233&br=3200&bt=1600&cr=0&cs=0&dr=0&ds=3&er=&l=202008081842170101890660490D573AB4&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=Mzc5bmdyNnNydjMzZTczM0ApNGY7OGQ7NWU6N2hmMzNpNGc2LWRpYjM1LWNfLS1iMTZzcy4uYzA1MjYuMjZjMmI1MmE6Yw%3D%3D&vl=&vr="
            channel="Howieazy"
            description=" Why he gotta trick me like that #fyp #howieazy #comedy #foryou "
            song="Original Sound - Howieazy"
            likes={97223}
            messages={8811}
            shares={3298}
          />
          <Video 
            url="https://v16m.tiktokcdn.com/32c141d975073db2ebe1da74fe58a071/5f31935e/video/tos/useast2a/tos-useast2a-pve-0068/95e714da1a364bd2bdf59e0ee9fcaac2/?a=1233&br=1482&bt=741&cr=0&cs=0&dr=0&ds=3&er=&l=202008081835100101901871631656CCD5&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anU3PGVwZG9xdDMzaTczM0ApZWk5ZGk0NDw2NzY7OzY7ZmducjNzX2dxbXBfLS1gMTZzc2JfYjAtLTFjMDVeNS0vNTI6Yw%3D%3D&vl=&vr="
            channel="Leenhabbal"
            description=" مين متلي ما بيشعر بالوقت عالtiktok? #tiktokarab #arab #middleeastern"
            song="Come and Get Your Love"
            likes={123}
            messages={12121}
            shares={12121}
          />          

          <Video 
          url="https://v16m.tiktokcdn.com/19b34588075c61d63e130a8be03d2779/5f31935e/video/tos/useast2a/tos-useast2a-ve-0068c001/3d5324f4d4b74c2f84583352270d128c/?a=1233&br=3002&bt=1501&cr=0&cs=0&dr=0&ds=3&er=&l=202008081835100101901871631656CCD5&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anBvc3ZsOzM7djMzNzczM0ApZWhnaTNmaGUzN2VmNDY3O2dibzFrZXBnMl5fLS1hMTZzc15gLS4zNS9fYi5hYmA0XzQ6Yw%3D%3D&vl=&vr="
          channel="Amal_Tampa"
          description=" Our differences make us closer #fyp #beach #saudiarabia #french #friends #florida #tampa"
          song="Ride It - Regard"
          likes={2019}
          messages={196}
          shares={114}
        />
        </div>
      </center>
    </div>
  );
}

export default App;


