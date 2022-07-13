import img from "../images/mypicture.jpg"
import React, { memo } from "react";



export default function About() {
    return (
        <div className="about-content">
            <img className="about-picture" src={img}></img>
            <div className="about-info">
                <b className="info-title">나는 아직 배고프다</b>
                <div className="info">
                    <br />
                        안녕하세요. 끊임없는 성장을 추구하는 열정이 있는 개발자 김도현
                        입니다. 새로운 기능을 배우고 재미있는 아이디어로 여러 개발을 하는
                        것을 좋아합니다. 임베디드 소프트웨어과에 재학 중이며 하드웨어 개발자를
                        지망하고 있습니다. '나는 아직 배고프다' 라는 말처럼 항상 목표를 정하고
                        그것을 달성하기 위해 끝없이 노력하는 개발자가 되겠습니다.
                </div>
                <ul>
            <li>
              <div className="info-li">김도현</div>
            </li>
            <li>
              <div className="info-li">경상남도 김해시</div>
            </li>
            <li>
              <div className="info-li">kdhyun0428@gmail.com</div>
            </li>
            <li>
              <div className="info-li">2005.04.28</div>
            </li>
          </ul>
            </div>
        </div>
    )
}