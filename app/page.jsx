import { LessonButton } from "@/src/components/LessonBouton";
import fs from "fs";
import path from "path";

const trainingDirectory = path.join(process.cwd(), "app/training/[...path]");

const getTrainingTree = (directory) => {
  const tree = {};

  const items = fs.readdirSync(directory);
  for (const item of items) {
    const itemPath = path.join(directory, item);
    const isDirectory = fs.statSync(itemPath).isDirectory();
    if (isDirectory) {
      tree[item] = getTrainingTree(itemPath);
    } else {
      tree[item] = "file";
    }
  }
  return tree;
};

export default function Home() {
  const trainingTree = getTrainingTree(trainingDirectory);
  return (
    <main className="my-8 flex flex-col items-center gap-6">
      {Object.entries(trainingTree).map(([typeKey, value]) => {
        if (value === "file") return;
        if (typeKey === "solutions") return;
        return (
          <div
            key={typeKey}
            className="flex w-full flex-col items-center gap-4"
          >
            <h3 className="text-3xl font-bold">{typeKey}</h3>
            {Object.entries(value).map(([moduleKey, value]) => {
              return (
                <div
                  key={moduleKey}
                  className="card w-full max-w-sm flex-col items-center bg-base-300 shadow-xl"
                >
                  <div className="card-body flex  w-full flex-col items-center gap-2">
                    <h3 className="card-title mb-4">{moduleKey}</h3>
                    {Object.entries(value)
                      .sort(([a], [b]) => {
                        return parseInt(a) - parseInt(b);
                      })
                      .map(([lessonKey]) => {
                        return (
                          <LessonButton
                            key={lessonKey}
                            typeKey={typeKey}
                            moduleKey={moduleKey}
                            lessonKey={lessonKey}
                          />
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </main>
  );
}
