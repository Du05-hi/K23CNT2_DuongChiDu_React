import React from "react";

export default function DcdJsxExpression(){
    // bien
    const name="duong chi du";
    // bien doi tuong
    const user ={
        firstName:"du",
        lastName:"chi"
    }
    // ham 
    const fullName=(user)=>{
        return   user.firstName + '' + user.lastName  ;
    }

    // element
    const element =(
        <div>
            {/*bieu thuc jsx */}
          <h2>  {fullName(user)}</h2>
            <hr/>
            <h3>wellcome to, {name}</h3>
        </div>
    );

    //ham
    const sayWelcome=(name)=>{
        if(name){
            return <h3>welcome to {name}</h3>
        }else{
            return <h3>welcome to fit-ntu-k23cnt2</h3>
        }
    }
    return(
        <div>
            <h1>dcd - jsx  Expression</h1>
            {/* sd bien element */}
            {element}


            <hr/>
            {sayWelcome()}
            <hr/>
            {sayWelcome("duong chi du")}
        </div>
    )
}