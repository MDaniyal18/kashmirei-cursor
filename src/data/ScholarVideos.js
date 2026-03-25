// Thumbnail
import mehakthumb from "../assets/Thumbnails/mehakthumb.png";
import aminathumb from "../assets/Thumbnails/aminathumb.JPG";
import ghazanfarthumb from "../assets/Thumbnails/ghazanfarthumb.JPG";
// import umithumb from "../assets/Thumbnails/umi-lubab-thumbnail.jpeg";
// import adleenthumb from "../assets/Thumbnails/adleen-thumbnail.webp";


// Profile picture
import mehakprofile from "../assets/Profile/mehak.jpeg";
import aminaprofile from "../assets/Profile/amina.JPG";
import ghazanfarprofile from "../assets/Profile/ghazanfar.JPG";
// import umiprofile from "../assets/Profile/umi-profile.jpeg";
// import adleenprofile from "../assets/Profile/adleen-profile.png";

// Videos
import MehakVideo from "../assets/Videos/Mehak-Changa.mp4";
import AminaVideo from "../assets/Videos/Amina-Sultan.mp4";
import GhazanfarVideo from "../assets/Videos/Syed-Ghazanfar.mp4";
// import UmiLubabVideo from "../assets/Videos/UmiLubab-video.mp4";
// import AdleenVideo from "../assets/Videos/Adleen-video.mp4";

const scholarVideos = [
  {
    id: 1,
    slug: "mehak-changa",
    name: "Mehak Changa",
    subtitle: "Currently preparing for NEET",
    thumbnail: mehakthumb,
    image: mehakprofile,
    video: MehakVideo,
  },

  {
    id: 2,
    slug: "syed-ghazanfar",
    name: "Syed Ghazanfar",
    subtitle: "Preparing for NEET",
    thumbnail: ghazanfarthumb,
    image: ghazanfarprofile,
    video: GhazanfarVideo,
  },

  {
    id: 3,
    slug: "amina-sultan",
    name: "Amina Sultan",
    subtitle: "Pursuing Diploma",
    thumbnail: aminathumb,
    image: aminaprofile,
    video: AminaVideo,
  },
  
  // {
  //   id: 4,
  //   slug: "umi-lubab",
  //   name: "Umi Lubab",
  //   subtitle: "Liberal Arts at Krea University",
  //   thumbnail: umithumb,
  //   image: umiprofile,
  //   video: UmiLubabVideo,
  // },
  // {
  //   id: 5,
  //   slug: "adleen-nazir",
  //   name: "Adleen Nazir",
  //   subtitle: "Pursuing BSc Anesthesia",
  //   thumbnail: adleenthumb,
  //   image: adleenprofile,
  //   video: AdleenVideo,
  // },
];

export default scholarVideos;