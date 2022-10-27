import "@cloudscape-design/global-styles/index.css";
import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import AppLayout from "@cloudscape-design/components/app-layout";
import { DashboardList } from "./DashboardList";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      {() => <AppLayout contentType="form" content={<DashboardList />} />}
    </Authenticator>
  );
}

export default App;
