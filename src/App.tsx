import { BrowserRouter } from 'react-router-dom';

import 'antd/dist/antd.less';

import GlobalStyle from './styles/global';
import { RouterConfig } from './navigation/RouterConfig';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </>
  );
}

export default App;
