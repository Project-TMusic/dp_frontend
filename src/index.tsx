import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { globalStyle } from './styles';
import { RecoilRoot } from 'recoil';
import { ScrollSetTop } from 'src/hooks';
import { Provider } from 'react-redux';
import { Store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <CookiesProvider>
        <Provider store={Store}>
          <Global styles={globalStyle} />
          <ScrollSetTop />
          <App />
        </Provider>
      </CookiesProvider>
    </RecoilRoot>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
