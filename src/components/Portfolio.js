import React, { memo } from "react";

import port1 from "../images/port1.png";
import port2 from "../images/port2.png";
import port3 from "../images/port3.png";
import port4 from "../images/port4.png";

export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="section-title">PORTFOLIO</div>
      <div className="portfolio-content">
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={port1} alt="죄송합니다 이미지를 불러오지 못했습니다." />
            </div>
            <div className="title">풍선 슈팅 게임</div>
            <div className="contents">
            개인 프로젝트
              <br />
                파이썬을 활용한 개인 프로젝트가 뭐가 있을까 하고 고민을 하다가 사격 하는 게임을 어떨까 해서 만들어본 게임 입니다.
            </div>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img
                src={port2}
                alt="죄송합니다 이미지를 불러오지 못했습니다."
              />
            </div>
            <div className="title">지뢰찾기</div>
            <div className="contents">
              개인 프로젝트
              <br />
              학교 쉬는시간에 지뢰찾기를 종종 하고는 했는데 이거를 한번 파이썬으로 만들어보고자 해서 만들어 봤습니다.
            </div>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={port3} alt="죄송합니다 이미지를 불러오지 못했습니다." />
            </div>
            <div className="title">거북이 달리기</div>
            <div className="contents">
              개인 프로젝트
              <br />
              랜덤함수를 활용하여 거북이 달리기 게임을 구현해봤습니다
            </div>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img
                src={port4}
                alt="죄송합니다 이미지를 불러오지 못했습니다."
              />
            </div>
            <div className="title">파이썬 은행</div>
            <div className="contents">
              개인 프로젝트
              <br />
              파이썬에 대해서 조금더 공부를 해보고 싶어서 은행시스템을 구현 했습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};