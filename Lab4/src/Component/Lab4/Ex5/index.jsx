import React, { Suspense } from "react";

const MyFeature = React.lazy(() =>
  Promise.all([
    import("./MyFeature"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    }),
  ]).then(([m]) => m)
);
const index = () => {
  return (
    <div>
      <h1>My Page</h1>
      <Suspense fallback={<div>is loading....</div>}>
        <MyFeature />
      </Suspense>
    </div>
  );
};

export default index;
