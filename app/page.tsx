import Link from "next/link";

export default function Home() {
  return <div className="">
    Hello Developer!
    <br />
    <Link href={'/user'}>
      Go to users
    </Link>
  </div>
}