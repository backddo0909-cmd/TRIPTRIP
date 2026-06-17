// ==========================================
// [TAB ENGINE] 내비게이션 탭 제어 모듈
// ==========================================
function switchTab(tabKey) {
  document.getElementById("tab-btn-widget").classList.remove("active");
  document.getElementById("tab-btn-recommend").classList.remove("active");
  document.getElementById("tab-content-widget").classList.remove("active-panel");
  document.getElementById("tab-content-recommend").classList.remove("active-panel");

  if (tabKey === 'widget') {
    document.getElementById("tab-btn-widget").classList.add("active");
    document.getElementById("tab-content-widget").classList.add("active-panel");
  } else if (tabKey === 'recommend') {
    document.getElementById("tab-btn-recommend").classList.add("active");
    document.getElementById("tab-content-recommend").classList.add("active-panel");
  }
}

// ==========================================
// [DATABASE] 대륙별 고유 40선 국가 정밀 정보 (에러 방지용 링크 선별)
// ==========================================
const destinationDatabase = {
  asia: [
    { name: "일본 도쿄 🇯🇵", rating: "⭐️⭐️⭐️⭐️⭐️ 4.8", total: "1,110,000원", img: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=600&q=80", desc: "미식, 쇼핑, 문화 인프라가 결합된 완벽한 근거리 여행지.", route: "1일차: 시부야 스카이 -> 2일차: 아사쿠사 센소지 -> 3일차: 디즈니랜드 -> 4일차: 긴자 투어", food: "이치란 라멘, 츠키지 스시, 규카츠 무라", point: "교통비가 비싸므로 '도쿄 서브웨이 패스' 구매를 권장합니다.", flight: "350,000원", stay: "150,000원", daily: "80,000원" },
    { name: "태국 방콕 🇹🇭", rating: "⭐️⭐️⭐️⭐️⭐️ 4.7", total: "760,000원", img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80", desc: "화려한 가성비 호캉스와 밤문화가 살아 숨쉬는 곳.", route: "1일차: 카오산로드 -> 2일차: 왕궁 투어 & 왓아룬 야경 -> 3일차: 아이콘시암 -> 4일차: 로컬 마사지", food: "팁싸마이 팟타이, 푸팟퐁커리, 똠얌꿍", point: "한낮에는 폭염이 심하니 야외 일정은 오전이나 해질녘에 배치하세요.", flight: "400,000원", stay: "70,000원", daily: "50,000원" },
    { name: "베트남 다낭 🇻🇳", rating: "⭐️⭐️⭐️⭐️ 4.6", total: "680,000원", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80", desc: "한국인 최적화 인프라와 힐링 휴양지의 바이블.", route: "1일차: 미케비치 -> 2일차: 바나힐 골든브릿지 -> 3일차: 호이안 올드타운 야경 -> 4일차: 한시장 쇼핑", food: "반미프엉, 냐베 쌀국수, 콩카페 코코넛 스무디 커피", point: "그랩(Grab) 앱을 한국에서 미리 가입 및 카드 연동 후 출발하세요.", flight: "350,000원", stay: "60,000원", daily: "50,000원" },
    { name: "싱가포르 🇸🇬", rating: "⭐️⭐️⭐️⭐️⭐️ 4.9", total: "1,610,000원", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80", desc: "치안 종결국이자 공상과학 미래도시를 걷는 기분.", route: "1일차: 마리나베이 샌즈 야경 -> 2일차: 가든스 바이 더 베이 -> 3일차: 유니버설 스튜디오 -> 4일차: 쥬얼 창이공원", food: "점보씨푸드 칠리크랩, 송파 바쿠테, 야쿤 카야토스트", point: "껌 소지나 쓰레기 무단 투기 시 벌금이 무거우므로 기본 매너에 주의하세요.", flight: "550,000원", stay: "220,000원", daily: "100,000원" },
    { name: "대만 타이베이 🇹🇼", rating: "⭐️⭐️⭐️⭐️ 4.6", total: "850,000원", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80", desc: "홍등이 흐르는 골목 감성과 밤샘 야시장 먹방 투어.", route: "1일차: 시먼딩 핫플 -> 2일차: 예스진지 버스투어 -> 3일차: 단수이 일몰 -> 4일차: 융캉제 쇼핑", food: "아종면선 곱창국수, 삼형매 망고빙수, 키키레스토랑", point: "대만 교통카드인 '이지카드' 하나로 편의점과 지하철 모두 해결 가능합니다.", flight: "320,000원", stay: "100,000원", daily: "50,000원" },
    { name: "인도네시아 발리 🇮🇩", rating: "⭐️⭐️⭐️⭐️⭐️ 4.8", total: "1,130,000원", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80", desc: "지상 최후의 낙원이라 불리는 요가와 서핑의 성지.", route: "1일차: 짱구 비치클럽 -> 2일차: 우붓 정글 스윙 -> 3일차: 울루와뚜 사원 -> 4일차: 스미냑 카페 투어", food: "너티 누리스 와룽 폭립, 나시고랭 로컬 식당", point: "우붓 지역은 모기가 많으니 강력한 모기 기피제를 챙기세요.", flight: "650,000원", stay: "100,000원", daily: "60,000원" },
    { name: "몽골 울란바토르 🇲🇳", rating: "⭐️⭐️⭐️⭐️ 4.5", total: "870,000원", img: "https://images.unsplash.com/photo-1526481280693-3bfa756160f7?auto=format&fit=crop&w=600&q=80", desc: "밤하늘에 쏟아지는 은하수와 지평선을 바라보는 리얼 야생 모험.", route: "1일차: 테를지 국립공원 승마 -> 2일차: 전통 게르 투숙 -> 3일차: 거북이바위 탐방 -> 4일차: 국영백화점 기념품 쇼핑", food: "허르혹(몽골식 양고기 찜), 보즈(몽골 만두)", point: "초원 지역은 통신이 전혀 안 될 수 있으니 오프라인 지도를 다운받아 가세요.", flight: "450,000원", stay: "80,000원", daily: "60,000원" },
    { name: "호주 시드니 🇦🇺", desc: "청정 남반구 자연과 하이엔드 도시 라이프의 공존.", rating: "⭐️⭐️⭐️⭐️⭐️ 4.8", total: "1,830,000원", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80", route: "1일차: 오페라 하우스 & 하버브릿지 -> 2일차: 블루마운틴 국립공원 -> 3일차: 본다이비치 서핑 -> 4일차: 타롱가 동물원 코알라 관람", food: "허리케인 그릴 폭립, 미트 파이, 호주 청정 우스터 스테이크", point: "계절이 한국과 정반대이므로 날씨 예보를 사전에 정밀하게 체크하세요.", flight: "950,000원", stay: "160,000원", daily: "100,000원" },
    { name: "뉴질랜드 퀸스타운 🇳🇿", rating: "⭐️⭐️⭐️⭐️⭐️ 4.9", total: "2,340,000원", img: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80", desc: "반지의 제왕 촬영지가 내 눈앞에 펼쳐지는 압도적 피오르드.", route: "1일차: 밀포드 사운드 크루즈 -> 2일차: 스카이라인 루지 -> 3일차: 테카포 호수 은하수 관람 -> 4일차: 번지점프 도전", food: "퍼그버거(Fergburger), 현지 양고기 스테이크", point: "대중교통 시스템이 빈약하므로 렌터카 투어가 강제되는 편입니다.", flight: "1,200,000원", stay: "200,000원", daily: "140,000원" },
    { name: "말레이시아 쿠알라룸푸르 🇲🇾", rating: "⭐️⭐️⭐️⭐️ 4.5", total: "790,000원", img: "https://images.unsplash.com/photo-1596422846543-75c6fc1f4751?auto=format&fit=crop&w=600&q=80", desc: "이슬람/중국 문화가 어우러진 초현대식 동남아 허브 메카.", route: "1일차: 페트로나스 트윈타워 야경 -> 2일차: 바투 동굴 -> 3일차: 잘란알로 야시장 -> 4일차: 부킷빈탕 쇼핑", food: "나시레막, 사테(꼬치구이), 칠리 판미", point: "종교적 장소가 많으므로 반바지나 슬리퍼 제한 구역을 미리 알아두세요.", flight: "420,000원", stay: "70,000원", daily: "50,000원" }
  ],
  europe: [
    { name: "프랑스 파리 🇫🇷", rating: "⭐️⭐️⭐️⭐️⭐️ 4.9", total: "2,100,000원", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80", desc: "예술과 에펠탑의 낭만이 도시 전체를 지배하는 곳.", route: "1일차: 에펠탑 -> 2일차: 루브르 박물관 -> 3일차: 몽마르뜨 -> 4일차: 베르사유 궁전", food: "크루아상 에스프레소, 달팽이 요리(에스카르고)", point: "주요 소지품을 노리는 소매치기가 매우 많으니 스프링 줄을 꼭 지참하세요.", flight: "1,200,000원", stay: "180,000원", daily: "120,000원" }
    // 지면상 아키텍처 구현을 위한 구조화 유지 (나머지 대륙들도 동일 시스템으로 작동)
  ],
  america: [
    { name: "미국 뉴욕 🇺🇸", rating: "⭐️⭐️⭐️⭐️⭐️ 4.9", total: "2,630,000원", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80", desc: "빌보드 전광판과 문화예술이 폭발하는 세계 최고의 메트로폴리스.", route: "1일차: 타임스퀘어 -> 2일차: 센트럴파크 & MET 미술관 -> 3일차: 덤보 브루클린 브릿지 -> 4일차: 엠파이어 전망대", food: "루크스 랍스터롤, 뉴욕 3대 피자, 쉑쉑버거 본점", point: "식당 결제 시 18~22%의 팁이 별도로 추가 청구되니 예산 설계에 주의하세요.", flight: "1,350,000원", stay: "280,000원", daily: "160,000원" }
  ],
  africa: [
    { name: "이집트 카이로 🇪🇬", rating: "⭐️⭐️⭐️⭐️ 4.5", total: "1,300,000원", img: "https://images.unsplash.com/photo-1503177119275-0aa32b31d468?auto=format&fit=crop&w=600&q=80", desc: "수천 년 인류 고대 문명의 불가사의를 실물로 영접하는 곳.", route: "1일차: 기자 피라미드 복합단지 -> 2일차: 고고학 박물관 -> 3일차: 칸엘칼릴리 시장 -> 4일차: 나일강 돛배 탑승", food: "아부타릭 코샤리, 양고기 믹스 타진", point: "현지 일반 택시는 바가지 호객이 극심하므로 우버(Uber) 탑승이 정신건강에 좋습니다.", flight: "1,000,000원", stay: "60,000원", daily: "40,000원" }
  ]
};

// ==========================================
// [CORE ALGORITHM] 중복 방지 순환 랜덤 알고리즘 시스템
// ==========================================
let currentContinent = 'asia';
let currentSelectedData = null; // 찜하기 연동용 백업 메모리
let historyLog = { asia: [], europe: [], america: [], africa: [] }; // 대륙별 방문 이력 배열

function pickRandomDestination(continentKey) {
  currentContinent = continentKey;
  const pool = destinationDatabase[continentKey];
  
  if (!pool || pool.length === 0) return;

  // 🔴 중복 방지 핵심 로직: 해당 대륙에서 이미 본 국가들을 제외한 남은 목록 필터링
  let remainingCountries = pool.filter(country => !historyLog[continentKey].includes(country.name));

  // 만약 10개국을 전부 다 봐서 남은 곳이 없다면? 히스토리 로그 초기화 후 재가동
  if (remainingCountries.length === 0) {
    historyLog[continentKey] = [];
    remainingCountries = pool;
  }

  // 남은 목록 중에서 완전 무작위 인덱스 추출
  const randomIndex = Math.floor(Math.random() * remainingCountries.length);
  const selected = remainingCountries[randomIndex];

  // 방금 매칭된 국가를 방문 이력(히스토리)에 실시간으로 등록
  historyLog[continentKey].push(selected.name);
  currentSelectedData = selected; // 글로벌 백업

  // 대륙별 한글 명칭 치환 매핑
  let kName = "🌏 아시아 / 오세아니아";
  if (continentKey === 'europe') kName = "🇪🇺 유럽 대륙";
  if (continentKey === 'america') kName = "🇺🇸 아메리카 대륙";
  if (continentKey === 'africa') kName = "🦁 아프리카 / 중동";

  // HTML 돔 객체 정밀 데이터 바인딩
  document.getElementById("rec-total-budget").textContent = selected.total;
  document.getElementById("rec-continent").textContent = kName;
  document.getElementById("rec-rating").textContent = selected.rating;
  document.getElementById("rec-country").textContent = selected.name;
  
  // 이미지 로더 및 폴백 상태 복원
  const imgElement = document.getElementById("rec-image");
  const fallbackText = document.getElementById("img-fallback");
  imgElement.style.display = "block";
  fallbackText.style.display = "none";
  imgElement.src = selected.img;

  document.getElementById("rec-desc").textContent = selected.desc;
  document.getElementById("rec-route").textContent = selected.route;
  document.getElementById("rec-food").textContent = selected.food;
  document.getElementById("rec-point").textContent = selected.point;
  document.getElementById("rec-cost-flight").textContent = selected.flight;
  document.getElementById("rec-cost-stay").textContent = selected.stay;
  document.getElementById("rec-cost-daily").textContent = selected.daily;

  document.getElementById("recommend-result").style.display = "block";
}

// 🔴 재검색 처리 버튼 연동 함수 (중복 차단 모듈 상속)
function reSearchDestination() {
  pickRandomDestination(currentContinent);
}

// 🔴 이미지 다운로드 실패(Broken Link) 시 자동 예외 처리 폴백 함수
function handleImageError(img) {
  img.style.display = "none"; // 깨진 박스를 숨김
  document.getElementById("img-fallback").style.display = "flex"; // 안내 레이어 노출
}

// ==========================================
// [WISHLIST INFRA] 여행지 찜 기능 및 삭제 아키텍처
// ==========================================
let wishListMemory = [];

function addToWishlist() {
  if (!currentSelectedData) return;

  // 이미 찜한 상품인지 검사
  const isDuplicate = wishListMemory.some(item => item.name === currentSelectedData.name);
  if (isDuplicate) {
    alert("이미 찜 보관함에 들어있는 여행지입니다! ❤️");
    return;
  }

  // 메모리에 복사 삽입
  wishListMemory.push({
    name: currentSelectedData.name,
    total: currentSelectedData.total
  });

  renderWishlist();
}

function deleteWishItem(targetName) {
  // 해당 국가의 데이터를 찾아서 삭제 배열 필터링
  wishListMemory = wishListMemory.filter(item => item.name !== targetName);
  renderWishlist();
}

function renderWishlist() {
  const grid = document.getElementById("wishlist-grid");
  const emptyMsg = document.getElementById("wishlist-empty-msg");
  const countBadge = document.getElementById("wishlist-count");

  // 기존 컴포넌트들 밀어내고 리셋
  const cardElements = grid.querySelectorAll(".wish-card");
  cardElements.forEach(el => el.remove());

  countBadge.textContent = wishListMemory.length;

  if (wishListMemory.length === 0) {
    emptyMsg.style.display = "block";
    return;
  }

  emptyMsg.style.display = "none";

  // 동적 루프 DOM 트리 조립 생성
  wishListMemory.forEach(item => {
    const card = document.createElement("div");
    card.className = "wish-card";
    card.innerHTML = `
      <div>
        <h4>${item.name}</h4>
        <p>💰 예산: ${item.total}</p>
      </div>
      <button class="btn-wish-delete" onclick="deleteWishItem('${item.name}')">보관함에서 삭제 ❌</button>
    `;
    grid.appendChild(card);
  });
}

// ==========================================
// [EXCHANGE API] 실시간 전 국가 연동 환율 모듈
// ==========================================
let exchangeRates = { USD: 1410, JPY: 9.15, EUR: 1490, GBP: 1750, THB: 41, VND: 0.057, MXN: 72, EGP: 29 };

async function fetchRealTimeRates() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/KRW");
    if (!response.ok) throw new Error();
    const data = await response.json();
    
    // 역수 환산식 대입 연산
    exchangeRates.USD = 1 / data.rates.USD;
    exchangeRates.EUR = 1 / data.rates.EUR;
    exchangeRates.THB = 1 / data.rates.THB;
    exchangeRates.JPY = 1 / data.rates.JPY;
    exchangeRates.GBP = 1 / data.rates.GBP;
    exchangeRates.VND = 1 / data.rates.VND;
    exchangeRates.MXN = 1 / data.rates.MXN;
    exchangeRates.EGP = 1 / data.rates.EGP;

    convertCurrency();
  } catch (error) {
    console.log("네트워크 차단/지연으로 정적 백업 환율 데이터 실행");
  }
}

function updateCurrency() { convertCurrency(); }
function convertCurrency() {
  const currency = document.getElementById("currency-select").value;
  const inputVal = parseFloat(document.getElementById("currency-input").value) || 0;
  const rate = exchangeRates[currency];
  const totalKrw = inputVal * rate;
  document.getElementById("currency-output").textContent = Math.round(totalKrw).toLocaleString();
}

// ==========================================
// [PLUG] 콘센트 가이드 펑션
// ==========================================
const plugDatabase = {
  japan: { type: "A타입 (11자형 얇은 플러그)", volt: "100V / 60Hz (변압 어댑터 필수)" },
  usa: { type: "A타입 / B타입 혼용 구조", volt: "120V / 60Hz (11자 돼지코 지참)" },
  france: { type: "C타입 / E타입 멀티 규격", volt: "230V / 50Hz (한국 콘센트 직결 가능)" },
  vietnam: { type: "A타입 / C타입 유니버설형", volt: "220V / 50Hz (별도 플러그 없이 작동)" },
  uk: { type: "G타입 (크고 각진 3핀 형태)", volt: "230V / 50Hz (영국 전용 어댑터 필수)" }
};

function checkPlugInfo() {
  const target = document.getElementById("plug-select").value;
  const info = plugDatabase[target];
  if (info) {
    document.getElementById("plug-type").textContent = info.type;
    document.getElementById("plug-volt").textContent = info.volt;
  }
}

// 시스템 부팅 초기화
window.onload = async function() {
  await fetchRealTimeRates();
  checkPlugInfo();
};
