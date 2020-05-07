import { handleActions } from "redux-actions";
import { Map, List } from "immutable";


//initial state
const initialState = Map({
  history: List([
    // ===== ui library
    Map({
      _id: 14,
      bg: "/data/images/main/react-carrot-ui.png",
      period: "2020.05",
      description: Map({
        title: "react용 ui 오픈소스 라이브러리",
        list: List([
          Map({ text: "materiali ui 베이스" }),
          Map({ text: "지속적으로 추가해갈 예정" }),
        ])
      }),
      links: List([
        Map({
          category: "NPM",
          link: "https://https://www.npmjs.com/package/react-carrot-ui",
          text: "NPM"
        }),
        Map({
          category: "Git",
          link: "https://github.com/carrot-farm/react-carrot-ui",
          text: "Git"
        }),
        Map({
          category: "WEB",
          link: "http://carrot-ui.carrotlabel.com/",
          text: "Example Web Page"
        }),
      ]),
      participationRate: 100,
      stacks: List([
        Map({ label: "react" }),
        Map({ label: "Node.js" }),
        Map({ label: "gsap" }),
        Map({ label: "gsap-scroll" }),
      ])
    }),

    // ===== Kooky 어드민 페이지
    Map({
      _id: 13,
      bg: "/data/images/main/KooKy-admin.png",
      period: "2020.04",
      description: Map({
        title: "Kooky 스타트업 어드민 페이지",
        list: List([
          Map({ text: "토큰인증" }),
          Map({ text: "게시판 기능" }),
          Map({ text: "차트 출력" }),
        ])
      }),
      links: List([]),
      participationRate: 100,
      stacks: List([
        Map({ label: "react" }),
        Map({ label: "sass" }),
      ])
    }),
    // ===== GSAP3용 스크롤 플러그인
    Map({
      _id: 12,
      bg: "/data/images/main/gsap_scroll_2.png",
      period: "2020.02",
      description: Map({
        title: "GSAP-SCROLL 예제 페이지",
        list: List([
          Map({ text: "NPM에 예제로 사용한 페이지" }),
        ])
      }),
      links: List([
        Map({
          category: "WEB",
          link: "http://gsapscroll.carrotlabel.com/",
          text: "gsapscroll.carrotlabel.com"
        }),
        Map({
          category: "GIT",
          link: "https://github.com/carrot-farm/edu-react-gsap3",
          text: "GIT"
        }),
      ]),
      participationRate: 100,
      stacks: List([
        Map({ label: "react" }),
        Map({ label: "Node.js" }),
        Map({ label: "gsap" }),
        Map({ label: "gsap-scroll" }),
      ])
    }),

    // ===== GSAP3용 스크롤 플러그인
    Map({
      _id: 11,
      bg: "/data/images/main/gsap-scroll.png",
      period: "2020.02",
      description: Map({
        title: "GSAP3용 스크롤 플러그인",
        list: List([
          Map({ text: "NPM에 공유." }),
          Map({ text: "아직 초기 단계." }),
        ])
      }),
      links: List([
        Map({
          category: "NPM",
          link: "https://www.npmjs.com/package/gsap-scroll",
          text: "NPM"
        }),
        Map({
          category: "Git",
          link: "https://github.com/carrot-farm/gsap-scroll",
          text: "Git"
        }),
      ]),
      participationRate: 100,
      stacks: List([
        Map({ label: "react" }),
        Map({ label: "Node.js" }),
        Map({ label: "gsap" }),
        Map({ label: "gsap-scroll" }),
      ])
    }),

    // ===== ap mall 주문 페이지
    Map({
      _id: 10,
      bg: "/data/images/main/dashboard-example.png",
      period: "2020.01 ~ 02",
      description: Map({
        title: "아모레 퍼시픽 대시보드",
        list: List([
          Map({ text: "GA와 내부 api의 데이터를 통합해서 보여줌" }),
          Map({ text: "사내 확인용" }),
        ])
      }),
      links: List([
        Map({
          category: "web",
          // link: "https://www.amorepacificmall.com",
          // text: "amorepacificmall.com"
        })
      ]),
      participationRate: 100,
      stacks: List([
        Map({ label: "Next.js" }),
        Map({ label: "react" }),
        Map({ label: "Node.js" }),
        Map({ label: "redux" }),
        Map({ label: "redux-saga" }),
        Map({ label: "sass" }),
      ])
    }),

    // ===== ap mall 주문 페이지
    Map({
      _id: 9,
      bg: "/data/images/main/ap-mall.png",
      period: "2019.9 ~ 12",
      description: Map({
        title: "AP MAll 장바구니/주문페이지",
        list: List([
          Map({ text: "기존 스프링으로 되어 있는 was Node.js와 Next로 전환 작업." }),
          Map({ text: "처음 계획은 점진적으로 전체 페이지 교체예정 이었음." }),
          Map({ text: "만드는 중 임원진이 프로젝트 드랍." }),
        ])
      }),
      links: List([
        Map({
          category: "web",
          link: "https://www.amorepacificmall.com",
          text: "amorepacificmall.com"
        })
      ]),
      participationRate: 100,
      stacks: List([
        Map({ label: "Next.js" }),
        Map({ label: "react" }),
        Map({ label: "Node.js" }),
        Map({ label: "redux" }),
        Map({ label: "redux-saga" }),
        Map({ label: "sass" }),
      ])
    }),

    // ===== 아모레 퍼시픽 캐나다 설화수
    Map({
      _id: 8,
      bg: "/data/images/main/sulwhasu-canada.png",
      period: "2019.7 ~ 8",
      description: Map({
        title: "아모레 퍼시픽 캐나다 설화수 보일러플레이트",
        list: List([
          Map({ text: "Next.js 보일러 플레이트 제작" }),
        ])
      }),
      links: List([
        Map({
          category: "web",
          link: "https://ca.sulwhasoo.com/en/",
          text: "ca.sulwhasoo.com"
        })
      ]),
      participationRate: 100,
      stacks: List([
        Map({ label: "Next.js" }),
        Map({ label: "react" }),
        Map({ label: "Node.js" }),
        Map({ label: "redux" }),
        Map({ label: "redux-saga" }),
      ])
    }),

    // # 코인 트레이드
    Map({
      _id: `7_2`,
      bg: "/data/images/main/main_bg_8_201905.jpg",
      period: "2019.4",
      description: Map({
        title: "코인 페이지",
        list: List([
          Map({ text: "가상화페 페이지" }),
          Map({ text: "데이터 처리에 신경씀" }),
          Map({ text: "매수/매도/검색/즐겨찾기등 모든기능 작동" }),
        ])
      }),
      links: List([
        Map({
          category: "web",
          link: "https://trade.carrotlabel.com/",
          text: "portfolio"
        }),
      ]),
      participationRate: 100,
      stacks: List([
        Map({ label: "react" }),
        Map({ label: "redux-saga" }),
        Map({ label: "chart" }),
      ])
    }),

    // 포트폴리오
    Map({
      _id: 7,
      bg: "/data/images/main/main_bg_7_20190318.jpg",
      period: "2019.3",
      description: Map({
        title: "포트폴리오",
        list: List([
          Map({ text: "리액트를 사용한 포트폴리오 페이지" }),
          Map({ text: "동적움직임에 신경써서 디자인" }),
          Map({ text: "SPA의 특징을 사용한 페이지 이동시 애니메이션" })
        ])
      }),
      links: List([
        Map({
          category: "web",
          link: "http://portfolio.carrotlabel.com",
          text: "portfolio"
        }),
        Map({
          category: "git",
          link: "https://github.com/carrot-farm/portfolio",
          text: "portfolio"
        })
      ]),
      participationRate: 100,
      stacks: List([
        Map({ label: "nodejs" }),
        Map({ label: "react" }),
        Map({ label: "redux" }),
        Map({ label: "aws" })
      ])
    }),

    // 할일 앱
    Map({
      _id: 0,
      bg: "/data/images/main/main_bg_1_20190312.jpg",
      period: "2019.1 ~ 2",
      description: Map({
        title: "할일 앱",
        list: List([
          Map({ text: "리액트를 공부할 겸 해서 이것저것 시험해 보면서 만듦." }),
          Map({ text: "개인적으로 사용중." })
        ])
      }),
      links: List([
        Map({
          category: "web",
          link: "http://todo.carrotlabel.com",
          text: "todo.carrotlabel.com"
        }),
        Map({
          category: "git",
          link: "https://github.com/carrot-farm/carrot-todo-client",
          text: "carrot-todo-client"
        })
      ]),
      participationRate: 100,
      stacks: List([
        Map({ label: "nodejs" }),
        Map({ label: "react" }),
        Map({ label: "redux" }),
        Map({ label: "mongodb" }),
        Map({ label: "aws lightsail" }),
        Map({ label: "ubuntu" }),
        Map({ label: "RESTful" })
      ])
    }),
    // 동네엔
    Map({
      _id: 1,
      bg: "/data/images/main/main_bg_5_20190312.jpg",
      period: "2017.11 ~ 2018.12",
      description: Map({
        title: "동네엔",
        list: List([
          Map({ text: "비콘을 사용한 주문 앱 창업" }),
          Map({ text: "WEB + HYBRID" }),
          Map({
            text: "회사 그만두고 창업."
          }),
          Map({ text: "자체 개발 SPA 프레임 워크." }),
          Map({ text: `웹과 앱에서 bluetooth 접근 기능 구현` }),
          Map({ text: `gps를 이용한 주변 상가 안내` }),
          Map({ text: `push notification, sms 전송` }),
          Map({ text: `현금 영수증, 네이버 로그인` }),
          Map({ text: `셀레니움을 사용한 웹 크롤링` }),
          Map({ text: `socket.io를 통한 실시간 현장 주문기능` }),
          Map({ text: `주문 결제 시스템, 회원 관리 시스템` })
        ])
      }),
      links: List([
        Map({
          category: "web",
          link: "https://dongneand.net/#!/index",
          text: "dongneand.net"
        }),
        Map({
          category: "android",
          link:
            "https://play.google.com/store/apps/details?id=com.murian.dongneand",
          text: "동네엔"
        })
      ]),
      participationRate: 100,
      stacks: List([
        Map({ label: "nodejs" }),
        Map({ label: "jQuery" }),
        Map({ label: "cordova" }),
        Map({ label: "mysql" }),
        Map({ label: "php" }),
        Map({ label: "naver cloud platoform" }),
        Map({ label: "CENTOS" })
      ])
    }),
    Map({
      _id: 2,
      bg: "/data/images/main/main_bg_6_20190312.jpg",
      period: "2015.08 ~ 2017.10",
      description: Map({
        title: "병원ERP",
        list: List([
          Map({ text: "병원 내부 인적, 물적 관리시스템" }),
          Map({ text: "WEB + HYBRIDAPP" }),
          Map({ text: "근무 하면서 계속 업데이트" })
        ])
      }),
      links: List([]),
      participationRate: 100,
      stacks: List([
        Map({ label: "PHP" }),
        Map({ label: "MYSQL" }),
        Map({ label: "IONIC" }),
        Map({ label: "cordova" }),
        Map({ label: "angular1" })
      ])
    }),
    Map({
      _id: 3,
      bg: "/data/images/main/main_bg_3_20190312.jpg",
      period: "2014.11 ~ 2017.10",
      description: Map({
        title: "병원홈페이지",
        list: List([
          Map({ text: "기획, 디자인, 개발 전부 혼자 처리" }),
          Map({ text: "근무 하면서 계속 업데이트" })
        ])
      }),
      links: List([]),
      participationRate: 100,
      stacks: List([
        Map({ label: "PHP" }),
        Map({ label: "MYSQL" }),
        Map({ label: "jQuery" })
      ])
    }),
    Map({
      _id: 4,
      bg: "/data/images/main/main_bg_2_20190312.jpg",
      period: "2015.03 ~ 2015.04",
      description: Map({
        title: "DREAMYACHT",
        list: List([
          Map({ text: "드림요트 코리아" }),
          Map({ text: "기획 부터 개발까지." })
        ])
      }),
      links: List([
        Map({
          category: "web",
          link: "http://dreamyacht.co.kr/#!/index",
          text: "dreamyacht"
        })
      ]),
      participationRate: 100,
      stacks: List([
        Map({ label: "PHP" }),
        Map({ label: "MYSQL" }),
        Map({ label: "jQuery" })
      ])
    }),
    Map({
      _id: 5,
      bg: "/data/images/main/main_bg_4_20190312.jpg",
      period: "2014.11 ~ 2017.11",
      description: Map({
        title: "그누보드 및 워드프레스 다수 외주",
        list: List([
          Map({ text: "병원 재직 기간 중 퇴근 후 작업들" }),
          Map({ text: "프론트 엔드 및 백엔드" })
        ])
      }),
      links: List([]),
      participationRate: "10 ~ 60",
      stacks: List([
        Map({ label: "PHP" }),
        Map({ label: "MYSQL" }),
        Map({ label: "jQuery" }),
        Map({ label: "그누보드" }),
        Map({ label: "워드프레스" })
      ])
    })
  ])
});

export default handleActions({}, initialState);
