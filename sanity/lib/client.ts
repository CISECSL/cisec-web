import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "../env";

// Use a dummy project ID when not configured so the client can be
// instantiated without throwing. Actual fetches will still fail and
// are caught by try/catch in page components.
export const client = createClient({
  projectId: projectId || "not-configured",
  dataset,
  apiVersion,
  useCdn: true,
});
