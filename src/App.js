import { useState } from "react";
import "@cloudscape-design/global-styles/index.css";

import AppLayout from "@cloudscape-design/components/app-layout";
import { DashboardList } from "./DashboardList";
import { Login } from "./Login";

function App() {
  const [credentials, setCredentials] = useState(undefined);
  const onLogin = ({ accessKeyId, secretAccessKey, sessionToken }) => {
    setCredentials({ accessKeyId, secretAccessKey, sessionToken });
  };
  return (
    <AppLayout
      contentType="form"
      content={
        credentials === undefined ? (
          <Login onLogin={onLogin} />
        ) : (
          <DashboardList credentials={credentials} />
        )
      }
    />
  );
}

export default App;
