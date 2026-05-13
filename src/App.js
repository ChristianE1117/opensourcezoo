import "./index.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import React, {useState, useEffect } from 'react';

export function Animals() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://clientsidebackend-hraxa5eha9ctc9hv.canadacentral-01.azurewebsites.net/api/Zoo/Animals')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <nav>
        <Link to="/animals">Animals</Link>
        <Link to="/Endangered">Endangered</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/AnimalGame">AnimalGame</Link>
      </nav>
      <h1>Animals</h1>

      <ul className="animalList">
            {posts.map(post => (
              <li className="animalListItem" key={post.animalID}>
                <h2 className="animalName">{post.name}</h2>

                <p className="animalDescription">{post.description}</p>
                <p className="animalHabitat">{post.habitat}</p>
                <p className="animalSize">{post.size}</p>
              </li>
            ))}
      </ul>
    </div>
  )
}

export function Endangered() {
  return (
    <div>
      <nav>
        <Link to="/animals">Animals</Link>
        <Link to="/Endangered">Endangered</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/AnimalGame">AnimalGame</Link>
      </nav>
      <h1>Endangered</h1>

      <ul className="animalList">
      <li className="animalListItem">
          <h2 className="animalName">Amur Leopard</h2>
          <img src={require("./assets/Images/lep.jpg")} width="200px" />

          <p className="animalDescription">People usually think of leopards in the savannas of Africa but in the Russian Far East, a rare subspecies has adapted to life in the temperate forests that make up the northern-most part of the species’ range.</p>
          <p className="animalHabitat">Primarily in the Amur River basin of eastern Russia, with a few found in China and North Korea.</p>
          <p className="animalSize">Average adult size is 42 to 54 inches (107 to 137 cm) body length, with an added tail length of 32 to 35 inches (81 to 89 cm). Then the average weight: Males 70 – 105 lbs (32 – 48 kg), Females 55 – 94 lbs (25 – 43 kg)</p>
      </li>

      <li className="animalListItem">
          <h2 className="animalName">Gorilla</h2>
          <img src={require("./assets/Images/gorilla.jpg")} width="200px" />

          <p className="animalDescription">Gorillas are gentle giants and display many human-like behaviors and emotions, such as laughter and sadness. In fact, gorillas share 98.3% of their genetic code with humans, making them our closest cousins after chimpanzees and bonobos.</p>
          <p className="animalHabitat">The two gorilla species—the eastern and western gorilla—live in equatorial Africa, separated by about 560 miles of Congo Basin forest. Each has a lowland and upland subspecies. Gorillas live in family groups of usually five to 10, but sometimes two to more than 50, led by a dominant adult male—or silverback—that can hold his position for years, if not decades.</p>
          <p className="animalSize">Gorillas are the largest living primates, with heights between 1.25 and 1.8 meters and weights between 100 and 270 kg, depending on species and sex. Adult males can weigh nearly 500 pounds. Female adult gorillas tend to be smaller than males.</p>
      </li>

      <li className="animalListItem">
          <h2 className="animalName">Whooping Crane</h2>
          <img src={require("./assets/Images/crane.jpg")} width="200px" />

          <p className="animalDescription">The Whooping Crane is the tallest bird in North America and one of the most awe-inspiring, with its snowy white plumage, crimson cap, bugling call, and graceful courtship dance. It's also among our rarest birds and a testament to the tenacity and creativity of conservation biologists.</p>
          <p className="animalHabitat">The best place to find Whooping Cranes is during winter at Aransas National Wildlife Refuge, Texas. In summer, this population breeds in remote Wood Buffalo National Park, Canada. During migration, you may find Whooping Cranes at classic stopover sites such as Nebraska’s Platte River.</p>
          <p className="animalSize">Weighing 15 pounds, the Whooping Crane has a wingspan of more than 7 feet and is as tall as many humans, reaching a height of around 5 feet.</p>
      </li>
    </ul>
    </div>
  )
}

