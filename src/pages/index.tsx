/* eslint-disable @next/next/no-html-link-for-pages */

import Login from "@/component/Login";
import { TodoTable } from "@/component/TodoTable";

const Home: React.FC = () => (
  <div className="bg-primary-50 h-screen">
  <main className='mx-auto max-w-lg py-6'>
   <TodoTable />
  </main>

     
      <Login />
      {/* <a href="/Register"　className="text-red hover:bg-primary-700">アカウント作成</a> */}
    </div>
 
);

export default Home;
