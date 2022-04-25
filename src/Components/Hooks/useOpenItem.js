import {useState } from 'react';

export function useOpenItem() {
    const [openItem, setOpenItem] = useState(null); // деструктурируем хук
    return {openItem, setOpenItem};
}