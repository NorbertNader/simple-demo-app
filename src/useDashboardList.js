import { useEffect, useState } from "react";
import { S3Client, ListObjectsV2Command, DeleteObjectCommand } from "@aws-sdk/client-s3";

const bucket = "my-demo-app-bucket-diehbria";

export const useDashboardList = (credentials) => {
  const [dashboards, setDashboards] = useState(undefined);

  useEffect(() => {
    const s3Client = new S3Client({
      region: "us-east-1",
      credentials,
    });

    s3Client.send(new ListObjectsV2Command({ Bucket: bucket })).then((data) => {
      setDashboards(
        data.Contents.map(({ Key, LastModified }) => ({
          name: Key,
          lastModified: LastModified,
          deleteDashboard: () => {
            setDashboards(dashboards.filter(({ name }) => name !== Key))
            s3Client.send(new DeleteObjectCommand({
              Key,
              Bucket: bucket,
            }))
          }
        }))
      );
    });
  }, []);

  return dashboards;
};
