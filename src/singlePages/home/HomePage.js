import "../../styles/css/homePage.css";
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";


export default function HomePage(){
    const numImg = 4;
    const [indexImg, setIndexImg] = useState(0);

    // useEffect(() => {
    //     setInterval(() => {
    //         setIndexImg((indexImg + 1) % numImg);
    //     }, 10000)
    // }, [indexImg])



    return (
        <div className="main-content">
            <section id="home-hero">
                <div className="main-img">
                    <img src={require(`../../images/slide/slideshow_${indexImg + 1}.jpg`)}
                    style={{animation:"showSlide 1s ease forwards"}}
                    ></img>
                    <span className=" next">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                    <span className=" prev">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </span>
                </div>
            </section>

            <section id="policy">
                <div className="container">
                    <div className="list">
                        <div className="policy-img">
                            <div className="img">
                                <img src={require('../../images/policy/hpl_icon_1.webp')}></img>
                            </div>
                            <div className="info">
                                <p>ưu đãi vận chuyển</p>
                            </div>
                        </div>

                        <div className="policy-img">
                            <div className="img">
                                <img src={require('../../images/policy/hpl_icon_2.webp')}></img>
                            </div>
                            <div className="info">
                                <p>thể loại sách phong phú</p>
                            </div>
                        </div>

                        <div className="policy-img">
                            <div className="img">
                                <img src={require('../../images/policy/hpl_icon_3.webp')}></img>
                            </div>
                            <div className="info">
                                <p>khuyến mãi hấp dẫn</p>
                            </div>
                        </div>

                        <div className="policy-img">
                            <div className="img">
                                <img src={require('../../images/policy/hpl_icon_4.webp')}></img>
                            </div>
                            <div className="info">
                                <p>hotline: 03 2838 3979</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section id="products">
                <div className="container">
                    <div className="pro-nav">
                        <ul>
                            <li className="active">
                                <a>Sách mới</a>
                            </li>

                            <li>
                                <a>Sách bán chạy</a>
                            </li>

                            <li>
                                <a>Hot deals</a>
                            </li>
                        </ul>
                    </div>

                    <div className="pro-list">
                        
                    </div>
                </div>
            </section>
        </div> 
    )
}