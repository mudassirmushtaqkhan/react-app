import React, { useCallback, useState ,useEffect , useRef } from "react";


function PasswordGanerator() {
  const [length, Setlength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, SetnumberAllowed] = useState(false);
  const [symbolAllowed, SetsymbolAllowed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const passwordRef=useRef();

  const generatePassword = useCallback(()=> {
    let pass="";

    let str="ABCDEFGHIJKLMNOPQRSTUV";
    if(numberAllowed){
      str+="1234567890";
    }
    if(symbolAllowed){
      str+="!@#$%^&*";
    }

    for(let i=0; i<length; i++){
      const char= Math.floor(Math.random() *str.length+1);
      pass+=str.charAt(char);  
    }
    setPassword(pass);

   

  },[length,numberAllowed,symbolAllowed])

  useEffect(()=>{
    generatePassword();
  },[length,numberAllowed,symbolAllowed,])
  
  




  const copyPassword = useCallback(() => {
    navigator.clipboard.writeText(password)
      .then(() => {
        
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);    
        
      })
      .catch((err) => {
        console.error("Failed to copy password:", err);
      });
  }, [password]);


  

  return (
    <>
      <div className=" bg-gray-200 flex justify-center text-center items-center w-screen h-screen p-5">
        <div className="flex gap-5 flex-col w-full lg:w-1/2 bg-gray-400 px-5 py-10 rounded-md">
          <h1 className="text-3xl font-bold text-white">Password Ganerator</h1>
          <div className="flex gap-5 w-full">
            <input id="password" type="text" className=" outline-none p-2 w-3/4  rounded-md" value={password} ref={passwordRef} readOnly></input>
            <button onClick={copyPassword} className=" bg-white shadow font-semibold w-3/12 outline rounded-md outline-white">
            {isCopied ? "Copied!" : "Copy Now"}
            </button> 
          </div>
          <div className="flex gap-4">
              <input className="cursor-pointer" type="range" min={1} max={20} value={length} onChange={(e)=>Setlength(e.target.value)} name="length-range"></input> <label className="text-white">{length}</label>
              <input type="checkbox" name="number" onChange={()=>SetnumberAllowed((prev)=>!prev)}></input> <label className="text-white">Numbers</label>
              <input type="checkbox" onChange={()=>SetsymbolAllowed((prev)=>!prev)}></input> <label className="text-white">Symbol</label>
            </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGanerator;
