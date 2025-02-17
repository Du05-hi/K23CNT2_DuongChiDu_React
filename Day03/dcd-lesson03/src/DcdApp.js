import DcdClassComp from "./components/DcdClassComp";
import DcdFuncComp from "./components/DcdFuncComp";
import DcdJsxExpression from "./components/DcdJsxExpression";

function DcdApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React IS Lesson03 - Duong Chi Du</h1>

      <DcdJsxExpression/>
      <hr/>
      {/* su dung function */}
      <DcdFuncComp/>
      {/* su dung class components */}
      <DcdClassComp/>
      </div>
  );
}

export default DcdApp;
