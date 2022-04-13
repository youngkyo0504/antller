import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Work } from "@types";

const getWorks = (limit?: number) => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), "posts"), {
    withFileTypes: true,
  });

  const posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith(".mdx")) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), "posts", file.name),
        "utf-8"
      );
      const { data, content } = matter(fileContent); // content가 data는 frontmatter

      const slug = file.name.replace(/.mdx$/, "");
      return { data, content, slug };
    })
    .filter((post) => post);

  if (limit) {
    return posts.filter((post, index) => {
      return index + 1 <= limit;
    });
  }

  return posts;
};

export default getWorks;
