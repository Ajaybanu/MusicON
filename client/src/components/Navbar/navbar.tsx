import style from './navbar.module.css';
// import { CheckCircle,Search } from 'lucide-react';

function Navbar() {
  return (
   <div>
    <div className={style.navbox}>
      <div className='text-green-500 '>
        <p> SUBSCRIBE & UPLOAD </p>
      </div>
      <img className={style.image} src="/loco2.png" alt="" />
      {/* <div className={style.dropdown}>
        {/* <CheckCircle className={style.bluetick} size={36} color="#2483ff" strokeWidth={3} /> */}
        {/* <div className="dropdown-menu gap-4">
          <button className="dropdown-item" type="button">Profile</button>
          <button className="dropdown-item" type="button">Settings</button>
          <button className="dropdown-item" type="button">Login</button>
        </div>
      </div> */} 
      <div className={style.searchbar}>
        <input className={style.search} type="text" />
        <button className={style.btnSrc}>
          {/* <Search size={20} color="#009dff" /> */}
        </button>
      </div>
      <div className={style.btns}>
        <div className="dropdown">
          <button className={style.btn2} type="button">TOP ARTIST</button>
          {/* <div className="dropdown-menu gap-4">
            <button className="dropdown-item" type="button">#1 Ajay</button>
            <button className="dropdown-item" type="button">#2 Linto</button>
            <button className="dropdown-item" type="button">#3 Naseef</button>
          </div> */}
          {/* <Bell style={{ marginLeft: "10px", position: "absolute", marginTop: "2px" }} color="#1f8bff" strokeWidth={1.75} /> */}
        </div>
        <button className={style.btn2}>HOME</button>
        <button className={style.btn1}>PLAYLIST</button>
        <button className={style.btn3}>UPLOADS</button>
      </div>
   
    </div>
   </div>
  );
}

export default Navbar;
