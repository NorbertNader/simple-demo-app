import { useEffect, useState, useRef } from "react";
import { Storage } from "aws-amplify";

export const useDashboardList = () => {
  const [dashboards, setDashboards] = useState(undefined);

  const dashboardRef = useRef();
  dashboardRef.current = dashboards || [];

  const deleteDashboard = (dashboardName) => {
    Storage.remove(dashboardName).then(() => {
      console.log("filtering dashboards", dashboards);
      setDashboards(
        dashboardRef.current.filter(({ name }) => name !== dashboardName)
      );
    });
  };

  const fetchDashboards = () => {
    Storage.list("").then((res) => {
      setDashboards(
        res.map(({ key, lastModified }) => ({
          name: key,
          lastModified: new Date(lastModified),
          deleteDashboard: () => deleteDashboard(key),
        }))
      );
    });
  };

  useEffect(() => {
    fetchDashboards();
  }, []);

  const createDashboard = () => {
    Storage.put(
      `demo-app-test-dashboard-${Math.random()}-${Math.random()}`,
      "[]"
    );
    fetchDashboards();
  };

  return { dashboards, createDashboard };
};
