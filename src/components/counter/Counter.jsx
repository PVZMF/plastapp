import React,{useState, useEffect} from 'react'
import "./counter.css"
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {onCounter} from "../../toolkit/slices/auth"

const Counter = ({count}) => {
    const [counter, setCounter] = useState(count);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
        if(count ===0)dispatch(onCounter(false));
    return (
        <Box className="counter" display={counter===0?"none":"block"}>
            <div>{counter}</div>
        </Box>
    )
}

export default Counter
