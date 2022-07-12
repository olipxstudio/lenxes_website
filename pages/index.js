import Head from "next/head";
import Image from "next/image";
import { useAppContext } from "../context/AppContext";
import Link from "next/link";

export default function Home() {
  const { loading } = useAppContext();
  return (
    <div>
      <h2>Hello world</h2>

      <Link href="/register">
        <a>Go to Register</a>
      </Link>
    </div>
  );
}
