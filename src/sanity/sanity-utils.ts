import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import client from "./config/client-config";
import { Page } from "@/types/Page";

export async function getProjects(): Promise<Project[]> {
  return createClient(client).fetch(
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

export async function getProject(slug: string): Promise<Project> {
  return createClient(client).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}

export async function getPages(): Promise<Page[]> {
  return createClient(client).fetch(
    groq`*[_type == 'page']{
      _id,
      _createdAt,
      name,
      'slug': slug.current,
    }`,
    // { next: { revalidate: 100 }}
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(client).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}