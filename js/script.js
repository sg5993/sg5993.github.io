// 1. 글자 크기 조절 기능 (어사이드 기능)
let currentFontSize = 16; // 기본 폰트 사이즈

function zoomIn() {
    currentFontSize += 2;
    document.getElementById('content-area').style.fontSize = currentFontSize + 'px';
}

function zoomOut() {
    if (currentFontSize > 12) { // 너무 작아지지 않게 제한
        currentFontSize -= 2;
        document.getElementById('content-area').style.fontSize = currentFontSize + 'px';
    }
}

// 2. 좋아요 기능
let isLiked = false;
let likeCount = 0;

function toggleLike() {
    const btn = document.getElementById('likeBtn');
    const countSpan = document.getElementById('likeCount');
    
    if (!isLiked) {
        likeCount++;
        btn.style.backgroundColor = "#c0392b"; // 더 진한 빨강
        btn.innerHTML = `❤️ 좋아요 취소 ${likeCount}`;
        isLiked = true;
        alert("이 글을 추천했습니다!");
    } else {
        likeCount--;
        btn.style.backgroundColor = "#e74c3c"; // 원래 빨강
        btn.innerHTML = `❤️ 좋아요 ${likeCount}`;
        isLiked = false;
    }
}

// 3. 댓글 달기 기능
function addComment() {
    const input = document.getElementById('commentInput');
    const list = document.getElementById('commentList');
    const text = input.value.trim();

    if (text === "") {
        alert("내용을 입력해주세요.");
        return;
    }

    // 새로운 li 태그 생성
    const li = document.createElement('li');
    li.textContent = "익명: " + text;
    li.style.padding = "5px 0";
    li.style.borderBottom = "1px solid #eee";
    
    // 리스트에 추가
    list.appendChild(li);
    
    // 입력창 비우기
    input.value = "";
}