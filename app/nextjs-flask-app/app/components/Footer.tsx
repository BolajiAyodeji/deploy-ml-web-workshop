export function Footer() {
  return (
    <div className="border-t pt-12 mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <a
        href="https://github.com/BolajiAyodeji/deploy-ml-web-workshop/blob/main/lessons/01.md"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          workshop lessons{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Explore all the lessons and resources in this workshop.
        </p>
      </a>

      <a
        href="https://github.com/BolajiAyodeji/deploy-ml-web-workshop/tree/main/model"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          models{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Explore the Jupyter notebooks with the machine learning models.
        </p>
      </a>

      <a
        href="https://github.com/BolajiAyodeji/deploy-ml-web-workshop/tree/main/app/flask-api"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          flask-api{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Explore the flask-api code in this workshop.
        </p>
      </a>

      <a
        href="https://github.com/BolajiAyodeji/deploy-ml-web-workshop/tree/main/app/flask-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          flask-app{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Explore the flask-app code in this workshop.
        </p>
      </a>
    </div>
  );
}
