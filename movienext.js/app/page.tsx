

'use client';

import Footer from "./Footer/page";
import GenreList from "./Get-genres/page";



export default function Home() {


  return (
    <main className="bg-gray-900">
      

      <GenreList/>
      <Footer/>

    </main>
  );
}

