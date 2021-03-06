 
import Home from '../Compoment/Home/Home';
import LinkMenu from '../Compoment/NavMenu/LinkMenu/LinkMenu';
import NotFount from '../Compoment/NotFount/NotFount';
import ChiTiet from '../Compoment/ChiTiet/ChiTiet';
import TimKiem from '../Compoment/Header/Search/TimKiem';
import DangKy from '../Compoment/Header/Use/DangKy/DangKy';
import DangNhap from '../Compoment/Header/Use/DangNhap/DangNhap';
import EditUser from '../Compoment/Header/Use/EditUser/EditUser';
const Routes=[
    {   path: '/',
        exact: true,
        main: Home
    },
    {
        path: '/ChiTiet/:ID/:Name/:TheLoai/:QuocGia',
        exact: true,
        main: ChiTiet
    }
     ,
    {
        path: '/Link-Menu/:keyword',
        exact: true,
        main: LinkMenu
    },
    {
        path: '/tim-kiem/:search',
        exact: true,
        main: TimKiem
    },
    {
        path: '/dang-ky',
        exact: true,
        main: DangKy
    },
    {
        path: '/dang-nhap',
        exact: true,
        main: DangNhap
    },
    {
        path: '/edit-user',
        exact: true,
        main: EditUser
    }
    ,
    {
        path: '*',
        exact: true,
        main: NotFount
    }
]
export default Routes;