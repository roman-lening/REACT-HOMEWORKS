import CitySelector from "./components/CitySelector/citySelector";
import CityCard from "./components/CityCard/cityCard";
import { useState } from "react";
import "./App.css";
function App() {
  const citiesData = [
    {
      id: 1,
      name: "Токио",
      description:
        "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
      imageUrl:
        "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
      facts: [
        "Токио - самый населенный мегаполис в мире.",
        "Здесь расположена самая высокая башня в Японии - Токийская башня.",
        "В Токио проходят множество культурных событий и фестивалей.",
      ],
    },
    {
      id: 2,
      name: "Киото",
      description:
        "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",
      imageUrl:
        "https://www.anywayanyday.com/blog/wp-content/uploads/2025/05/img_7392.jpeg",
      facts: [
        "В Киото насчитывается более 1600 буддийских храмов.",
        "Этот город был столицей Японии более тысячи лет.",
      ],
    },
    {
      id: 3,
      name: "Осака",
      description:
        "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKSCWxkYj3IQufYAIW0OlUj7FiQNzSj7_ifmtC9XS8AdIE6PPe9E26Leh&s=10",
      facts: [
        "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
        "Город является кулинарной столицей Японии.",
      ],
    },
    {
      id: 4,
      name: "Хоккайдо",
      description:
        "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",
      imageUrl:
        "https://akaritour.ru/upload/medialibrary/e45/e4576c876eeb1c38cd07f8b149e447a3.jpg",
      facts: [
        "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",
        "Летом остров привлекает туристов своими цветущими лавандовыми полями.",
      ],
    },
    {
      id: 5,
      name: "Нагоя",
      description:
        "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEUS9NUTT7ZYQoXf0T-6Ju_us4uW4dfGjUwqj-WU85Lh_pYlovRUPWiY&s=10",
      facts: [
        "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",
        "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.",
      ],
    },
  ];
  const [selectedCity, setSelectedCity] = useState(null);
  return (
    <div className="container">
      <CitySelector cities={citiesData} onSelectCity={setSelectedCity} />
      <CityCard city={selectedCity} />
    </div>
  );
}

export default App;
