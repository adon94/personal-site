// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useNextSanityImage } from "next-sanity-image";
// import client from "../utils/sanity";
// import { PortableText } from "@portabletext/react";

// const PAGE_SIZE = 10;

// function BlogItem({ blog }) {
//   const imageSrc = useNextSanityImage(client, blog.coverImage).src;

//   return (
//     <div key={blog.slug.current} className="overflow-hidden rounded-lg shadow">
//       <div className="aspect-w-16 aspect-h-9">
//         <Image className="object-cover" src={imageSrc} alt={blog.title} />
//       </div>
//       <div className="p-6">
//         <h2 className="text-2xl font-bold">{blog.title}</h2>
//         <p className="mb-4 text-sm text-gray-600">
//           {new Date(blog.publishedAt).toDateString()}
//         </p>
//         {/* <BlockContent
//               blocks={blog.excerpt}
//               className="mb-4 text-gray-600"
//             /> */}
//         <PortableText value={blog.excerpt} />
//         <Link href={`/blog/${blog.slug.current}`}>
//           <a className="text-blue-600 hover:text-blue-800">Read more</a>
//         </Link>
//       </div>
//     </div>
//   );
// }

// function BlogList({ blogs, totalPages }) {
//   console.log("lol", blogs);
//   const [page, setPage] = useState(1);
//   // const imageSrc = useNextSanityImage(client, blog.coverImage).src;

//   function handlePageChange(newPage) {
//     setPage(newPage);
//   }

//   return (
//     <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
//       {/* {blogs.map((blog) => (
//         <BlogItem key={blog.slug.current} blog={blog} />
//       ))} */}
//       <div className="text-center col-span-full">
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
//           <button
//             key={pageNum}
//             className={`${
//               page === pageNum
//                 ? "bg-gray-600 text-white"
//                 : "bg-white text-gray-600"
//             } px-4 py-2 mx-1 rounded-lg hover:bg-gray-200`}
//             onClick={() => handlePageChange(pageNum)}
//           >
//             {pageNum}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const count = await client.fetch('*[_type == "blog"].length');
//   const totalPages = Math.ceil(count / PAGE_SIZE);

//   const blogs = await client.fetch(
//     `*[_type == "blog"] | order(publishedAt desc) [${
//       (page - 1) * PAGE_SIZE
//     }...${page * PAGE_SIZE - 1}] {
//       title,
//       slug,
//       excerpt,
//       publishedAt,
//       coverImage {
//         asset -> {
//           _id,
//           url
//         }
//       }
//     }`
//   );

//   return {
//     props: {
//       blogs,
//       totalPages,
//     },
//   };
// }

// export default BlogList;

// // import Image from "next/image";
// // import StyledLink from "./styledLink";

// // export default function Portfolio() {
// //   return (
// //     <section className="w-full h-screen px-4 py-10 text-black snap-start md:px-24">
// //       <div className="flex flex-col justify-center mx-auto w-fit">
// //         <h2 className="mb-6 text-2xl font-light font-pacifico md:text-md">
// //           Blog
// //         </h2>
// //         <div className="flex flex-col-reverse px-4 py-5 bg-white border-2 border-black rounded-lg md:py-10 md:px-7 md:flex-row md:justify-between">
// //           <div>
// //             <h3 className="mb-4 text-3xl text-left md:text-4xl">
// //               <StyledLink href="https://phasecraft.io/">
// //                 Why you should memoize your components.
// //               </StyledLink>
// //             </h3>
// //             <code>
// //               React.memo() is a great tool to memoize functional components.
// //               When applied correctly, it prevents useless re-renderings when
// //               previous props...
// //             </code>
// //           </div>
// //           {/* <div className="mb-4 transition-all md:ml-36 md:mb-0 hover:scale-105">
// //             <a href="https://phasecraft.io/" target="_blank" rel="noreferrer">
// //               <Image
// //                 src="/phasecraft-md.png"
// //                 height={228}
// //                 alt="Phasecraft homepage"
// //                 width={356}
// //               />
// //             </a>
// //           </div> */}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
