import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Add global error handler
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
  // Prevent the browser from showing the default error dialog
  event.preventDefault();
});

// Add unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // Prevent the default handling
  event.preventDefault();
});

// Get the root element
const rootElement = document.getElementById('root');

// Make sure the root element exists
if (!rootElement) {
  console.error('Root element not found');

  // Create a root element if it doesn't exist
  const newRoot = document.createElement('div');
  newRoot.id = 'root';
  document.body.appendChild(newRoot);

  createRoot(newRoot).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}