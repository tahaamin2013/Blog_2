import SingleBlog from "@/components/blog/SingleBlog";
import getBlogs from "./actions/getBlog";
import getCurrentUser from "./actions/getCurrentUser"




export default async function Home() {

  const currentUser = await getCurrentUser();
  const blogs = await getBlogs()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
        {blogs.map((item:any) => (
          <SingleBlog
          key={item.id}
          data={item}
          currentUser={currentUser}
          />
        ))}
    </main>
  )
  }