import "./App.css";
import Hello from "./component/Hello";
import Header from "./component/Header";
import DayList from "./component/DayList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import Day from "./component/Day";
import AddWord from "./component/AddWord";
import KorPage from "./component/KorPage";
import KorPage1 from "./component/KorPage1";
import ChanPage from "./component/ChanPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<DayList />}></Route>

          {/* 영단어  */}
          <Route path="/day/:day" element={<Day />}></Route>

          {/*  한글단어 */}
          <Route path="/korPage/:day" element={<KorPage />}></Route>

          {/*  한글단어1 */}
          <Route path="/korPage1/:day" element={<KorPage1 />}></Route>

          {/*  아무거나 */}
          <Route path="/ChanPage" element={<ChanPage />}></Route>

          {/*  등록화면 */}
          <Route path="/add_word" element={<AddWord />}></Route>
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
