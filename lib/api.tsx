import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const projectsDirectory = join(process.cwd(), "_data/projects");
const experiencesDirectory = join(process.cwd(), "_data/experiences");

export function getItemsSlugs(directory: string) {
  return fs.readdirSync(directory);
}

/* Credit to Vercel/nextjs samples @ https://github.com/vercel/next.js/tree/canary/examples/blog-starter */ 
export function getItemsBySlug(directory: string, slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(directory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getItemsSlugs(projectsDirectory);
  const projects = slugs
    .map((slug) => getItemsBySlug(projectsDirectory, slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return projects;
}

export function getAllExperiences(fields: string[] = []) {
  const slugs = getItemsSlugs(experiencesDirectory);
  const projects = slugs
    .map((slug) => getItemsBySlug(experiencesDirectory, slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return projects;
}