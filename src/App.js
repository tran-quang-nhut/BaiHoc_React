// rfc
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Detail from './pages/Detail';
import Home from './Templates/Home';
import Carousel from './pages/Carousel';
import Page404 from './pages/Page404';
import Admin from './Templates/Admin';
import Dasboard from './pages/DashBoard';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*  thuộc tính index giúp xác định component nào sẽ hiển thị lên khi lần đầu load trang  */}
        {/* thuộc tính path giúp xác định đường dẫn tới component  */}
        {/* thuộc tính element giúp xác định component nào sẽ hiển thị khi đi tới đường dẫn đó  */}
        {/* <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} /> */}
        <Route path="/home" element={<Home />}>
          <Route index element={<Carousel />} />
          <Route path="login" element={<Login />} />
          <Route path="detail" element={<Detail />}>
            <Route path=":id" element={<Detail />} />
          </Route>
          {/* <Route path="page-not-found" element={<Page404 />} /> */}
          {/* sử dụng path="*" giúp đưa người dùng tới trang mình muốn khi các đường dẫn đó không nằm trong các router đã định nghĩa */}
          <Route path='*' element={<Page404 />} />
        </Route>
        <Route path="/admin" element={<Admin />} >
          <Route index element={<Dasboard />}></Route>
        </Route>    
      </Routes>
    </BrowserRouter>
  );
}
