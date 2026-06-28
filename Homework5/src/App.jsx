import "./App.css";
import Header from "./components/header/header";
import Section from "./components/section/section";
import appleGreen from "./assets/appleGreen.svg";
import googleGreen from "./assets/googleGreen.svg";
import xGreen from "./assets/xGreen.svg";
import appleBlue from "./assets/appleBlue.svg";
import googleBlue from "./assets/googleBlue.svg";
import xBlue from "./assets/xBlue.svg";
function App() {
  const links = [
    {
      id: 1,
      green: appleGreen,
      blue: appleBlue,
      href: "https://apps.apple.com/de/app/spotify-musik-und-podcasts/id324684580",
      title: "Apple",
    },
    {
      id: 2,
      green: googleGreen,
      blue: googleBlue,
      href: "https://play.google.com/store/apps/details?id=com.spotify.music&hl=de",
      title: "Google",
    },
    {
      id: 3,
      green: xGreen,
      blue: xBlue,
      href: "https://x.com/Spotify",
      title: "X",
    },
  ];

  return (
    <div className="wrapper">
      <Header />
      <Section links={links} />
    </div>
  );
}

export default App;
