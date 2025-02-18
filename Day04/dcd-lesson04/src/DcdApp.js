import DcdClassComp from "./Components/DcdClassComp";
import DcdFuncComp from "./Components/DcdFuncComp";
import DcdFuncComp1 from "./Components/DcdFuncComp1";



function DcdApp() {
  // object
  const users={
    fullName:'nguyen quoc duy',
    age:20,
    phone:"0365184434"
  }
  return(
   <div className="container border mt-3">
     <h1>Demo Component -Props -State </h1>
     <hr/>
     <div className='alert alert-danger'>
       <DcdFuncComp name="chi du" address="6b ngo 83b tan trieu" company="ha noi"/>
       <hr/>
       <DcdFuncComp name="manh tuan" address="ha dong" company="soc son"/>
   </div>
   <div className="alert alert-info">
      <DcdFuncComp1 renderInfo={users}/>
    </div>
    <DcdClassComp/>
    {/* chuyen du lieu tu dcdapp -> xuong DcdClassComp */}
    <DcdClassComp Name="K23CNT2" renderUsers={users}/>
   </div>
  );
 }
 
 export default DcdApp;