import { useState } from "react"

const useSearchInput = () => {
    const [searchValue, setSearchValue] = useState('')

    const [searchValuee, setSearchValuee] = useState('')

    return {
        search:{
            value: searchValue,
            setSearchValue,
        },
        search2:{
            value: searchValuee,
            setSearchValuee,
        }
    }
}

export {useSearchInput} 