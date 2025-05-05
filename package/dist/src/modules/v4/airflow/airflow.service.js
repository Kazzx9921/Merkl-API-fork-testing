import { log } from "@/utils/logger";
import { withRetry } from "@sdk";
import { GoogleAuth } from "google-auth-library";
export class AirflowService {
    static async triggerDAGRun(dagId, conf) {
        const auth = new GoogleAuth({
            scopes: "https://www.googleapis.com/auth/cloud-platform",
        });
        const client = await auth.getClient();
        const reqParams = {
            method: "POST",
            url: `${process.env.AIRFLOW_URL}/api/v1/dags/${dagId}/dagRuns`,
            data: {
                conf,
            },
        };
        await withRetry(async () => await client.request(reqParams), [], 2, 10_000);
        log.info(`✅ triggered DAG ${dagId}`);
    }
}
