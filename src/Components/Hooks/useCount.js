import { useState } from "react";

export function useCount() {
    const [count, setCount] = useState(1);

    //запускает хук setCount и передает кол-во
    function onChange(e) {
        setCount(e.target.value);
    }
    
    return {count, setCount, onChange}
}