import  { createClient } from "@sanity/client";

export default createClient({
    projectId: "564knp01",
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-11-05"
})