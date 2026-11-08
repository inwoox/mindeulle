// 앱 스토어 주소 한곳에서 관리 (links/ 페이지와 go/<앱>/ 바로가기가 같이 쓴다)
// live: false 면 '곧 출시'로 보이고 눌리지 않는다. 출시되면 true 로만 바꾸면 된다.
window.APPS = {
  pacegraphy: {
    name: "PaceGraphy",
    nameKo: "페이스그라피",
    icon: "img/pacegraphy.png",
    ko: "러닝 기록 캡처 한 장으로, 오늘 달린 기록을 사진·영상 위에",
    en: "Put today's run on your photos and videos with one screenshot",
    ios: { url: "https://apps.apple.com/app/id6762495276", live: true },
    android: { url: "https://play.google.com/store/apps/details?id=com.inwoo.pacegraphy", live: true }
  },
  kokcut: {
    name: "KokCut",
    nameKo: "콕컷",
    icon: "img/kokcut.png",
    ko: "좋은 순간만 콕 찍으면, 영상 여러 개가 하나로",
    en: "Tap the best moments. Get one video.",
    ios: { url: "https://apps.apple.com/app/id6826712066", live: false },
    android: { url: "https://play.google.com/store/apps/details?id=com.kokcut.kokcut", live: false, test: "kokcut-test/" }
  }
};

// 어디서 들어왔는지(?from=ig-reel-kokcut)를 Play 스토어 유입 경로로 넘긴다
window.storeUrl = function (store, url) {
  try {
    var from = new URLSearchParams(location.search).get("from");
    if (from && store === "android") {
      return url + (url.indexOf("?") < 0 ? "?" : "&") + "referrer=" + encodeURIComponent("utm_source=" + from);
    }
  } catch (e) {}
  return url;
};

// 이 기기: ios · android · other
window.devicePlatform = function () {
  var ua = navigator.userAgent || "";
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) return "ios";
  return "other";
};
