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
  ]
}
export default projectData