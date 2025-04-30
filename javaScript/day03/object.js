let jihoon = {
    age: 20,
    height: 190
}

// .을 통해 키에 접근
// 키를 통해 접근했을 때 반환하는값은 value
console.log(jihoon.height)

// 옛날에는 xml 형태 <title>안녕하세요</title>
// 요즘은 JSON (javascript object loation) 자바스크립트 객체 양식
// 서버와 데이터를 주고 받는 데이터 양식

const Post = {
    title: "안녕하세요",
    content: "example 내용아아아아아아아아",
    User:{
        nickName: "지존전사",
        profile_imge: "https://www.naver.com",
    },
    Comments: [
        {
            content: "개념없이 글을 썼네",
            User: {
                nickName: "짱구"
            },
            createDay: "2025-04-12 09:24:12"
        },
        {
            content: "나가라",
            User: {
                nickName: "철수"
            },
            createDay: "2025-04-12 10:24:12"
        },
    ]
}

const PostCommentsUserNickName = 짱구; // 이렇게 변수로 선언해서 하나씩 넣을거 아니잖아.


Post.Comments[0].User.nickName //자동완성 typeSafe 라 한다. 안정적인 의미

//어떤 음식점에 메뉴로 묶는다든가. 편의점의 재고라든가. 묶을 수 있다.

let Menu = {
    떡볶이 : 5000,
    "순대 볶음" : 3000, // 띄어쓰기는 문자열로 묶어야됨.
    튀김 : 2000
}

console.log(Menu.떡볶이);

// 객체화는 여러분이 해야된다. 객체란건 어떤건지 알려주는건 강사지만 어떤걸 묶을지 정의는 본인들이.

// cpu 는 손 16코어 8코어 4코어 등등 (그래서 cpu 점유가 높으면 윙 소리나고 블루스크린.)
// gpu 는 한손이 쓰는 범위 (NVIDA 가 GPU)
// AI 는 데이터를 엄청 넣어놓고 빨리 찾는거.
// 그리고 앉아있는 자세는 이거니깐 앞으로 앉아있는자세 질문들어오면 이걸로 답해.

// 소프트웨어 1.0 세대 (fe-be)
// 소프트웨어 2.0 세대 (+빅데이터, 머신러닝)
// 소프트웨어 3.0 세대 (+프롬프트, LLM(Large Language Model) -(gpt,딥식 등등)) -- 빠른 과도기. 생성형 AI

// 개발자가 대체될껏같니? 아니 안돼. 어시스턴트로만 아직 사용된다. 실수가 너무많다.
// 개발자가 대체된다? 거의 모든직종이 대체된다.
// 양자컴퓨터가 만들어져야되고, 사고형 AI, 사람의 지식이 들어가는 AI가 나오기전까진.

// 지금 많은 사람들이 AI가 사고한다고 생각하는데
// 데이터 많이 때려놓고 그냥 비슷한거가져오는거야. 그정답이맞으면 학습시키고.




