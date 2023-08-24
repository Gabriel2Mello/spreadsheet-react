import Spreadsheet from "react-spreadsheet";

function App() {
    const data = [
        [{ value: 1 }, { value: "=SUM(A1:A2)" }],
        [{ value: 5 }, { value: "cookies" }],
    ];
    return <Spreadsheet data={data}/>;
}

export default App;