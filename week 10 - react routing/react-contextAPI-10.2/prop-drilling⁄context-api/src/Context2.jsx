
import React, { createContext, useContext, useState } from 'react';

// 1. Create a context
const UserContext = createContext(null);

// 2. Create a provider component
export function UserProvider({ children }) {
  // State that we want to share across components
  const [user, setUser] = useState({
    name: 'Guest',
    isLoggedIn: false,
    theme: 'light'
  });

  // Function to update user state
  const login = (username) => {
    setUser({
      name: username,
      isLoggedIn: true,
      theme: user.theme
    });
  };

  const toggleTheme = () => {
    setUser({
      ...user,
      theme: user.theme === 'light' ? 'dark' : 'light'
    });
  };

  // Value to be provided to consuming components
  const value = {
    user,
    login,
    toggleTheme
  };

  // Provide the value to all children components
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Custom hook for consuming the context
export function useUser() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

// 4. Example components that use the context
export function UserProfile() {
  const { user, toggleTheme } = useUser();
  
  return (
    <div style={{ 
      backgroundColor: user.theme === 'light' ? '#fff' : '#333',
      color: user.theme === 'light' ? '#333' : '#fff',
      padding: '20px',
      borderRadius: '8px'
    }}>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Status: {user.isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
      <p>Theme: {user.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export function LoginForm() {
  const { user, login } = useUser();
  const [inputName, setInputName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName) {
      login(inputName);
    }
  };
  
  return (
    <div>
      {!user.isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Enter your name"
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <p>Welcome back, {user.name}!</p>
      )}
    </div>
  );
}

// 5. Main component that demonstrates usage
export default function App() {
  return (
    <UserProvider>
      <div className="app">
        <h1>Context API Demo</h1>
        <LoginForm />
        <UserProfile />
      </div>
    </UserProvider>
  );
}
