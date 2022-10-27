import Header from "@cloudscape-design/components/header";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Table from "@cloudscape-design/components/table";
import Button from "@cloudscape-design/components/button";
import { useDashboardList } from "./useDashboardList";

export const DashboardList = ({ credentials }) => {
  const dashboards = useDashboardList(credentials);

  return (
    <ContentLayout
      header={
        <Header variant="h1">
            <br/>
          Simple visualization application
        </Header>
      }
    >
      <Table
          header={
              <Header
                  counter={dashboards && dashboards.length || 0}
                  actions={
                      <Button>Create dashboard</Button>
                  }
              >
                  Dashboards
              </Header>
          }
        columnDefinitions={[
          {
            id: "name",
            header: "Name",
            cell: (x) => <a href="#">{x.name}</a>,
          },
          {
            id: "date-modified",
            header: "Last modified",
            cell: ({ lastModified }) => lastModified.toLocaleString(),
          },
            {
                id: "delete",
                header: "",
                cell: ({ deleteDashboard }) => <Button variant="link" onClick={deleteDashboard}>delete dashboard</Button>,
            },
        ]}
        items={dashboards || []}
        loadingText={"Loading dashboards"}
        loading={dashboards === undefined}
      />
    </ContentLayout>
  );
};
