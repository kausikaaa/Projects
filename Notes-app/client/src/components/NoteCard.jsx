import React, { useState } from 'react';
import './NoteCard.css';

const NoteCard = ({ note, onDelete, onPinToggle, onEdit }) => {
  const { _id, title, content, tag, pinned, createdAt } = note;
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);
  const [editTag, setEditTag] = useState(tag);

  const handleSave = () => {
    onEdit(_id, {
      title: editTitle,
      content: editContent,
      tag: editTag
    });
    setIsEditing(false);
  };

  return (
    <div className={`note-card ${pinned ? 'pinned' : ''}`}>
      {isEditing ? (
        <>
          <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
          <textarea value={editContent} onChange={(e) => setEditContent(e.target.value)} />
          <input value={editTag} onChange={(e) => setEditTag(e.target.value)} />
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <p>{content}</p>
          <div className="note-meta">
            <span className="tag">{tag}</span>
            <span className="date">{new Date(createdAt).toLocaleString()}</span>
          </div>
        </>
      )}

      <div className="note-actions">
        <button onClick={() => onPinToggle(_id)}>{pinned ? 'Unpin' : 'Pin'}</button>

        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete" onClick={() => onDelete(_id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default NoteCard;
