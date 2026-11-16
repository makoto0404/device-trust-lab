document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const search = document.querySelector("#module-search");
  const cards = [...document.querySelectorAll(".module-card")];
  const empty = document.querySelector("#no-results");
  if (search && cards.length) {
    search.addEventListener("input", () => {
      const term = search.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const haystack = `${card.dataset.search || ""} ${card.textContent}`.toLowerCase();
        const match = haystack.includes(term);
        card.hidden = !match;
        if (match) visible++;
      });
      if (empty) empty.hidden = visible !== 0;
    });
  }

  const scoreOutput = document.querySelector("#score-value");
  if (scoreOutput) {
    const controls = [...document.querySelectorAll("[data-signal]")];
    const label = document.querySelector("#risk-label");
    const detail = document.querySelector("#risk-detail");
    const bar = document.querySelector("#score-bar-fill");
    const update = () => {
      let score = 0;
      const reasons = [];
      controls.forEach(control => {
        const points = Number(control.value);
        score += points;
        if (points < 0) reasons.push(`${control.dataset.name} 與登錄基準不同`);
        else if (points > 0) reasons.push(`${control.dataset.name} 與登錄基準一致`);
      });
      scoreOutput.textContent = score > 0 ? `+${score}` : String(score);
      const normalized = Math.max(0, Math.min(100, (score + 20) / 40 * 100));
      if (bar) bar.style.width = `${normalized}%`;
      if (score >= 8) {
        label.textContent = "低風險示例：訊號大致一致";
        detail.textContent = "目前輸入的示範訊號多數符合基準。真實系統仍應搭配身分、行為與環境資訊，不應只憑此分數放行。";
      } else if (score >= 0) {
        label.textContent = "中度注意：建議補充驗證";
        detail.textContent = "部分訊號不一致或資訊不足。可要求重新驗證、檢查裝置變更紀錄，並保留人工覆核空間。";
      } else {
        label.textContent = "較高風險示例：需要進一步調查";
        detail.textContent = "多項示範訊號與基準不同。這不代表裝置必然遭到入侵，可能是升級、維修或合法環境變動。";
      }
      detail.textContent += reasons.length ? ` 訊號摘要：${reasons.join("；")}。` : "";
    };
    controls.forEach(control => control.addEventListener("change", update));
    const reset = document.querySelector("#reset-lab");
    if (reset) reset.addEventListener("click", () => {
      controls.forEach(control => control.value = "5");
      update();
    });
    update();
  }
});
