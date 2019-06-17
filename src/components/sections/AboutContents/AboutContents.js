import React, { Component } from "react";
import styles from "./AboutContents.scss";
import classNames from "classnames/bind";
import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/minified/plugins/animation.gsap.min";
import "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min";
import { TimelineMax, Power2 } from "gsap/all";
import { Chip } from "@material-ui/core";

const cx = classNames.bind(styles);

class AboutContents extends Component {
  controller = new ScrollMagic.Controller();
  rootEl = null;
  tls = [];
  scenes = [];

  //타임 라인 셋팅
  setScene = () => {
    const wrappers = this.rootEl.querySelectorAll(".article-section");
    const len = wrappers.length;
    let i = 0;
    for (; i < len; i++) {
      this.tls[i] = new TimelineMax().staggerFromTo(
        wrappers[i].querySelectorAll(".ani"),
        1,
        {
          autoAlpha: 0,
          x: "-100%"
        },
        {
          autoAlpha: 1,
          x: "0%",
          ease: Power2.easeInOut
        },
        0.3
      );

      this.scenes[i] = new ScrollMagic.Scene({
        triggerElement: ".article-section-" + i,
        triggerHook: 0.7
      })
        .setTween(this.tls[i])
        // .addIndicators({ name: i })
        .addTo(this.controller);
    }
  };

  componentDidMount() {
    this.setScene();
  }

  shouldComponentUpdate(prevProps) {
    if (this.props === prevProps) {
      return false;
    }
  }

  componentWillUnmount() {
    this.scenes.map(item => {
      item.destroy();
    });
  }

  render() {
    return (
      <div
        id="section_about-contents-root"
        className={cx("section_about-contents-root section-start")}
        ref={el => (this.rootEl = el)}
      >
        {/* 소개 */}
        <div
          className={cx(
            "section_introduction article-section article-section-0"
          )}
        >
          <div className={cx("introduction-container container")}>
            <div className={cx("wrapper ")}>
              <div className={cx("section-name ani")}>
                <span className={cx("h3-deco")} />
                <h3>INTRODUCTION</h3>
              </div>
              <p className={cx("ani")}>
                저는 풀스택을 지향하는 개발자로
                <br />
                책임감을 최우선으로 두고 <br />
                디자인에서 개발까지 폭넓은 시각을 바탕으로 <br />
                언제나 고객이 원하는 최고의 제품을
                <br />
                만들기 위해 최선을 다하고 있습니다.
              </p>
            </div>
          </div>
        </div>
        {/* 스택 */}
        <div
          className={cx(
            "section_stacks article-section clearfix  article-section-1"
          )}
        >
          <div className={cx("stacks-container container ")}>
            <div className={cx("wrapper right-wrapper ")}>
              <div className={cx("section-name ani")}>
                <span className={cx("h3-deco")} />
                <h3>STACKS</h3>
              </div>
              <div className={cx("chip-container ani")}>
                <Chip label="REACT" />
                <Chip label="NODEJS" />
                <Chip label="PHP" />
                <Chip label="MYSQL" />
                <Chip label="MONGODB" />
                <Chip label="HTML" />
                <Chip label="JAVASCRIPT" />
                <Chip label="JQUERY" />
                <Chip label="REACT-NATIVE" />
                <Chip label="CORDOVA" />
                <Chip label="CELENIUM" />
                <Chip label="AWS" />
                <Chip label="NAVERCLOUTPLATFORM" />
                <Chip label="LINUX" />
                <Chip label="PHOTOSHOP" />
                <Chip label="ILLUSTRATOR" />
                <Chip label="GNUBOARD" />
                <Chip label="WORDPRESS" />
              </div>
            </div>
          </div>
        </div>
        {/* 자격증 */}
        <div
          className={cx(
            "section_qualification article-section clearfix  article-section-2"
          )}
        >
          <div className={cx("stacks-container container ")}>
            <div className={cx("wrapper ")}>
              <div className={cx("section-name ani")}>
                <span className={cx("h3-deco")} />
                <h3>QUALIFICATION</h3>
              </div>
              <ul>
                <li className={cx("ani")}>
                  <span className={cx("name")}>정보처리 기능사 2급</span>
                  <span className={cx("period")}>2013.8</span>
                </li>
                <li className={cx("ani")}>
                  <span className={cx("name")}>리눅스마스터2급</span>
                  <span className={cx("period")}>2013.6</span>
                </li>
                <li className={cx("ani")}>
                  <span className={cx("name")}>네트워크관리사2급</span>
                  <span className={cx("period")}>2013.5</span>
                </li>
                <li className={cx("ani")}>
                  <span className={cx("name")}>정보처리기기운용기능사</span>
                  <span className={cx("period")}>2013.4</span>
                </li>
                <li className={cx("ani")}>
                  <span className={cx("name")}>JLPT N2</span>
                  <span className={cx("period")}>2012.1</span>
                </li>
                <li className={cx("ani")}>
                  <span className={cx("name")}>운전면허증</span>
                  <span className={cx("period")}>2007.1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* work expreience */}
        <div
          className={cx(
            "section_work-expreience article-section clearfix  article-section-3"
          )}
        >
          <div className={cx("stacks-container container ")}>
            <div className={cx("wrapper right-wrapper ")}>
              <div className={cx("section-name ani")}>
                <span className={cx("h3-deco")} />
                <h3>
                  WORK
                  <br />
                  &nbsp;EXPERIENCE
                </h3>
              </div>
              <ul>
                <li>
                  <div className={cx("line")} />
                </li>
                <li className={cx("first-li ani")}>
                  <div className={cx("period")}>2018.06 ~ </div>
                  <div className={cx("company")}>무리안</div>
                  <p>
                    만들고 싶었던 앱을 만들기 위해 <br />
                    스타트업 시작.
                  </p>
                </li>
                <li className={cx("second-li ani")}>
                  <div className={cx("period")}>2013.12 ~ 2017.11</div>
                  <div className={cx("company")}>해피본산부인과</div>
                  <p>
                    병원내 개발팀으로 입사.
                    <br />
                    (원내 ERP와 홈페이지 개발 및 유지보수)
                    <br />
                    팀이라고 해도 혼자여서 <br />
                    디자인과 퍼블리싱, 개발을 주도적으로 <br />
                    할 수 있어 매우 만족 스러웠고
                    <br />
                    퇴근 후 에는 지인들을 통해 <br />
                    php개발이나 퍼블리싱 등의 일을 했습니다.
                  </p>
                </li>
                <li className={cx("ani")}>
                  <div className={cx("period")}>2013.03 ~ 2013.11</div>
                  <div className={cx("company")}>아이스타 소프트</div>
                  <p>
                    첫 프로그래머 관련 업종.
                    <br />
                    웹 에이전시.
                    <br />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContents;
