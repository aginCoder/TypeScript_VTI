// src/App.tsx
import React, { useState } from 'react';
import './App.css'; 
import AddWord from './components/AddWord';
import WordList from './components/WordList';
import { Word } from './models/Word';

const App: React.FC = () => {
    const [words, setWords] = useState<Word[]>([]);

    const handleAddWord = (newWord: Word) => {
        setWords([...words, newWord]);
    };

    const handleEditWord = (id: number, updatedWord: Word) => {
        setWords((prevWords) => 
            prevWords.map((word) => (word.id === id ? updatedWord : word))
        );
    };

    const handleDeleteWord = (id: number) => {
        setWords(words.filter(word => word.id !== id)); 
    };

    return (
        <div>
            <h2>Ứng dụng Học Từ Vựng Tiếng Anh</h2>
            <AddWord onAdd={handleAddWord} />
            <WordList 
                words={words} 
                onDelete={handleDeleteWord} 
                onEdit={handleEditWord} 
            />
        </div>
    );
};

export default App;
