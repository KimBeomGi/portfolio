const projectData = {
  project: [
    {
      id: 0,
      projectName: '꼬마화가',
      projectUrl: 'https://github.com/A-Little-Painter/LittlePainter',
      projectImage: '/image/littlePainter/projectImage0.png',
      outline: '유아용 그림그리기 어플',
      developStart: '2023. 10. 09.',
      developEnd: '2023. 11. 17.',
      developmentManpower: 6,
      frontManpower: 2,
      backManpower: 4,
      additionalMan: 'Infra 1명',
      // Responsibilities: 'Front-End 개발',
      planningBackground: [
        "부족한 유아용 그리기 어플리케이션.",
        "발달 과정의 유아들에게 '그리기' 행위는 중요.",
        "내가 그린 것이 움직이게 하여 교육과 재미를 동시에.",
      ],
      responsibilities: [
        {
          mainExplanation: 'Front-End 개발',
          detailExplanation: [
            'React Native 초기 설정',
            '그리기 기능 및 각 그리기 페이지 구현',
            '메인 페이지, 각 선택 페이지 및 동화 페이지 구현',
            '동화 기본 이미지 애니메이션 구현'
          ],
        }
      ],
      
      usedTech: [
        'React Native',
        'TypeScript',
        'JavaScript',
        'React Query',
        'Redux',
        'Redux Toolkit',
        'React Navigation',
        'React-native-svg'
      ],
      projectRunImage: [
        {
          explanation: '동물그리기',
          runImage: '/image/littlePainter/animalDraw.gif',
        },
        {
          explanation: '동물 사진 검색해서 그리기',
          runImage: '/image/littlePainter/searchAnimalDraw.gif',
        },
        {
          explanation: '동화그리기',
          runImage: '/image/littlePainter/taleDraw.gif',
        },
        {
          explanation: '친구그리기',
          runImage: '/image/littlePainter/friendDraw.gif',
        },
        {
          explanation: '친구 사진 등록하기',
          runImage: '/image/littlePainter/uploadFriend.gif',
        },
        {
          explanation: '놀이방',
          runImage: '/image/littlePainter/playground.gif',
        },
      ],
    },
    {
      id: 1,
      projectName: '포도은행 & 도토리',
      projectUrl: 'https://github.com/KimBeomGi/PodoBankAndDotori',
      projectImage: '/image/podobankDotori/dotori/dotori.png',
      outline: '계획을 통한 자산관리 어플',
      developStart: '2023.08.28.',
      developEnd: '2023.10.06.',
      developmentManpower: 5,
      frontManpower: 2,
      backManpower: 3,
      additionalMan: 'Infra 1명',
      // Responsibilities: 'Front-End 개발',
      planningBackground: [
        "뱅킹 서비스에 대한 이해도를 증가 위함",
        "핀테크 서비스와 은행을 연결하는 금융 로직 구현",
        "소비습관 개선을 위해 사용 계획과 저축 목표 생성",
        "기간별, 카테고리별 소비패턴 확인으로 소비습관 개선",
        "기간별, 카테고리별 소비패턴 확인으로 목표 완료",
      ],
      responsibilities: [
        {
          mainExplanation: 'Front-End 개발',
          detailExplanation: [
            'React Native 초기 설정',
            '그리기 기능 및 각 그리기 페이지 구현',
            '메인 페이지, 각 선택 페이지 및 동화 페이지 구현',
            '동화 기본 이미지 애니메이션 구현'
          ],
        }
      ],
      
      usedTech: [
        'React Native',
        'Expo',
        'JavaScript',
        'React Query',
        'Redux',
        'Redux Toolkit',
        'React Navigation',
      ],
      projectRunImage: [
        {
          explanation: '계좌개설',
          runImage: '/image/podobankDotori/podoBank/포도은행계좌개설.gif',
        },
        {
          explanation: '포도은행계좌이체',
          runImage: '/image/podobankDotori/podoBank/포도은행계좌이체.gif',
        },
        {
          explanation: '포도은행로그인',
          runImage: '/image/podobankDotori/podoBank/포도은행로그인.gif',
        },
        {
          explanation: '포도은행비밀번호오류잠금',
          runImage: '/image/podobankDotori/podoBank/포도은행비밀번호오류잠금.gif',
        },
        {
          explanation: '포도은행비밀번호오류잠금해제',
          runImage: '/image/podobankDotori/podoBank/포도은행비밀번호오류잠금해제.gif',
        },
        {
          explanation: '포도은행입출금알림',
          runImage: '/image/podobankDotori/podoBank/포도은행입출금알림.gif',
        },
        {
          explanation: '포도은행회원가입',
          runImage: '/image/podobankDotori/podoBank/포도은행회원가입.gif',
        },
        {
          explanation: '포도은행입출금알림',
          runImage: '/image/podobankDotori/podoBank/포도은행입출금알림.gif',
        },
        {
          explanation: '포도은행회원탈퇴가능',
          runImage: '/image/podobankDotori/podoBank/포도은행회원탈퇴가능.gif',
        },
        {
          explanation: '포도은행회원탈퇴실패',
          runImage: '/image/podobankDotori/podoBank/포도은행회원탈퇴실패.gif',
        },
        {
          explanation: '도토리계좌등록',
          runImage: '/image/podobankDotori/dotori/도토리계좌등록.gif',
        },
        {
          explanation: '도토리계획생성1',
          runImage: '/image/podobankDotori/dotori/도토리계획생성1.gif',
        },
        {
          explanation: '도토리계획생성2',
          runImage: '/image/podobankDotori/dotori/도토리계획생성2.gif',
        },
        {
          explanation: '도토리계획생성3',
          runImage: '/image/podobankDotori/dotori/도토리계획생성3.gif',
        },
        {
          explanation: '도토리계획조회',
          runImage: '/image/podobankDotori/dotori/도토리계획조회.gif',
        },
        {
          explanation: '도토리계획종료저축리워드',
          runImage: '/image/podobankDotori/dotori/도토리계획종료저축리워드.gif',
        },
        {
          explanation: '도토리명세서조회',
          runImage: '/image/podobankDotori/dotori/도토리명세서조회.gif',
        },
        {
          explanation: '도토리목표생성',
          runImage: '/image/podobankDotori/dotori/도토리목표생성.gif',
        },
      ],
    },
    {
      id: 2,
      projectName: 'STVDY',
      projectUrl: 'https://github.com/KimBeomGi/STVDY',
      projectImage: '/image/stvdy/stvdyMainPage.png',
      outline: '혼자말고 함께 공부하자',
      developStart: '2023. 07. 04.',
      developEnd: '2023. 08. 18.',
      developmentManpower: 6,
      frontManpower: 3,
      backManpower: 3,
      additionalMan: 'Infra 1명',
      // Responsibilities: 'Front-End 개발',
      planningBackground: [
        "혼자서 공부를 하면 집중력이 저하되는 사람들을 위한 프로젝트",
        "남들과 같이 공부를 하면서 의욕을 내고 싶은 사람들을 위한 프로젝트",
        "집중력을 높이는 나만의 테마를 사용하고 싶은 사람들을 위한 프로젝트",
      ],
      responsibilities: [
        {
          mainExplanation: 'Front-End 개발',
          detailExplanation: [
            'WebRTC를 이용한 화상 통화 채팅 기능 구현',
            '스터디룸 내 마이크 및 카메라 설정 기능 구현',
            '스터디룸 페이지 및 스터디름 선택화면 구현',
            '마이페이지 내 프로필 화면 구현',
            '질의응답 페이지 및 질문 작성 페이지 구현'
          ],
        }
      ],
      
      usedTech: [
        'Vue3',
        'JavaScript',
        'Pinia',
        'OpenVidu',
      ],
      projectRunImage: [
        {
          explanation: '메인페이지',
          runImage: '/image/stvdy/stvdy메인페이지.png',
        },
        {
          explanation: '회원가입페이지',
          runImage: '/image/stvdy/stvdy회원가입창.png',
        },
        {
          explanation: '질문게시판',
          runImage: '/image/stvdy/stvdy질문게시판.png',
        },
        {
          explanation: '질문 상세보기',
          runImage: '/image/stvdy/stvdy질문상세보기.png',
        },
        {
          explanation: '질문 작성하기',
          runImage: '/image/stvdy/stvdy질문작성.png',
        },
        {
          explanation: '마이페이지',
          runImage: '/image/stvdy/stvdy프로필.png',
        },
        {
          explanation: '테마변경',
          runImage: '/image/stvdy/stvdy테마변경.png',
        },
        {
          explanation: '스터디룸 생성',
          runImage: '/image/stvdy/stvdy스터디룸생성.png',
        },
        {
          explanation: '스터디룸 참여',
          runImage: '/image/stvdy/stvdy스터디룸참여.png',
        },
        {
          explanation: '스터디룸 내부-채팅(1/5)',
          runImage: '/image/stvdy/stvdy스터디룸1.png',
        },
        {
          explanation: '스터디룸 내부-참가자(2/5)',
          runImage: '/image/stvdy/stvdy스터디룸2.png',
        },
        {
          explanation: '스터디룸 내부-그라운드 룰(3/5)',
          runImage: '/image/stvdy/stvdy스터디룸3.png',
        },
        {
          explanation: '스터디룸 내부-기기 설정(4/5)',
          runImage: '/image/stvdy/stvdy기기설정.png',
        },
        {
          explanation: '스터디룸 내부-ChatGPT(5/5)',
          runImage: '/image/stvdy/stvdy챗gpt.png',
        },
      ],
    },
    {
      id: 3,
      projectName: 'KimMovie',
      projectUrl: 'https://github.com/KimBeomGi/KimMovie',
      projectImage: '/image/kimmovie/kimmovieLogo.png',
      outline: '영화 리뷰 게시판',
      developStart: '2023. 05. 18.',
      developEnd: '2023. 05. 26.',
      developmentManpower: 2,
      frontManpower: 1,
      backManpower: 1,
      additionalMan: '없음',
      // Responsibilities: 'Front-End 개발',
      planningBackground: [
        "영화 리뷰 게시판도 OTT서비스가 가진 시각화로 구현하자.",
        "사용자 소통의 다양성 확대",
        "퀴즈, 등급 등의 재미요소를 더하여 참여 독려",
      ],
      responsibilities: [
        {
          mainExplanation: 'Back-End 개발',
          detailExplanation: [
            '추천 알고리즘 설계',
            '퀴즈 알고리즘 설계',
            '게시글, 댓글 알고리즘 설계',
            '익명 게시글 댓글 알고리즘 설계',
            '팔로우 알고리즘 설게',
            '검색 알고리즘 설게',
            '게시글 좋아요 알고리즘 설계',
            '경험치와 포인트를 통한 등급 알고리즘 설계',
            '추천, 세부 장르, 평점순, 인기순, 최신순 기능 등 세부 DB 구현 및 API 설게',
          ],
        }
      ],
      
      usedTech: [
        'Django',
        'Python',
        'MySql',
      ],
      projectRunImage: [
        {
          explanation: '메인화면',
          runImage: '/image/kimmovie/홈.png',
        },
        {
          explanation: '전체 영화',
          runImage: '/image/kimmovie/전체영화.png',
        },
        {
          explanation: '영화 검색 기능',
          runImage: '/image/kimmovie/영화검색기능.png',
        },
        {
          explanation: '영화 상세 정보(1/2)',
          runImage: '/image/kimmovie/영화상세정보1.png',
        },
        {
          explanation: '영화 상세 정보(2/2)',
          runImage: '/image/kimmovie/영화상세정보2.png',
        },
        {
          explanation: '게시글 작성',
          runImage: '/image/kimmovie/게시글작성.png',
        },
        {
          explanation: '게시판',
          runImage: '/image/kimmovie/게시판.png',
        },
        {
          explanation: '게시글 상세 및 댓글 작성',
          runImage: '/image/kimmovie/게시글상세및댓글작성.png',
        },
        {
          explanation: '로그인',
          runImage: '/image/kimmovie/로그인.png',
        },
        {
          explanation: '회원가입',
          runImage: '/image/kimmovie/회원가입.png',
        },
        {
          explanation: '내 프로필 및 회원정보 수정',
          runImage: '/image/kimmovie/내프로필.png',
        },
        {
          explanation: '타인의 프로필',
          runImage: '/image/kimmovie/타인의프로필.png',
        },
        {
          explanation: '익명게시판',
          runImage: '/image/kimmovie/익명게시판.png',
        },
        {
          explanation: '익명게시판 글 작성',
          runImage: '/image/kimmovie/익명게시판글작성.png',
        },
        {
          explanation: '익명게시판 게시글 상세 및 댓글 작성',
          runImage: '/image/kimmovie/익명게시판및댓글작성.png',
        },
        {
          explanation: '3문항 퀴즈',
          runImage: '/image/kimmovie/3문항퀴즈.png',
        },
        {
          explanation: 'OX 퀴즈',
          runImage: '/image/kimmovie/OX퀴즈.png',
        },
      ],
    },
  ]
}
export default projectData