import { createContext } from "react";
import run from "../config/gemini";


export const context = createContext()

const ContextProvider = (props) => {

    const onSent = async(prompt) => {
        await run(prompt)
    }

    onSent('what is react js')

    const contextValue = {

    }

    return (
        <ContextProvider value={contextValue}>
            {props.childeren}
        </ContextProvider>
    )
}

export default ContextProvider;