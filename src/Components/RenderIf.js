import React from "react"

const RenderIf = ({children,condition}) =>{
    if(condition) return <React.Fragment>{children}</React.Fragment>
}

export default RenderIf