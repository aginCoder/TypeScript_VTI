// src/components/WordCard.tsx
import React from 'react';
import { Word } from '../models/Word';

interface WordCardProps {
    word: Word;
}

const WordCard: React.FC<WordCardProps> = ({ word }) => {
    return (
        <div>
            <h3>{word.word}</h3>
            <p>{word.definition}</p>
        </div>
    );
};

export default WordCard;
