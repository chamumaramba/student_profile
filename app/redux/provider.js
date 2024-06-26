// redux/provider.js

'use client';
import { Provider } from 'react-redux';
import { store } from './store'; // Ensure the path to your store file is correct

export function Providers({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
