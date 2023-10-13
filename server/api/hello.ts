// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
export default defineEventHandler((event) => {
  //   const __filename = fileURLToPath(import.meta.url);
  //   const __dirname = dirname(__filename);
  //   const rootDir = path.resolve(__dirname, "../..");
  //   const dir: string = path.resolve(rootDir, `content`);
  //   const files: string[] = fs.readdirSync(dir);
  //   console.log("*************************", dir, files);
  //   const content: { file: string; data: string }[] = files.map(
  //     (file: string) => {
  //       const filePath: string = path.join(dir, file);
  //       console.log("*************************");
  //       console.log(filePath);
  //       let data = "";
  //       try {
  //         data = fs.readFileSync(filePath, "utf-8");
  //         console.log("*************************");
  //         console.log(data);
  //       } catch (error) {
  //         console.log(error);
  //       }

  //       return { file, data };
  //     }
  //   );
  //   console.log("*************************");
  //   console.log(readBody(event));
  return {
    hello: "world",
    // content,
  };
});
