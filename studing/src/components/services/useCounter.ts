import { useRef, useState } from 'react'
import { CounterService } from './CounterServise'


export function useCounter(){
    const counter = useRef(new CounterService())
  const [count, setCount] = useState(counter.current.getCounter())
  
  return {counter,count,setCount}
}