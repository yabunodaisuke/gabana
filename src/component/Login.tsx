
import Link from 'next/link';
import React from "react";

// eslint-disable-next-line import/no-default-export
export default function Login() {


  return (
    <section className="text-center">
    <div className="text-lg">ガバナ管理 <br></br>
      <input type="text" className="max-w-lg rounded-lg placeholder-primary-600 my-10" placeholder="メールアドレス"></input><br></br>
      
      <input type="text" className="max-w-lg rounded-lg placeholder-primary-600" placeholder="パスワード"></input><br></br>

      <button className="my-10 text-white border-2 bg-pink-600 hover:bg-primary-500">Login</button>
    </div>
    <div>アカウントをお持ちでない方はこちらから！<br></br>
    {/* <a href="/Register"　className="text-red hover:bg-primary-700">アカウント作成</a> */}
    

    <Link  href="/Register">アカウント作成
  
  </Link> 
  
      

      
    </div>
  </section>
  )
}