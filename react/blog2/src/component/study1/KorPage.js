import { useParams } from "react-router-dom";
import dummy from "../db/data.json";
import Word from "./Word";
import { useEffect, useState } from "react";
import KorWord from "./KorWord";

export default function KorPage() {
  const { day } = useParams();
  const [words, setWords] = useState([]);
  // const day = 1;
  // const wordList = dummy.words.filter(word => word.day === Number(day))

  useEffect(() => {
    getWords();
  }, []);

  const getWords = () => {
    fetch(`http://localhost:3001/words?day=${day}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
      });
  };

  console.log("words", words);

  return (
    <>
      <h2>Day {day} </h2>
      <table>
        <tbody>
          {words.map((word) => (
            <KorWord key={word.id} word={word} getWords={getWords} />
          ))}
        </tbody>
      </table>
    </>
  );
}
