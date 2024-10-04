// keep this for informational purposes
'use client'

import { useEffect, useState } from "react";
import { invoke } from '@tauri-apps/api/core';

export default function Greet(){
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
      invoke<string>('greet', {name: 'Next.js'})
      .then(result => setGreeting(result))
      .catch(console.error)  
    }, []);

    // Necesary becasuse we will have to use Greet as a componet later
    return <div>{greeting}</div>
}