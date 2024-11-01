import React, { useState } from 'react';
import { Word } from '../models/Word';

interface WordListProps {
    words: Word[];
    onDelete: (id: number) => void; 
    onEdit: (id: number, updatedWord: Word) => void; 
}

const WordList: React.FC<WordListProps> = ({ words, onDelete, onEdit }) => {
    const [editingWord, setEditingWord] = useState<Word | null>(null);
    const [updatedWord, setUpdatedWord] = useState({ word: '', definition: '' });

    const handleEditClick = (word: Word) => {
        setEditingWord(word);
        setUpdatedWord({ word: word.word, definition: word.definition });
    };

    const handleUpdate = () => {
        if (editingWord) {
            const updated = { ...editingWord, ...updatedWord };
            onEdit(editingWord.id, updated);
            setEditingWord(null);
            setUpdatedWord({ word: '', definition: '' });
        }
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Từ vựng</th>
                        <th>Định nghĩa</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map((word) => (
                        <tr key={word.id}>
                            <td>{word.word}</td>
                            <td>{word.definition}</td>
                            <td>
                                <button onClick={() => onDelete(word.id)}>Xóa</button>
                                <button onClick={() => handleEditClick(word)}>Sửa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editingWord && (
                <div>
                    <h3>Chỉnh sửa: {editingWord.word}</h3>
                    <input 
                        type="text" 
                        placeholder="Từ vựng" 
                        value={updatedWord.word} 
                        onChange={(e) => setUpdatedWord({ ...updatedWord, word: e.target.value })} 
                    />
                    <input 
                        type="text" 
                        placeholder="Định nghĩa" 
                        value={updatedWord.definition} 
                        onChange={(e) => setUpdatedWord({ ...updatedWord, definition: e.target.value })} 
                    />
                    <button onClick={handleUpdate}>Cập nhật</button>
                    <button onClick={() => setEditingWord(null)}>Hủy</button>
                </div>
            )}
        </>
    );
};

export default WordList;
