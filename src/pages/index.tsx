//import Head from "next/head";
//import {Inter } from "next/font/google";
import { Seo } from "@/ui/components/seo";

//const inter = Inter({subsets:["latin"]});

export default function Home() {
  return (
    <>
    <Seo title = "Coders Monkeys" description="description..." />
    <h1>Bonjour a tous</h1>
    </>
  );
}
