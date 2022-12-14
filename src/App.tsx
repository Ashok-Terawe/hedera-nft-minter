/*
 * Hedera NFT Minter App
 *
 * Copyright (C) 2021 - 2022 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import '@assets/styles/main.scss';

import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '@routes/index';
import HederaWalletsProvider from '@utils/context/HederaWalletsContext';
import ModalProvider from '@utils/context/ModalContext';
import LayoutProvider from '@utils/context/LayoutContext';

function App() {
  return (
    <LayoutProvider>
      <ModalProvider>
        <HederaWalletsProvider>
          <>
            <Router>
              <Routes />
            </Router>
            <ToastContainer
              theme='dark'
              position='bottom-right'
              newestOnTop
            />
          </>
        </HederaWalletsProvider>
      </ModalProvider>
    </LayoutProvider>
  );
}

export default App;
