// src/components/AddWord.tsx
import React, { useState } from 'react';
import { Word } from '../models/Word';
import '../components/AddWord.css'; 

interface AddWordProps {
    onAdd: (word: Word) => void;
}

const AddWord: React.FC<AddWordProps> = ({ onAdd }) => {
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (word && definition) {
            onAdd({ id: Date.now(), word, definition });
            setWord('');
            setDefinition('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Từ vựng"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Định nghĩa"
                value={definition}
                onChange={(e) => setDefinition(e.target.value)}
                required
            />
            <button type="submit">Thêm</button>
        </form>
    );
};

export default AddWord;
