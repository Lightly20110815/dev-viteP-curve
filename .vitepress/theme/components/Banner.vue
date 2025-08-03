<template>
  <div v-if="type === 'text'" :class="['banner', bannerType]" id="main-banner">
    <h1 class="title">你好，欢迎来到{{ theme.siteMeta.title }} 👋</h1>
    <div class="subtitle">
      <Transition name="fade" mode="out-in">
        <div class="hitokoto-wrapper" @click="fetchNewHitokoto" :key="displayText">
          <span class="text">
            {{ displayText }}
          </span>
          <span v-if="isHitokotoDisplayed && hitokotoData?.from" class="source">
            —— {{ hitokotoData.from }}
          </span>
        </div>
      </Transition>
    </div>
    <Transition name="fade" mode="out-in">
      <i v-if="height === 'full'" class="iconfont icon-up" @click="scrollToHome" />
    </Transition>
  </div>
  <div
    v-else-if="type === 'page'"
    :class="['banner-page', 's-card', { image }]"
    :style="{
      backgroundImage: image ? `url(${image})` : null,
    }"
  >
    <div class="top">
      <div class="title">
        <span class="title-small">{{ title }}</span>
        <span class="title-big">{{ desc }}</span>
      </div>
      <div class="top-right">
        <slot name="header-slot" />
      </div>
    </div>
    <slot />
    <div class="footer">
      <div class="footer-left">
        {{ footer }}
      </div>
      <div class="footer-right">
        <slot name="footer-slot" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { mainStore } from "@/store";
import { getHitokoto } from "@/api";

const store = mainStore();
const { theme } = useData();
const props = defineProps({
  type: { type: String, default: "text" },
  height: { type: String, default: "half" },
  title: { type: String, default: "这里是标题" },
  desc: { type: String, default: "这里是简介" },
  footer: { type: String, default: "" },
  image: { type: String, default: "" },
});

// --- 逻辑简化开始 ---

const hitokotoData = ref(null);
const hitokotoInitialTimeout = ref(null);
const bannerType = ref(store.bannerType); // 直接从 store 初始化

// 默认显示站点描述
const defaultSlogan = theme.value.siteMeta.description;
// 判断当前是否在显示一言
const isHitokotoDisplayed = ref(false);

// computed 计算最终显示的文本
const displayText = computed(() => {
  return isHitokotoDisplayed.value && hitokotoData.value?.hitokoto
    ? hitokotoData.value.hitokoto
    : defaultSlogan;
});

// 获取一言的函数，保持不变
const getHitokotoData = async () => {
  try {
    const result = await getHitokoto();
    hitokotoData.value = result;
    isHitokotoDisplayed.value = true; // 获取成功，切换到显示一言的状态
  } catch (error) {
    console.error("一言获取失败：", error);
    isHitokotoDisplayed.value = false; // 获取失败，确保显示默认标语
  }
};

// 点击时，直接获取新的一言
const fetchNewHitokoto = async () => {
  // 清除可能还在等待执行的初始定时器
  if (hitokotoInitialTimeout.value) {
    clearTimeout(hitokotoInitialTimeout.value);
  }
  // 立刻获取新的一言
  await getHitokotoData();
};

// --- 逻辑简化结束 ---

// 滚动至首页
const scrollToHome = () => {
  const bannerDom = document.getElementById("main-banner");
  if (!bannerDom) return false;
  scrollTo({
    top: bannerDom.offsetHeight,
    behavior: "smooth",
  });
};

watch(
  () => store.bannerType,
  (val) => {
    bannerType.value = val;
  },
);

onMounted(() => {
  if (props.type === "text") {
    // 页面加载 4 秒后，自动获取并显示第一条一言
    hitokotoInitialTimeout.value = setTimeout(getHitokotoData, 4000);
  }
});

onBeforeUnmount(() => {
  // 组件卸载时，清除还未执行的定时器
  if (hitokotoInitialTimeout.value) {
    clearTimeout(hitokotoInitialTimeout.value);
  }
});
</script>

<style lang="scss" scoped>
/* 为了让新增的“来源”显示更好看，微调一下样式 */
.subtitle {
  width: 80%;
  font-size: 1.25rem;
  opacity: 0.8;
  animation: fade-up-opacity 0.6s 0.1s backwards;
  /* 将最小高度移到 wrapper 上，防止切换时跳动 */
  min-height: 60px; /* 约两行的高度 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.hitokoto-wrapper {
  cursor: pointer; /* 鼠标放上去时显示小手，提示可以点击 */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
}

.source {
  margin-top: 8px;
  font-size: 0.9rem;
  opacity: 0.7;
  align-self: flex-end; /* 让来源靠右对齐 */
}

/* 其他样式保持不变 */
.banner {
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fade-up 0.6s 0.1s backwards;
  transition: height 0.3s;
  &.full {
    opacity: 0;
    height: calc(100vh - 70px);
    padding-bottom: 100px;
    animation: fade-up 0.6s 0.5s forwards;
    .subtitle {
      opacity: 0;
      animation: fade-up-opacity 0.8s 0.5s forwards;
    }
  }
  .title {
    font-family: "Site Title";
    font-weight: bold;
    font-size: 2.75rem;
  }
  .icon-up {
    font-size: 20px;
    position: absolute;
    bottom: 60px;
    left: calc(50% - 10px);
    transform: rotate(180deg);
    animation: moveDown 2s ease-in-out infinite;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    align-items: flex-start;
    height: 240px;
    .title {
      font-size: 2.25rem;
    }
    .subtitle {
      justify-content: flex-start;
      margin-left: 8px;
    }
    .hitokoto-wrapper {
      text-align: left;
      align-items: flex-start;
    }
  }
}
.banner-page {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  min-height: 380px;
  background-size: cover;
  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    .title {
      display: flex;
      flex-direction: column;
      .title-small {
        color: var(--main-font-second-color);
        font-size: 0.875rem;
      }
      .title-big {
        font-size: 2.25rem;
        font-weight: bold;
        line-height: 1.2;
        margin-top: 12px;
      }
    }
  }
  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    .footer-left {
      margin-top: auto;
      color: var(--main-font-second-color);
      opacity: 0.8;
    }
  }
  &.image {
    color: #fff !important;
    .top {
      .title-small {
        color: #fff;
        opacity: 0.6;
      }
    }
    .footer {
      .footer-left {
        color: #fff;
      }
      :deep(.iconfont) {
        color: #fff !important;
      }
    }
  }
  @media (max-width: 1200px) {
    min-height: 300px;
  }
  @media (max-width: 768px) {
    min-height: 260px;
    .top-right,
    .footer-right {
      display: none;
    }
  }
}
</style>