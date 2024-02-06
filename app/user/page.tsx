import Link from "next/link";
import { Suspense } from "react";

async function testGet() {
  const res = await fetch(`${process.env.URL}/api`, {
    method: "GET",
    cache: "no-store",
  });
  if (res.ok) {
    return await res.json();
  }
}
const page = async () => {
  const response = await testGet();
  return (
    <Suspense fallback={"Getting response from server..."}>
      <div>
        User Page
        <br />
        <Link href={"/"}>Back</Link>
        <br />
        {response.message}
      </div>
    </Suspense>
  );
};

export default page;
