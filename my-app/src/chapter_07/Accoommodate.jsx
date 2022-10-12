import React, {useEffect, useState} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props){
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0); //usecounter로 카운트 관리

    useEffect(()=>{ //컴포넌트가 마운트+업데이트시 호출
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    })

    useEffect(()=>{ //의존성배열 존재, 마운트+count값이 변할때마다호출 
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return(
        <div style={{padding:16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;