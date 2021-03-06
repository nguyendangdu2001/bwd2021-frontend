import React, { Suspense, useState } from "react";
import { lazy } from "react";
const PictureTab = lazy(() => import("../PictureTab"));
const PostTab = lazy(() => import("../PostTab"));

const TabView = () => {
  const [index, setIndex] = useState(0);
  const tabs = [
    { name: "post", component: <PostTab /> },
    { name: "Picture", component: <PictureTab /> },
  ];
  return (
    <div className="space-y-3">
      <div className="flex">
        {tabs.map((tab, i) => (
          <button
            className={`p-6 text-xl font-semibold border-b-2 dark:text-gray-50 capitalize ${
              index === i ? "border-indigo-500" : "border-transparent"
            }`}
            onClick={() => setIndex(i)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <Suspense fallback={null}>{tabs?.[index]?.component}</Suspense>
    </div>
  );
};

export default TabView;
