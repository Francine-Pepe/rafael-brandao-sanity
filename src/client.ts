import { createClient } from "@sanity/client";

export default createClient({
  projectId: "564knp01",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-11-05",
});

/* export async function fetchTranslatedContent(lang = "pt") {
  const query = `*[_type == "biografia"] { _id, title, "body": body_${lang} }`;  
  const data = await fetch(query);

  console.log("Sanity Query:", query);

  console.log("Sanity Response:", data);

  return Array.isArray(data) ? data : [];
} */

