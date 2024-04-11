import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="pt-20 font-extrabold text-7xl">Hello I&apos;m <span className="text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text">Shanok</span>!</h1>
      <p className="mt-3 text-xl text-gray-600">Aloha everyone! Check out my projects!</p>

      <h2 className="mt-24 text-3xl font-bold text-gray-700">My Projects!</h2>
      <div className="grid grid-cols-1 gap-8 mt-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link href={`projects/${project.slug}`} key={project._id} className="p-1 border-2 border-gray-500 rounded-lg hover:scale-105 hover:border-blue-500">
            {project.image && (
              <Image
                src={project.image}
                className="object-cover border border-gray-500 rounded-lg"
                alt={project.name}
                width={750}
                height={300}
              />
            )}
            <div className="mt-2 font-extrabold text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text">{project.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
