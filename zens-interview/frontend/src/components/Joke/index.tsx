import { useState } from "react";
import Button, { ButtonType } from "../Button";
import "./Joke.css";
import { getRandomNumber } from "../../utils/getRandomNumber";

interface Joke {
  id: number;
  quote: string;
}

interface JokeProps {
  jokes: Joke[];
}

const Joke = ({ jokes }: JokeProps) => {
  const [currentJoke, setCurrentJoke] = useState<null | number>(jokes[0].id);
  const [readedJoke, setReadedJoke] = useState([jokes[0].id]);

  const handleBehavior = () => {
    const jokeNotRead = jokes.filter((joke) => !readedJoke.includes(joke.id));
    if (jokeNotRead.length === 0) {
      setCurrentJoke(null);
    } else {
      const rand = getRandomNumber(0, jokeNotRead.length - 1);
      setReadedJoke((prev) => [...prev, jokeNotRead[rand].id]);
      setCurrentJoke(jokeNotRead[rand].id);
    }
  };

  const joke = jokes.find((joke) => joke.id === currentJoke);

  return (
    <div className="joke">
      <div className="joke-content">
        <div className="content">
          {joke?.quote ||
            `That's all the jokes for today! Come back another day!`}
        </div>
        <hr className="divider" />
        {currentJoke === null || (
          <div className="buttons">
            <Button type={ButtonType.secondary} onClick={handleBehavior}>
              This is Funny!
            </Button>
            <Button type={ButtonType.primary} onClick={handleBehavior}>
              This is not funny.
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Joke;
