import { createContext } from "react";


export const context = createContext()

const ContextProvider = (props) => {



    const contextValue = {

    }

    return (
        <ContextProvider value={contextValue}>
            {props.childeren}
        </ContextProvider>
    )
}

export default ContextProvider;