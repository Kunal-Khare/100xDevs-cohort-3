
import React, { createContext, useState, useContext } from 'react';

// Create a context with a default value
const UserContext = createContext(null);

// Custom hook to use the context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

// Provider component that wraps your app and makes the context available
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    isLoggedIn: true,
    preferences: {
      theme: 'light',
      notifications: true
    }
  });

  // Function to update user data
  const updateUser = (newUserData) => {
    setUser(prevUser => ({
      ...prevUser,
      ...newUserData
    }));
  };

  // Function to toggle theme
  const toggleTheme = () => {
    setUser(prevUser => ({
      ...prevUser,
      preferences: {
        ...prevUser.preferences,
        theme: prevUser.preferences.theme === 'light' ? 'dark' : 'light'
      }
    }));
  };

  // Function to toggle login status
  const toggleLogin = () => {
    setUser(prevUser => ({
      ...prevUser,
      isLoggedIn: !prevUser.isLoggedIn
    }));
  };

  // Value object that will be passed to consumers
  const value = {
    user,
    updateUser,
    toggleTheme,
    toggleLogin
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Example components that consume the context
const UserProfile = () => {
  const { user, toggleLogin } = useUserContext();
  
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {user.isLoggedIn ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={toggleLogin}>Logout</button>
        </>
      ) : (
        <button onClick={toggleLogin}>Login</button>
      )}
    </div>
  );
};

const ThemeToggler = () => {
  const { user, toggleTheme } = useUserContext();
  
  return (
    <div className="theme-toggler">
      <p>Current Theme: {user.preferences.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Main component that demonstrates context usage
const ContextApiDemo = () => {
  return (
    <UserProvider>
      <div className="app-container">
        <h1>Context API Demo</h1>
        <p>This demonstrates how to use Context API to avoid prop drilling</p>
        <div className="components">
          <UserProfile />
          <ThemeToggler />
          <DeepNestedComponent />
        </div>
      </div>
    </UserProvider>
  );
};

// Example of a deeply nested component that still has access to context
const DeepNestedComponent = () => {
  const { user } = useUserContext();
  
  return (
    <div className="deep-nested" style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>Deeply Nested Component</h3>
      <p>
        This component is deeply nested but still has access to the user context
        without prop drilling.
      </p>
      <p>User: {user.name}</p>
      <p>Theme: {user.preferences.theme}</p>
    </div>
  );
};

export default ContextApiDemo;
