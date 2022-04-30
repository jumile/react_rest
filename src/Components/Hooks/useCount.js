import { useState } from "react";

export function useCount(startCount) {
    const [count, setCount] = useState(startCount || 1);

   //запускает хук setCount и передает кол-во
    function onChange(e) {
        setCount(e.target.value);
    }
    
    return {count, setCount, onChange}
}