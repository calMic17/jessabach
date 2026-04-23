import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutMission from "../components/about/AboutMission";
import AboutTeam from "../components/about/AboutTeam";
import AboutStats from "../components/about/AboutStats";
import "../styles/_about.scss";

function About() {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutStats />
      <AboutTeam />
    </div>
  );
}

export default About;