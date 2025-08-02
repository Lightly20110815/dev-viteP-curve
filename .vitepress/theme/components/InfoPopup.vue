<template>
  <div v-if="showPopup" class="popup-overlay">
    <div class="popup-content">
      <h3>📢 来自 Sy 的特别说明</h3>
      <p>
        你好呀！欢迎光临 Sy's Dev Garden。
      </p>
      <p>
        这里只是Sy Yann的测试站点，如果你想看Sy Yann正常的 Blog，请前往我的主站：
      </p>
      <a href="https://ddnsy.fun" target="_blank" class="main-site-link">
        Sy's Digital Garden
      </a>

      <div class="popup-buttons">
        <button class="button-secondary" @click="closeAndNeverShowAgain">不再显示</button>
        <button class="button-primary" @click="closePopup">我明白了</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showPopup = ref(false);

// “我明白了”按钮的逻辑：只在当前页面关闭弹窗
const closePopup = () => {
  showPopup.value = false;
};

// “不再显示”按钮的逻辑：关闭弹窗，并做个永久标记
const closeAndNeverShowAgain = () => {
  showPopup.value = false;
  // 使用 localStorage 存储一个标记，这个标记会一直存在浏览器中
  localStorage.setItem('hideDevSitePopup', 'true');
};

// onMounted 是一个生命周期钩子，在组件加载时执行
onMounted(() => {
  // 在显示弹窗前，先检查 localStorage 是否有“不再显示”的标记
  if (!localStorage.getItem('hideDevSitePopup')) {
    // 如果没有标记，才显示弹窗
    showPopup.value = true;
  }
});
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.popup-content {
  background-color: var(--main-card-background);
  color: var(--main-font-color);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;
  max-width: 90%;
  width: 450px;
  border: 1px solid var(--main-card-border);
}

.popup-content h3 {
  margin-top: 0;
  font-size: 1.5rem;
}

.popup-content p {
  margin: 1.2rem 0;
  line-height: 1.6;
}

.main-site-link {
  display: block;
  margin: 1.5rem 0;
  padding: 12px;
  background-color: var(--main-color-light);
  color: var(--main-color);
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.2s;
}

.main-site-link:hover {
  opacity: 0.8;
  transform: scale(1.02);
}

/* --- 新增样式：按钮容器 --- */
.popup-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem; /* 两个按钮之间的间距 */
  margin-top: 1.5rem;
}

/* --- 修改样式：通用按钮样式 --- */
.popup-buttons button {
  padding: 10px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
}

/* 主按钮 ("我明白了") */
.button-primary {
  background-color: var(--main-color);
  color: white;
}
.button-primary:hover {
  opacity: 0.8;
}

/* 次要按钮 ("不再显示") */
.button-secondary {
  background-color: var(--main-card-border);
  color: var(--main-font-second-color);
}
.button-secondary:hover {
  background-color: var(--main-border-shadow);
}
/* --- 样式修改结束 --- */

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>