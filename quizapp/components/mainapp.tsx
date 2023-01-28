import Glossary from "./glossary";
import Quiz from "./quiz";



const Mainapp = () => {
    return (
        <>
        <div className="w-full h-full flex">
            <Quiz />
            <Glossary />
        </div>
        </>
    )
}

export default Mainapp;