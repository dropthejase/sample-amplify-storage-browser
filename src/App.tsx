import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import './App.css';

import config from '../amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import { Authenticator, Button } from '@aws-amplify/ui-react';
Amplify.configure(config);

const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

function App() {
  return (
    <>
      <h1>Hello from {import.meta.env.VITE_USER_REGION}</h1>
      <Authenticator>
        {({ signOut, user }) => (
          <>
            <div className="header">
              <h1>{`Hello ${user?.username}`}</h1>
              <Button onClick={signOut}>Sign out</Button>
            </div>
            <StorageBrowser />
          </>
        )}
      </Authenticator>
    </>
  );
}

export default App;
