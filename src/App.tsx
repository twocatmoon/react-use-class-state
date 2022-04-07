import { useState } from 'react'
import './App.css'
import { useClassState } from './lib/index'

type AppProps = {
    color: string
    disabled: boolean
}

function App (props: AppProps) {
    const [ isActive, setActive ] = useState(true)
    
    const classState = {
        'Button': {
            '--active': isActive,
            '--disabled': props.disabled,  // false
            '--color_{value}': props.color // red
        }
    }
    
    const className = useClassState(classState)

    return (
        <div className="App">
            <header className="App-header">
                <p>React Use Class State</p>
                <p>Class Name: <code>{className}</code></p>
                <button 
                    className={className} 
                    onClick={() => setActive(!isActive)}
                >
                    Click Me
                </button>
            </header>
        </div>
    )
}

export default App
