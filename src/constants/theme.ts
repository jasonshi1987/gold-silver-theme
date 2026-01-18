// 主题配置
export const THEMES = {
  gold: {
    name: 'Gold',
    label: '金耀模式',
    primary: '#FFD700',
    secondary: '#B8860B',
    accent: '#DAA520',
    background: {
      from: '#1a1408',
      via: '#2d2410',
      to: '#1a1408',
    },
    particle: 'rgba(255, 215, 0, 0.6)',
    glow: 'rgba(255, 215, 0, 0.3)',
    text: {
      primary: '#FFD700',
      secondary: '#DAA520',
      muted: '#B8860B',
    },
    card: {
      bg: 'rgba(255, 215, 0, 0.05)',
      border: 'rgba(255, 215, 0, 0.2)',
      hover: 'rgba(255, 215, 0, 0.1)',
    },
  },
  silver: {
    name: 'Silver',
    label: '银辉模式',
    primary: '#C0C0C0',
    secondary: '#A8A8A8',
    accent: '#E8E8E8',
    background: {
      from: '#0a0f1a',
      via: '#1a2332',
      to: '#0a0f1a',
    },
    particle: 'rgba(192, 192, 192, 0.6)',
    glow: 'rgba(192, 192, 192, 0.3)',
    text: {
      primary: '#E8E8E8',
      secondary: '#C0C0C0',
      muted: '#94A3B8',
    },
    card: {
      bg: 'rgba(192, 192, 192, 0.05)',
      border: 'rgba(192, 192, 192, 0.2)',
      hover: 'rgba(192, 192, 192, 0.1)',
    },
  },
} as const;

export type ThemeType = keyof typeof THEMES;

// 个人信息
export const PROFILE = {
  name: '宝藏女孩',
  birthday: '1988-06-18',
  zodiac: '双子座 ♊',
  school: '香港科技大学',
  job: '产品经理',
  jobDetail: '手机教育产品规划与定义',
  catName: '屎蛋',
};

// 标签云
export const TAGS = [
  { text: '双子座 ♊', color: '#FFD700' },
  { text: '港科大学霸', color: '#FF6B6B' },
  { text: '产品经理', color: '#4ECDC4' },
  { text: '旅行达人', color: '#45B7D1' },
  { text: '投资高手', color: '#96CEB4' },
  { text: '薅羊毛专家', color: '#FFEAA7' },
  { text: '猫奴', color: '#DDA0DD' },
  { text: '教育产品', color: '#98D8C8' },
];

// 兴趣星球
export const INTERESTS = [
  {
    id: 'investment',
    title: '金银投资家',
    icon: 'Coins',
    description: '实物黄金白银的忠实拥趸，深谙保值增值之道',
    color: '#FFD700',
    stats: '资产配置专家',
  },
  {
    id: 'travel',
    title: '环球旅行家',
    icon: 'Plane',
    description: '足迹遍布世界，每一次旅行都是新的故事',
    color: '#45B7D1',
    stats: '多国旅行经验',
  },
  {
    id: 'savings',
    title: '薅羊毛达人',
    icon: 'Percent',
    description: '精打细算的生活艺术家，省钱也是一种赚钱',
    color: '#96CEB4',
    stats: '省钱小能手',
  },
  {
    id: 'cat',
    title: '猫咪铲屎官',
    icon: 'Cat',
    description: '屎蛋的专属奴才，每天被喵星人治愈',
    color: '#DDA0DD',
    stats: '屎蛋の铲屎官',
  },
];

// 旅行足迹（示例国家）
export const TRAVEL_COUNTRIES = [
  { name: '日本', emoji: '🇯🇵', memory: '樱花与美食' },
  { name: '泰国', emoji: '🇹🇭', memory: '热带风情' },
  { name: '韩国', emoji: '🇰🇷', memory: '时尚之都' },
  { name: '新加坡', emoji: '🇸🇬', memory: '花园城市' },
  { name: '马来西亚', emoji: '🇲🇾', memory: '多元文化' },
  { name: '越南', emoji: '🇻🇳', memory: '法式浪漫' },
  { name: '印尼', emoji: '🇮🇩', memory: '千岛之国' },
  { name: '澳大利亚', emoji: '🇦🇺', memory: '袋鼠王国' },
  { name: '英国', emoji: '🇬🇧', memory: '绅士风度' },
  { name: '法国', emoji: '🇫🇷', memory: '浪漫巴黎' },
  { name: '意大利', emoji: '🇮🇹', memory: '文艺复兴' },
  { name: '西班牙', emoji: '🇪🇸', memory: '热情似火' },
];

// 时间线
export const TIMELINE = [
  { year: '1988', event: '出生于六月，成为可爱的双子座宝宝 ♊', icon: 'Baby' },
  { year: '2006', event: '考入香港科技大学，开启学霸之路 🎓', icon: 'GraduationCap' },
  { year: '2010', event: '毕业后投身产品经理行业 💼', icon: 'Briefcase' },
  { year: '至今', event: '专注手机教育产品，改变学习方式 📱', icon: 'Smartphone' },
];

// 猫咪信息
export const CAT_INFO = {
  name: '屎蛋',
  title: '镇宅神兽',
  traits: ['高冷', '贪吃', '爱撒娇', '会卖萌'],
  quote: '"喵～今天也要好好工作哦！"',
};
