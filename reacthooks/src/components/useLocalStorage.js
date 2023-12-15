import React, { useEffect, useState } from 'react'

function getSavedValue(key, initialvalue) {



    const savedvalue = JSON.parse(localStorage.getItem(key))  //by writing this line we cconverting getting the data in json format
    if (savedvalue) return savedvalue

    if (initialvalue instanceof Function) return initialvalue() //by writing this line we stating that this hook will accept function also and return the value
    return initialvalue
}

const useLocalStorage = (key, initialvalue) => {


    const [localvalue, setLocalValue] = useState(() => {
        return getSavedValue(key, initialvalue)

    })

    //updating the value 
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(localvalue)) //by writing this we are converting value to string what where the value is
    }, [localvalue])

    return [localvalue, setLocalValue]

}

export default useLocalStorage