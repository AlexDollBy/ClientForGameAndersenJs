import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import './css/styleform.css';
import './css/cs-skin-underline.css';
import './css/cs-select.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className = "wrapper">
        <div className="left_block">
          Название: <input type="text" id = "t1" disabled/><br/>
          Бюджет: <input type="text" id="t2" disabled/><br/>
          <a href="#open-modal">Новая компания</a><br/><br/>
        </div>
        <div className="right_block">
          Сейчас выполняется<br/> <textarea id="t3" readOnly></textarea><br/>
         <progress value="0" max="100" id = "progress"></progress>
        </div>

        <div className="wrapper">
    <div title="Сотрудники" className="left_block">      
        Свободные программисты:<br/>
        <select id="listProgrammistov" size="4">
        </select>
        <input type="button" value="Добавить сотрудника" id="addBtn" disabled/><br/>
        <input type="button" value="Удалить сотрудника" id="deleteBtn" disabled/><br/>  
    </div>
    
    <div title="Менеджеры" className="right_block">      
            Менеджеры компании:<br/>
            <select id="listOfManagers" size="4">
            </select>
            <input type="button" value="Добавить менеджера" id="addBtnM" disabled/><br/>
            <input type="button" value="Удалить менеджера" id="deleteBtnM" disabled/><br/>  
    </div>
   </div>
    <div>
        <input type="button" value="Получить проект" id="startBtn" disabled/><br/>
        <input type="button" value="Один день работы" id="tick" disabled/><br/>
        
    </div>


      </div>
      </div>
    );
  }
}



export default App;
