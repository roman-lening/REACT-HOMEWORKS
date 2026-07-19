import "./App.css";
import Home from "./components/Home";
import ListArticle from "./components/ListArticle";
import Article from "./components/Article";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque at corrupti, repellat soluta fuga cum accusantium illo ea alias unde quae aliquam beatae officiis. Quam aperiam a earum dolores dolor mollitia rem consectetur alias quaerat autem quo odit quasi sunt maxime vitae provident et, cumque tempora eaque aut! Quasi, ducimus.";
const posts = [
  {
    id: 1,
    title: "Title 1",
    text: text,
  },
  {
    id: 2,
    title: "Title 2",
    text: text,
  },
  {
    id: 3,
    title: "Title 3",
    text: text,
  },
  {
    id: 4,
    title: "Title 4",
    text: text,
  },
  {
    id: 5,
    title: "Title 5",
    text: text,
  },
];

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListArticle posts={posts} />} />
        <Route path="/article/:id" element={<Article posts={posts} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
