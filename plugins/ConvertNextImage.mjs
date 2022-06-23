import imageSize from "image-size";
import { promisify } from "util";
import path from "path";
import fs, { writeFile } from "fs";

const sizeOf = promisify(imageSize);
const readFilePromise = promisify(fs.readFile);
const markdownImgRegEx = new RegExp(/!\[(.*?)\]\((.*?)\)/gm);

async function replaceAsync(str, regex, asyncFn) {
  const promises = [];

  str.replace(regex, (match, ...args) => {
    const promise = asyncFn(match, ...args);
    promises.push(promise);
  });

  const data = await Promise.all(promises);
  return str.replace(regex, () => data.shift());
}

async function getNextImageComponent(originStr, alt, filePath) {
  try {
    const res = await sizeOf(path.join(process.cwd(), "../public", filePath));
    const { width, height } = res;
    return `<NextImage src={"${filePath}"} height={${height}} width={${width}} ${
      alt ? `alt={${alt}}` : ""
    }/>`;
  } catch (error) {
    return originStr;
  }
}

function getMDXFiles() {
  const mdxDir = fs.readdirSync(path.join(process.cwd(), "../posts"), {
    withFileTypes: true,
  });

  return mdxDir.filter((file) => file.name.endsWith(".mdx"));
}

async function convertMarkdownImgToNextImageAll() {
  const mdxFiles = getMDXFiles();
  console.log(mdxFiles);
  Promise.all(mdxFiles.map((file) => convertMarkdownImgToNextImage(file)));
}

async function convertMarkdownImgToNextImage(file) {
  const filePath = path.join(process.cwd(), "../posts", file.name);

  const fileContent = await readFilePromise(filePath, "utf-8");

  const result = await replaceAsync(
    fileContent,
    markdownImgRegEx,
    getNextImageComponent
  );
  writeFile(filePath, result, (data) => {
    console.log(data);
  });
}

convertMarkdownImgToNextImageAll();
