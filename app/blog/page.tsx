import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

// export const metadata = {
//   title: "Blog",
//   description: "Nextfolio Blog",
// };

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      {/* <h1 className="mb-8 text-2xl font-medium">About Me</h1> */}
      <div>
        <p>
          I’m passionate about building robust, clean, and scalable project architectures that stand the test of time.  
          With <span className="text-neutral-500"> React.js, Next.js, Node.js, and TypeScript</span>, I focus on creating modern web applications that combine performance, usability, and long-term maintainability.  
          <br />
          <br />
          I’m always exploring new technologies and taking on challenges that help me grow as a developer.
        </p>
        {/* {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <h2 className="text-black dark:text-white">
                  {post.metadata.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </Link>
          ))} */}
      </div>
    </section>
  );
}
