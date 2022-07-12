import Head from "next/head";
import Image from "next/image";
import { useAppContext } from "../context/AppContext";

export default function Home() {
  const { loading } = useAppContext();
  console.log(loading);
  return (
    <div>
      <h2>Hello world</h2>
    </div>
  );
}
