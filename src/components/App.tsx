import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import Popup from './Popup';
import Tasks from './Tasks';
import { v4 as uuidv4 } from 'uuid'; 

interface Task {
    id: string;
    name: string;
    description: string;
    time: string;
    date: string;
}

const App: React.FC = () => {
    const [TaskCards, setTaskCards] = useState<Task[]>([]);
    const [isPopupOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

    const togglePopup = () => {
        setIsOpen(!isPopupOpen);
    };

    const addTask = (task: Omit<Task, 'id'>) => {
        setTaskCards([...TaskCards, { id: uuidv4(), ...task }]);
    };

    const deleteTask = (taskId: string) => {
        const updatedTasks = TaskCards.filter(task => task.id !== taskId);
        setTaskCards(updatedTasks);

        const updatedFilteredTasks = filteredTasks.filter(task => task.id !== taskId);
        setFilteredTasks(updatedFilteredTasks);

        if (updatedFilteredTasks.length === 0) {
            setSearchTerm(''); 
            setFilteredTasks([]); 
        }
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        const results = TaskCards.filter(task => task.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredTasks(results);
    };

    return (
        <div className="App">
            <Header onAddTask={togglePopup} />
            <main>
                <section className="homework">
                    <Search 
                        searchTerm={searchTerm} 
                        onSearchChange={handleSearchChange} 
                        onSearch={handleSearch} 
                    />
                    <Tasks 
                        tasks={filteredTasks.length > 0 ? filteredTasks : TaskCards} 
                        onDeleteTask={deleteTask} 
                    />
                    <Popup
                        isOpen={isPopupOpen} 
                        onClose={togglePopup} 
                        onAddTask={addTask}
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
