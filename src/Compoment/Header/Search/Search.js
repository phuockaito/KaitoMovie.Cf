import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Search = () => {
    const [TimKiem, SetTimKiem] = useState({ timkiem: '' });
    const onChangeTimKiem = (e) => {
        SetTimKiem({ ...TimKiem, [e.target.name]: e.target.value });
    }

    return (
        <>
            <form className="Tim-Kiem">

                <input
                    type="text"
                    placeholder="Tìm: Tên phim, Thể loại, Diễn viên, Năm sản xuất..."
                    onChange={onChangeTimKiem}
                    name='timkiem'
                />
                <Link to={`/tim-kiem/${TimKiem.timkiem}`}>  <button type="submit"><i className="fas fa-search" /></button>
                </Link>
            </form>
        </>
    )
}
export default Search;