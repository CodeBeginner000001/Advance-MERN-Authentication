import { useEffect, useRef,useState } from "react"
import { Loader } from "lucide-react";
import {motion} from "framer-motion"
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import {SuccessMessage} from "../toastify/success&Fail.js" // import the toastify success js file
const EmailVerificationPage = () => {
    // setting the code from the user in the array
    const [code,setCode] = useState(["","","","","",""]);
    // using the multiple inputrefs
    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const {verifyEmail,isLoading,error}=useAuthStore();
    const handleChange = (index,value)=>{ // handle the change in the input fields
        const newCode = [...code]; // spreading the array 
        // handle pasted content
        if(value.length>1) // if the value is more than 1 digit
        {
            const pastedCode = value.slice(0,6).split(""); // slice the values from 0 to 6 that is 6 digit code and split them with space
            for(let i=0;i<6;i++) // loop through the pasted code
            {
                newCode[i] = pastedCode[i] || ""; // assign the value to the new code array
            }
            setCode(newCode); // update the code state
            // focus on the last non-empty input or the first empty one
            const lastFilledIndex = newCode.findLastIndex((digit)=> digit!==""); // find the last filled index
            const focusIndex = lastFilledIndex < 5 ? lastFilledIndex+1:5; // if the last filled index is less than 5 then focus on the next index else focus on the last index
            inputRefs.current[focusIndex].focus(); // focus on the input field
        }else{
            newCode[index] = value; // if not pasted the code and entered so set the code index by values when entered
            setCode(newCode); // update the code state
            // move focus to the next input field if value is entered
            if(value && index<5) // if the value is entered and index is less than 5
            {
                inputRefs.current[index+1].focus();
            }
        }
    }
    const handleKeyDown = (index,e)=>{ // when key is pressed on keyboard
        if(e.key === "Backspace" && !code[index] && index>0){ // if the backspace key is pressed and the code is empty and index is greater than 0
            inputRefs.current[index-1].focus(); // focus on the previous input field
        }
    }
    const handleSubmit = async(e)=>{ // when the submit button is clicked
        e.preventDefault(); // prevent the default form submission
        const verificationCode = code.join(""); // join the code array into a string
        // console.log(`verification code submitted: ${verificationCode}`); // log the verification code
        try{
            await verifyEmail(verificationCode); // verify the email with the verification code
            navigate("/")
            SuccessMessage("Email verified successfully") // show the success message
        }catch(e){
            console.log(e); // log the error
        }
    }
    // auto submit when all feilds are filled
    useEffect(()=>{
        if(code.every((digit) => digit != "")){ // if all the fields are filled
            handleSubmit(new Event('submit')) // submit the form
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[code]) // run the effect when the code state changes
  return (
    <div className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
      <motion.div
      initial={{opacity: 0,y:-50}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5}}
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">Verify Your Email</h2>
        <p className="text-center text-gray-300 mb-6">Enter the 6-digit code sent to your email address.</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-between">
                {
                    code.map((digit,index)=>(
                        <input key={index} ref={(el)=>(inputRefs.current[index]=el)}
                        type="text" maxLength={6} value={digit}
                        onChange={(e)=> handleChange(index,e.target.value)}
                        onKeyDown={(e)=> handleKeyDown(index,e)}
                        className="w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 rounded-lg focus:border-green-500 focus:outline-none border-gray-500"
                        />
                    ))
                }
            </div>
            {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
            <motion.button className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg
            shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900
            transition duration-200"
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            type="submit"
            disabled={isLoading}
            >
            {isLoading?<Loader className="w-6 h-6 mx-auto animate-spin"/>:"Verify Email"}
            </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

export default EmailVerificationPage