export function AboutUs() {
  return (
    <div>
      <nav>
        <Link to="/animals">Animals</Link>
        <Link to="/Endangered">Endangered</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/AnimalGame">AnimalGame</Link>
      </nav>
      <h2>A Quick History</h2>

    <ul className="historyList">
        <li className="historyListItem">
            <h3>Our Beginning</h3>

            <p>We ofically opened our doors in the summer of 1978. Guests flooded in from all over to see what we had in store for them.</p>
        </li>
        <li className="historyListItem">
            <h3>The Right Side Additions</h3>

            <p>Beginning construction in 1996, we finally finished in 1998 adding 10 more exhibits on the right half of our zoo.</p>
        </li>
        <li className="historyListItem">
            <h3>Unfortunate Circumstances</h3>

            <p>In 2020 like many other businesses we had to close our doors for some time. But fortunatley we were able to open back up to half capacity in early 2022 and have recovered from the pandemic.</p>
        </li>
        <li className="historyListItem">
            <h3>What You See Today</h3>

            <p>Today you see a 500 acre zoo with some of the most exotic and facinating creatures.</p>
        </li>
    </ul>
    </div>
  )
}

export function AnimalGame() {
    useEffect(() => {
    require("./gameScript.js");
  }, []);

  return (
    <div>
      <nav>
        <Link to="/animals">Animals</Link>
        <Link to="/Endangered">Endangered</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/AnimalGame">AnimalGame</Link>
      </nav>
      <h1>Animal Game</h1>
      <div className="gameCont" id="gameContainer">
        <div className="gameTop" id="gameTop">
            <div className="gameT" id="topGame1">
                <p className="animalName">Penguin</p>
                <img src={require("./assets/Images/penguin.png")} height="80px" />
            </div>
            <div className="gameT" id="topGame2">
                <p className="animalName">Ocelot</p>
                <img src={require("./assets/Images/ocelot.png")} height="80px" />
            </div>
            <div className="gameT" id="topGame3">
                <p className="animalName">Rhinocerous</p>
                <img src={require("./assets/Images/rhinoclipart.jpg")} height="80px" />
            </div>
            <div className="gameT" id="topGame4">
                <p className="animalName">Black Bear</p>
                <img src={require("./assets/Images/Black Bear.png")} height="80px" />
            </div>
            <div className="gameT" id="topGame5">
                <p className="animalName">Camel</p>
                <img src={require("./assets/Images/camelclip.png")} height="80px" />
            </div>
            <div className="gameT" id="topGame6">
                <p className="animalName">Orca</p>
                <img src={require("./assets/Images/orca-whale-clipart.jpg")} height="80px" />
            </div>
        </div>

        <div id="gameInformation">
            <h2 id="correctHead">Animal Habitat Matching Game</h2>
            <p id="correctPar">Match the animal to its proper habitat to learn more about them!</p>
        </div>

        <div className="gameBottom" id="gameBottom">
            <div className="gameB" id="bottomGame1">
                <p className="animalName">Jungle</p>
                <img src={require("./assets/Images/jungle.jpg")} height="80px" />
            </div>
            <div className="gameB" id="bottomGame2">
                <p className="animalName">Ocean</p>
                <img src={require("./assets/Images/ocean.webp")} height="80px" />
            </div>
            <div className="gameB" id="bottomGame3">
                <p className="animalName">Forest</p>
                <img src={require("./assets/Images/Forest.jpg")} height="80px" />
            </div>
            <div className="gameB" id="bottomGame4">
                <p className="animalName">Savannah</p>
                <img src={require("./assets/Images/Savvanah.jpg")} height="80px" />
            </div>
            <div className="gameB" id="bottomGame5">
                <p className="animalName">Antarctica</p>
                <img src={require("./assets/Images/arctic.jpg")} height="80px" />
            </div>
            <div className="gameB" id="bottomGame6">
                <p className="animalName">Desert</p>
                <img src={require("./assets/Images/desert.jpg")} height="80px" />
            </div>
        </div>
    </div>
    </div>
    
  )
}
