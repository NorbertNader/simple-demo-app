import "@cloudscape-design/global-styles/index.css";
import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { DashboardList } from "./DashboardList";

import awsExports from "./aws-exports";
import { ContentLayout } from "@cloudscape-design/components";
Amplify.configure(awsExports);

function App() {
  return (
    <ContentLayout>
      <Authenticator>{() => <DashboardList />}</Authenticator>
    </ContentLayout>
  );
}

export default App;
