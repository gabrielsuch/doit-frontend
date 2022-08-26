import { ComponentType } from "react"
import {Redirect, Route as ReactRoute, RouteProps} from "react-router-dom"
import {useAuth} from "../providers/AuthContext/index"

interface Props extends RouteProps{
    isPrivate?: boolean
    component: ComponentType
}

const Route = ({isPrivate= false, component: Component, ...rest }: Props) => {

    const {accessToken} = useAuth()

    return (
        <ReactRoute {...rest} render={() => 
            isPrivate === !!accessToken ? 
            <Component/> :
            <Redirect to={isPrivate ? "/" : "/dashboard"}/>   
        }
        /> 
    )
}

export default Route