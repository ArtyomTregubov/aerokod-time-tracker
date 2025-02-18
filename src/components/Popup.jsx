import React, { useState } from 'react';

const Popup = ({ isOpen, onClose, onAddTask }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskTime, setTaskTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const today = new Date().toLocaleDateString();
        onAddTask({ name: taskName, description: taskDescription, time: taskTime, date: today });
        setTaskName('');
        setTaskDescription('');
        setTaskTime('');
        onClose();
    };

    return (
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__button-container">
                <button className="popup__close-button" onClick={onClose}></button>
            </div>

            <form className='popup__form' onSubmit={handleSubmit}>
                <label>
                    <input
                        className='popup__input-name'
                        placeholder="Task name"
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        min="4"
                        max="20"
                    />
                </label>

                <label>
                    <input
                        className='popup__input-name'
                        placeholder="Task description"
                        type="text"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        min="4"
                        max="20"
                    />
                </label>

                <label>
                    <input
                        className='popup__input-name'
                        placeholder="Task execution time (hours)"
                        type="text"
                        value={taskTime}
                        onChange={(e) => setTaskTime(e.target.value)}
                        min="1"
                        max="20"
                    />
                </label>

                <button className="popup__save-button" type="submit">Save</button>
            </form>
        </div>
    );
};

export default Popup;
