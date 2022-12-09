import { useState } from "react"

type toggleType = () => [ toggle:boolean ,onToggle:()=> void ]

export const useToggle : toggleType = () => {
    
    const [toggle, setToggle] = useState<boolean>(false)

    const onToggle = () => {
        setToggle( (pre) => !pre )
    }


    return [ toggle , onToggle ]

}