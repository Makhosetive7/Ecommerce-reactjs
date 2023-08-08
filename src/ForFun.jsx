import {useState} from react

const ForFun () => {

    const [count, setCount] = useState(0)

    const HandleClickFunc() =>{
        console.log('clicked')
        setCount((prev)=> prev + 1 )
    }


    return(
        <div>
        <>
        {count}
        </>

        <button onClick={HandleClickFunc()}>+</button>

        </div>


}

export default ForFun