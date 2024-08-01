import React, { useState } from "react";

const Room = ({ changeLanguage }) => {
  let nouns = [
    {
      korean: "노트북",
      english: "laptop",
      koreanPhrase: "이 노트북은 정말 좋아요",
      englishPhrase: "This laptop is really good",
    },
    {
      korean: "텔레비전",
      english: "tv",
      koreanPhrase: "새 티비를 샀어요",
      englishPhrase: "I bought a new tv",
    },
    {
      korean: "탁자",
      english: "table",
      koreanPhrase: "탁자가 방에 있어요",
      englishPhrase: "There is a table in the room",
    },
    {
      korean: "핸드폰",
      english: "phone",
      koreanPhrase: "I need to charge my cell phone.",
      englishPhrase: "I need to charge my phone",
    },
    {
      korean: "펜",
      english: "pen",
      koreanPhrase: "펜을 주세요",
      englishPhrase: "Please give me a pen",
    },
    {
      korean: "연필",
      english: "pencil",
      koreanPhrase: "저는 연필로 씁니다.",
      englishPhrase: "I write with a pencil",
    },
    {
      korean: "컵",
      english: "cup",
      koreanPhrase: "컵을 주세요",
      englishPhrase: "Please give me a cup",
    },
    {
      korean: "책",
      english: "book",
      koreanPhrase: "책을 읽어요",
      englishPhrase: "I read a book",
    },
    {
      korean: "침대",
      english: "bed",
      koreanPhrase: "새 침대를 샀어요",
      englishPhrase: "I bought a new bed",
    },
    {
      korean: "창문",
      english: "window",
      koreanPhrase: "창문을 열어요",
      englishPhrase: "I open the window",
    },
    {
      korean: "문",
      english: "door",
      koreanPhrase: "문을 닫아주세요",
      englishPhrase: "Please close the door",
    },
    {
      korean: "운동화",
      english: "trainers",
      koreanPhrase: "운동화를 신고 가세요",
      englishPhrase: "PLease wear trainers when you go",
    },
    {
      korean: "음료",
      english: "drink",
      koreanPhrase: "음료수를 마셔요",
      englishPhrase: "I drink a beverage",
    },
    {
      korean: "반바지",
      english: "shorts",
      koreanPhrase: "여름에 반바지를 자주 입어요",
      englishPhrase: "I often wear shorts in the summer.",
    },
    {
      korean: "수건",
      english: "towel",
      koreanPhrase: "수건을 가져와 주세요",
      englishPhrase: "Please bring the towel",
    },
    {
      korean: "베개",
      english: "pillow",
      koreanPhrase: "편안한 베개를 원해요",
      englishPhrase: "I want a comfortable pillow.",
    },
    {
      korean: "이불",
      english: "duvet",
      koreanPhrase: "이불을 덮고 자다",
      englishPhrase: "To sleep under a duvet.",
    },
    {
      korean: "가위",
      english: "scissors",
      koreanPhrase: "가위를 어디에 두었어요?",
      englishPhrase: "Where did you put the scissors?",
    },
    {
      korean: "종이",
      english: "paper",
      koreanPhrase: "종이에 글을 쓰다",
      englishPhrase: "To write on paper.",
    },
    {
      korean: "키보드",
      english: "keyboard",
      koreanPhrase: "키보드가 고장났어요",
      englishPhrase: "The keyboard is broken.",
    },
    {
      korean: "사진",
      english: "photo",
      koreanPhrase: "이 사진은 정말 예쁘다",
      englishPhrase: "This photo is really beautiful.",
    },
    {
      korean: "전구",
      english: "light bulb",
      koreanPhrase: "전구가 나갔어요",
      englishPhrase: "The lightbulb is out.",
    },
    {
      korean: "스웨터",
      english: "jumper",
      koreanPhrase: "새 스웨터를 샀어요",
      englishPhrase: "I bought a new sweater.",
    },
    {
      korean: "셔츠",
      english: "shirt",
      koreanPhrase: "새 셔츠를 샀어요",
      englishPhrase: "I bought a new shirt.",
    },
  ];

  let randomWord = () => {
    return nouns[Math.floor(Math.random() * nouns.length)];
  };

  console.log(randomWord());
  const [word, setWord] = useState(randomWord());

  return (
    <div
      className="vowels"
      onClick={() => setWord(nouns[Math.floor(Math.random() * nouns.length)])}
    >
      {changeLanguage ? (
        <div className="divPosition">
          <h1>{word.korean}</h1> <h5>{word.koreanPhrase}</h5>
        </div>
      ) : (
        <div className="divPosition">
          <h2>{word.english}</h2> <h5>{word.englishPhrase}</h5>
        </div>
      )}
    </div>
  );
};

export default Room;
