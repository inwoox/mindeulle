// 앱 스토어 주소 한곳에서 관리 (links/ 페이지와 go/<앱>/ 바로가기가 같이 쓴다)
// live: false 면 '곧 출시'(status: "review" 면 '심사 대기 중', "prep" 이면 '준비 중')로 보이고 눌리지 않는다. 출시되면 true 로만 바꾸면 된다.
window.APPS = {
  pacegraphy: {
    name: "PaceGraphy",
    nameKo: "페이스그라피",
    icon: "img/pacegraphy.png",
    ko: "러닝 기록 캡처 한 장으로, 오늘 달린 기록을 사진·영상 위에",
    en: "Put today's run on your photos and videos with one screenshot",
    // 앱 받기 페이지 카드의 앱 화면 + 한 줄 소개 (2026-11-19)
    shot: "img/pacegraphy-shot.jpg",
    introKo: "거리·페이스·심박이 사진 위에 바로 올라가요.<br>글씨·템플릿·비율도 마음대로 바꿔요.",
    introEn: "Distance, pace and heart rate go right onto your photo.<br>Change the font, template and ratio as you like.",
    ios: { url: "https://apps.apple.com/app/id6762495276", live: true },
    android: { url: "https://play.google.com/store/apps/details?id=com.inwoo.pacegraphy", live: true }
  },
  kokcut: {
    name: "KokCut",
    nameKo: "콕컷",
    icon: "img/kokcut.png",
    ko: "좋은 순간만 콕 찍으면, 영상 여러 개가 하나로",
    en: "Tap the best moments. Get one video.",
    shot: "img/kokcut-shot.jpg",
    introKo: "여러 영상을 선택하고, 영상 합치기를 누르면<br>선택된 영상들 중 일부 부분만 자동 선택하여<br>빠르게 합쳐주고, 전환이나 효과를 넣습니다.",
    introEn: "Pick several videos and tap Merge.<br>It automatically picks short parts of each video,<br>joins them quickly, and adds transitions and effects.",
    ios: { url: "https://apps.apple.com/app/id6826712066", live: true },  // 2026-11-14 App Store 출시
    android: { url: "https://play.google.com/store/apps/details?id=com.kokcut.kokcut", live: false, test: "kokcut-test/" }
  },
  ttlog: {
    name: "TT Log",
    nameKo: "뛰뛰로그",
    icon: "img/ttlog.png",
    ko: "수유·기저귀·수면, 잠금 화면에서 한 번에 기록",
    en: "Log feeds, diapers and sleep from the lock screen",
    shot: "img/ttlog-shot.jpg",
    introKo: "마지막 수유가 몇 분 전인지 한눈에 보여요.<br>젖병을 끌어서 양을 맞추고,<br>엄마 아빠가 같은 기록을 함께 봐요.",
    introEn: "See how long ago the last feed was.<br>Drag the bottle to set the amount,<br>and share the same log with your partner.",
    // status: "review" 면 '심사 대기 중', "prep" 이면 '준비 중', 없으면 '곧 출시'. 출시되면 live: true 로 (2026-11-28 App Store 심사 제출)
    ios: { url: "https://apps.apple.com/app/id6840323712", live: false, status: "review" },
    android: { url: "https://play.google.com/store/apps/details?id=com.ttlabs.tt_log", live: false, status: "prep" }
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
