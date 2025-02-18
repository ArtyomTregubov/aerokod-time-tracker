import React, { useState } from "react";

export default function Tasks({ tasks, onDeleteTask }) {
  
  const [startTimes, setStartTimes] = useState({});
  const [finishTimes, setFinishTimes] = useState({}); 

  const handleStart = (taskId) => {
    const currentTime = new Date().toLocaleTimeString();
    setStartTimes((prev) => ({ ...prev, [taskId]: currentTime }));
  };

  const handleFinish = (taskId) => {
    const currentTime = new Date().toLocaleTimeString();
    setFinishTimes((prev) => ({ ...prev, [taskId]: currentTime })); 
  };

  const isFinishTimeValid = (taskId, taskTime) => {
    const startTime = startTimes[taskId];
    const finishTime = finishTimes[taskId];

    if (!startTime || !finishTime) return false;

    const formattedStartTime = startTime.includes(':') ? startTime : `${startTime}:00`;
    const formattedFinishTime = finishTime.includes(':') ? finishTime : `${finishTime}:00`;

    const startDate = new Date(`1970-01-01T${formattedStartTime}`);
    const finishDate = new Date(`1970-01-01T${formattedFinishTime}`);

    if (isNaN(startDate.getTime()) || isNaN(finishDate.getTime())) {
        console.error(`Некорректные значения времени: Start Time: ${formattedStartTime}, Finish Time: ${formattedFinishTime}`);
        return false;
    }

    const timeSpent = (finishDate - startDate) / (1000 * 60 * 60); 

    console.log(`Start Time: ${formattedStartTime}, Finish Time: ${formattedFinishTime}, Time Spent: ${timeSpent}, Task Time: ${taskTime}`);

    return timeSpent <= parseFloat(taskTime) && parseFloat(taskTime) > 0; 
  };

  return (
    <section className="tasks">
      {tasks.map(task => (
        <div className="tasks__columns" key={task.id}>
          <div className="tasks__params">
            <span className="tasks__parametr">Date:</span>
            <span className="tasks__parametr-text">{task.date}</span>
          </div>
          <div className="tasks__params">   
            <span className="tasks__parametr">Task name:</span>
            <span className="tasks__parametr-text">{task.name}</span>
          </div>  
          <div className="tasks__params">    
            <span className="tasks__parametr">Task description:</span>
            <span className="tasks__parametr-text">{task.description}</span>
          </div>
          <div className="tasks__params">     
            <span className="tasks__parametr">Time for the task:</span>
            <span className="tasks__parametr-text">{task.time} h</span>
          </div>
          <div className="tasks__buttons">
            <button 
              className="tasks__button" 
              onClick={() => handleStart(task.id)} 
              disabled={!!startTimes[task.id]} 
            >
              Start
            </button>
            <span className="tasks__parametr-text">{startTimes[task.id] || "00:00"}</span>
          </div>
          <div className="tasks__buttons">
            <button 
              className="tasks__button" 
              onClick={() => handleFinish(task.id)} 
              disabled={!!finishTimes[task.id]} 
            >
              Finish
            </button>
            <span 
              className="tasks__parametr-text" 
              style={{ color: finishTimes[task.id] ? (isFinishTimeValid(task.id, task.time) ? 'green' : 'red') : '#2c4d9f;' }}
            >
              {finishTimes[task.id] || "00:00"}
            </span>
          </div>
          <button 
            className="tasks__delete" 
            onClick={() => onDeleteTask(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </section>
  );
}