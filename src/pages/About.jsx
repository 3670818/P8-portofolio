
// import AboutBanner from "../../components/AboutBanner/AboutBanner";
// import { ImageBanner } from "../components/ImageBanner.jsx";
import ImageBannerMontagne from "../layout/ImageBannerMontagne.jsx";
// import Collapse from "../../components/Collapse/Collapse";
import  Porto from "../components/porto.jsx";
// import aboutArray from "../../datas/aboutArray.json"; // j'ai créé un fichier JSON avec les données des collapses
import aboutArray from "../../public/about-note.json"
import "../pages/About.scss"; 

export default function About() {
	return (
		<> 
		<div className="a_propos">
      <ImageBannerMontagne />
	  <Porto />
	  </div>
		</>
	);
}


