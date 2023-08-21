"use client";

import './play.css'
// import { Heart } from 'lucide-react';
function OpenMusic() {
  return (
    <>
    

        <div className="music-player">
          <div className="player-main">
            <div className="main-current">
              <div className="current-keyvisual">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/music-player-freebie-photo.png" />
              </div>
              <div className="current-info">
                <h1>Blame</h1>
                <p>KYLE</p>
              </div>
            </div>
            <div className="main-control">
              <div className="btn _previous"></div>
              <div className="btn _pause"></div>
              <div className="btn _next"></div>
              <div className="btn _timeline">
                <span className="current-time">2:32</span>
                <span className="timescope">
                  <span className="timescope-dot"></span>
                </span>
                <span className="end-time">4:00</span>
              </div>
            </div>
          </div>
        <div>
          <h2 className='title-song'>TOP HITS</h2>
        </div>
            <div>
              <h4 className='title-dsb'>jasdfksdklf sdpfjsd;kjfskl; fkjsdfjsd flsdlf slfs sjfsd flksjflks  sdfslkf sdflkjslfk slkfj sd</h4>
              </div>
              <div className='play-list'>
            <img className='play-img' src="/public/p.jpg" alt="" />
            <h4 className='play-songname'>jhdsfh jsdfsdh  sdjlflsdhj</h4>
            <h4 className='play-songtime'>2:30</h4>
          {/* <h4 className='play-love'>< Heart  size={20} color="#ff0000" strokeWidth={3} absoluteStrokeWidth /></h4> */}
          </div>
          <div className='play-list'>
            <img className='play-img' src="/public/p.jpg" alt="" />
            <h4 className='play-songname'>jhdsfh jsdfsdh  sdjlflsdhj</h4>
            <h4 className='play-songtime'>2:30</h4>
          {/* <h4 className='play-love'>< Heart  size={20} color="#ff0000" strokeWidth={3} absoluteStrokeWidth /></h4> */}
          </div>
          <div className='play-list'>
            <img className='play-img' src="/public/p.jpg" alt="" />
            <h4 className='play-songname'>jhdsfh jsdfsdh  sdjlflsdhj</h4>
            <h4 className='play-songtime'>2:30</h4>
          {/* <h4 className='play-love'>< Heart  size={20} color="#ff0000" strokeWidth={3} absoluteStrokeWidth /></h4> */}
          </div>
        </div>

  
    </>
  );
}

export default OpenMusic