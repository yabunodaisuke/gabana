import React from "react";


const Register = () => (
    <section className="text-center ">
      <label htmlFor="text" className="text-lg  ">登録ページ</label><br></br>
      {/* <input type="text" placeholder="メールアドレス" className="my-20"/><br></br>
      <input type="text" placeholder="パスワード" className="my-10"/> */}
      <form action="" className="my-10">
       
        <p >お名前</p>
        <input type="text"  />
        <p className="pt-10">メールアドレス</p>
        <input type="text" />
        <p className="pt-10">パスワード</p>
        <input type="password" />
        <p className="pt-10">住所</p>
        <input type="text" />
        <p className="pt-10">電話番号（携帯でも可）</p>
        <input type="text" />
        <p className="pt-10">性別</p>
        <select name="" id="gender">
        <option value="Tokyo">男性</option>
        <option value="Tokyo">女性</option>
        </select>

      </form>
      
      
    </section>


  )
  

export default Register;