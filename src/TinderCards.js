import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Lionel Messi",
      url: "https://images.daznservices.com/di/library/GOAL/c1/b9/lionel-messi-psg-2021-22_1gvr29khjnsua1eil81aowjxna.jpg?t=1447976459&quality=100",
    },
    {
      name: "Cristiano Ronaldo",
      url: "https://st1.latestly.com/wp-content/uploads/2021/02/Cristiano-Ronaldo-8.jpg",
    },
    {
      name: "Neymar Jr",
      url: "https://images.firstpost.com/wp-content/uploads/2021/05/Neymar-PSG-640_AP.jpg",
    },
    {
      name: "Lionel Messi",
      url: "https://images.daznservices.com/di/library/GOAL/c1/b9/lionel-messi-psg-2021-22_1gvr29khjnsua1eil81aowjxna.jpg?t=1447976459&quality=100",
    },
    {
      name: "Cristiano Ronaldo",
      url: "https://st1.latestly.com/wp-content/uploads/2021/02/Cristiano-Ronaldo-8.jpg",
    },
    {
      name: "Neymar Jr",
      url: "https://images.firstpost.com/wp-content/uploads/2021/05/Neymar-PSG-640_AP.jpg",
    },
    {
      name: "Lionel Messi",
      url: "https://images.daznservices.com/di/library/GOAL/c1/b9/lionel-messi-psg-2021-22_1gvr29khjnsua1eil81aowjxna.jpg?t=1447976459&quality=100",
    },
    {
      name: "Cristiano Ronaldo",
      url: "https://st1.latestly.com/wp-content/uploads/2021/02/Cristiano-Ronaldo-8.jpg",
    },
    {
      name: "Neymar Jr",
      url: "https://images.firstpost.com/wp-content/uploads/2021/05/Neymar-PSG-640_AP.jpg",
    },
    {
      name: "Lionel Messi",
      url: "https://images.daznservices.com/di/library/GOAL/c1/b9/lionel-messi-psg-2021-22_1gvr29khjnsua1eil81aowjxna.jpg?t=1447976459&quality=100",
    },
    {
      name: "Cristiano Ronaldo",
      url: "https://st1.latestly.com/wp-content/uploads/2021/02/Cristiano-Ronaldo-8.jpg",
    },
    {
      name: "Neymar Jr",
      url: "https://images.firstpost.com/wp-content/uploads/2021/05/Neymar-PSG-640_AP.jpg",
    },
    {
      name: "Lionel Messi",
      url: "https://images.daznservices.com/di/library/GOAL/c1/b9/lionel-messi-psg-2021-22_1gvr29khjnsua1eil81aowjxna.jpg?t=1447976459&quality=100",
    },
    {
      name: "Cristiano Ronaldo",
      url: "https://st1.latestly.com/wp-content/uploads/2021/02/Cristiano-Ronaldo-8.jpg",
    },
    {
      name: "Neymar Jr",
      url: "https://images.firstpost.com/wp-content/uploads/2021/05/Neymar-PSG-640_AP.jpg",
    },
    {
      name: "Lionel Messi",
      url: "https://images.daznservices.com/di/library/GOAL/c1/b9/lionel-messi-psg-2021-22_1gvr29khjnsua1eil81aowjxna.jpg?t=1447976459&quality=100",
    },
    {
      name: "Cristiano Ronaldo",
      url: "https://st1.latestly.com/wp-content/uploads/2021/02/Cristiano-Ronaldo-8.jpg",
    },
    {
      name: "Neymar Jr",
      url: "https://images.firstpost.com/wp-content/uploads/2021/05/Neymar-PSG-640_AP.jpg",
    },
    {
      name: "Lionel Messi",
      url: "https://images.daznservices.com/di/library/GOAL/c1/b9/lionel-messi-psg-2021-22_1gvr29khjnsua1eil81aowjxna.jpg?t=1447976459&quality=100",
    },
    {
      name: "Cristiano Ronaldo",
      url: "https://st1.latestly.com/wp-content/uploads/2021/02/Cristiano-Ronaldo-8.jpg",
    },
    {
      name: "Neymar Jr",
      url: "https://images.firstpost.com/wp-content/uploads/2021/05/Neymar-PSG-640_AP.jpg",
    },
    {
      name: "Lionel Messi",
      url: "https://images.daznservices.com/di/library/GOAL/c1/b9/lionel-messi-psg-2021-22_1gvr29khjnsua1eil81aowjxna.jpg?t=1447976459&quality=100",
    },
    {
      name: "Cristiano Ronaldo",
      url: "https://st1.latestly.com/wp-content/uploads/2021/02/Cristiano-Ronaldo-8.jpg",
    },
    {
      name: "Neymar Jr",
      url: "https://images.firstpost.com/wp-content/uploads/2021/05/Neymar-PSG-640_AP.jpg",
    },
    {
      name: "Lionel Messi",
      url: "https://images.daznservices.com/di/library/GOAL/c1/b9/lionel-messi-psg-2021-22_1gvr29khjnsua1eil81aowjxna.jpg?t=1447976459&quality=100",
    },
    {
      name: "Cristiano Ronaldo",
      url: "https://st1.latestly.com/wp-content/uploads/2021/02/Cristiano-Ronaldo-8.jpg",
    },
    {
      name: "Neymar Jr",
      url: "https://images.firstpost.com/wp-content/uploads/2021/05/Neymar-PSG-640_AP.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
