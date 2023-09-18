

'use client';

import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
import GenreList from "./Get-genres/page";



export default function Home() {


  return (
    <main className="bg-gray-900">
      <Navbar/>

      <GenreList/>
      <Footer/>

    </main>
  );
}

