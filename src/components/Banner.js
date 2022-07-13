import React, { memo } from "react";

export default function Banner() {
    return(
        <section className="title-container">
            <div className="title_background">
            <div className="title_filter"></div>{" "}
            <div className="title_contents">
                <h1>즐기는 개발자</h1>
                <div className="line"></div>
                <h1>김도현</h1>
                <h2>웹 포트폴리오</h2>
                <h4>
                    안녕하세요. 주니어 임베디드 개발자 김도현입니다.
                    <br /> 언제나 새로운 것을 개발하는 것을 즐기고 새로운 아이디어를
                    생각하는 것을 좋아합니다.
                </h4>
                </div>
            </div>
        </section>
    )
}