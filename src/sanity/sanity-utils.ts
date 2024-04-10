import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "1tibdm8c",
    dataset: "production",
    apiVersion: "2024-04-11",
  });

  return client.fetch(
    groq`*[_type == 'project']{
      _id,
      _createdAt,
      name,
      'slug': slug.current,
      'image': image.asset->url,
      url,
      content
    }`,
    // { next: { revalidate: 100 }}
  )
}