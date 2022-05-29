import "../styles/css/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faSearch} from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.jpg';

export default function Header() {
    return (
        <header className="header">
            <div className="site-topbar">
                <div className="container">
                    <div>CÔNG TY CỔ PHẦN XUẤT BẢN VÀ TRUYỀN THÔNG IPM</div>
                    <div className="account">
                        <a href="/account" >Xin chào: Trần Lâm</a>
                        <a href="#">Đăng xuất</a> 
                    </div>
                </div>
            </div>
            
            <div className="site-header">
                <div className="container">
                    <div className="header-logo">
                        <a href="#">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>

                    <div className="header-search">
                        <form>
                            <label htmlFor="search" className="hidden" ></label>
                            <input className="search-text" name="search" id="search" type={"search"} placeholder="Tìm kiếm ..." ></input>
                            <button type="submit" className="search-btn">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </form>
                    </div>

                    <div className="header-cart">
                        <div className="topbar-cart">
                            <div className="shopping-cart">
                                <a href="/cart">
                                    <div className="cart-icon">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                        <span>3</span>
                                    </div>

                                    <div className="cart-info">
                                        <h2>Giỏ hàng</h2>
                                        <p>3 sản phẩm</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div className="site-nav">
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Trang chủ</a>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <a href="/products">Sản phẩm</a>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <a href="/blogs">Tin tức</a>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <a href="/pages/about">Về IPM</a>
                            </li>
                        </ul>

                        <ul>
                            <li>
                            <a href="/pages/contact">Liên hệ</a>
                            </li>
                        </ul>

                    
                        
                    </nav>
                </div>
            </div>
        </header>
    )
}