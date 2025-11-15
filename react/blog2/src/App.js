import './App.css';
import Hello from './component/Hello';
import Header from './component/Header';
import DayList from './component/DayList';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import Day from './component/Day';
import AddWord from './component/AddWord';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Hello/>
        <Header/>
        {/*<DayList/>
        <Word/> */}
        <Routes>
          <Route path="/" element={<DayList/>}></Route>
          <Route path="/day/:day" element={<Day/>}></Route>
          <Route path="/add_word" element={<AddWord/>}></Route>

          {/* 아무경로 없이 접속 할 경우 */}
          {/* /abc, /word/999 등 없는 URL 접근 시 EmptyPage 렌더 */}
          <Route path="*" element={<EmptyPage/>}></Route>
        </Routes>

        
      </div>
    </BrowserRouter>
  );
}

export default App;

// useEffect, 리엑트 훅 설명하고
// map 할 때 forEach도 설명해라. key도 설명하고
// npm install react-router-dom

// npm install -g json-server
// json-server --watch ./src/db/data.json --port 3001


/* 

pakage.json

"scripts": {
  "start": "react-scripts start",
  "server": "json-server --watch ./src/db/data.json --port 3001"
} 
  
npm run server

*/

/**
 * 
 * Rest API
 * 
 * Create : POST
 * Read : GET
 * Update : PUT
 * Delete : DELETE
 */
