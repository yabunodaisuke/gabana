/* eslint-disable @next/next/no-html-link-for-pages */

import Link from "next/link";
import Login from "@/component/Login";
import Map from "@/component/Map";
import { TodoTable } from "@/component/TodoTable";


const Home: React.FC = () => (
  <div className="bg-primary-50 h-screen">
  <main className='mx-auto max-w-lg py-6'>
   <TodoTable />
  </main>

     
      <Login />
     
      {/* <Map /> */}
      <Link href="/Top">www</Link>
    </div>
 
);

export default Home;
