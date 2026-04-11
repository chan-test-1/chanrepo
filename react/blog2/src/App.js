import { useState } from "react";
import ListM from "./component/study3/ListM";
import ListM2 from "./component/study3/ListM2";
import Map from "./component/study3/Map";
import ChanTest from "./component/study3/ChanTest";
import ChanTest1 from "./component/study3/ChanTest1";
import ChanGrid from "./component/study3/ChanGrid";
import ChanGrid1 from "./component/study3/ChanGrid1";
import ChanGrid2 from "./component/study3/ChanGrid2";
import ChanGrid3 from "./component/study3/ChanGrid3";
import ChanTable from "./component/study3/ChanTable";
import ChanTable1 from "./component/study3/ChanTable1";
import AgGrid1 from "./component/study3/AgGrid1";
import Antd1 from "./component/study3/Antd1";

function App() {
  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <ListM />
      <ListM2 />
      <Map />
      <ChanTest />
      <ChanTest1 />
      <ChanGrid />
      <ChanGrid1 />
      <ChanGrid2 />
      <ChanGrid3 />
      <ChanTable />
      <ChanTable1 />
      <AgGrid1 />
      <Antd1 />
    </div>
  );
}

export default App;
