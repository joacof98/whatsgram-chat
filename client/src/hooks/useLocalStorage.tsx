import {useEffect, useState} from 'react'
const PREFIX = 'wg-clone-'

// Its a useState but with persistence in LS (everytime we give/create and id).
const useLocalStorage = (key: string, initialValue: any) => {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if(jsonValue !== null) return JSON.parse(jsonValue)
    if(typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])  

  return [value, setValue]
}

export default useLocalStorage;