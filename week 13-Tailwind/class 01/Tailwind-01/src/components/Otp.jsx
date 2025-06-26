
import {Button} from './Button'

// src/components/OTPInput.jsx
import React, { useState, useRef, useEffect } from 'react';

const OTPInput = ({ length = 4, onComplete }) => {
  // State to hold the individual OTP digits
  const [otp, setOtp] = useState(new Array(length).fill(''));

  // useRef to store references to each input element for direct DOM manipulation (e.g., focus)
  const inputRefs = useRef([]);

  // useEffect to focus on the first input field when the component mounts
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Handles individual digit changes in the input fields
  const handleChange = (e, index) => {
    const value = e.target.value;

    // Basic validation: allow only digits or an empty string (for backspace)
    if (!/^\d*$/.test(value)) {
      return; // Do not update state if input is not a digit
    }

    const newOtp = [...otp]; // Create a copy of the current OTP array
    newOtp[index] = value;   // Update the digit at the specific index
    setOtp(newOtp);          // Update the state

    // Auto-focus to the next input field if a digit is entered and it's not the last field
    if (value !== '' && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // If all digits are filled, call the onComplete prop with the full OTP
    if (newOtp.every(digit => digit !== '')) {
      onComplete && onComplete(newOtp.join('')); // Join the array to form the complete OTP string
    }
  };

  // Handles key down events, specifically for backspace to move focus backward
  const handleKeyDown = (e, index) => {
    // If Backspace is pressed, the current field is empty, and it's not the first field
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus(); // Move focus to the previous input field
    }
  };

  // Handles paste events to automatically fill the OTP fields
  const handlePaste = (e) => {
    e.preventDefault(); // Prevent default paste behavior

    const pasteData = e.clipboardData.getData('text').trim(); // Get pasted text and trim whitespace

    // Check if pasted data is all digits and matches the expected OTP length
    if (pasteData.length === length && /^\d+$/.test(pasteData)) {
      const newOtp = pasteData.split(''); // Split the pasted string into an array of characters
      setOtp(newOtp);                     // Update the OTP state with the pasted digits

      // Optionally focus the last input field after pasting
      inputRefs.current[length - 1].focus();

      // If all digits are filled via paste, call onComplete
      onComplete && onComplete(newOtp.join(''));
    }
  };

  // Handles click events on input fields to ensure they gain focus
  const handleClick = (index) => {
    inputRefs.current[index].focus();
  };

  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      {otp.map((digit, index) => (
        <input
          key={index} // Unique key for list rendering
          type="text" // Use "text" to allow for precise control over input (e.g., paste, maxLength)
          maxLength="1" // Restrict input to a single character
          value={digit} // Bind input value to the corresponding digit in state
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          onClick={() => handleClick(index)}
          // Assign the ref for direct DOM access. The callback receives the actual DOM element (el).
          ref={(el) => (inputRefs.current[index] = el)}
          // Basic inline styles for visual appearance
          style={{
            width: '40px',
            height: '40px',
            textAlign: 'center',
            fontSize: '1.5em',
            border: '1px solid #ccc',
            borderRadius: '4px',
            outline: 'none', // Remove default outline on focus
            boxShadow: '0 0 0 1px rgba(0, 123, 255, 0.25)', // Simple focus effect
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
