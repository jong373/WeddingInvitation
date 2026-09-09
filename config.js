// 카카오 Developers 콘솔에 배포 도메인을 반드시 등록하세요.
const KAKAO_JS_KEY = "c53d59796a73319efdfbb92a38d5f08f";
const KAKAO_TEMPLATE_ID = 1570543;

const wedding = {
    groom: "000",
    bride: "홍유진",

    date: "2027-01-01",
    time: "13:00",

    hall: "더베라by루클라비",
    hallDetail: "9층 단독홀",
    address: "경기 평택시 중앙로 46 M프라자 9층",
    transport: "평택역 도보 5분",

    groomAccount: {
        bank: "국민은행",
        number: "123-456-789012"
    },

    brideAccount: {
        bank: "신한은행",
        number: "110-123-456789"
    },

    // 예식장 정보가 변경되면 아래 두 URL도 함께 갱신하세요.
    kakaoMap: "https://map.kakao.com/?q=%EB%8D%94%EB%B2%A0%EB%9D%BCby%EB%A3%A8%ED%81%B4%EB%9D%BC%EB%B9%84",
    naverMap: "https://map.naver.com/p/search/%EB%8D%94%EB%B2%A0%EB%9D%BCby%EB%A3%A8%ED%81%B4%EB%9D%BC%EB%B9%84"
};

const accounts = [

    // 신랑측
    {
        id: "groom",
        side: "groom",
        name: "신랑 000",
        bank: "국민은행",
        account: "123-456-789012",
        owner:"홍길동"
    },

    {
        id: "groomFather",
        side: "groom",
        name: "신랑 父 000",
        bank: "농협",
        account: "111-2222-333333",
        owner:"홍길동"
    },

    {
        id: "groomMother",
        side: "groom",
        name: "신랑 母 000",
        bank: "신한은행",
        account: "444-5555-666666",
        owner:"홍길동"
    },

    // 신부측
    {
        id: "bride",
        side: "bride",
        name: "신부 000",
        bank: "국민은행",
        account: "777-8888-999999",
        owner:"홍길동"
    },

    {
        id: "brideFather",
        side: "bride",
        name: "신부 父 000",
        bank: "기업은행",
        account: "111-222-333333",
        owner:"홍길동"
    },

    {
        id: "brideMother",
        side: "bride",
        name: "신부 母 000",
        bank: "우리은행",
        account: "555-666-777777",
        owner:"홍길동"
    }

];
