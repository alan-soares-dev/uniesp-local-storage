import React from 'react';
import { useTheme } from './ThemeProvider';
import useLocalStorage from './useLocalStorage';
function AppContent() {
    const [name, setName] = useLocalStorage('name', 'Visitante');
    const { theme, toggleTheme } = useTheme();
    return (

        <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
            <h1>Bem vindo, {name}!</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <h1>Olá, mundo!</h1>
            <button onClick={toggleTheme}>Alternar Tema</button>
        </div>
    );
}


export default AppContent;