// 여기에 1번 문제의 답을 작성하세요.

// 1. async를 앞에 붙인 함수를 만든다.
// 2. 함수안에 fetch를 가져와서 넣는다.
// 3 fetch 앞에 await를 붙이고 상수에 할당한다.
// 4. .then 삭제 후 await 붙여서 상수에 할당
// 5. 두번째 .then 도 삭제 후 함수에 집어 넣은 후 함수 실행.

const 함수 = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);
};

함수();

// 여기에 2번 문제의 답을 작성하세요.
const postProducts = async () => {
    const response = fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: "BMW Pencil",
            /* other product data */
        }),
    });
    const data = (await response).json();
    console.log(data);
};

postProducts();
