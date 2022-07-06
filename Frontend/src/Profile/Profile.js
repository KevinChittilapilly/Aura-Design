import React from "react";
import img1 from "../Assets/img1.jpg";
import './Profile.css'

const Profile = () => {
  return (
    <div className="outer-div-profile">
      <div className="prof-img-div">
        <img src={img1} className="prof-img" />
      </div>
      <div className="details">
        <div className="title">Austin</div>
        <div className="detail-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            viverra sem in ullamcorper facilisis. Ut egestas, arcu ut fringilla
            venenatis, lectus nunc scelerisque dui, vitae dictum odio nibh id
            orci. Proin quis semper ligula. Donec laoreet ex ac mattis rhoncus.
            Donec pharetra maximus ante at pellentesque. Fusce ullamcorper nec
            magna in porta. Mauris porttitor convallis magna ac rutrum. Fusce
            placerat ex nisl, in tincidunt diam semper vitae. Maecenas a odio
            dui. Proin mi elit, vulputate sed pharetra eu, congue et risus. Ut
            vitae nunc sed nunc feugiat dapibus. Donec laoreet sit amet nisl sed
            feugiat. Maecenas ut posuere augue. Donec cursus laoreet orci
            pharetra convallis. Phasellus vitae turpis eu leo euismod blandit.
          </p>
          <p>
            In vel luctus massa. Nulla quis tristique dolor, eu luctus est.
            Etiam hendrerit pellentesque nisl id varius. Mauris viverra magna
            eros, vitae aliquam erat hendrerit vitae. Donec vitae scelerisque
            erat. Quisque pulvinar dictum urna, sollicitudin lacinia nisl.
            Vivamus volutpat, leo nec volutpat laoreet, ligula lacus varius
            diam, non venenatis erat tellus eu ante. Nunc varius consectetur
            consectetur. Nam faucibus congue gravida. Vivamus quis elementum
            dui.
          </p>
        </div>
        <div className="title">Rhea</div>
        <div className="detail-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          viverra sem in ullamcorper facilisis. Ut egestas, arcu ut fringilla
          venenatis, lectus nunc scelerisque dui, vitae dictum odio nibh id
          orci. Proin quis semper ligula. Donec laoreet ex ac mattis rhoncus.
          Donec pharetra maximus ante at pellentesque. Fusce ullamcorper nec
          magna in porta. Mauris porttitor convallis magna ac rutrum. Fusce
          placerat ex nisl, in tincidunt diam semper vitae. Maecenas a odio dui.
          Proin mi elit, vulputate sed pharetra eu, congue et risus. Ut vitae
          nunc sed nunc feugiat dapibus. Donec laoreet sit amet nisl sed
          feugiat. Maecenas ut posuere augue. Donec cursus laoreet orci pharetra
          convallis. Phasellus vitae turpis eu leo euismod blandit.
        </div>
      </div>
    </div>
  );
};

export default Profile;
