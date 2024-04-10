import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          {project.name}
          <Image src={project.image} alt={project.alt} width={150} height={150} style={{ objectFit: 'contain' }} />
        </div>
      ))}
    </div>
  )
}
