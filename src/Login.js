import { useState } from "react";

import Form from "@cloudscape-design/components/form";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Container from "@cloudscape-design/components/container";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import FormField from "@cloudscape-design/components/form-field";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Input from "@cloudscape-design/components/input";

export const Login = ({ onLogin }) => {
  const [accessKeyId, setAccessKeyId] = useState(undefined);
  const [secretAccessKey, setSecretAccessKey] = useState(undefined);
  const [sessionToken, setSessionToken] = useState(undefined);
  const disableLogin =
    accessKeyId === undefined ||
    secretAccessKey === undefined ||
    sessionToken === undefined;

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="Sign in using your AWS credentials">
          <br /> Welcome!
        </Header>
      }
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <Form
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button
                disabled={disableLogin}
                onClick={() => {
                  onLogin({
                    accessKeyId,
                    secretAccessKey,
                    sessionToken,
                  });
                }}
                variant="primary"
              >
                Login
              </Button>
            </SpaceBetween>
          }
        >
          <Container>
            <SpaceBetween direction="vertical" size="xs">
              <FormField label="Access key id">
                <Input
                  value={accessKeyId || ""}
                  onChange={(e) => {
                    setAccessKeyId(e.detail.value);
                  }}
                />
              </FormField>
              <FormField label="Secret access key">
                <Input
                  value={secretAccessKey || ""}
                  onChange={(e) => {
                    setSecretAccessKey(e.detail.value);
                  }}
                />
              </FormField>
              <FormField label="Session token">
                <Input
                  value={sessionToken || ""}
                  onChange={(e) => {
                    setSessionToken(e.detail.value);
                  }}
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};
