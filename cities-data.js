const cities = [
  { name: '北京', province: '北京', lat: 39.9042, lng: 116.4074, themeColor: '#c0392b', isPopular: true, cityCode: '1', altitude: 43, image: 'https://aka.doubaocdn.com/s/FmKt1wmTCB' },
  { name: '天津', province: '天津', lat: 39.0842, lng: 117.2009, themeColor: '#3498db', cityCode: '2', altitude: 3.3, image: 'https://aka.doubaocdn.com/s/4YqG1wmTCB' },
  { name: '上海', province: '上海', lat: 31.2304, lng: 121.4737, themeColor: '#2c3e50', isPopular: true, cityCode: '3', altitude: 4, image: 'https://aka.doubaocdn.com/s/D0wH1wmTCB' },
  { name: '重庆', province: '重庆', lat: 29.4316, lng: 106.9123, themeColor: '#e74c3c', cityCode: '4', altitude: 239, image: 'https://aka.doubaocdn.com/s/O7dO1wmTCB' },
  { name: '石家庄', province: '河北', lat: 38.0423, lng: 114.5025, themeColor: '#1abc9c', cityCode: '5', altitude: 81, image: 'https://aka.doubaocdn.com/s/z6sI1wmTCB' },
  { name: '太原', province: '山西', lat: 37.8706, lng: 112.5489, themeColor: '#f39c12', cityCode: '6', altitude: 778, image: 'https://aka.doubaocdn.com/s/U0Hu1wmTCB' },
  { name: '呼和浩特', province: '内蒙古', lat: 40.8416, lng: 111.7510, themeColor: '#9b59b6', cityCode: '7', altitude: 1063, image: 'https://aka.doubaocdn.com/s/PolO1wmTCB' },
  { name: '沈阳', province: '辽宁', lat: 41.8057, lng: 123.4315, themeColor: '#34495e', cityCode: '8', altitude: 44, image: 'https://aka.doubaocdn.com/s/wM9P1wmTCB' },
  { name: '长春', province: '吉林', lat: 43.8170, lng: 125.3235, themeColor: '#16a085', cityCode: '9', altitude: 237, image: 'https://aka.doubaocdn.com/s/21Qd1wmTCB' },
  { name: '哈尔滨', province: '黑龙江', lat: 45.8038, lng: 126.5349, themeColor: '#27ae60', cityCode: '10', altitude: 145, image: 'https://aka.doubaocdn.com/s/92rG1wmTCB' },
  { name: '南京', province: '江苏', lat: 32.0603, lng: 118.7969, themeColor: '#d35400', isPopular: true, cityCode: '11', altitude: 8.9, image: 'https://aka.doubaocdn.com/s/q5xN1wmTCB' },
  { name: '杭州', province: '浙江', lat: 30.2741, lng: 120.1551, themeColor: '#2ecc71', isPopular: true, cityCode: '12', altitude: 43, image: 'https://aka.doubaocdn.com/s/A8kE1wmTCB' },
  { name: '合肥', province: '安徽', lat: 31.8206, lng: 117.2272, themeColor: '#f1c40f', cityCode: '13', altitude: 27, image: 'https://aka.doubaocdn.com/s/Z3wL1wmTCB' },
  { name: '福州', province: '福建', lat: 26.0745, lng: 119.2965, themeColor: '#e67e22', cityCode: '14', altitude: 84, image: 'https://aka.doubaocdn.com/s/Y4vM1wmTCB' },
  { name: '南昌', province: '江西', lat: 28.6824, lng: 115.8576, themeColor: '#95a5a6', cityCode: '15', altitude: 46, image: 'https://aka.doubaocdn.com/s/X6uK1wmTCB' },
  { name: '济南', province: '山东', lat: 36.6512, lng: 117.1201, themeColor: '#7f8c8d', cityCode: '16', altitude: 51, image: 'https://aka.doubaocdn.com/s/W8tJ1wmTCB' },
  { name: '郑州', province: '河南', lat: 34.7466, lng: 113.6253, themeColor: '#3498db', cityCode: '17', altitude: 110, image: 'https://aka.doubaocdn.com/s/V0sH1wmTCB' },
  { name: '武汉', province: '湖北', lat: 30.5928, lng: 114.3055, themeColor: '#e91e63', isPopular: true, cityCode: '18', altitude: 23, image: 'https://aka.doubaocdn.com/s/T2rG1wmTCB' },
  { name: '长沙', province: '湖南', lat: 28.2280, lng: 112.9388, themeColor: '#ff5722', isPopular: true, cityCode: '19', altitude: 44, image: 'https://aka.doubaocdn.com/s/R4qF1wmTCB' },
  { name: '广州', province: '广东', lat: 23.1291, lng: 113.2644, themeColor: '#00bcd4', isPopular: true, cityCode: '20', altitude: 13, image: 'https://aka.doubaocdn.com/s/Q6pE1wmTCB' },
  { name: '南宁', province: '广西', lat: 22.8170, lng: 108.3665, themeColor: '#8bc34a', cityCode: '21', altitude: 72, image: 'https://aka.doubaocdn.com/s/P8nD1wmTCB' },
  { name: '海口', province: '海南', lat: 20.0447, lng: 110.3464, themeColor: '#03a9f4', isPopular: true, cityCode: '22', altitude: 14, image: 'https://aka.doubaocdn.com/s/N0mC1wmTCB' },
  { name: '成都', province: '四川', lat: 30.5728, lng: 104.0668, themeColor: '#ff9800', isPopular: true, cityCode: '23', altitude: 506, image: 'https://aka.doubaocdn.com/s/M2lB1wmTCB' },
  { name: '贵阳', province: '贵州', lat: 26.6479, lng: 106.6302, themeColor: '#607d8b', cityCode: '24', altitude: 1071, image: 'https://aka.doubaocdn.com/s/L4kA1wmTCB' },
  { name: '昆明', province: '云南', lat: 24.8820, lng: 102.8344, themeColor: '#795548', isPopular: true, cityCode: '25', altitude: 1891, image: 'https://aka.doubaocdn.com/s/K6jZ1wmTCB' },
  { name: '拉萨', province: '西藏', lat: 29.6540, lng: 91.1717, themeColor: '#4caf50', isPopular: true, cityCode: '26', altitude: 3650, image: 'https://aka.doubaocdn.com/s/J8iY1wmTCB' },
  { name: '西安', province: '陕西', lat: 34.2619, lng: 108.9482, themeColor: '#8e44ad', isPopular: true, cityCode: '27', altitude: 405, image: 'https://aka.doubaocdn.com/s/H0hX1wmTCB' },
  { name: '兰州', province: '甘肃', lat: 36.0671, lng: 103.8343, themeColor: '#607d8b', cityCode: '28', altitude: 1520, image: 'https://aka.doubaocdn.com/s/G2wW1wmTCB' },
  { name: '西宁', province: '青海', lat: 36.6171, lng: 101.7782, themeColor: '#009688', cityCode: '29', altitude: 2261, image: 'https://aka.doubaocdn.com/s/F4vV1wmTCB' },
  { name: '银川', province: '宁夏', lat: 38.4870, lng: 106.2303, themeColor: '#ffc107', cityCode: '30', altitude: 1111, image: 'https://aka.doubaocdn.com/s/E6uU1wmTCB' },
  { name: '乌鲁木齐', province: '新疆', lat: 43.8256, lng: 87.6168, themeColor: '#ff5722', cityCode: '31', altitude: 805, image: 'https://aka.doubaocdn.com/s/D8tT1wmTCB' },
];

const cityTravelTips = {
  '北京': ['建议提前预约故宫、颐和园等热门景点门票', '春秋季节气温适宜，夏季炎热多雨', '市区交通便利，建议使用地铁出行', '尊重历史文化，参观古迹时遵守规定'],
  '天津': ['海河夜景非常美丽，建议晚上游览', '夏季炎热潮湿，注意防晒防暑', '天津小吃丰富，建议品尝狗不理包子、煎饼果子', '海滨地区风大，注意防风'],
  '上海': ['外滩夜景美不胜收，建议晚上前往', '梅雨季节多阴雨，注意携带雨具', '地铁网络发达，出行方便快捷', '陆家嘴地区高楼密集，注意安全'],
  '重庆': ['山城地形复杂，建议穿舒适的鞋子', '夏季炎热潮湿，注意防暑降温', '火锅非常有名，建议品尝正宗重庆火锅', '夜景非常美丽，洪崖洞必去'],
  '石家庄': ['春秋季节气候宜人，适合旅游', '冬季寒冷干燥，注意保暖保湿', '赵州桥是著名古迹，建议前往参观', '太行山脉风景秀丽，适合户外'],
  '太原': ['海拔较高，早晚温差大，注意保暖', '春秋季节风沙较大，注意防护', '晋祠是著名古迹，建议参观', '面食文化丰富，建议品尝刀削面'],
  '呼和浩特': ['海拔较高，紫外线强，注意防晒', '草原地区昼夜温差大，带好保暖衣物', '夏季是最佳旅游季节，草原风光美丽', '尊重蒙古族文化习俗'],
  '沈阳': ['冬季寒冷漫长，注意防寒保暖', '春秋季节短暂，夏季凉爽舒适', '沈阳故宫是著名古迹，建议参观', '东北美食丰富，建议品尝铁锅炖'],
  '长春': ['冬季寒冷，冰雪旅游发达', '夏季凉爽，适合避暑', '伪满皇宫是著名景点，建议参观', '长影世纪城是电影主题乐园'],
  '哈尔滨': ['冬季非常寒冷，注意保暖防冻', '冰雪大世界是冬季必去景点', '中央大街充满异国情调，建议漫步', '俄式美食值得品尝'],
  '南京': ['建议提前预约南京博物院门票', '夏季炎热，冬季湿冷', '中山陵、明孝陵是著名景点', '夫子庙夜景美丽，建议夜游'],
  '杭州': ['西湖美景四季皆宜，建议安排充足时间', '夏季炎热多雨，注意防暑防雨', '龙井茶闻名天下，建议品尝', '丝绸制品是特色纪念品'],
  '合肥': ['春秋季节气候宜人', '巢湖风光秀丽，建议游览', '徽菜独具特色，建议品尝', '三国文化浓厚，逍遥津公园值得一去'],
  '福州': ['亚热带气候，夏季炎热多雨', '海滨城市，海鲜丰富', '三坊七巷是历史文化街区，建议游览', '鼓山风景秀丽，适合登山'],
  '南昌': ['夏季炎热，冬季阴冷', '滕王阁是著名古迹，建议参观', '赣菜口味较重，建议品尝', '红色旅游资源丰富'],
  '济南': ['夏季炎热多雨，冬季寒冷干燥', '趵突泉、大明湖是必去景点', '泉水众多，建议品尝泉水泡茶', '鲁菜是四大菜系之首'],
  '郑州': ['春秋季节气候适宜', '少林寺是著名景点，建议前往', '黄河游览区可以欣赏母亲河', '烩面是特色美食'],
  '武汉': ['夏季非常炎热，称为火炉城市', '黄鹤楼是著名古迹，建议登楼远眺', '长江大桥夜景美丽', '热干面是特色早餐'],
  '长沙': ['夏季炎热，冬季湿冷', '岳麓山、橘子洲是必去景点', '湘菜口味较重，建议品尝', '湖南卫视文化浓厚'],
  '广州': ['亚热带气候，全年温暖湿润', '夏季多雨，注意携带雨具', '早茶文化丰富，建议体验', '珠江夜景美丽，建议夜游'],
  '南宁': ['亚热带气候，全年温暖', '夏季多雨，注意防雨', '螺蛳粉是特色美食，建议品尝', '青秀山风景秀丽'],
  '海口': ['热带海洋气候，全年温暖', '夏季炎热，注意防晒', '海鲜丰富，建议品尝', '海滩众多，适合休闲度假'],
  '成都': ['春秋季节气候宜人', '熊猫基地是必去景点', '川菜闻名天下，建议品尝正宗川菜', '茶馆文化浓厚，建议体验'],
  '贵阳': ['海拔较高，夏季凉爽，适合避暑', '冬季阴冷潮湿', '酸汤鱼是特色美食', '喀斯特地貌景观独特'],
  '昆明': ['海拔较高，紫外线强，注意防晒', '四季如春，气候宜人', '滇池风光秀丽，建议游览', '少数民族文化丰富'],
  '拉萨': ['海拔很高，注意高原反应', '紫外线极强，注意防晒', '早晚温差大，带好保暖衣物', '尊重藏族文化和宗教信仰'],
  '西安': ['建议提前预约兵马俑门票', '春秋季节气候适宜', '历史文化悠久，古迹众多', '面食文化丰富，建议品尝羊肉泡馍'],
  '兰州': ['海拔较高，紫外线强', '夏季炎热，冬季寒冷', '黄河穿城而过，中山桥是标志', '牛肉面是特色美食'],
  '西宁': ['海拔较高，注意高原反应', '夏季凉爽，适合避暑', '青海湖是著名景点', '藏族文化特色'],
  '银川': ['夏季炎热，冬季寒冷', '沙漠风光独特，建议游览沙湖', '回族文化浓厚，注意尊重习俗', '手抓羊肉是特色美食'],
  '乌鲁木齐': ['夏季炎热，冬季寒冷漫长', '昼夜温差大，注意保暖', '天山天池是著名景点', '少数民族文化丰富'],
};

const getCityTravelTips = (cityName) => {
  return cityTravelTips[cityName] || [
    '建议提前预约热门景点门票',
    '注意当地天气变化',
    '尊重当地文化习俗',
    '保管好个人财物'
  ];
};

window.getCityTravelTips = getCityTravelTips;

const cityBudgetData = {
  '北京': { low: 800, medium: 1500, high: 3000, description: '一线城市消费水平较高' },
  '天津': { low: 500, medium: 1000, high: 2000, description: '消费适中，性价比高' },
  '上海': { low: 1000, medium: 2000, high: 4000, description: '国际大都市，消费水平高' },
  '重庆': { low: 400, medium: 800, high: 1500, description: '消费较低，美食实惠' },
  '石家庄': { low: 350, medium: 700, high: 1200, description: '二线城市，消费适中' },
  '太原': { low: 350, medium: 700, high: 1200, description: '消费较低，性价比高' },
  '呼和浩特': { low: 400, medium: 800, high: 1500, description: '特色餐饮丰富，消费适中' },
  '沈阳': { low: 400, medium: 800, high: 1500, description: '东北美食实惠，消费较低' },
  '长春': { low: 350, medium: 700, high: 1200, description: '消费较低，适合预算游' },
  '哈尔滨': { low: 400, medium: 800, high: 1500, description: '冬季旅游热门，消费适中' },
  '南京': { low: 600, medium: 1200, high: 2000, description: '历史名城，消费适中' },
  '杭州': { low: 700, medium: 1400, high: 2500, description: '旅游热门城市，消费较高' },
  '合肥': { low: 400, medium: 800, high: 1500, description: '消费适中，性价比高' },
  '福州': { low: 500, medium: 1000, high: 1800, description: '海滨城市，消费适中' },
  '南昌': { low: 400, medium: 800, high: 1500, description: '消费较低，美食丰富' },
  '济南': { low: 500, medium: 1000, high: 1800, description: '消费适中，鲁菜美味' },
  '郑州': { low: 450, medium: 900, high: 1600, description: '交通枢纽，消费适中' },
  '武汉': { low: 500, medium: 1000, high: 1800, description: '美食之都，消费适中' },
  '长沙': { low: 500, medium: 1000, high: 1800, description: '娱乐之都，消费适中' },
  '广州': { low: 700, medium: 1400, high: 2500, description: '一线城市，消费较高' },
  '南宁': { low: 400, medium: 800, high: 1500, description: '消费较低，美食丰富' },
  '海口': { low: 600, medium: 1200, high: 2000, description: '海滨度假，消费适中' },
  '成都': { low: 500, medium: 1000, high: 1800, description: '美食之都，消费适中' },
  '贵阳': { low: 400, medium: 800, high: 1500, description: '消费较低，性价比高' },
  '昆明': { low: 500, medium: 1000, high: 1800, description: '四季如春，消费适中' },
  '拉萨': { low: 600, medium: 1200, high: 2500, description: '高原旅游，消费较高' },
  '西安': { low: 500, medium: 1000, high: 1800, description: '历史名城，消费适中' },
  '兰州': { low: 400, medium: 800, high: 1500, description: '消费较低，拉面实惠' },
  '西宁': { low: 500, medium: 1000, high: 1800, description: '高原城市，消费适中' },
  '银川': { low: 450, medium: 900, high: 1600, description: '消费适中，美食丰富' },
  '乌鲁木齐': { low: 500, medium: 1000, high: 2000, description: '消费适中，特色美食多' },
};

const getCityBudget = (cityName, days) => {
  const budget = cityBudgetData[cityName] || { low: 500, medium: 1000, high: 1800, description: '消费水平适中' };
  return {
    low: budget.low * days,
    medium: budget.medium * days,
    high: budget.high * days,
    description: budget.description,
    daily: budget,
  };
};

window.getCityBudget = getCityBudget;

const getCityByName = (name) => cities.find(c => c.name === name);
const getPopularCities = () => cities.filter(c => c.isPopular);
const searchCities = (keyword) => {
  const kw = keyword.toLowerCase();
  return cities.filter(c => c.name.toLowerCase().includes(kw) || c.province.toLowerCase().includes(kw));
};
const getAllCities = () => cities;

const haversineDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

const estimateTravelTime = (distance) => {
  if (distance < 1) return { mode: '步行', time: Math.round(distance * 12), distance: distance.toFixed(1) };
  if (distance < 5) return { mode: '地铁/公交', time: Math.round(distance * 15), distance: distance.toFixed(1) };
  if (distance < 30) return { mode: '地铁/公交', time: Math.round(distance * 8), distance: distance.toFixed(1) };
  return { mode: '打车/自驾', time: Math.round(distance * 1.5), distance: distance.toFixed(1) };
};

const getRouteInfo = (from, to) => {
  const distance = haversineDistance(from.lat, from.lng, to.lat, to.lng);
  return { ...estimateTravelTime(distance), from: from.name, to: to.name };
};

const typeImages = {
  '古迹': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Beijing_Summer_Palace_Kunming_Lake.jpg/400px-Beijing_Summer_Palace_Kunming_Lake.jpg',
  '寺庙': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Temple_of_Heaven_Beijing_2012.jpg/400px-Temple_of_Heaven_Beijing_2012.jpg',
  '街区': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Qianmen_Street_Beijing.jpg/400px-Qianmen_Street_Beijing.jpg',
  '自然': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Hangzhou_West_Lake.jpg/400px-Hangzhou_West_Lake.jpg',
  '园林': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Beijing_Summer_Palace_Kunming_Lake.jpg/400px-Beijing_Summer_Palace_Kunming_Lake.jpg',
  '现代': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Shanghai_Oriental_Pearl_Tower.jpg/400px-Shanghai_Oriental_Pearl_Tower.jpg',
  '博物馆': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/National_Museum_of_China_Beijing.jpg/400px-National_Museum_of_China_Beijing.jpg',
  '娱乐': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Beijing_National_Stadium_Night.jpg/400px-Beijing_National_Stadium_Night.jpg',
};

const attractionImages = {
  '布达拉宫': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Potala_Palace_Lhasa_Tibet.jpg/400px-Potala_Palace_Lhasa_Tibet.jpg',
  '大昭寺': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Jokhang_Temple_Lhasa.jpg/400px-Jokhang_Temple_Lhasa.jpg',
  '八廓街': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Barkhor_Street_Lhasa.jpg/400px-Barkhor_Street_Lhasa.jpg',
  '纳木错': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Nam_Co_Lake_Tibet.jpg/400px-Nam_Co_Lake_Tibet.jpg',
  '羊卓雍错': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Yamdrok_Tso_Lake_Tibet.jpg/400px-Yamdrok_Tso_Lake_Tibet.jpg',
  '罗布林卡': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Norbulingka_Palace_Lhasa.jpg/400px-Norbulingka_Palace_Lhasa.jpg',
  '哲蚌寺': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Drepung_Monastery_Lhasa.jpg/400px-Drepung_Monastery_Lhasa.jpg',
  '色拉寺': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Sera_Monastery_Lhasa.jpg/400px-Sera_Monastery_Lhasa.jpg',
  '甘丹寺': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Ganden_Monastery_Tibet.jpg/400px-Ganden_Monastery_Tibet.jpg',
  '药王山': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Yaowangshan_Lhasa.jpg/400px-Yaowangshan_Lhasa.jpg',
  '小昭寺': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Xiaozhao_Temple_Lhasa.jpg/400px-Xiaozhao_Temple_Lhasa.jpg',
  '扎基寺': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zhagui_Temple_Lhasa.jpg/400px-Zhagui_Temple_Lhasa.jpg',
  '楚布寺': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Drupon_Temple_Lhasa.jpg/400px-Drupon_Temple_Lhasa.jpg',
  '直贡梯寺': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Drepung_Monastery_Lhasa.jpg/400px-Drepung_Monastery_Lhasa.jpg',
  '桑耶寺': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Samye_Monastery_Tibet.jpg/400px-Samye_Monastery_Tibet.jpg',
  '雍布拉康': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Yumbulagang_Palace_Tibet.jpg/400px-Yumbulagang_Palace_Tibet.jpg',
  '青朴修行地': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Qingpu_Tibet.jpg/400px-Qingpu_Tibet.jpg',
  '羊八井温泉': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Yangbajing_Hot_Spring.jpg/400px-Yangbajing_Hot_Spring.jpg',
  '纳木错圣象天门': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Nam_Co_Lake_Tibet.jpg/400px-Nam_Co_Lake_Tibet.jpg',
  '念青唐古拉山': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nianqing_Tanggula_Mountains.jpg/400px-Nianqing_Tanggula_Mountains.jpg',
  '藏北草原': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Northern_Tibet_Plateau.jpg/400px-Northern_Tibet_Plateau.jpg',
  '乃琼寺': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nechung_Monastery_Lhasa.jpg/400px-Nechung_Monastery_Lhasa.jpg',
  '林芝': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Linzhi_Tibet.jpg/400px-Linzhi_Tibet.jpg',
  '鲁朗林海': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lulang_Forest_Sea.jpg/400px-Lulang_Forest_Sea.jpg',
  '雅鲁藏布大峡谷': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Yarlung_Zangbo_Gorge.jpg/400px-Yarlung_Zangbo_Gorge.jpg',
  '天安门': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Tiananmen_Square_Beijing.jpg/400px-Tiananmen_Square_Beijing.jpg',
  '故宫': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Forbidden_City_Beijing.jpg/400px-Forbidden_City_Beijing.jpg',
  '天坛': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Temple_of_Heaven_Beijing_2012.jpg/400px-Temple_of_Heaven_Beijing_2012.jpg',
  '颐和园': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Beijing_Summer_Palace_Kunming_Lake.jpg/400px-Beijing_Summer_Palace_Kunming_Lake.jpg',
  '长城': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Great_Wall_of_China_Badaling.jpg/400px-Great_Wall_of_China_Badaling.jpg',
  '鸟巢': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Beijing_National_Stadium_Night.jpg/400px-Beijing_National_Stadium_Night.jpg',
  '圆明园': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Old_Summer_Palace_Ruins_Beijing.jpg/400px-Old_Summer_Palace_Ruins_Beijing.jpg',
  '南锣鼓巷': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nanluoguxiang_Beijing.jpg/400px-Nanluoguxiang_Beijing.jpg',
  '什刹海': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Shichahai_Beijing.jpg/400px-Shichahai_Beijing.jpg',
  '国家博物馆': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/National_Museum_of_China_Beijing.jpg/400px-National_Museum_of_China_Beijing.jpg',
  '前门大街': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Qianmen_Street_Beijing.jpg/400px-Qianmen_Street_Beijing.jpg',
  '外滩': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Shanghai_Bund_Skyline.jpg/400px-Shanghai_Bund_Skyline.jpg',
  '东方明珠': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Shanghai_Oriental_Pearl_Tower.jpg/400px-Shanghai_Oriental_Pearl_Tower.jpg',
  '城隍庙': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Shanghai_City_God_Temple.jpg/400px-Shanghai_City_God_Temple.jpg',
  '豫园': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Yuyuan_Garden_Shanghai.jpg/400px-Yuyuan_Garden_Shanghai.jpg',
  '南京路': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Nanjing_Road_Shanghai.jpg/400px-Nanjing_Road_Shanghai.jpg',
  '迪士尼': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Shanghai_Disneyland_Castle.jpg/400px-Shanghai_Disneyland_Castle.jpg',
  '陆家嘴': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lujiazui_Shanghai_Skyline.jpg/400px-Lujiazui_Shanghai_Skyline.jpg',
  '田子坊': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Tianzifang_Shanghai.jpg/400px-Tianzifang_Shanghai.jpg',
  '武康路': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Wukang_Road_Shanghai.jpg/400px-Wukang_Road_Shanghai.jpg',
  '世纪公园': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Century_Park_Shanghai.jpg/400px-Century_Park_Shanghai.jpg',
  '西湖': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Hangzhou_West_Lake.jpg/400px-Hangzhou_West_Lake.jpg',
  '雷峰塔': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Leifeng_Tower_Hangzhou.jpg/400px-Leifeng_Tower_Hangzhou.jpg',
  '灵隐寺': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lingyin_Temple_Hangzhou.jpg/400px-Lingyin_Temple_Hangzhou.jpg',
  '千岛湖': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Thousand_Islands_Lake_Hangzhou.jpg/400px-Thousand_Islands_Lake_Hangzhou.jpg',
  '断桥残雪': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Duanqiao_Hangzhou.jpg/400px-Duanqiao_Hangzhou.jpg',
  '苏堤春晓': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Sudi_Causeway_Hangzhou.jpg/400px-Sudi_Causeway_Hangzhou.jpg',
  '河坊街': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Hefang_Street_Hangzhou.jpg/400px-Hefang_Street_Hangzhou.jpg',
  '西溪湿地': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Xixi_Wetland_Hangzhou.jpg/400px-Xixi_Wetland_Hangzhou.jpg',
  '九溪烟树': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Jiuxi_Yanshu_Hangzhou.jpg/400px-Jiuxi_Yanshu_Hangzhou.jpg',
  '龙井村': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Longjing_Village_Hangzhou.jpg/400px-Longjing_Village_Hangzhou.jpg',
  '兵马俑': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Terracotta_Army_Xian.jpg/400px-Terracotta_Army_Xian.jpg',
  '大雁塔': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Giant_Wild_Goose_Pagoda_Xian.jpg/400px-Giant_Wild_Goose_Pagoda_Xian.jpg',
  '城墙': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Xian_City_Wall.jpg/400px-Xian_City_Wall.jpg',
  '钟楼': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Xian_Bell_Tower.jpg/400px-Xian_Bell_Tower.jpg',
  '鼓楼': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Xian_Drum_Tower.jpg/400px-Xian_Drum_Tower.jpg',
  '大明宫': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Daming_Palace_Xian.jpg/400px-Daming_Palace_Xian.jpg',
  '回民街': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Muslim_Quarter_Xian.jpg/400px-Muslim_Quarter_Xian.jpg',
  '碑林': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Xian_Beilin_Museum.jpg/400px-Xian_Beilin_Museum.jpg',
  '华山': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Huashan_Mountain_China.jpg/400px-Huashan_Mountain_China.jpg',
  '大唐不夜城': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Datang_Night_City_Xian.jpg/400px-Datang_Night_City_Xian.jpg',
  '都江堰': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dujiangyan_Irrigation_System.jpg/400px-Dujiangyan_Irrigation_System.jpg',
  '宽窄巷子': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Kuanzhai_Alley_Chengdu.jpg/400px-Kuanzhai_Alley_Chengdu.jpg',
  '锦里': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Jinli_Ancient_Street_Chengdu.jpg/400px-Jinli_Ancient_Street_Chengdu.jpg',
  '武侯祠': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Wuhou_Shrine_Chengdu.jpg/400px-Wuhou_Shrine_Chengdu.jpg',
  '杜甫草堂': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Du_Fu_Thatched_Cottage_Chengdu.jpg/400px-Du_Fu_Thatched_Cottage_Chengdu.jpg',
  '大熊猫基地': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Giant_Panda_Chengdu.jpg/400px-Giant_Panda_Chengdu.jpg',
  '春熙路': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Chunxi_Road_Chengdu.jpg/400px-Chunxi_Road_Chengdu.jpg',
  '青城山': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Qingcheng_Mountain_Chengdu.jpg/400px-Qingcheng_Mountain_Chengdu.jpg',
  '三星堆': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Sanxingdui_Museum_Chengdu.jpg/400px-Sanxingdui_Museum_Chengdu.jpg',
  '太古里': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Taikoo_Li_Chengdu.jpg/400px-Taikoo_Li_Chengdu.jpg',
  '黄鹤楼': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Yellow_Crane_Tower_Wuhan.jpg/400px-Yellow_Crane_Tower_Wuhan.jpg',
  '东湖': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/East_Lake_Wuhan.jpg/400px-East_Lake_Wuhan.jpg',
  '户部巷': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Hubuxiang_Wuhan.jpg/400px-Hubuxiang_Wuhan.jpg',
  '长江大桥': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Wuhan_Yangtze_River_Bridge.jpg/400px-Wuhan_Yangtze_River_Bridge.jpg',
  '湖北省博物馆': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Hubei_Provincial_Museum.jpg/400px-Hubei_Provincial_Museum.jpg',
  '橘子洲': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Juzizhou_Changsha.jpg/400px-Juzizhou_Changsha.jpg',
  '岳麓山': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Yuelu_Mountain_Changsha.jpg/400px-Yuelu_Mountain_Changsha.jpg',
  '太平街': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Taiping_Street_Changsha.jpg/400px-Taiping_Street_Changsha.jpg',
  '坡子街': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Pozijie_Changsha.jpg/400px-Pozijie_Changsha.jpg',
  '湖南省博物馆': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Hunan_Provincial_Museum.jpg/400px-Hunan_Provincial_Museum.jpg',
  '广州塔': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Canton_Tower_Guangzhou.jpg/400px-Canton_Tower_Guangzhou.jpg',
  '长隆欢乐世界': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Chimelong_Happy_World_Guangzhou.jpg/400px-Chimelong_Happy_World_Guangzhou.jpg',
  '白云山': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Baiyun_Mountain_Guangzhou.jpg/400px-Baiyun_Mountain_Guangzhou.jpg',
  '沙面岛': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Shamian_Island_Guangzhou.jpg/400px-Shamian_Island_Guangzhou.jpg',
  '北京路': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Beijing_Road_Guangzhou.jpg/400px-Beijing_Road_Guangzhou.jpg',
  '中山陵': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sun_Yat-sen_Mausoleum_Nanjing.jpg/400px-Sun_Yat-sen_Mausoleum_Nanjing.jpg',
  '夫子庙': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Fuzi_Miao_Nanjing.jpg/400px-Fuzi_Miao_Nanjing.jpg',
  '秦淮河': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Qinhuai_River_Nanjing.jpg/400px-Qinhuai_River_Nanjing.jpg',
  '明孝陵': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Ming_Xiaoling_Nanjing.jpg/400px-Ming_Xiaoling_Nanjing.jpg',
  '老门东': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Laomendong_Nanjing.jpg/400px-Laomendong_Nanjing.jpg',
  '三亚湾': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Sanya_Bay_Hainan.jpg/400px-Sanya_Bay_Hainan.jpg',
  '天涯海角': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Tianya_Haijiao_Sanya.jpg/400px-Tianya_Haijiao_Sanya.jpg',
  '亚龙湾': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Yalong_Bay_Sanya.jpg/400px-Yalong_Bay_Sanya.jpg',
  '蜈支洲岛': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Wuzhizhou_Island_Sanya.jpg/400px-Wuzhizhou_Island_Sanya.jpg',
  '海口骑楼老街': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Haikou_Qilou_Street.jpg/400px-Haikou_Qilou_Street.jpg',
  '昆明滇池': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Dianchi_Lake_Kunming.jpg/400px-Dianchi_Lake_Kunming.jpg',
  '翠湖公园': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Cuihu_Park_Kunming.jpg/400px-Cuihu_Park_Kunming.jpg',
  '昆明老街': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Kunming_Old_Street.jpg/400px-Kunming_Old_Street.jpg',
  '云南民族村': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Yunnan_Nationalities_Village.jpg/400px-Yunnan_Nationalities_Village.jpg',
  '滇池': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Dianchi_Lake_Kunming.jpg/400px-Dianchi_Lake_Kunming.jpg',
};

const foodImages = {
  '藏式酥油茶': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Tibetan_butter_tea.jpg/400px-Tibetan_butter_tea.jpg',
  '青稞酒': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Chang_Chinese_wine.jpg/400px-Chang_Chinese_wine.jpg',
  '糌粑': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Tibetan_tsampa.jpg/400px-Tibetan_tsampa.jpg',
  '牦牛肉火锅': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Yak_meat_hotpot.jpg/400px-Yak_meat_hotpot.jpg',
  '藏香猪': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tibetan_pork_dish.jpg/400px-Tibetan_pork_dish.jpg',
  '北京烤鸭': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Peking_duck.jpg/400px-Peking_duck.jpg',
  '炸酱面': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Zha_jiang_mian.jpg/400px-Zha_jiang_mian.jpg',
  '卤煮火烧': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Luzhu_huoshao.jpg/400px-Luzhu_huoshao.jpg',
  '爆肚': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Beijing_baodu.jpg/400px-Beijing_baodu.jpg',
  '涮羊肉': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Shuan_yangrou.jpg/400px-Shuan_yangrou.jpg',
  '南翔小笼包': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Xiaolongbao_Shanghai.jpg/400px-Xiaolongbao_Shanghai.jpg',
  '生煎包': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Shengjianbao.jpg/400px-Shengjianbao.jpg',
  '上海红烧肉': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Red_cooked_pork.jpg/400px-Red_cooked_pork.jpg',
  '蟹壳黄': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Xiekehuang.jpg/400px-Xiekehuang.jpg',
  '排骨年糕': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Paigu_niangao.jpg/400px-Paigu_niangao.jpg',
  '西湖醋鱼': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/West_Lake_vinegar_fish.jpg/400px-West_Lake_vinegar_fish.jpg',
  '龙井虾仁': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Longjing_shrimp.jpg/400px-Longjing_shrimp.jpg',
  '东坡肉': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dongpo_pork.jpg/400px-Dongpo_pork.jpg',
  '叫花鸡': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jiaohua_chicken.jpg/400px-Jiaohua_chicken.jpg',
  '片儿川': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Pianerchuan.jpg/400px-Pianerchuan.jpg',
  '肉夹馍': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Roujiamo.jpg/400px-Roujiamo.jpg',
  '羊肉泡馍': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Xian_paomo.jpg/400px-Xian_paomo.jpg',
  '凉皮': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Xian_liangpi.jpg/400px-Xian_liangpi.jpg',
  '油泼面': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Youpomian.jpg/400px-Youpomian.jpg',
  'biangbiang面': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Biangbiang_noodles.jpg/400px-Biangbiang_noodles.jpg',
  '成都火锅': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Chengdu_hotpot.jpg/400px-Chengdu_hotpot.jpg',
  '麻婆豆腐': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ma_po_tofu.jpg/400px-Ma_po_tofu.jpg',
  '担担面': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Dandan_noodles.jpg/400px-Dandan_noodles.jpg',
  '夫妻肺片': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Fuqi_feipian.jpg/400px-Fuqi_feipian.jpg',
  '回锅肉': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Huiguo_rou.jpg/400px-Huiguo_rou.jpg',
  '热干面': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Wuhan_reganmian.jpg/400px-Wuhan_reganmian.jpg',
  '三鲜豆皮': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Wuhan_doupi.jpg/400px-Wuhan_doupi.jpg',
  '面窝': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Wuhan_mianwo.jpg/400px-Wuhan_mianwo.jpg',
  '欢喜坨': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Huanxituo.jpg/400px-Huanxituo.jpg',
  '糊汤粉': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Wuhan_hutangfen.jpg/400px-Wuhan_hutangfen.jpg',
  '臭豆腐': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Changsha_stinky_tofu.jpg/400px-Changsha_stinky_tofu.jpg',
  '糖油粑粑': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Tangyou_baba.jpg/400px-Tangyou_baba.jpg',
  '口味虾': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Changsha_spicy_crayfish.jpg/400px-Changsha_spicy_crayfish.jpg',
  '剁椒鱼头': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Duojiao_yutou.jpg/400px-Duojiao_yutou.jpg',
  '小炒黄牛肉': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Xiaochao_huangniurou.jpg/400px-Xiaochao_huangniurou.jpg',
  '早茶': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Guangzhou_morning_tea.jpg/400px-Guangzhou_morning_tea.jpg',
  '肠粉': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Guangzhou_cheongfun.jpg/400px-Guangzhou_cheongfun.jpg',
  '烧鹅': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Guangzhou_roast_goose.jpg/400px-Guangzhou_roast_goose.jpg',
  '白切鸡': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Guangzhou_white_cut_chicken.jpg/400px-Guangzhou_white_cut_chicken.jpg',
  '双皮奶': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shuangpinai.jpg/400px-Shuangpinai.jpg',
  '盐水鸭': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Nanjing_salted_duck.jpg/400px-Nanjing_salted_duck.jpg',
  '鸭血粉丝汤': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Nanjing_duck_blood_soup.jpg/400px-Nanjing_duck_blood_soup.jpg',
  '小笼包': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Xiaolongbao_Shanghai.jpg/400px-Xiaolongbao_Shanghai.jpg',
  '桂花糖芋苗': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nanjing_sweet_taro.jpg/400px-Nanjing_sweet_taro.jpg',
  '鸡鸭血汤': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ji_yaxue_tang.jpg/400px-Ji_yaxue_tang.jpg',
};

const getAttractionImage = (name, type) => {
  return attractionImages[name] || typeImages[type] || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&q=80';
};

const getFoodImage = (name) => {
  return foodImages[name] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80';
};

const hotelImages = {
  '拉萨香格里拉大酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Lhasa_hotel_luxury.jpg/400px-Lhasa_hotel_luxury.jpg',
  '拉萨瑞吉度假酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Lhasa_resort_hotel.jpg/400px-Lhasa_resort_hotel.jpg',
  '拉萨洲际酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Lhasa_intercontinental.jpg/400px-Lhasa_intercontinental.jpg',
  '拉萨平措康桑观景酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Lhasa_view_hotel.jpg/400px-Lhasa_view_hotel.jpg',
  '拉萨扎西曲塔酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lhasa_tibetan_hotel.jpg/400px-Lhasa_tibetan_hotel.jpg',
  '拉萨天堂时光民宿': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Lhasa_guesthouse.jpg/400px-Lhasa_guesthouse.jpg',
  '拉萨花间堂民宿': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Lhasa_boutique.jpg/400px-Lhasa_boutique.jpg',
  '拉萨东措国际青年旅舍': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lhasa_hostel.jpg/400px-Lhasa_hostel.jpg',
  '北京王府井希尔顿酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Beijing_wangfujing_hotel.jpg/400px-Beijing_wangfujing_hotel.jpg',
  '北京国贸大酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Beijing_guomao_hotel.jpg/400px-Beijing_guomao_hotel.jpg',
  '北京四季酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Beijing_four_seasons.jpg/400px-Beijing_four_seasons.jpg',
  '北京华尔道夫酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Beijing_waldorf.jpg/400px-Beijing_waldorf.jpg',
  '北京故宫周边民宿': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Beijing_hutong_guesthouse.jpg/400px-Beijing_hutong_guesthouse.jpg',
  '上海香格里拉大酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Shanghai_shangri_la.jpg/400px-Shanghai_shangri_la.jpg',
  '上海外滩华尔道夫酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Shanghai_waldorf.jpg/400px-Shanghai_waldorf.jpg',
  '上海浦东丽思卡尔顿': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shanghai_ritz_carlton.jpg/400px-Shanghai_ritz_carlton.jpg',
  '上海和平饭店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Shanghai_peace_hotel.jpg/400px-Shanghai_peace_hotel.jpg',
  '上海法租界民宿': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Shanghai_french_concession.jpg/400px-Shanghai_french_concession.jpg',
  '杭州康莱德酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Hangzhou_conrad.jpg/400px-Hangzhou_conrad.jpg',
  '杭州西湖国宾馆': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Hangzhou_west_lake_hotel.jpg/400px-Hangzhou_west_lake_hotel.jpg',
  '杭州四季酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Hangzhou_four_seasons.jpg/400px-Hangzhou_four_seasons.jpg',
  '杭州西溪湿地民宿': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Hangzhou_xixi_guesthouse.jpg/400px-Hangzhou_xixi_guesthouse.jpg',
  '成都瑞吉酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Chengdu_st_regis.jpg/400px-Chengdu_st_regis.jpg',
  '成都丽思卡尔顿酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Chengdu_ritz_carlton.jpg/400px-Chengdu_ritz_carlton.jpg',
  '成都希尔顿酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chengdu_hilton.jpg/400px-Chengdu_hilton.jpg',
  '成都宽窄巷子民宿': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Chengdu_kuanzhai_guesthouse.jpg/400px-Chengdu_kuanzhai_guesthouse.jpg',
  '西安威斯汀大酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Xian_westin.jpg/400px-Xian_westin.jpg',
  '西安索菲特传奇酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Xian_sofitel.jpg/400px-Xian_sofitel.jpg',
  '西安大雁塔附近酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Xian_tower_hotel.jpg/400px-Xian_tower_hotel.jpg',
  '西安回民街民宿': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Xian_muslim_guesthouse.jpg/400px-Xian_muslim_guesthouse.jpg',
  '武汉黄鹤楼酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Wuhan_yellow_crane_hotel.jpg/400px-Wuhan_yellow_crane_hotel.jpg',
  '武汉万达瑞华酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Wuhan_wanda_hotel.jpg/400px-Wuhan_wanda_hotel.jpg',
  '武汉江景民宿': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Wuhan_river_view.jpg/400px-Wuhan_river_view.jpg',
  '长沙君悦酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Changsha_grand_hyatt.jpg/400px-Changsha_grand_hyatt.jpg',
  '长沙IFS尼依格罗酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Changsha_ifs_hotel.jpg/400px-Changsha_ifs_hotel.jpg',
  '长沙坡子街民宿': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Changsha_pozijie_guesthouse.jpg/400px-Changsha_pozijie_guesthouse.jpg',
  '广州瑰丽酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Guangzhou_rosewood.jpg/400px-Guangzhou_rosewood.jpg',
  '广州四季酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Guangzhou_four_seasons.jpg/400px-Guangzhou_four_seasons.jpg',
  '广州沙面民宿': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Guangzhou_shamian_guesthouse.jpg/400px-Guangzhou_shamian_guesthouse.jpg',
  '南京金陵饭店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Nanjing_jinling_hotel.jpg/400px-Nanjing_jinling_hotel.jpg',
  '南京凯宾斯基酒店': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Nanjing_kempinski.jpg/400px-Nanjing_kempinski.jpg',
  '南京老门东民宿': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Nanjing_laomendong_guesthouse.jpg/400px-Nanjing_laomendong_guesthouse.jpg',
};

const getHotelImage = (name) => {
  return hotelImages[name] || getHotelIcon('酒店');
};

const getHotelIcon = (type) => {
  const icons = {
    '酒店': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="30" width="80" height="60" rx="3" fill="#4A90D9"/><rect x="20" y="15" width="25" height="20" rx="2" fill="#5BA3E8"/><rect x="55" y="15" width="25" height="20" rx="2" fill="#5BA3E8"/><rect x="30" y="0" width="40" height="20" rx="5" fill="#FFD700"/><rect x="15" y="45" width="15" height="15" fill="#FFFFFF" opacity="0.8"/><rect x="35" y="45" width="15" height="15" fill="#FFFFFF" opacity="0.8"/><rect x="55" y="45" width="15" height="15" fill="#FFFFFF" opacity="0.8"/><rect x="75" y="45" width="10" height="15" fill="#FFFFFF" opacity="0.8"/><rect x="15" y="65" width="15" height="15" fill="#FFFFFF" opacity="0.8"/><rect x="35" y="65" width="15" height="15" fill="#FFFFFF" opacity="0.8"/><rect x="55" y="65" width="15" height="15" fill="#FFFFFF" opacity="0.8"/><rect x="75" y="65" width="10" height="15" fill="#FFFFFF" opacity="0.8"/></svg>`,
    '民宿': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="40" width="70" height="50" rx="5" fill="#8B4513"/><rect x="25" y="25" width="50" height="20" rx="3" fill="#A0522D"/><rect x="35" y="10" width="30" height="20" rx="15" fill="#DEB887"/><circle cx="50" cy="5" r="8" fill="#FFD700"/><rect x="25" y="50" width="15" height="15" fill="#FFFFFF" opacity="0.9"/><rect x="55" y="50" width="15" height="15" fill="#FFFFFF" opacity="0.9"/><circle cx="32" cy="57" r="3" fill="#FFD700"/><circle cx="62" cy="57" r="3" fill="#FFD700"/><path d="M30 85 Q50 75 70 85" fill="#32CD32"/></svg>`,
    '青旅': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="35" width="80" height="55" rx="3" fill="#5D4037"/><rect x="20" y="20" width="60" height="20" rx="2" fill="#795548"/><rect x="35" y="5" width="30" height="20" fill="#FF9800"/><rect x="15" y="45" width="12" height="10" fill="#FFFFFF" opacity="0.8"/><rect x="32" y="45" width="12" height="10" fill="#FFFFFF" opacity="0.8"/><rect x="49" y="45" width="12" height="10" fill="#FFFFFF" opacity="0.8"/><rect x="66" y="45" width="12" height="10" fill="#FFFFFF" opacity="0.8"/><rect x="15" y="60" width="20" height="12" rx="2" fill="#8BC34A"/><rect x="40" y="60" width="20" height="12" rx="2" fill="#8BC34A"/><rect x="65" y="60" width="20" height="12" rx="2" fill="#8BC34A"/></svg>`,
  };
  return `data:image/svg+xml;base64,${btoa(icons[type] || icons['酒店'])}`;
};

const getDefaultAttractions = (cityName) => {
  const city = getCityByName(cityName);
  if (!city) return [];

  const attractionsData = {
    '拉萨': [
      { name: '布达拉宫', type: '古迹', desc: '世界上海拔最高的宫殿群，藏传佛教圣地', lat: 29.6540, lng: 91.1717, isMuseum: true, openTime: '09:00-16:00', ticketPrice: 200, zone: '布达拉宫', priority: 5, duration: 4 },
      { name: '大昭寺', type: '寺庙', desc: '藏传佛教最神圣的寺庙之一', lat: 29.6513, lng: 91.1752, openTime: '09:00-17:00', ticketPrice: 85, zone: '八廓街', priority: 5, duration: 2 },
      { name: '八廓街', type: '街区', desc: '拉萨最古老的街道，藏文化体验地', lat: 29.6517, lng: 91.1745, openTime: '全天开放', ticketPrice: 0, zone: '八廓街', priority: 4, duration: 2 },
      { name: '纳木错', type: '自然', desc: '西藏三大圣湖之一，海拔4718米', lat: 30.7609, lng: 90.9047, openTime: '06:00-18:00', ticketPrice: 120, zone: '纳木错', priority: 5, duration: 8 },
      { name: '羊卓雍错', type: '自然', desc: '西藏三大圣湖之一，被誉为天上的仙境', lat: 29.0310, lng: 90.5686, openTime: '08:00-18:00', ticketPrice: 60, zone: '羊卓雍错', priority: 5, duration: 6 },
      { name: '罗布林卡', type: '园林', desc: '藏式园林的典范，达赖喇嘛的夏宫', lat: 29.6340, lng: 91.1520, openTime: '09:00-17:00', ticketPrice: 60, zone: '罗布林卡', priority: 4, duration: 3 },
      { name: '哲蚌寺', type: '寺庙', desc: '藏传佛教格鲁派最大的寺院', lat: 29.6470, lng: 91.1330, openTime: '09:00-16:00', ticketPrice: 50, zone: '哲蚌寺', priority: 4, duration: 3 },
      { name: '色拉寺', type: '寺庙', desc: '藏传佛教格鲁派六大寺院之一', lat: 29.6740, lng: 91.1760, openTime: '08:00-18:00', ticketPrice: 50, zone: '色拉寺', priority: 4, duration: 2.5 },
      { name: '甘丹寺', type: '寺庙', desc: '藏传佛教格鲁派祖寺', lat: 29.7700, lng: 91.2260, openTime: '08:00-17:00', ticketPrice: 45, zone: '甘丹寺', priority: 4, duration: 4 },
      { name: '药王山', type: '自然', desc: '拍摄布达拉宫最佳位置', lat: 29.6530, lng: 91.1690, openTime: '09:00-18:00', ticketPrice: 2, zone: '布达拉宫', priority: 3, duration: 1 },
      { name: '小昭寺', type: '寺庙', desc: '藏传佛教格鲁派寺院，与大昭寺齐名', lat: 29.6500, lng: 91.1700, openTime: '09:00-17:00', ticketPrice: 20, zone: '八廓街', priority: 4, duration: 1.5 },
      { name: '扎基寺', type: '寺庙', desc: '藏传佛教格鲁派寺院，财神庙', lat: 29.6560, lng: 91.1860, openTime: '08:00-18:00', ticketPrice: 0, zone: '扎基寺', priority: 3, duration: 1 },
      { name: '楚布寺', type: '寺庙', desc: '藏传佛教噶玛噶举派主寺', lat: 29.7400, lng: 90.9600, openTime: '08:00-18:00', ticketPrice: 40, zone: '楚布寺', priority: 4, duration: 3 },
      { name: '直贡梯寺', type: '寺庙', desc: '藏传佛教直贡噶举派主寺，天葬台', lat: 29.9400, lng: 91.3600, openTime: '08:00-18:00', ticketPrice: 30, zone: '直贡梯寺', priority: 4, duration: 4 },
      { name: '桑耶寺', type: '寺庙', desc: '西藏第一座寺院，藏传佛教宁玛派主寺', lat: 29.2100, lng: 91.6200, openTime: '08:00-18:00', ticketPrice: 40, zone: '桑耶寺', priority: 5, duration: 4 },
      { name: '雍布拉康', type: '古迹', desc: '西藏第一座宫殿，吐蕃王朝早期王宫', lat: 29.1400, lng: 91.7200, openTime: '09:00-18:00', ticketPrice: 30, zone: '雍布拉康', priority: 4, duration: 2 },
      { name: '青朴修行地', type: '自然', desc: '藏传佛教著名修行圣地，桑耶寺后山', lat: 29.2000, lng: 91.6000, openTime: '全天开放', ticketPrice: 0, zone: '桑耶寺', priority: 3, duration: 3 },
      { name: '羊八井温泉', type: '娱乐', desc: '西藏著名温泉，地热资源丰富', lat: 29.8300, lng: 90.5000, openTime: '09:00-21:00', ticketPrice: 98, zone: '羊八井', priority: 4, duration: 3 },
      { name: '纳木错圣象天门', type: '自然', desc: '纳木错北岸景点，圣象天门奇观', lat: 30.7800, lng: 90.8600, openTime: '06:00-18:00', ticketPrice: 160, zone: '纳木错', priority: 5, duration: 6 },
      { name: '念青唐古拉山', type: '自然', desc: '西藏著名山脉，纳木错守护神', lat: 30.5000, lng: 90.8000, openTime: '全天开放', ticketPrice: 0, zone: '纳木错', priority: 4, duration: 2 },
      { name: '藏北草原', type: '自然', desc: '西藏北部广袤草原，牛羊成群', lat: 30.0000, lng: 91.0000, openTime: '全天开放', ticketPrice: 0, zone: '藏北草原', priority: 3, duration: 4 },
      { name: '乃琼寺', type: '寺庙', desc: '藏传佛教格鲁派寺院，哲蚌寺属寺', lat: 29.6400, lng: 91.1400, openTime: '09:00-17:00', ticketPrice: 20, zone: '哲蚌寺', priority: 3, duration: 1.5 },
      { name: '林芝', type: '自然', desc: '西藏江南，桃花盛开之地', lat: 29.6500, lng: 94.3300, openTime: '全天开放', ticketPrice: 0, zone: '林芝', priority: 5, duration: 8 },
      { name: '鲁朗林海', type: '自然', desc: '林芝著名景点，高山草甸森林', lat: 29.9700, lng: 94.6800, openTime: '全天开放', ticketPrice: 60, zone: '林芝', priority: 4, duration: 3 },
      { name: '雅鲁藏布大峡谷', type: '自然', desc: '世界最深峡谷，壮丽景观', lat: 29.2500, lng: 95.0000, openTime: '08:00-18:00', ticketPrice: 290, zone: '林芝', priority: 5, duration: 6 },
      { name: '南迦巴瓦峰', type: '自然', desc: '中国最美十大名山之首', lat: 29.6200, lng: 95.0500, openTime: '全天开放', ticketPrice: 0, zone: '林芝', priority: 5, duration: 2 },
      { name: '米林县', type: '自然', desc: '雅鲁藏布江大峡谷入口处', lat: 29.1800, lng: 94.2800, openTime: '全天开放', ticketPrice: 0, zone: '林芝', priority: 3, duration: 3 },
      { name: '波密县', type: '自然', desc: '西藏小瑞士，冰川之乡', lat: 29.8000, lng: 95.7800, openTime: '全天开放', ticketPrice: 0, zone: '林芝', priority: 4, duration: 4 },
      { name: '然乌湖', type: '自然', desc: '高原冰川湖，景色绝美', lat: 30.0500, lng: 96.7500, openTime: '全天开放', ticketPrice: 0, zone: '林芝', priority: 5, duration: 3 },
      { name: '日喀则', type: '古迹', desc: '西藏第二大城市，扎什伦布寺所在地', lat: 29.2400, lng: 88.8900, openTime: '全天开放', ticketPrice: 0, zone: '日喀则', priority: 5, duration: 6 },
      { name: '扎什伦布寺', type: '寺庙', desc: '藏传佛教格鲁派六大寺院之一', lat: 29.2400, lng: 88.8900, openTime: '09:00-17:00', ticketPrice: 100, zone: '日喀则', priority: 5, duration: 3 },
      { name: '珠穆朗玛峰', type: '自然', desc: '世界最高峰，海拔8848米', lat: 27.9881, lng: 86.9250, openTime: '全天开放', ticketPrice: 180, zone: '珠峰', priority: 5, duration: 8 },
      { name: '绒布寺', type: '寺庙', desc: '世界海拔最高的寺院，珠峰观景最佳点', lat: 28.0200, lng: 86.8600, openTime: '08:00-18:00', ticketPrice: 30, zone: '珠峰', priority: 4, duration: 2 },
      { name: '萨迦寺', type: '寺庙', desc: '藏传佛教萨迦派主寺，千年古寺', lat: 28.8200, lng: 88.0000, openTime: '09:00-18:00', ticketPrice: 45, zone: '日喀则', priority: 4, duration: 3 },
      { name: '白居寺', type: '寺庙', desc: '藏传佛教各派共存的寺院，十万佛塔', lat: 28.9000, lng: 89.5000, openTime: '09:00-18:00', ticketPrice: 60, zone: '日喀则', priority: 4, duration: 2 },
      { name: '宗山古堡', type: '古迹', desc: '江孜抗英遗址，英雄城', lat: 28.9000, lng: 89.6200, openTime: '09:00-18:00', ticketPrice: 30, zone: '日喀则', priority: 4, duration: 1.5 },
      { name: '卡若拉冰川', type: '自然', desc: '西藏三大大陆型冰川之一', lat: 28.8800, lng: 90.5200, openTime: '全天开放', ticketPrice: 50, zone: '羊卓雍错', priority: 4, duration: 1 },
      { name: '满拉水库', type: '自然', desc: '西藏最美水库之一，蓝绿色湖水', lat: 28.9500, lng: 90.4500, openTime: '全天开放', ticketPrice: 0, zone: '羊卓雍错', priority: 3, duration: 0.5 },
      { name: '帕拉庄园', type: '古迹', desc: '西藏最大的贵族庄园', lat: 28.9200, lng: 89.6200, openTime: '09:00-18:00', ticketPrice: 30, zone: '日喀则', priority: 3, duration: 1.5 },
      { name: '纳木那尼峰', type: '自然', desc: '藏地圣山，海拔7694米', lat: 30.4200, lng: 81.3000, openTime: '全天开放', ticketPrice: 0, zone: '阿里', priority: 4, duration: 2 },
      { name: '冈仁波齐', type: '自然', desc: '神山之王，藏传佛教四大神山之首', lat: 31.0000, lng: 81.3800, openTime: '全天开放', ticketPrice: 0, zone: '阿里', priority: 5, duration: 6 },
      { name: '玛旁雍错', type: '自然', desc: '圣湖之王，西藏三大圣湖之一', lat: 30.4500, lng: 81.2500, openTime: '全天开放', ticketPrice: 0, zone: '阿里', priority: 5, duration: 4 },
      { name: '扎达土林', type: '自然', desc: '世界上最大的土林地貌', lat: 31.4800, lng: 79.7800, openTime: '全天开放', ticketPrice: 60, zone: '阿里', priority: 4, duration: 3 },
      { name: '古格王国遗址', type: '古迹', desc: '神秘的古格王国遗址', lat: 31.7200, lng: 79.8000, openTime: '09:00-18:00', ticketPrice: 60, zone: '阿里', priority: 5, duration: 4 },
    ],
    '北京': [
      { name: '故宫', type: '古迹', desc: '世界上现存规模最大的木质结构古建筑群', lat: 39.9163, lng: 116.3972, isMuseum: true, openTime: '08:30-17:00', ticketPrice: 60, zone: '故宫-天安门', priority: 5, duration: 4 },
      { name: '天安门', type: '古迹', desc: '中华人民共和国的象征，故宫的正门', lat: 39.9042, lng: 116.4074, openTime: '08:00-17:00', ticketPrice: 0, zone: '故宫-天安门', priority: 4, duration: 1 },
      { name: '天坛', type: '古迹', desc: '明清两代皇帝祭天祈谷的场所', lat: 39.8822, lng: 116.4066, isMuseum: true, openTime: '08:30-18:00', ticketPrice: 15, zone: '天坛', priority: 4, duration: 2.5 },
      { name: '颐和园', type: '园林', desc: '中国现存规模最大、保存最完整的皇家园林', lat: 39.9999, lng: 116.2755, openTime: '06:00-20:00', ticketPrice: 30, zone: '颐和园-圆明园', priority: 5, duration: 4 },
      { name: '长城', type: '古迹', desc: '世界七大奇迹之一，中国古代军事防御工程', lat: 40.3399, lng: 116.0247, openTime: '06:30-18:30', ticketPrice: 40, zone: '长城', priority: 5, duration: 6 },
      { name: '鸟巢', type: '现代', desc: '2008年北京奥运会主体育场', lat: 39.9911, lng: 116.3964, openTime: '09:00-18:00', ticketPrice: 50, zone: '鸟巢-水立方', priority: 3, duration: 2 },
      { name: '圆明园', type: '园林', desc: '曾经的万园之园，现遗址公园', lat: 40.0071, lng: 116.2754, openTime: '07:00-21:00', ticketPrice: 10, zone: '颐和园-圆明园', priority: 4, duration: 2.5 },
      { name: '南锣鼓巷', type: '街区', desc: '北京最古老的街区之一，充满老北京风情', lat: 39.9860, lng: 116.4040, openTime: '全天开放', ticketPrice: 0, zone: '南锣鼓巷-什刹海', priority: 3, duration: 2 },
      { name: '什刹海', type: '自然', desc: '北京城内面积最大、风貌保存最完整的历史街区', lat: 39.9647, lng: 116.3972, openTime: '全天开放', ticketPrice: 0, zone: '南锣鼓巷-什刹海', priority: 4, duration: 3 },
      { name: '国家博物馆', type: '博物馆', desc: '中国最大的综合性博物馆', lat: 39.9079, lng: 116.3979, isMuseum: true, openTime: '09:00-17:00', ticketPrice: 0, zone: '故宫-天安门', priority: 4, duration: 3 },
      { name: '雍和宫', type: '寺庙', desc: '北京最大的藏传佛教寺院，雍正皇帝的府邸', lat: 39.9240, lng: 116.4160, openTime: '09:00-17:00', ticketPrice: 25, zone: '雍和宫', priority: 3, duration: 1.5 },
      { name: '北海公园', type: '园林', desc: '中国现存最古老、最完整、最具综合性的皇家园林', lat: 39.9350, lng: 116.3970, openTime: '06:30-21:00', ticketPrice: 10, zone: '北海公园', priority: 3, duration: 2 },
      { name: '前门大街', type: '街区', desc: '北京著名的商业街，老字号云集', lat: 39.9080, lng: 116.3970, openTime: '全天开放', ticketPrice: 0, zone: '前门', priority: 3, duration: 2 },
      { name: '王府井', type: '街区', desc: '北京最繁华的商业街', lat: 39.9140, lng: 116.4040, openTime: '全天开放', ticketPrice: 0, zone: '王府井', priority: 3, duration: 2 },
      { name: '奥林匹克森林公园', type: '自然', desc: '亚洲最大的城市绿化景观', lat: 40.0000, lng: 116.3960, openTime: '06:00-20:00', ticketPrice: 0, zone: '鸟巢-水立方', priority: 2, duration: 3 },
      { name: '水立方', type: '现代', desc: '2008年北京奥运会游泳场馆', lat: 39.9920, lng: 116.3980, openTime: '09:00-20:00', ticketPrice: 30, zone: '鸟巢-水立方', priority: 3, duration: 1.5 },
      { name: '大钟寺', type: '古迹', desc: '明代古寺，以永乐大钟闻名', lat: 39.9540, lng: 116.3560, isMuseum: true, openTime: '08:30-16:30', ticketPrice: 20, zone: '大钟寺', priority: 2, duration: 1.5 },
      { name: '地坛公园', type: '古迹', desc: '明清两代皇帝祭祀地祇的场所', lat: 39.9360, lng: 116.4240, openTime: '06:00-21:00', ticketPrice: 2, zone: '地坛', priority: 2, duration: 1.5 },
      { name: '奥林匹克塔', type: '现代', desc: '北京奥林匹克公园最高建筑，俯瞰全城', lat: 39.9940, lng: 116.3980, openTime: '09:00-22:00', ticketPrice: 70, zone: '鸟巢-水立方', priority: 2, duration: 1.5 },
      { name: '卢沟桥', type: '古迹', desc: '北京现存最古老的石造联拱桥，七七事变发生地', lat: 39.8440, lng: 116.1960, openTime: '08:00-17:00', ticketPrice: 20, zone: '卢沟桥', priority: 3, duration: 1.5 },
      { name: '明十三陵', type: '古迹', desc: '明朝13位皇帝的陵墓群', lat: 40.2340, lng: 116.2280, isMuseum: true, openTime: '08:30-17:30', ticketPrice: 130, zone: '明十三陵', priority: 4, duration: 3 },
      { name: '孔庙', type: '古迹', desc: '元明清三代祭祀孔子的场所', lat: 39.9280, lng: 116.4180, isMuseum: true, openTime: '08:30-16:30', ticketPrice: 30, zone: '雍和宫', priority: 3, duration: 1.5 },
      { name: '国子监', type: '古迹', desc: '元明清三代国家最高学府', lat: 39.9300, lng: 116.4180, isMuseum: true, openTime: '08:30-16:30', ticketPrice: 30, zone: '雍和宫', priority: 3, duration: 1.5 },
      { name: '杜莎夫人蜡像馆', type: '娱乐', desc: '北京杜莎夫人蜡像馆，与名人合影', lat: 39.9140, lng: 116.4060, openTime: '10:00-21:00', ticketPrice: 160, zone: '前门', priority: 2, duration: 2 },
      { name: '世贸天阶', type: '现代', desc: '亚洲最大的LED天幕，时尚购物区', lat: 39.9380, lng: 116.4500, openTime: '10:00-22:00', ticketPrice: 0, zone: '世贸天阶', priority: 2, duration: 2 },
    ],
    '上海': [
      { name: '外滩', type: '现代', desc: '上海最具标志性的景观，万国建筑博览群', lat: 31.2304, lng: 121.4737, openTime: '全天开放', ticketPrice: 0, zone: '外滩-南京路', priority: 5, duration: 2 },
      { name: '东方明珠', type: '现代', desc: '上海标志性建筑，亚洲第一高塔', lat: 31.2397, lng: 121.4998, openTime: '08:00-21:30', ticketPrice: 199, zone: '陆家嘴', priority: 4, duration: 2.5 },
      { name: '城隍庙', type: '古迹', desc: '上海著名的道教宫观和旅游景点', lat: 31.2317, lng: 121.4927, openTime: '08:30-16:30', ticketPrice: 10, zone: '城隍庙-豫园', priority: 4, duration: 1.5 },
      { name: '豫园', type: '园林', desc: '江南古典园林的典范', lat: 31.2317, lng: 121.4938, openTime: '08:30-17:00', ticketPrice: 40, zone: '城隍庙-豫园', priority: 5, duration: 2 },
      { name: '南京路', type: '街区', desc: '中国最繁华的商业街之一', lat: 31.2304, lng: 121.4737, openTime: '全天开放', ticketPrice: 0, zone: '外滩-南京路', priority: 4, duration: 2 },
      { name: '迪士尼', type: '娱乐', desc: '中国大陆第一座迪士尼乐园', lat: 31.1443, lng: 121.6972, openTime: '08:00-22:00', ticketPrice: 399, zone: '迪士尼', priority: 5, duration: 8 },
      { name: '陆家嘴', type: '现代', desc: '中国金融中心，高楼林立', lat: 31.2397, lng: 121.5076, openTime: '全天开放', ticketPrice: 0, zone: '陆家嘴', priority: 4, duration: 2 },
      { name: '田子坊', type: '街区', desc: '上海最具文艺气息的创意园区', lat: 31.2077, lng: 121.4811, openTime: '全天开放', ticketPrice: 0, zone: '田子坊-武康路', priority: 3, duration: 2 },
      { name: '武康路', type: '街区', desc: '上海历史风貌保护区，名人故居聚集地', lat: 31.2066, lng: 121.4436, openTime: '全天开放', ticketPrice: 0, zone: '田子坊-武康路', priority: 3, duration: 1.5 },
      { name: '世纪公园', type: '自然', desc: '上海最大的城市生态公园', lat: 31.2150, lng: 121.5430, openTime: '06:00-18:00', ticketPrice: 10, zone: '世纪公园', priority: 2, duration: 2 },
      { name: '上海科技馆', type: '博物馆', desc: '上海最大的科普教育基地', lat: 31.2317, lng: 121.5396, isMuseum: true, openTime: '09:00-17:15', ticketPrice: 45, zone: '世纪公园', priority: 3, duration: 3 },
      { name: '上海博物馆', type: '博物馆', desc: '中国四大博物馆之一', lat: 31.2397, lng: 121.4927, isMuseum: true, openTime: '09:00-17:00', ticketPrice: 0, zone: '人民广场', priority: 4, duration: 2.5 },
      { name: '静安寺', type: '寺庙', desc: '上海著名的佛教寺院', lat: 31.2397, lng: 121.4478, openTime: '07:30-17:30', ticketPrice: 30, zone: '静安寺', priority: 3, duration: 1 },
      { name: '人民广场', type: '现代', desc: '上海的政治、文化、商业中心', lat: 31.2397, lng: 121.4927, openTime: '全天开放', ticketPrice: 0, zone: '人民广场', priority: 3, duration: 1.5 },
      { name: '上海环球金融中心', type: '现代', desc: '上海第二高楼，观光厅俯瞰全城', lat: 31.2397, lng: 121.5100, openTime: '08:00-22:00', ticketPrice: 180, zone: '陆家嘴', priority: 3, duration: 1.5 },
      { name: '上海中心大厦', type: '现代', desc: '中国第一高楼，世界第二高楼', lat: 31.2397, lng: 121.5110, openTime: '08:30-21:30', ticketPrice: 180, zone: '陆家嘴', priority: 3, duration: 1.5 },
      { name: '中华艺术宫', type: '博物馆', desc: '2010年世博会中国馆', lat: 31.1940, lng: 121.5300, isMuseum: true, openTime: '10:00-18:00', ticketPrice: 0, zone: '世博园', priority: 3, duration: 2 },
      { name: 'M50创意园', type: '街区', desc: '上海最大的艺术创意园区', lat: 31.2140, lng: 121.4660, openTime: '全天开放', ticketPrice: 0, zone: 'M50', priority: 2, duration: 2 },
      { name: '多伦路文化名人街', type: '街区', desc: '上海文化名人聚集地', lat: 31.2540, lng: 121.4780, openTime: '全天开放', ticketPrice: 0, zone: '多伦路', priority: 2, duration: 1.5 },
      { name: '1933老场坊', type: '古迹', desc: '原上海工部局宰牲场，独特建筑风格', lat: 31.2580, lng: 121.4780, openTime: '全天开放', ticketPrice: 0, zone: '1933老场坊', priority: 3, duration: 1.5 },
      { name: '外滩源', type: '街区', desc: '外滩历史风貌保护区', lat: 31.2360, lng: 121.4760, openTime: '全天开放', ticketPrice: 0, zone: '外滩-南京路', priority: 3, duration: 1.5 },
      { name: '长风海洋世界', type: '娱乐', desc: '上海最大的海洋馆', lat: 31.2340, lng: 121.3940, openTime: '09:00-17:30', ticketPrice: 180, zone: '长风公园', priority: 2, duration: 2.5 },
      { name: '古猗园', type: '园林', desc: '上海五大古典园林之一', lat: 31.2500, lng: 121.3800, openTime: '08:00-17:00', ticketPrice: 12, zone: '古猗园', priority: 2, duration: 2 },
      { name: '召稼楼', type: '街区', desc: '上海历史文化名镇', lat: 31.0200, lng: 121.5800, openTime: '全天开放', ticketPrice: 0, zone: '召稼楼', priority: 2, duration: 2 },
      { name: '上海植物园', type: '自然', desc: '上海最大的植物园', lat: 31.1760, lng: 121.4460, openTime: '07:00-17:00', ticketPrice: 15, zone: '植物园', priority: 2, duration: 3 },
    ],
    '杭州': [
      { name: '西湖', type: '自然', desc: '杭州的灵魂，中国十大风景名胜之一', lat: 30.2741, lng: 120.1551, openTime: '全天开放', ticketPrice: 0, zone: '西湖', priority: 5, duration: 4 },
      { name: '雷峰塔', type: '古迹', desc: '西湖十景之一，白娘子传说的发源地', lat: 30.2562, lng: 120.1528, openTime: '07:00-17:30', ticketPrice: 40, zone: '西湖', priority: 4, duration: 1.5 },
      { name: '灵隐寺', type: '寺庙', desc: '中国著名的佛教寺院', lat: 30.2986, lng: 120.1020, openTime: '07:30-17:30', ticketPrice: 75, zone: '灵隐寺', priority: 5, duration: 3 },
      { name: '千岛湖', type: '自然', desc: '世界上岛屿最多的湖泊', lat: 29.6175, lng: 119.0592, openTime: '08:00-17:00', ticketPrice: 130, zone: '千岛湖', priority: 5, duration: 6 },
      { name: '断桥残雪', type: '古迹', desc: '西湖十景之一，许仙白娘子相会之地', lat: 30.2754, lng: 120.1515, openTime: '全天开放', ticketPrice: 0, zone: '西湖', priority: 3, duration: 1 },
      { name: '苏堤春晓', type: '自然', desc: '西湖十景之首，贯穿西湖南北的长堤', lat: 30.2700, lng: 120.1550, openTime: '全天开放', ticketPrice: 0, zone: '西湖', priority: 3, duration: 1.5 },
      { name: '河坊街', type: '街区', desc: '杭州历史悠久的老街，美食云集', lat: 30.2645, lng: 120.1500, openTime: '全天开放', ticketPrice: 0, zone: '河坊街', priority: 3, duration: 2 },
      { name: '西溪湿地', type: '自然', desc: '中国第一个国家湿地公园', lat: 30.2579, lng: 120.0675, openTime: '07:30-18:30', ticketPrice: 80, zone: '西溪湿地', priority: 4, duration: 4 },
      { name: '九溪烟树', type: '自然', desc: '杭州最美的徒步路线之一', lat: 30.2040, lng: 120.1580, openTime: '全天开放', ticketPrice: 0, zone: '九溪-龙井', priority: 3, duration: 3 },
      { name: '龙井村', type: '自然', desc: '龙井茶的故乡，茶香四溢', lat: 30.2490, lng: 120.0920, openTime: '全天开放', ticketPrice: 0, zone: '九溪-龙井', priority: 3, duration: 2 },
      { name: '虎跑公园', type: '自然', desc: '杭州著名的泉水景观', lat: 30.2200, lng: 120.1380, openTime: '06:00-17:30', ticketPrice: 15, zone: '西湖', priority: 3, duration: 1.5 },
      { name: '岳庙', type: '古迹', desc: '纪念岳飞的祠堂', lat: 30.2740, lng: 120.1580, isMuseum: true, openTime: '07:30-17:30', ticketPrice: 25, zone: '西湖', priority: 3, duration: 1 },
      { name: '太子湾公园', type: '自然', desc: '杭州最美的赏花公园', lat: 30.2520, lng: 120.1480, openTime: '06:00-21:00', ticketPrice: 0, zone: '西湖', priority: 3, duration: 2 },
      { name: '郭庄', type: '园林', desc: '西湖古典园林的代表作', lat: 30.2640, lng: 120.1480, openTime: '08:00-17:00', ticketPrice: 10, zone: '西湖', priority: 2, duration: 1 },
      { name: '六和塔', type: '古迹', desc: '杭州著名的古塔，观潮最佳地点', lat: 30.1980, lng: 120.1500, openTime: '07:00-17:30', ticketPrice: 20, zone: '六和塔', priority: 3, duration: 1.5 },
      { name: '宋城', type: '娱乐', desc: '大型宋代主题文化乐园', lat: 30.2220, lng: 120.1420, openTime: '09:30-21:00', ticketPrice: 300, zone: '宋城', priority: 4, duration: 5 },
      { name: '杭州博物馆', type: '博物馆', desc: '了解杭州历史文化', lat: 30.2620, lng: 120.1480, isMuseum: true, openTime: '09:00-17:00', ticketPrice: 0, zone: '河坊街', priority: 3, duration: 2 },
      { name: '白堤', type: '自然', desc: '西湖十景之一，白居易主持修建', lat: 30.2760, lng: 120.1520, openTime: '全天开放', ticketPrice: 0, zone: '西湖', priority: 3, duration: 1 },
      { name: '孤山', type: '自然', desc: '西湖中最大的岛屿', lat: 30.2760, lng: 120.1500, openTime: '全天开放', ticketPrice: 0, zone: '西湖', priority: 3, duration: 1.5 },
      { name: '宝石山', type: '自然', desc: '俯瞰西湖美景的绝佳地点', lat: 30.2780, lng: 120.1560, openTime: '全天开放', ticketPrice: 0, zone: '西湖', priority: 3, duration: 2 },
      { name: '清河坊', type: '街区', desc: '杭州历史文化街区', lat: 30.2640, lng: 120.1480, openTime: '全天开放', ticketPrice: 0, zone: '河坊街', priority: 3, duration: 2 },
      { name: '云栖竹径', type: '自然', desc: '杭州最美的竹林景观', lat: 30.2080, lng: 120.0880, openTime: '07:00-17:00', ticketPrice: 8, zone: '云栖竹径', priority: 3, duration: 2 },
      { name: '满陇桂雨', type: '自然', desc: '杭州著名的赏桂胜地', lat: 30.2240, lng: 120.1460, openTime: '全天开放', ticketPrice: 0, zone: '西湖', priority: 2, duration: 2 },
      { name: '玉皇山', type: '自然', desc: '杭州道教名山', lat: 30.2260, lng: 120.1600, openTime: '07:00-17:00', ticketPrice: 10, zone: '玉皇山', priority: 2, duration: 3 },
      { name: '吴山', type: '自然', desc: '杭州历史文化名山', lat: 30.2620, lng: 120.1540, openTime: '全天开放', ticketPrice: 0, zone: '河坊街', priority: 3, duration: 2 },
    ],
    '西安': [
      { name: '兵马俑', type: '古迹', desc: '世界第八大奇迹，秦始皇陵陪葬坑', lat: 34.3853, lng: 109.2884, isMuseum: true, openTime: '08:30-18:00', ticketPrice: 120, zone: '兵马俑', priority: 5, duration: 4 },
      { name: '大雁塔', type: '古迹', desc: '唐代玄奘法师为存放经卷而建', lat: 34.2167, lng: 108.9550, openTime: '08:30-17:00', ticketPrice: 30, zone: '大雁塔-大唐不夜城', priority: 5, duration: 2 },
      { name: '城墙', type: '古迹', desc: '中国现存规模最大、保存最完整的古城墙', lat: 34.2619, lng: 108.9500, openTime: '08:00-22:00', ticketPrice: 54, zone: '钟楼-鼓楼', priority: 4, duration: 2.5 },
      { name: '钟楼', type: '古迹', desc: '西安的标志性建筑，明代建筑艺术的典范', lat: 34.2619, lng: 108.9500, openTime: '08:30-18:30', ticketPrice: 35, zone: '钟楼-鼓楼', priority: 4, duration: 1 },
      { name: '鼓楼', type: '古迹', desc: '与钟楼遥相呼应，古代报时设施', lat: 34.2640, lng: 108.9460, openTime: '08:30-18:30', ticketPrice: 35, zone: '钟楼-鼓楼', priority: 4, duration: 1 },
      { name: '大明宫', type: '古迹', desc: '唐代宫殿遗址，曾经的世界中心', lat: 34.2825, lng: 108.9585, openTime: '09:00-18:00', ticketPrice: 60, zone: '大明宫', priority: 4, duration: 3 },
      { name: '回民街', type: '街区', desc: '西安著名的美食街区', lat: 34.2640, lng: 108.9460, openTime: '全天开放', ticketPrice: 0, zone: '钟楼-鼓楼', priority: 3, duration: 2 },
      { name: '碑林', type: '博物馆', desc: '中国最大的石质书库', lat: 34.2460, lng: 108.9560, isMuseum: true, openTime: '08:00-18:00', ticketPrice: 65, zone: '碑林', priority: 4, duration: 2 },
      { name: '华山', type: '自然', desc: '五岳之一，奇险天下第一', lat: 34.4923, lng: 110.0756, openTime: '07:00-19:00', ticketPrice: 160, zone: '华山', priority: 5, duration: 8 },
      { name: '大唐不夜城', type: '现代', desc: '以盛唐文化为主题的仿唐步行街', lat: 34.2167, lng: 108.9550, openTime: '全天开放', ticketPrice: 0, zone: '大雁塔-大唐不夜城', priority: 4, duration: 2 },
      { name: '小雁塔', type: '古迹', desc: '唐代佛塔，西安博物院所在地', lat: 34.2360, lng: 108.9480, isMuseum: true, openTime: '08:00-17:00', ticketPrice: 30, zone: '小雁塔', priority: 3, duration: 2 },
      { name: '大唐芙蓉园', type: '园林', desc: '大型唐代文化主题公园', lat: 34.2080, lng: 108.9580, openTime: '09:00-22:00', ticketPrice: 120, zone: '大雁塔-大唐不夜城', priority: 4, duration: 3 },
      { name: '曲江池', type: '自然', desc: '唐代皇家园林遗址', lat: 34.2080, lng: 108.9660, openTime: '全天开放', ticketPrice: 0, zone: '大雁塔-大唐不夜城', priority: 3, duration: 2 },
      { name: '寒窑', type: '古迹', desc: '王宝钏与薛平贵爱情故事发生地', lat: 34.2000, lng: 108.9700, openTime: '09:00-21:00', ticketPrice: 50, zone: '寒窑', priority: 3, duration: 1.5 },
      { name: '骊山', type: '自然', desc: '西安著名的风景名胜区', lat: 34.3600, lng: 109.2600, openTime: '08:00-18:00', ticketPrice: 150, zone: '兵马俑', priority: 4, duration: 4 },
      { name: '华清池', type: '古迹', desc: '唐代皇家温泉宫', lat: 34.3600, lng: 109.2600, isMuseum: true, openTime: '07:30-18:00', ticketPrice: 150, zone: '兵马俑', priority: 4, duration: 2 },
      { name: '陕西历史博物馆', type: '博物馆', desc: '中国四大博物馆之一', lat: 34.2280, lng: 108.9520, isMuseum: true, openTime: '08:30-18:00', ticketPrice: 0, zone: '大雁塔-大唐不夜城', priority: 5, duration: 3 },
      { name: '永兴坊', type: '街区', desc: '西安著名的美食街区', lat: 34.2760, lng: 108.9560, openTime: '全天开放', ticketPrice: 0, zone: '钟楼-鼓楼', priority: 3, duration: 2 },
      { name: '书院门', type: '街区', desc: '西安文化一条街，书画云集', lat: 34.2480, lng: 108.9560, openTime: '全天开放', ticketPrice: 0, zone: '碑林', priority: 3, duration: 2 },
      { name: '高家大院', type: '古迹', desc: '清代民居建筑', lat: 34.2680, lng: 108.9460, openTime: '08:00-22:00', ticketPrice: 35, zone: '钟楼-鼓楼', priority: 3, duration: 1 },
      { name: '广仁寺', type: '寺庙', desc: '西安唯一的藏传佛教寺院', lat: 34.2620, lng: 108.9380, openTime: '08:30-17:30', ticketPrice: 30, zone: '广仁寺', priority: 2, duration: 1 },
      { name: '青龙寺', type: '寺庙', desc: '唐代著名佛教寺院，樱花胜地', lat: 34.2340, lng: 108.9780, openTime: '08:30-17:00', ticketPrice: 16, zone: '青龙寺', priority: 3, duration: 1.5 },
      { name: '白鹿原影视城', type: '娱乐', desc: '大型影视拍摄基地', lat: 34.1200, lng: 109.1800, openTime: '09:00-18:00', ticketPrice: 60, zone: '白鹿原', priority: 3, duration: 3 },
      { name: '昆明池', type: '自然', desc: '汉代皇家园林遗址', lat: 34.1600, lng: 108.8600, openTime: '全天开放', ticketPrice: 0, zone: '昆明池', priority: 3, duration: 2 },
      { name: '汉长安城遗址', type: '古迹', desc: '西汉都城遗址', lat: 34.2800, lng: 108.9100, openTime: '全天开放', ticketPrice: 0, zone: '汉长安城', priority: 2, duration: 2 },
    ],
    '成都': [
      { name: '都江堰', type: '古迹', desc: '世界文化遗产，两千多年的水利工程', lat: 30.9872, lng: 103.6116, openTime: '08:00-18:00', ticketPrice: 80, zone: '都江堰', priority: 5, duration: 4 },
      { name: '宽窄巷子', type: '街区', desc: '成都历史文化保护区，老成都缩影', lat: 30.6650, lng: 104.0360, openTime: '全天开放', ticketPrice: 0, zone: '宽窄巷子', priority: 4, duration: 2 },
      { name: '锦里', type: '街区', desc: '成都最具人气的仿古商业街', lat: 30.6460, lng: 104.0380, openTime: '全天开放', ticketPrice: 0, zone: '武侯祠-锦里', priority: 4, duration: 2 },
      { name: '武侯祠', type: '古迹', desc: '纪念诸葛亮的祠堂，三国文化圣地', lat: 30.6460, lng: 104.0380, openTime: '08:30-18:30', ticketPrice: 50, zone: '武侯祠-锦里', priority: 4, duration: 2 },
      { name: '杜甫草堂', type: '古迹', desc: '唐代诗人杜甫的故居', lat: 30.6580, lng: 104.0080, openTime: '09:00-18:00', ticketPrice: 50, zone: '杜甫草堂', priority: 4, duration: 2 },
      { name: '大熊猫基地', type: '自然', desc: '世界最大的大熊猫人工繁育机构', lat: 30.7790, lng: 104.1960, openTime: '07:30-18:00', ticketPrice: 55, zone: '大熊猫基地', priority: 5, duration: 3 },
      { name: '春熙路', type: '街区', desc: '成都最繁华的商业街', lat: 30.6590, lng: 104.0640, openTime: '全天开放', ticketPrice: 0, zone: '春熙路', priority: 3, duration: 2 },
      { name: '青城山', type: '自然', desc: '道教名山，青城天下幽', lat: 30.9436, lng: 103.5770, openTime: '08:00-17:30', ticketPrice: 80, zone: '青城山', priority: 5, duration: 5 },
      { name: '三星堆', type: '博物馆', desc: '古蜀文明遗址，震惊世界的考古发现', lat: 31.0970, lng: 104.2050, isMuseum: true, openTime: '08:30-18:00', ticketPrice: 72, zone: '三星堆', priority: 5, duration: 4 },
      { name: '太古里', type: '现代', desc: '成都最时尚的商业街区', lat: 30.6590, lng: 104.0640, openTime: '全天开放', ticketPrice: 0, zone: '春熙路', priority: 3, duration: 2 },
      { name: '人民公园', type: '自然', desc: '成都历史最悠久的公园', lat: 30.6600, lng: 104.0420, openTime: '06:30-22:00', ticketPrice: 0, zone: '人民公园', priority: 3, duration: 2 },
      { name: '青羊宫', type: '寺庙', desc: '成都著名的道教宫观', lat: 30.6480, lng: 104.0280, openTime: '08:00-18:00', ticketPrice: 10, zone: '青羊宫', priority: 3, duration: 1.5 },
      { name: '文殊院', type: '寺庙', desc: '成都著名的佛教寺院', lat: 30.6720, lng: 104.0640, openTime: '08:00-18:00', ticketPrice: 0, zone: '文殊院', priority: 3, duration: 1.5 },
      { name: '东郊记忆', type: '街区', desc: '成都工业遗产改造的创意园区', lat: 30.6760, lng: 104.1000, openTime: '全天开放', ticketPrice: 0, zone: '东郊记忆', priority: 3, duration: 2 },
      { name: '环球中心', type: '现代', desc: '世界最大的单体建筑', lat: 30.5500, lng: 104.0600, openTime: '10:00-22:00', ticketPrice: 0, zone: '环球中心', priority: 3, duration: 2 },
      { name: '浣花溪公园', type: '自然', desc: '成都最美的城市公园', lat: 30.6560, lng: 104.0100, openTime: '全天开放', ticketPrice: 0, zone: '杜甫草堂', priority: 3, duration: 2 },
      { name: '金沙遗址', type: '博物馆', desc: '古蜀文明遗址', lat: 30.6520, lng: 103.9760, isMuseum: true, openTime: '08:00-18:00', ticketPrice: 70, zone: '金沙遗址', priority: 4, duration: 2.5 },
      { name: '洛带古镇', type: '街区', desc: '成都著名的客家古镇', lat: 30.5600, lng: 104.3000, openTime: '全天开放', ticketPrice: 0, zone: '洛带古镇', priority: 3, duration: 2.5 },
      { name: '黄龙溪古镇', type: '街区', desc: '成都著名的水乡古镇', lat: 30.2700, lng: 103.9200, openTime: '全天开放', ticketPrice: 0, zone: '黄龙溪', priority: 3, duration: 3 },
      { name: '熊猫塔', type: '现代', desc: '成都标志性建筑，俯瞰全城', lat: 30.6640, lng: 104.0700, openTime: '09:00-22:00', ticketPrice: 88, zone: '春熙路', priority: 3, duration: 1.5 },
      { name: '玉林路', type: '街区', desc: '成都文艺聚集地，小酒馆所在地', lat: 30.6300, lng: 104.0300, openTime: '全天开放', ticketPrice: 0, zone: '玉林路', priority: 3, duration: 2 },
      { name: '龙泉山', type: '自然', desc: '成都城市森林公园', lat: 30.5700, lng: 104.2300, openTime: '全天开放', ticketPrice: 0, zone: '龙泉山', priority: 2, duration: 3 },
      { name: '三岔湖', type: '自然', desc: '成都东部新区的大型湖泊', lat: 30.3000, lng: 104.3800, openTime: '全天开放', ticketPrice: 0, zone: '三岔湖', priority: 2, duration: 3 },
      { name: '西岭雪山', type: '自然', desc: '成都著名的雪山景区', lat: 30.6200, lng: 103.0500, openTime: '09:00-17:00', ticketPrice: 120, zone: '西岭雪山', priority: 4, duration: 6 },
      { name: '街子古镇', type: '街区', desc: '成都著名的历史文化古镇', lat: 30.9000, lng: 103.5600, openTime: '全天开放', ticketPrice: 0, zone: '街子古镇', priority: 3, duration: 2.5 },
    ],
    '武汉': [
      { name: '黄鹤楼', type: '古迹', desc: '江南三大名楼之一，俯瞰长江美景', lat: 30.5855, lng: 114.3081, openTime: '08:00-18:00', ticketPrice: 70, zone: '黄鹤楼', priority: 5, duration: 2 },
      { name: '东湖', type: '自然', desc: '中国最大的城中湖，风景秀丽', lat: 30.5513, lng: 114.3694, openTime: '全天开放', ticketPrice: 0, zone: '东湖', priority: 5, duration: 4 },
      { name: '户部巷', type: '街区', desc: '武汉著名的美食街区，小吃云集', lat: 30.5790, lng: 114.3100, openTime: '全天开放', ticketPrice: 0, zone: '户部巷', priority: 4, duration: 1.5 },
      { name: '长江大桥', type: '现代', desc: '万里长江第一桥，武汉的地标', lat: 30.5855, lng: 114.3000, openTime: '全天开放', ticketPrice: 0, zone: '长江大桥', priority: 4, duration: 1 },
      { name: '湖北省博物馆', type: '博物馆', desc: '馆藏曾侯乙编钟等珍贵文物', lat: 30.5513, lng: 114.3700, isMuseum: true, openTime: '09:00-17:00', ticketPrice: 0, zone: '省博物馆', priority: 5, duration: 3 },
      { name: '归元寺', type: '寺庙', desc: '武汉四大佛教丛林之一，古树参天', lat: 30.5340, lng: 114.2750, openTime: '08:00-17:00', ticketPrice: 20, zone: '归元寺', priority: 4, duration: 1.5 },
      { name: '楚河汉街', type: '街区', desc: '武汉中央文化区，仿汉式建筑', lat: 30.5580, lng: 114.3750, openTime: '全天开放', ticketPrice: 0, zone: '楚河汉街', priority: 4, duration: 2 },
      { name: '昙华林', type: '街区', desc: '武汉文艺聚集地，历史街区', lat: 30.5830, lng: 114.3230, openTime: '全天开放', ticketPrice: 0, zone: '昙华林', priority: 3, duration: 2 },
      { name: '光谷广场', type: '现代', desc: '武汉高新技术产业中心，繁华商圈', lat: 30.5080, lng: 114.3830, openTime: '全天开放', ticketPrice: 0, zone: '光谷', priority: 3, duration: 2 },
      { name: '木兰天池', type: '自然', desc: '武汉后花园，山水风景秀丽', lat: 30.7380, lng: 114.5580, openTime: '08:00-17:30', ticketPrice: 80, zone: '木兰天池', priority: 4, duration: 4 },
      { name: '晴川阁', type: '古迹', desc: '武汉三大名胜之一，登楼可眺黄鹤楼', lat: 30.5870, lng: 114.2880, openTime: '09:00-17:00', ticketPrice: 0, zone: '晴川阁', priority: 3, duration: 1 },
      { name: '古琴台', type: '古迹', desc: '俞伯牙与钟子期知音故事发生地', lat: 30.5470, lng: 114.2830, openTime: '08:00-17:00', ticketPrice: 15, zone: '古琴台', priority: 3, duration: 1 },
      { name: '武汉大学', type: '现代', desc: '中国最美大学之一，樱花胜地', lat: 30.5420, lng: 114.3760, openTime: '08:00-22:00', ticketPrice: 0, zone: '武汉大学', priority: 4, duration: 2 },
      { name: '江汉路', type: '街区', desc: '武汉著名的商业街', lat: 30.5900, lng: 114.3100, openTime: '全天开放', ticketPrice: 0, zone: '江汉路', priority: 4, duration: 2 },
      { name: '江滩', type: '自然', desc: '武汉长江边的休闲胜地', lat: 30.5900, lng: 114.3100, openTime: '全天开放', ticketPrice: 0, zone: '江滩', priority: 4, duration: 2 },
      { name: '龟山', type: '自然', desc: '武汉著名的山景公园', lat: 30.5830, lng: 114.2900, openTime: '全天开放', ticketPrice: 0, zone: '龟山', priority: 3, duration: 2 },
      { name: '磨山', type: '自然', desc: '东湖风景区的核心景区', lat: 30.5380, lng: 114.3760, openTime: '08:00-17:30', ticketPrice: 60, zone: '东湖', priority: 4, duration: 3 },
      { name: '黄鹤楼公园', type: '自然', desc: '黄鹤楼周边的公园', lat: 30.5850, lng: 114.3060, openTime: '08:00-18:00', ticketPrice: 70, zone: '黄鹤楼', priority: 4, duration: 2 },
      { name: '辛亥革命博物馆', type: '博物馆', desc: '纪念辛亥革命', lat: 30.5680, lng: 114.3140, isMuseum: true, openTime: '09:00-17:00', ticketPrice: 0, zone: '辛亥革命馆', priority: 3, duration: 1.5 },
      { name: '盘龙城遗址', type: '古迹', desc: '商代早期城市遗址', lat: 30.7200, lng: 114.2800, isMuseum: true, openTime: '09:00-17:00', ticketPrice: 35, zone: '盘龙城', priority: 3, duration: 2 },
      { name: '木兰草原', type: '自然', desc: '武汉周边的草原景区', lat: 30.7600, lng: 114.6400, openTime: '08:00-18:00', ticketPrice: 80, zone: '木兰草原', priority: 3, duration: 4 },
      { name: '清凉寨', type: '自然', desc: '武汉周边的避暑胜地', lat: 30.8200, lng: 114.6200, openTime: '08:00-17:00', ticketPrice: 65, zone: '清凉寨', priority: 3, duration: 3 },
      { name: '锦里沟', type: '自然', desc: '武汉周边的土家族风情景区', lat: 30.7600, lng: 114.6600, openTime: '08:00-17:30', ticketPrice: 80, zone: '锦里沟', priority: 3, duration: 3 },
      { name: '石榴红村', type: '自然', desc: '武汉周边的美丽乡村', lat: 30.5400, lng: 114.2200, openTime: '全天开放', ticketPrice: 0, zone: '石榴红村', priority: 2, duration: 2 },
      { name: '天兴洲', type: '自然', desc: '长江中的江心洲', lat: 30.6300, lng: 114.3800, openTime: '全天开放', ticketPrice: 0, zone: '天兴洲', priority: 2, duration: 2 },
    ],
    '长沙': [
      { name: '橘子洲', type: '自然', desc: '湘江中的江心洲，毛泽东青年艺术雕塑所在地', lat: 28.2280, lng: 112.9388, openTime: '全天开放', ticketPrice: 0, zone: '橘子洲', priority: 5, duration: 3 },
      { name: '岳麓山', type: '自然', desc: '长沙著名的风景名胜区，岳麓书院位于山中', lat: 28.2400, lng: 112.9330, openTime: '全天开放', ticketPrice: 0, zone: '岳麓山', priority: 5, duration: 4 },
      { name: '太平街', type: '街区', desc: '长沙历史悠久的老街，充满文化气息', lat: 28.2280, lng: 112.9450, openTime: '全天开放', ticketPrice: 0, zone: '太平街', priority: 4, duration: 2 },
      { name: '坡子街', type: '街区', desc: '长沙著名的美食街区', lat: 28.2280, lng: 112.9400, openTime: '全天开放', ticketPrice: 0, zone: '坡子街', priority: 4, duration: 2 },
      { name: '湖南省博物馆', type: '博物馆', desc: '馆藏马王堆汉墓文物', lat: 28.2350, lng: 112.9550, isMuseum: true, openTime: '09:00-17:00', ticketPrice: 0, zone: '省博物馆', priority: 5, duration: 3 },
      { name: '岳麓书院', type: '古迹', desc: '中国四大书院之一，千年学府', lat: 28.2430, lng: 112.9300, openTime: '08:00-17:30', ticketPrice: 40, zone: '岳麓山', priority: 5, duration: 2 },
      { name: '杜甫江阁', type: '古迹', desc: '纪念杜甫的楼阁，湘江美景尽收眼底', lat: 28.2220, lng: 112.9380, openTime: '09:00-17:00', ticketPrice: 10, zone: '杜甫江阁', priority: 3, duration: 1 },
      { name: '天心阁', type: '古迹', desc: '长沙古城墙遗址，俯瞰全城', lat: 28.2200, lng: 112.9360, openTime: '08:00-18:00', ticketPrice: 30, zone: '天心阁', priority: 3, duration: 1.5 },
      { name: '黄兴路步行街', type: '街区', desc: '长沙最繁华的商业街', lat: 28.2260, lng: 112.9400, openTime: '全天开放', ticketPrice: 0, zone: '黄兴路', priority: 3, duration: 2 },
      { name: '开福寺', type: '寺庙', desc: '长沙历史最悠久的佛教寺院', lat: 28.2450, lng: 112.9180, openTime: '06:00-18:00', ticketPrice: 10, zone: '开福寺', priority: 3, duration: 1.5 },
      { name: '马王堆汉墓', type: '古迹', desc: '西汉墓葬群，出土珍贵文物', lat: 28.2350, lng: 112.9680, isMuseum: true, openTime: '09:00-17:00', ticketPrice: 0, zone: '省博物馆', priority: 4, duration: 2 },
      { name: '梅溪湖', type: '自然', desc: '长沙新城区，湖光山色', lat: 28.2200, lng: 112.8500, openTime: '全天开放', ticketPrice: 0, zone: '梅溪湖', priority: 3, duration: 2 },
      { name: '长沙世界之窗', type: '娱乐', desc: '大型主题乐园', lat: 28.2600, lng: 113.0200, openTime: '09:00-22:00', ticketPrice: 200, zone: '世界之窗', priority: 3, duration: 6 },
      { name: '长沙海底世界', type: '娱乐', desc: '大型海洋馆', lat: 28.2600, lng: 113.0200, openTime: '09:00-17:30', ticketPrice: 150, zone: '海底世界', priority: 3, duration: 3 },
      { name: '超级文和友', type: '现代', desc: '长沙网红打卡地，复古风格餐厅', lat: 28.2300, lng: 112.9400, openTime: '11:00-03:00', ticketPrice: 0, zone: '超级文和友', priority: 4, duration: 2 },
      { name: '冬瓜山', type: '街区', desc: '长沙著名的夜宵街区', lat: 28.2080, lng: 112.9300, openTime: '全天开放', ticketPrice: 0, zone: '冬瓜山', priority: 3, duration: 2 },
      { name: '万家丽广场', type: '现代', desc: '长沙著名的商业综合体', lat: 28.2380, lng: 112.9700, openTime: '10:00-22:00', ticketPrice: 0, zone: '万家丽', priority: 3, duration: 2 },
      { name: '谢子龙影像艺术馆', type: '现代', desc: '长沙著名的艺术展览馆', lat: 28.2060, lng: 112.9260, openTime: '10:00-18:00', ticketPrice: 30, zone: '谢子龙', priority: 3, duration: 1.5 },
      { name: '李自健美术馆', type: '博物馆', desc: '长沙著名的美术馆', lat: 28.2060, lng: 112.9240, isMuseum: true, openTime: '10:00-18:00', ticketPrice: 0, zone: '李自健', priority: 3, duration: 1.5 },
      { name: '铜官窑古镇', type: '街区', desc: '长沙著名的陶瓷文化古镇', lat: 28.3500, lng: 112.7000, openTime: '09:00-22:00', ticketPrice: 198, zone: '铜官窑', priority: 3, duration: 4 },
      { name: '炭河古城', type: '娱乐', desc: '大型西周文化主题乐园', lat: 28.3800, lng: 112.2600, openTime: '09:00-22:00', ticketPrice: 200, zone: '炭河古城', priority: 3, duration: 5 },
      { name: '石燕湖', type: '自然', desc: '长沙著名的湖泊景区', lat: 28.0900, lng: 113.1500, openTime: '08:00-17:30', ticketPrice: 160, zone: '石燕湖', priority: 3, duration: 4 },
      { name: '黑麋峰', type: '自然', desc: '长沙著名的森林公园', lat: 28.4000, lng: 112.9800, openTime: '全天开放', ticketPrice: 27, zone: '黑麋峰', priority: 3, duration: 3 },
      { name: '关山古镇', type: '街区', desc: '长沙著名的三国文化古镇', lat: 28.2000, lng: 112.6600, openTime: '09:00-17:00', ticketPrice: 80, zone: '关山古镇', priority: 3, duration: 3 },
      { name: '浔龙河生态艺术小镇', type: '自然', desc: '长沙周边的生态小镇', lat: 28.3200, lng: 113.1800, openTime: '全天开放', ticketPrice: 0, zone: '浔龙河', priority: 3, duration: 3 },
    ],
    '广州': [
      { name: '广州塔', type: '现代', desc: '广州地标，世界第三高的电视塔', lat: 23.1291, lng: 113.3000, openTime: '09:30-22:30', ticketPrice: 150, zone: '广州塔', priority: 5, duration: 2.5 },
      { name: '长隆欢乐世界', type: '娱乐', desc: '华南最大的主题乐园', lat: 23.0000, lng: 113.3300, openTime: '09:30-21:00', ticketPrice: 250, zone: '长隆', priority: 5, duration: 7 },
      { name: '白云山', type: '自然', desc: '广州的城市绿肺，风景优美', lat: 23.1800, lng: 113.2000, openTime: '06:00-22:00', ticketPrice: 5, zone: '白云山', priority: 5, duration: 4 },
      { name: '沙面岛', type: '古迹', desc: '充满欧陆风情的小岛，历史建筑群', lat: 23.1200, lng: 113.2500, openTime: '全天开放', ticketPrice: 0, zone: '沙面', priority: 4, duration: 2 },
      { name: '北京路', type: '街区', desc: '广州最繁华的商业街', lat: 23.1291, lng: 113.2644, openTime: '全天开放', ticketPrice: 0, zone: '北京路', priority: 4, duration: 2 },
      { name: '陈家祠', type: '古迹', desc: '岭南建筑艺术的典范', lat: 23.1200, lng: 113.2500, isMuseum: true, openTime: '08:30-17:30', ticketPrice: 10, zone: '陈家祠', priority: 5, duration: 1.5 },
      { name: '上下九', type: '街区', desc: '广州著名的美食步行街', lat: 23.1100, lng: 113.2400, openTime: '全天开放', ticketPrice: 0, zone: '上下九', priority: 4, duration: 2 },
      { name: '越秀公园', type: '自然', desc: '广州最大的综合性公园', lat: 23.1400, lng: 113.2700, openTime: '06:00-22:00', ticketPrice: 0, zone: '越秀公园', priority: 4, duration: 2.5 },
      { name: '白水寨', type: '自然', desc: '落差428米的中国第一高瀑', lat: 23.6400, lng: 113.8600, openTime: '08:30-17:30', ticketPrice: 60, zone: '白水寨', priority: 4, duration: 4 },
      { name: '宝墨园', type: '园林', desc: '岭南园林的代表作', lat: 23.1300, lng: 113.5200, openTime: '08:30-17:30', ticketPrice: 54, zone: '宝墨园', priority: 4, duration: 3 },
      { name: '圣心大教堂', type: '古迹', desc: '中国最大的哥特式教堂', lat: 23.1100, lng: 113.2600, openTime: '08:30-17:00', ticketPrice: 0, zone: '圣心大教堂', priority: 4, duration: 1 },
      { name: '广州博物馆', type: '博物馆', desc: '了解广州历史文化', lat: 23.1400, lng: 113.2700, isMuseum: true, openTime: '09:00-17:00', ticketPrice: 10, zone: '越秀公园', priority: 4, duration: 2 },
      { name: '长隆野生动物世界', type: '娱乐', desc: '世界最大的野生动物主题公园', lat: 23.0000, lng: 113.3300, openTime: '09:30-18:00', ticketPrice: 250, zone: '长隆', priority: 5, duration: 6 },
      { name: '广州融创乐园', type: '娱乐', desc: '大型室内滑雪场和主题乐园', lat: 23.3800, lng: 113.2200, openTime: '10:00-22:00', ticketPrice: 280, zone: '融创乐园', priority: 4, duration: 6 },
      { name: '红砖厂', type: '街区', desc: '广州著名的创意园区', lat: 23.1100, lng: 113.3200, openTime: '全天开放', ticketPrice: 0, zone: '红砖厂', priority: 3, duration: 2 },
      { name: '太古汇', type: '现代', desc: '广州著名的高端购物中心', lat: 23.1300, lng: 113.3100, openTime: '10:00-22:00', ticketPrice: 0, zone: '太古汇', priority: 3, duration: 2 },
      { name: '琶洲', type: '现代', desc: '广州著名的会展中心', lat: 23.1000, lng: 113.3600, openTime: '全天开放', ticketPrice: 0, zone: '琶洲', priority: 3, duration: 2 },
      { name: '小洲村', type: '街区', desc: '广州著名的水乡古村', lat: 23.0200, lng: 113.3800, openTime: '全天开放', ticketPrice: 0, zone: '小洲村', priority: 3, duration: 2 },
      { name: '岭南印象园', type: '街区', desc: '广州著名的岭南文化主题公园', lat: 23.0100, lng: 113.4000, openTime: '09:30-17:00', ticketPrice: 68, zone: '岭南印象园', priority: 4, duration: 3 },
      { name: '大夫山', type: '自然', desc: '广州著名的森林公园', lat: 22.9800, lng: 113.2400, openTime: '08:00-18:00', ticketPrice: 0, zone: '大夫山', priority: 3, duration: 3 },
      { name: '帽峰山', type: '自然', desc: '广州著名的森林公园', lat: 23.2800, lng: 113.4600, openTime: '08:00-18:00', ticketPrice: 10, zone: '帽峰山', priority: 3, duration: 3 },
      { name: '莲花山', type: '自然', desc: '广州著名的风景名胜区', lat: 22.9200, lng: 113.5400, openTime: '07:00-17:00', ticketPrice: 50, zone: '莲花山', priority: 4, duration: 3 },
      { name: '从化温泉', type: '娱乐', desc: '广州著名的温泉度假区', lat: 23.6200, lng: 113.5200, openTime: '全天开放', ticketPrice: 188, zone: '从化温泉', priority: 4, duration: 4 },
      { name: '南沙湿地公园', type: '自然', desc: '广州著名的湿地公园', lat: 22.7900, lng: 113.5400, openTime: '09:00-17:00', ticketPrice: 50, zone: '南沙湿地', priority: 3, duration: 3 },
      { name: '天河城', type: '现代', desc: '广州著名的购物中心', lat: 23.1300, lng: 113.3000, openTime: '10:00-22:00', ticketPrice: 0, zone: '天河城', priority: 3, duration: 2 },
    ],
    '南京': [
      { name: '中山陵', type: '古迹', desc: '孙中山先生的陵墓，庄严肃穆', lat: 32.0603, lng: 118.8100, openTime: '08:30-17:00', ticketPrice: 0, zone: '中山陵', priority: 5, duration: 3 },
      { name: '夫子庙', type: '古迹', desc: '祭祀孔子的地方，秦淮河畔的文化地标', lat: 32.0200, lng: 118.7800, openTime: '09:00-21:00', ticketPrice: 40, zone: '夫子庙-秦淮河', priority: 4, duration: 2 },
      { name: '秦淮河', type: '自然', desc: '南京的母亲河，夜景迷人', lat: 32.0200, lng: 118.7800, openTime: '全天开放', ticketPrice: 0, zone: '夫子庙-秦淮河', priority: 4, duration: 2 },
      { name: '明孝陵', type: '古迹', desc: '明太祖朱元璋的陵墓', lat: 32.0600, lng: 118.8000, openTime: '06:30-18:00', ticketPrice: 70, zone: '明孝陵', priority: 5, duration: 3 },
      { name: '老门东', type: '街区', desc: '南京城南的历史文化街区', lat: 32.0100, lng: 118.7700, openTime: '全天开放', ticketPrice: 0, zone: '老门东', priority: 4, duration: 2 },
      { name: '总统府', type: '古迹', desc: '中国近代史上重要的政治中心', lat: 32.0400, lng: 118.7900, isMuseum: true, openTime: '08:30-18:00', ticketPrice: 35, zone: '总统府', priority: 4, duration: 2 },
      { name: '玄武湖', type: '自然', desc: '南京最大的城内公园', lat: 32.0700, lng: 118.7800, openTime: '06:00-21:00', ticketPrice: 0, zone: '玄武湖', priority: 4, duration: 3 },
      { name: '雨花台', type: '古迹', desc: '革命烈士陵园，红色旅游圣地', lat: 32.0200, lng: 118.7400, openTime: '08:00-18:00', ticketPrice: 0, zone: '雨花台', priority: 3, duration: 2 },
      { name: '南京博物院', type: '博物馆', desc: '中国三大博物馆之一', lat: 32.0400, lng: 118.8100, isMuseum: true, openTime: '09:00-17:00', ticketPrice: 0, zone: '南京博物院', priority: 5, duration: 3 },
      { name: '颐和路', type: '街区', desc: '南京最美的梧桐大道，民国建筑', lat: 32.0600, lng: 118.7500, openTime: '全天开放', ticketPrice: 0, zone: '颐和路', priority: 3, duration: 2 },
      { name: '红山森林动物园', type: '娱乐', desc: '南京最大的动物园', lat: 32.1000, lng: 118.7600, openTime: '08:30-18:00', ticketPrice: 40, zone: '红山动物园', priority: 3, duration: 3 },
      { name: '牛首山', type: '自然', desc: '南京南郊名胜，佛教圣地', lat: 31.9700, lng: 118.7200, openTime: '08:30-17:30', ticketPrice: 98, zone: '牛首山', priority: 4, duration: 4 },
      { name: '鸡鸣寺', type: '寺庙', desc: '南京最古老的佛教寺院', lat: 32.0700, lng: 118.7880, openTime: '07:00-17:00', ticketPrice: 10, zone: '鸡鸣寺', priority: 3, duration: 1 },
      { name: '美龄宫', type: '古迹', desc: '蒋介石和宋美龄的别墅', lat: 32.0580, lng: 118.8100, openTime: '08:30-17:00', ticketPrice: 30, zone: '中山陵', priority: 3, duration: 1 },
      { name: '南京长江大桥', type: '现代', desc: '中国自主设计建造的第一座长江大桥', lat: 32.0460, lng: 118.6460, openTime: '全天开放', ticketPrice: 0, zone: '长江大桥', priority: 3, duration: 1.5 },
      { name: '浦口火车站', type: '古迹', desc: '中国唯一保存完整的百年火车站', lat: 32.0880, lng: 118.6080, openTime: '09:00-17:00', ticketPrice: 0, zone: '浦口火车站', priority: 3, duration: 1.5 },
      { name: '南京大屠杀遇难同胞纪念馆', type: '博物馆', desc: '纪念南京大屠杀遇难同胞', lat: 32.0000, lng: 118.7200, isMuseum: true, openTime: '08:30-17:30', ticketPrice: 0, zone: '纪念馆', priority: 4, duration: 2 },
      { name: '紫金山', type: '自然', desc: '南京的城市绿肺', lat: 32.0600, lng: 118.8100, openTime: '全天开放', ticketPrice: 0, zone: '紫金山', priority: 4, duration: 4 },
      { name: '梅花山', type: '自然', desc: '中国著名的赏梅胜地', lat: 32.0580, lng: 118.8020, openTime: '08:00-17:00', ticketPrice: 65, zone: '明孝陵', priority: 4, duration: 2 },
      { name: '明城墙', type: '古迹', desc: '中国现存最大的古城墙', lat: 32.0400, lng: 118.7700, openTime: '08:00-22:00', ticketPrice: 30, zone: '明城墙', priority: 3, duration: 2 },
      { name: '甘熙故居', type: '古迹', desc: '南京现存最大的清代民居', lat: 32.0300, lng: 118.7700, isMuseum: true, openTime: '09:00-17:00', ticketPrice: 20, zone: '老门东', priority: 2, duration: 1 },
      { name: '1912街区', type: '街区', desc: '南京著名的时尚街区', lat: 32.0460, lng: 118.7960, openTime: '全天开放', ticketPrice: 0, zone: '1912街区', priority: 3, duration: 2 },
      { name: '新街口', type: '现代', desc: '南京最繁华的商业中心', lat: 32.0460, lng: 118.7900, openTime: '全天开放', ticketPrice: 0, zone: '新街口', priority: 3, duration: 2 },
      { name: '珍珠泉', type: '自然', desc: '南京著名的泉水景观', lat: 32.1900, lng: 118.6200, openTime: '08:00-17:00', ticketPrice: 40, zone: '珍珠泉', priority: 3, duration: 3 },
      { name: '汤山温泉', type: '娱乐', desc: '南京著名的温泉度假区', lat: 32.1600, lng: 119.0000, openTime: '全天开放', ticketPrice: 158, zone: '汤山', priority: 4, duration: 4 },
    ],
    '昆明': [
      { name: '滇池', type: '自然', desc: '云南最大的淡水湖，风光旖旎', lat: 24.8820, lng: 102.8000, openTime: '全天开放', ticketPrice: 0, zone: '滇池', priority: 5, duration: 4 },
      { name: '翠湖公园', type: '自然', desc: '昆明的城市绿肺，四季如春', lat: 24.8900, lng: 102.7100, openTime: '06:00-22:00', ticketPrice: 0, zone: '翠湖', priority: 4, duration: 2 },
      { name: '昆明老街', type: '街区', desc: '昆明历史悠久的商业街', lat: 24.8900, lng: 102.7150, openTime: '全天开放', ticketPrice: 0, zone: '昆明老街', priority: 4, duration: 2 },
      { name: '云南民族村', type: '娱乐', desc: '展示云南各民族文化的主题公园', lat: 24.8700, lng: 102.7800, openTime: '09:00-18:00', ticketPrice: 90, zone: '民族村', priority: 5, duration: 4 },
      { name: '大观楼', type: '古迹', desc: '昆明标志性建筑，长联闻名', lat: 24.8600, lng: 102.7800, openTime: '07:00-19:00', ticketPrice: 20, zone: '大观楼', priority: 4, duration: 2 },
      { name: '西山森林公园', type: '自然', desc: '俯瞰滇池美景', lat: 24.8500, lng: 102.6800, openTime: '08:00-18:00', ticketPrice: 40, zone: '西山', priority: 5, duration: 4 },
      { name: '金殿', type: '古迹', desc: '中国最大的铜殿', lat: 24.9100, lng: 102.7600, openTime: '08:00-18:00', ticketPrice: 30, zone: '金殿', priority: 4, duration: 2 },
      { name: '斗南花市', type: '街区', desc: '亚洲最大的花卉市场', lat: 24.8200, lng: 102.8000, openTime: '07:00-18:00', ticketPrice: 0, zone: '斗南', priority: 4, duration: 2 },
      { name: '云南省博物馆', type: '博物馆', desc: '了解云南历史文化', lat: 24.8600, lng: 102.8600, isMuseum: true, openTime: '09:00-17:00', ticketPrice: 0, zone: '省博物馆', priority: 5, duration: 3 },
      { name: '海埂大坝', type: '自然', desc: '滇池边的观景大道', lat: 24.8700, lng: 102.7900, openTime: '全天开放', ticketPrice: 0, zone: '滇池', priority: 4, duration: 2 },
      { name: '圆通寺', type: '寺庙', desc: '昆明最古老的佛教寺院', lat: 24.8900, lng: 102.7200, openTime: '08:00-18:00', ticketPrice: 6, zone: '圆通寺', priority: 3, duration: 1.5 },
      { name: '滇池湿地公园', type: '自然', desc: '候鸟栖息地，生态保护地', lat: 24.8800, lng: 102.8200, openTime: '08:00-18:00', ticketPrice: 30, zone: '滇池湿地', priority: 4, duration: 3 },
      { name: '昆明植物园', type: '自然', desc: '昆明著名的植物园', lat: 24.9400, lng: 102.7200, openTime: '08:00-18:00', ticketPrice: 10, zone: '植物园', priority: 3, duration: 2.5 },
      { name: '黑龙潭公园', type: '自然', desc: '昆明著名的公园', lat: 24.9400, lng: 102.7200, openTime: '08:00-18:00', ticketPrice: 10, zone: '黑龙潭', priority: 3, duration: 2 },
      { name: '官渡古镇', type: '街区', desc: '昆明著名的历史古镇', lat: 24.8200, lng: 102.8400, openTime: '全天开放', ticketPrice: 0, zone: '官渡古镇', priority: 4, duration: 2.5 },
      { name: '昙华寺', type: '寺庙', desc: '昆明著名的佛教寺院', lat: 24.8700, lng: 102.7600, openTime: '08:00-18:00', ticketPrice: 5, zone: '昙华寺', priority: 2, duration: 1.5 },
      { name: '双龙桥', type: '古迹', desc: '昆明著名的古桥', lat: 24.8200, lng: 102.8400, openTime: '全天开放', ticketPrice: 0, zone: '官渡古镇', priority: 2, duration: 1 },
      { name: '长虫山', type: '自然', desc: '昆明著名的山景公园', lat: 24.9600, lng: 102.6800, openTime: '全天开放', ticketPrice: 0, zone: '长虫山', priority: 3, duration: 3 },
      { name: '捞鱼河湿地公园', type: '自然', desc: '昆明著名的湿地公园', lat: 24.7600, lng: 102.8600, openTime: '08:00-18:00', ticketPrice: 0, zone: '捞鱼河', priority: 3, duration: 3 },
      { name: '大渔公园', type: '自然', desc: '昆明著名的主题公园', lat: 24.7400, lng: 102.8800, openTime: '08:00-18:00', ticketPrice: 0, zone: '大渔公园', priority: 3, duration: 2 },
      { name: '梁王山', type: '自然', desc: '昆明著名的山景', lat: 24.6200, lng: 102.9000, openTime: '全天开放', ticketPrice: 0, zone: '梁王山', priority: 2, duration: 3 },
      { name: '月亮谷', type: '自然', desc: '昆明著名的自然风光', lat: 24.7000, lng: 102.8800, openTime: '全天开放', ticketPrice: 0, zone: '月亮谷', priority: 2, duration: 3 },
      { name: '卧龙古渔村', type: '街区', desc: '昆明著名的古渔村', lat: 24.7600, lng: 102.8600, openTime: '全天开放', ticketPrice: 0, zone: '卧龙古渔村', priority: 3, duration: 2 },
      { name: '海东湿地公园', type: '自然', desc: '昆明著名的湿地公园', lat: 24.7800, lng: 102.8400, openTime: '08:00-18:00', ticketPrice: 0, zone: '海东湿地', priority: 3, duration: 2 },
      { name: '宜良九乡', type: '自然', desc: '昆明著名的溶洞景区', lat: 24.8800, lng: 103.1200, openTime: '08:00-18:00', ticketPrice: 90, zone: '九乡', priority: 4, duration: 4 },
    ],
    '海口': [
      { name: '海口骑楼老街', type: '古迹', desc: '海口最具特色的历史街区，南洋风情建筑', lat: 20.0447, lng: 110.3464, openTime: '全天开放', ticketPrice: 0, zone: '骑楼老街', priority: 5, duration: 2 },
      { name: '三亚湾', type: '自然', desc: '美丽的海湾，椰林沙滩', lat: 18.2500, lng: 109.5000, openTime: '全天开放', ticketPrice: 0, zone: '三亚湾', priority: 5, duration: 4 },
      { name: '天涯海角', type: '自然', desc: '海南著名的旅游景点', lat: 18.2500, lng: 109.5000, openTime: '08:00-18:00', ticketPrice: 81, zone: '天涯海角', priority: 5, duration: 4 },
      { name: '亚龙湾', type: '自然', desc: '天下第一湾，海水清澈', lat: 18.2800, lng: 109.5500, openTime: '全天开放', ticketPrice: 0, zone: '亚龙湾', priority: 5, duration: 5 },
      { name: '蜈支洲岛', type: '自然', desc: '中国最美的海岛之一', lat: 18.3000, lng: 109.6000, openTime: '08:00-18:00', ticketPrice: 144, zone: '蜈支洲岛', priority: 5, duration: 6 },
      { name: '海口火山口公园', type: '自然', desc: '中国唯一的火山口公园', lat: 19.9700, lng: 110.2300, openTime: '08:00-18:00', ticketPrice: 40, zone: '火山口', priority: 4, duration: 3 },
      { name: '假日海滩', type: '自然', desc: '海口最美丽的海滩', lat: 20.0000, lng: 110.2800, openTime: '全天开放', ticketPrice: 0, zone: '假日海滩', priority: 4, duration: 3 },
      { name: '万绿园', type: '自然', desc: '海口最大的城市公园', lat: 20.0300, lng: 110.3300, openTime: '06:00-22:00', ticketPrice: 0, zone: '万绿园', priority: 4, duration: 2 },
      { name: '三亚千古情', type: '娱乐', desc: '大型实景演出', lat: 18.2700, lng: 109.5100, openTime: '12:00-21:30', ticketPrice: 280, zone: '千古情', priority: 4, duration: 3 },
      { name: '呀诺达雨林', type: '自然', desc: '海南热带雨林', lat: 18.4000, lng: 109.6400, openTime: '07:30-18:00', ticketPrice: 158, zone: '呀诺达', priority: 5, duration: 5 },
      { name: '槟榔谷', type: '娱乐', desc: '海南民族文化旅游区', lat: 18.4300, lng: 109.6500, openTime: '08:00-18:00', ticketPrice: 120, zone: '槟榔谷', priority: 4, duration: 4 },
      { name: '南山文化旅游区', type: '寺庙', desc: '108米高的海上观音', lat: 18.2400, lng: 109.4300, openTime: '08:00-17:30', ticketPrice: 129, zone: '南山', priority: 5, duration: 5 },
      { name: '大东海', type: '自然', desc: '三亚著名的海湾', lat: 18.2500, lng: 109.5100, openTime: '全天开放', ticketPrice: 0, zone: '大东海', priority: 4, duration: 3 },
      { name: '鹿回头', type: '自然', desc: '三亚著名的观景台', lat: 18.2400, lng: 109.5200, openTime: '08:00-22:00', ticketPrice: 35, zone: '鹿回头', priority: 4, duration: 2 },
      { name: '海棠湾', type: '自然', desc: '三亚著名的海湾', lat: 18.3400, lng: 109.6600, openTime: '全天开放', ticketPrice: 0, zone: '海棠湾', priority: 4, duration: 4 },
      { name: '分界洲岛', type: '自然', desc: '海南著名的海岛', lat: 18.5800, lng: 110.0600, openTime: '08:00-18:00', ticketPrice: 168, zone: '分界洲岛', priority: 5, duration: 5 },
      { name: '西岛', type: '自然', desc: '三亚著名的海岛', lat: 18.2100, lng: 109.4500, openTime: '08:00-18:00', ticketPrice: 95, zone: '西岛', priority: 4, duration: 4 },
      { name: '南湾猴岛', type: '娱乐', desc: '海南著名的猴岛', lat: 18.6400, lng: 110.1400, openTime: '08:00-17:30', ticketPrice: 163, zone: '南湾猴岛', priority: 4, duration: 4 },
      { name: '陵水清水湾', type: '自然', desc: '海南著名的海滩', lat: 18.4800, lng: 110.0000, openTime: '全天开放', ticketPrice: 0, zone: '清水湾', priority: 4, duration: 3 },
      { name: '兴隆热带植物园', type: '自然', desc: '海南著名的植物园', lat: 18.6800, lng: 110.2400, openTime: '08:30-17:30', ticketPrice: 60, zone: '兴隆植物园', priority: 3, duration: 2 },
      { name: '文昌航天城', type: '现代', desc: '海南著名的航天发射中心', lat: 19.6200, lng: 110.9300, openTime: '09:00-17:00', ticketPrice: 100, zone: '文昌航天城', priority: 3, duration: 3 },
      { name: '琼海博鳌', type: '现代', desc: '海南著名的会议中心', lat: 19.1900, lng: 110.5700, openTime: '全天开放', ticketPrice: 0, zone: '博鳌', priority: 4, duration: 2 },
      { name: '五指山', type: '自然', desc: '海南著名的山景', lat: 18.7800, lng: 109.6000, openTime: '08:00-18:00', ticketPrice: 50, zone: '五指山', priority: 4, duration: 4 },
      { name: '海口冯小刚电影公社', type: '娱乐', desc: '大型影视拍摄基地', lat: 20.0600, lng: 110.3600, openTime: '09:00-22:00', ticketPrice: 148, zone: '电影公社', priority: 4, duration: 4 },
      { name: '三亚亚特兰蒂斯', type: '娱乐', desc: '大型水世界和水族馆', lat: 18.3400, lng: 109.6600, openTime: '10:00-20:00', ticketPrice: 298, zone: '亚特兰蒂斯', priority: 4, duration: 6 },
    ],
  };

  const data = attractionsData[cityName];
  if (data) {
    return data.map(item => ({
      ...item,
      image: getAttractionImage(item.name, item.type)
    }));
  }

  return [
    { name: `${cityName}古城`, type: '古迹', desc: `${cityName}历史悠久的古城，值得一游`, lat: city.lat, lng: city.lng, image: getAttractionImage(`${cityName}古城`, '古迹') },
    { name: `${cityName}博物馆`, type: '博物馆', desc: `了解${cityName}历史文化的窗口`, lat: city.lat + 0.01, lng: city.lng + 0.01, isMuseum: true, image: getAttractionImage(`${cityName}博物馆`, '博物馆') },
    { name: `${cityName}公园`, type: '自然', desc: `城市绿肺，休闲好去处`, lat: city.lat - 0.01, lng: city.lng - 0.01, image: getAttractionImage(`${cityName}公园`, '自然') },
    { name: `${cityName}美食街`, type: '街区', desc: `品尝当地特色美食`, lat: city.lat, lng: city.lng + 0.015, image: getAttractionImage(`${cityName}美食街`, '街区') },
  ];
};

const getDefaultHotels = (cityName) => {
  const city = getCityByName(cityName);
  if (!city) return [];

  const hotelsData = {
    '拉萨': [
      { name: '拉萨香格里拉大酒店', type: '酒店', price: 1288, rating: 4.7, address: '城关区民族中路1号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=26&keyword=香格里拉' },
      { name: '拉萨瑞吉度假酒店', type: '酒店', price: 1588, rating: 4.8, address: '城关区江苏路2号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=26&keyword=瑞吉度假' },
      { name: '拉萨洲际酒店', type: '酒店', price: 988, rating: 4.6, address: '城关区民族路1号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=26&keyword=洲际酒店' },
      { name: '拉萨平措康桑观景酒店', type: '酒店', price: 588, rating: 4.5, address: '城关区朵森格北路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=26&keyword=平措康桑' },
      { name: '拉萨扎西曲塔酒店', type: '酒店', price: 488, rating: 4.4, address: '城关区八廓南街', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=26&keyword=扎西曲塔' },
      { name: '拉萨天堂时光民宿', type: '民宿', price: 380, rating: 4.7, address: '城关区北京路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=26&keyword=天堂时光' },
      { name: '拉萨花间堂民宿', type: '民宿', price: 520, rating: 4.6, address: '城关区八廓街附近', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=26&keyword=花间堂' },
      { name: '拉萨东措国际青年旅舍', type: '青旅', price: 68, rating: 4.3, address: '城关区北京东路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=26&keyword=东措青旅' },
      { name: '拉萨平措青年旅舍', type: '青旅', price: 58, rating: 4.2, address: '城关区朵森格路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=26&keyword=平措青旅' },
      { name: '拉萨希尔顿花园酒店', type: '酒店', price: 788, rating: 4.5, address: '城关区金珠西路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=26&keyword=希尔顿花园' },
    ],
    '北京': [
      { name: '北京王府井希尔顿酒店', type: '酒店', price: 1288, rating: 4.7, address: '东城区王府井东街8号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=1&keyword=王府井希尔顿' },
      { name: '北京国贸大酒店', type: '酒店', price: 1588, rating: 4.8, address: '朝阳区建国门外大街1号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=1&keyword=国贸大酒店' },
      { name: '北京四季酒店', type: '酒店', price: 1688, rating: 4.9, address: '朝阳区亮马桥路48号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=1&keyword=四季酒店' },
      { name: '北京华尔道夫酒店', type: '酒店', price: 1488, rating: 4.8, address: '东城区金鱼胡同5-15号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=1&keyword=华尔道夫' },
      { name: '北京故宫周边民宿', type: '民宿', price: 480, rating: 4.6, address: '东城区景山前街', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=1&keyword=故宫民宿' },
      { name: '北京四合院民宿', type: '民宿', price: 680, rating: 4.7, address: '西城区后海附近', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=1&keyword=四合院民宿' },
      { name: '北京瓦当青年旅舍', type: '青旅', price: 58, rating: 4.3, address: '西城区西四南大街', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=1&keyword=瓦当青旅' },
      { name: '北京雍和青旅', type: '青旅', price: 65, rating: 4.2, address: '东城区雍和宫大街', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=1&keyword=雍和青旅' },
      { name: '北京三里屯SOHO酒店', type: '酒店', price: 888, rating: 4.5, address: '朝阳区三里屯路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=1&keyword=三里屯SOHO' },
      { name: '北京7天连锁酒店', type: '酒店', price: 288, rating: 4.1, address: '朝阳区望京街', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=1&keyword=7天连锁' },
    ],
    '上海': [
      { name: '上海香格里拉大酒店', type: '酒店', price: 1588, rating: 4.8, address: '浦东新区富城路33号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=3&keyword=香格里拉' },
      { name: '上海外滩华尔道夫酒店', type: '酒店', price: 1888, rating: 4.9, address: '黄浦区中山东一路2号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=3&keyword=华尔道夫' },
      { name: '上海浦东丽思卡尔顿', type: '酒店', price: 1688, rating: 4.8, address: '浦东新区世纪大道8号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=3&keyword=丽思卡尔顿' },
      { name: '上海和平饭店', type: '酒店', price: 1488, rating: 4.7, address: '黄浦区南京东路20号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=3&keyword=和平饭店' },
      { name: '上海法租界民宿', type: '民宿', price: 580, rating: 4.7, address: '徐汇区武康路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=3&keyword=法租界民宿' },
      { name: '上海外滩民宿', type: '民宿', price: 780, rating: 4.8, address: '黄浦区外滩附近', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=3&keyword=外滩民宿' },
      { name: '上海老码头青旅', type: '青旅', price: 78, rating: 4.3, address: '黄浦区中山南路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=3&keyword=老码头青旅' },
      { name: '上海蓝山国际青旅', type: '青旅', price: 68, rating: 4.2, address: '徐汇区漕溪北路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=3&keyword=蓝山青旅' },
      { name: '上海陆家嘴希尔顿酒店', type: '酒店', price: 988, rating: 4.6, address: '浦东新区陆家嘴环路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=3&keyword=陆家嘴希尔顿' },
      { name: '上海如家精选酒店', type: '酒店', price: 388, rating: 4.2, address: '静安区南京西路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=3&keyword=如家精选' },
    ],
    '杭州': [
      { name: '杭州康莱德酒店', type: '酒店', price: 1488, rating: 4.8, address: '上城区新业路228号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=12&keyword=康莱德' },
      { name: '杭州西湖国宾馆', type: '酒店', price: 1888, rating: 4.9, address: '西湖区杨公堤18号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=12&keyword=西湖国宾馆' },
      { name: '杭州四季酒店', type: '酒店', price: 1688, rating: 4.8, address: '西湖区灵隐路5号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=12&keyword=四季酒店' },
      { name: '杭州西溪喜来登酒店', type: '酒店', price: 1288, rating: 4.7, address: '西湖区西溪天堂', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=12&keyword=西溪喜来登' },
      { name: '杭州西溪湿地民宿', type: '民宿', price: 480, rating: 4.6, address: '西湖区西溪湿地', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=12&keyword=西溪民宿' },
      { name: '杭州西湖畔民宿', type: '民宿', price: 580, rating: 4.7, address: '西湖区南山路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=12&keyword=西湖民宿' },
      { name: '杭州茶香青旅', type: '青旅', price: 68, rating: 4.3, address: '西湖区龙井路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=12&keyword=茶香青旅' },
      { name: '杭州背包客青旅', type: '青旅', price: 58, rating: 4.2, address: '西湖区虎跑路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=12&keyword=背包客青旅' },
      { name: '杭州钱江新城万豪酒店', type: '酒店', price: 888, rating: 4.5, address: '江干区富春路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=12&keyword=钱江新城万豪' },
      { name: '杭州布丁酒店', type: '酒店', price: 268, rating: 4.0, address: '下城区延安路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=12&keyword=布丁酒店' },
    ],
    '成都': [
      { name: '成都瑞吉酒店', type: '酒店', price: 1288, rating: 4.7, address: '青羊区太升南路88号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=23&keyword=瑞吉酒店' },
      { name: '成都丽思卡尔顿酒店', type: '酒店', price: 1588, rating: 4.8, address: '锦江区顺城大街269号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=23&keyword=丽思卡尔顿' },
      { name: '成都希尔顿酒店', type: '酒店', price: 988, rating: 4.6, address: '武侯区天府大道666号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=23&keyword=希尔顿酒店' },
      { name: '成都IFS尼依格罗酒店', type: '酒店', price: 1488, rating: 4.8, address: '锦江区红星路三段1号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=23&keyword=尼依格罗' },
      { name: '成都宽窄巷子民宿', type: '民宿', price: 420, rating: 4.7, address: '青羊区宽窄巷子', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=23&keyword=宽窄巷子民宿' },
      { name: '成都锦里民宿', type: '民宿', price: 380, rating: 4.6, address: '武侯区锦里古街', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=23&keyword=锦里民宿' },
      { name: '成都梦之旅青旅', type: '青旅', price: 58, rating: 4.3, address: '武侯区武侯祠大街', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=23&keyword=梦之旅青旅' },
      { name: '成都懒骨头青旅', type: '青旅', price: 65, rating: 4.2, address: '青羊区西玉龙街', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=23&keyword=懒骨头青旅' },
      { name: '成都太古里亚朵酒店', type: '酒店', price: 788, rating: 4.5, address: '锦江区大慈寺路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=23&keyword=太古里亚朵' },
      { name: '成都7天连锁酒店', type: '酒店', price: 258, rating: 4.0, address: '金牛区人民北路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=23&keyword=7天连锁' },
    ],
    '西安': [
      { name: '西安威斯汀大酒店', type: '酒店', price: 1288, rating: 4.7, address: '雁塔区慈恩路66号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=27&keyword=威斯汀' },
      { name: '西安索菲特传奇酒店', type: '酒店', price: 1588, rating: 4.8, address: '新城区东新街319号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=27&keyword=索菲特传奇' },
      { name: '西安大雁塔附近酒店', type: '酒店', price: 888, rating: 4.5, address: '雁塔区大雁塔北广场', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=27&keyword=大雁塔酒店' },
      { name: '西安豪享来温德姆酒店', type: '酒店', price: 988, rating: 4.6, address: '莲湖区西大街', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=27&keyword=豪享来温德姆' },
      { name: '西安回民街民宿', type: '民宿', price: 380, rating: 4.6, address: '莲湖区回民街', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=27&keyword=回民街民宿' },
      { name: '西安城墙民宿', type: '民宿', price: 420, rating: 4.7, address: '碑林区城墙附近', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=27&keyword=城墙民宿' },
      { name: '西安七贤国际青旅', type: '青旅', price: 58, rating: 4.3, address: '碑林区南门外', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=27&keyword=七贤青旅' },
      { name: '西安湘子门青旅', type: '青旅', price: 65, rating: 4.2, address: '碑林区湘子庙街', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=27&keyword=湘子门青旅' },
      { name: '西安曲江希尔顿花园酒店', type: '酒店', price: 788, rating: 4.5, address: '雁塔区曲江新区', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=27&keyword=曲江希尔顿' },
      { name: '西安如家酒店', type: '酒店', price: 268, rating: 4.0, address: '未央区龙首村', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=27&keyword=如家酒店' },
    ],
    '武汉': [
      { name: '武汉黄鹤楼酒店', type: '酒店', price: 888, rating: 4.5, address: '武昌区蛇山西山坡', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=18&keyword=黄鹤楼酒店' },
      { name: '武汉万达瑞华酒店', type: '酒店', price: 1288, rating: 4.8, address: '武昌区水果湖街', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=18&keyword=万达瑞华' },
      { name: '武汉泛海喜来登酒店', type: '酒店', price: 988, rating: 4.6, address: '江汉区淮海路', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=18&keyword=泛海喜来登' },
      { name: '武汉绿地铂瑞酒店', type: '酒店', price: 1188, rating: 4.7, address: '武昌区和平大道', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=18&keyword=绿地铂瑞' },
      { name: '武汉江景民宿', type: '民宿', price: 420, rating: 4.6, address: '江岸区沿江大道', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=18&keyword=江景民宿' },
      { name: '武汉昙华林民宿', type: '民宿', price: 380, rating: 4.7, address: '武昌区昙华林', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=18&keyword=昙华林民宿' },
      { name: '武汉探路者青旅', type: '青旅', price: 58, rating: 4.3, address: '武昌区珞瑜路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=18&keyword=探路者青旅' },
      { name: '武汉青旅国际', type: '青旅', price: 65, rating: 4.2, address: '江汉区汉口火车站', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=18&keyword=青旅国际' },
      { name: '武汉光谷皇冠假日酒店', type: '酒店', price: 788, rating: 4.5, address: '东湖高新区珞瑜路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=18&keyword=光谷皇冠假日' },
      { name: '武汉7天连锁酒店', type: '酒店', price: 258, rating: 4.0, address: '洪山区珞狮路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=18&keyword=7天连锁' },
    ],
    '长沙': [
      { name: '长沙君悦酒店', type: '酒店', price: 1288, rating: 4.7, address: '天心区湘江中路36号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=19&keyword=君悦酒店' },
      { name: '长沙IFS尼依格罗酒店', type: '酒店', price: 1488, rating: 4.8, address: '芙蓉区解放西路188号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=19&keyword=尼依格罗' },
      { name: '长沙瑞吉酒店', type: '酒店', price: 1188, rating: 4.7, address: '雨花区运达中央广场', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=19&keyword=瑞吉酒店' },
      { name: '长沙W酒店', type: '酒店', price: 1588, rating: 4.8, address: '岳麓区滨江景观道', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=19&keyword=W酒店' },
      { name: '长沙坡子街民宿', type: '民宿', price: 380, rating: 4.6, address: '天心区坡子街', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=19&keyword=坡子街民宿' },
      { name: '长沙岳麓山民宿', type: '民宿', price: 420, rating: 4.7, address: '岳麓区岳麓山', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=19&keyword=岳麓山民宿' },
      { name: '长沙国际青旅', type: '青旅', price: 58, rating: 4.3, address: '芙蓉区五一大道', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=19&keyword=国际青旅' },
      { name: '长沙背包十年青旅', type: '青旅', price: 68, rating: 4.4, address: '天心区书院路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=19&keyword=背包十年' },
      { name: '长沙梅溪湖金茂豪华精选酒店', type: '酒店', price: 988, rating: 4.5, address: '岳麓区环湖路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=19&keyword=梅溪湖金茂' },
      { name: '长沙如家酒店', type: '酒店', price: 268, rating: 4.0, address: '开福区中山路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=19&keyword=如家酒店' },
    ],
    '广州': [
      { name: '广州瑰丽酒店', type: '酒店', price: 1888, rating: 4.9, address: '天河区珠江新城', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=20&keyword=瑰丽酒店' },
      { name: '广州四季酒店', type: '酒店', price: 1688, rating: 4.8, address: '天河区珠江新城', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=20&keyword=四季酒店' },
      { name: '广州富力丽思卡尔顿酒店', type: '酒店', price: 1488, rating: 4.7, address: '天河区珠江新城', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=20&keyword=丽思卡尔顿' },
      { name: '广州白天鹅宾馆', type: '酒店', price: 1288, rating: 4.7, address: '荔湾区沙面南街', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=20&keyword=白天鹅宾馆' },
      { name: '广州沙面民宿', type: '民宿', price: 420, rating: 4.6, address: '荔湾区沙面岛', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=20&keyword=沙面民宿' },
      { name: '广州上下九民宿', type: '民宿', price: 380, rating: 4.5, address: '荔湾区上下九路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=20&keyword=上下九民宿' },
      { name: '广州国际青旅', type: '青旅', price: 58, rating: 4.3, address: '越秀区北京路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=20&keyword=国际青旅' },
      { name: '广州时光青旅', type: '青旅', price: 65, rating: 4.2, address: '天河区体育西路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=20&keyword=时光青旅' },
      { name: '广州天河希尔顿酒店', type: '酒店', price: 988, rating: 4.5, address: '天河区天河路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=20&keyword=天河希尔顿' },
      { name: '广州7天连锁酒店', type: '酒店', price: 258, rating: 4.0, address: '白云区机场路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=20&keyword=7天连锁' },
    ],
    '南京': [
      { name: '南京金陵饭店', type: '酒店', price: 1288, rating: 4.7, address: '鼓楼区汉中路2号', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=11&keyword=金陵饭店' },
      { name: '南京凯宾斯基酒店', type: '酒店', price: 1188, rating: 4.6, address: '玄武区龙蟠路', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=11&keyword=凯宾斯基' },
      { name: '南京金鹰国际酒店', type: '酒店', price: 988, rating: 4.5, address: '秦淮区汉中路', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=11&keyword=金鹰国际' },
      { name: '南京苏宁钟山国际高尔夫酒店', type: '酒店', price: 1588, rating: 4.8, address: '玄武区环陵路', featured: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=11&keyword=苏宁钟山' },
      { name: '南京老门东民宿', type: '民宿', price: 420, rating: 4.6, address: '秦淮区老门东', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=11&keyword=老门东民宿' },
      { name: '南京夫子庙民宿', type: '民宿', price: 380, rating: 4.7, address: '秦淮区夫子庙', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=11&keyword=夫子庙民宿' },
      { name: '南京旅行者青旅', type: '青旅', price: 58, rating: 4.3, address: '玄武区丹凤街', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=11&keyword=旅行者青旅' },
      { name: '南京蓝湾咖啡青旅', type: '青旅', price: 65, rating: 4.2, address: '鼓楼区广州路', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=11&keyword=蓝湾咖啡青旅' },
      { name: '南京新街口亚朵酒店', type: '酒店', price: 788, rating: 4.5, address: '秦淮区新街口', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=11&keyword=新街口亚朵' },
      { name: '南京如家酒店', type: '酒店', price: 268, rating: 4.0, address: '建邺区奥体大街', budget: true, bookingUrl: 'https://hotels.ctrip.com/hotels/list?city=11&keyword=如家酒店' },
    ],
  };

  const data = hotelsData[cityName];
  if (data) {
    return data.map(item => ({
      ...item,
      image: getHotelImage(item.name)
    }));
  }

  return [
    { name: `${cityName}大酒店`, type: '酒店', price: 588, rating: 4.3, address: `${cityName}市中心`, budget: true, image: getHotelImage(`${cityName}大酒店`) || getHotelIcon('酒店'), bookingUrl: `https://hotels.ctrip.com/hotels/list?city=${city.cityCode}&keyword=${cityName}` },
    { name: `${cityName}特色民宿`, type: '民宿', price: 350, rating: 4.5, address: `${cityName}老城区`, budget: true, image: getHotelImage(`${cityName}特色民宿`) || getHotelIcon('民宿'), bookingUrl: `https://hotels.ctrip.com/hotels/list?city=${city.cityCode}&keyword=${cityName}民宿` },
    { name: `${cityName}国际青年旅舍`, type: '青旅', price: 68, rating: 4.2, address: `${cityName}繁华地段`, budget: true, image: getHotelImage(`${cityName}国际青年旅舍`) || getHotelIcon('青旅'), bookingUrl: `https://hotels.ctrip.com/hotels/list?city=${city.cityCode}&keyword=${cityName}青旅` },
  ];
};

const getDefaultFood = (cityName) => {
  const foodData = {
    '拉萨': [
      { name: '藏式酥油茶', desc: '西藏传统饮品，咸香浓郁', shop: '玛吉阿米', lat: 29.6513, lng: 91.1752, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Tibetan_butter_tea.jpg/400px-Tibetan_butter_tea.jpg' },
      { name: '青稞酒', desc: '藏族传统美酒，清香醇厚', shop: '拉萨餐厅', lat: 29.6540, lng: 91.1717, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Chang_Chinese_wine.jpg/400px-Chang_Chinese_wine.jpg' },
      { name: '糌粑', desc: '藏族传统主食，营养丰富', shop: '藏家宴', lat: 29.6520, lng: 91.1720, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Tibetan_tsampa.jpg/400px-Tibetan_tsampa.jpg' },
      { name: '牦牛肉火锅', desc: '肉质鲜嫩，营养美味', shop: '老西藏餐厅', lat: 29.6530, lng: 91.1740, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Yak_meat_hotpot.jpg/400px-Yak_meat_hotpot.jpg' },
      { name: '藏香猪', desc: '西藏特色美食，肉香浓郁', shop: '雪域餐厅', lat: 29.6500, lng: 91.1760, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tibetan_pork_dish.jpg/400px-Tibetan_pork_dish.jpg' },
    ],
    '北京': [
      { name: '北京烤鸭', desc: '皮酥肉嫩，名扬天下', shop: '全聚德', lat: 39.9140, lng: 116.4040, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Peking_duck.jpg/400px-Peking_duck.jpg' },
      { name: '炸酱面', desc: '京味十足，酱香浓郁', shop: '海碗居', lat: 39.9340, lng: 116.3860, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Zha_jiang_mian.jpg/400px-Zha_jiang_mian.jpg' },
      { name: '卤煮火烧', desc: '内脏杂烩，老北京味道', shop: '北新桥卤煮', lat: 39.9860, lng: 116.4040, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Luzhu_huoshao.jpg/400px-Luzhu_huoshao.jpg' },
      { name: '爆肚', desc: '脆嫩爽口，蘸料讲究', shop: '爆肚冯', lat: 39.9260, lng: 116.3960, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Beijing_baodu.jpg/400px-Beijing_baodu.jpg' },
      { name: '涮羊肉', desc: '铜锅炭火，鲜嫩无比', shop: '东来顺', lat: 39.9140, lng: 116.3640, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Shuan_yangrou.jpg/400px-Shuan_yangrou.jpg' },
    ],
    '上海': [
      { name: '南翔小笼包', desc: '皮薄馅大，汤汁鲜美', shop: '南翔馒头店', lat: 31.2304, lng: 121.4737, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Xiaolongbao_Shanghai.jpg/400px-Xiaolongbao_Shanghai.jpg' },
      { name: '生煎包', desc: '底脆汁多，鲜香可口', shop: '大壶春', lat: 31.2397, lng: 121.4762, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Shengjianbao.jpg/400px-Shengjianbao.jpg' },
      { name: '上海红烧肉', desc: '浓油赤酱，肥而不腻', shop: '上海会馆', lat: 31.2304, lng: 121.4837, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Red_cooked_pork.jpg/400px-Red_cooked_pork.jpg' },
      { name: '蟹壳黄', desc: '形似蟹壳，香酥可口', shop: '吴苑饼家', lat: 31.2350, lng: 121.4760, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Xiekehuang.jpg/400px-Xiekehuang.jpg' },
      { name: '排骨年糕', desc: '年糕糯甜，排骨酥脆', shop: '鲜得来', lat: 31.2400, lng: 121.4800, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Paigu_niangao.jpg/400px-Paigu_niangao.jpg' },
    ],
    '杭州': [
      { name: '西湖醋鱼', desc: '酸甜适口，鲜嫩爽滑', shop: '楼外楼', lat: 30.2498, lng: 120.1536, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/West_Lake_vinegar_fish.jpg/400px-West_Lake_vinegar_fish.jpg' },
      { name: '龙井虾仁', desc: '茶香虾嫩，清淡鲜美', shop: '龙井村酒家', lat: 30.2304, lng: 120.1237, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Longjing_shrimp.jpg/400px-Longjing_shrimp.jpg' },
      { name: '东坡肉', desc: '色泽红亮，入口即化', shop: '知味观', lat: 30.2697, lng: 120.1562, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dongpo_pork.jpg/400px-Dongpo_pork.jpg' },
      { name: '叫花鸡', desc: '泥裹烘烤，香气四溢', shop: '天香楼', lat: 30.2600, lng: 120.1600, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jiaohua_chicken.jpg/400px-Jiaohua_chicken.jpg' },
      { name: '片儿川', desc: '雪菜笋片，鲜美可口', shop: '方老大面店', lat: 30.2700, lng: 120.1500, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Pianerchuan.jpg/400px-Pianerchuan.jpg' },
    ],
    '西安': [
      { name: '肉夹馍', desc: '馍酥肉香，回味无穷', shop: '樊记腊汁肉', lat: 34.2620, lng: 108.9460, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Roujiamo.jpg/400px-Roujiamo.jpg' },
      { name: '羊肉泡馍', desc: '肉烂汤浓，馍香入味', shop: '老孙家', lat: 34.2640, lng: 108.9500, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Xian_paomo.jpg/400px-Xian_paomo.jpg' },
      { name: '凉皮', desc: '酸辣爽口，筋道弹牙', shop: '魏家凉皮', lat: 34.2460, lng: 108.9560, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Xian_liangpi.jpg/400px-Xian_liangpi.jpg' },
      { name: '油泼面', desc: '热油一泼，香气扑鼻', shop: '老碗面', lat: 34.2600, lng: 108.9500, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Youpomian.jpg/400px-Youpomian.jpg' },
      { name: 'biangbiang面', desc: '面条宽厚，劲道十足', shop: '马洪小炒泡馍', lat: 34.2167, lng: 108.9550, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Biangbiang_noodles.jpg/400px-Biangbiang_noodles.jpg' },
    ],
    '成都': [
      { name: '成都火锅', desc: '麻辣鲜香，锅底醇厚', shop: '蜀大侠', lat: 30.6590, lng: 104.0640, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Chengdu_hotpot.jpg/400px-Chengdu_hotpot.jpg' },
      { name: '麻婆豆腐', desc: '麻辣鲜香，嫩而不碎', shop: '陈麻婆豆腐', lat: 30.6580, lng: 104.0080, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ma_po_tofu.jpg/400px-Ma_po_tofu.jpg' },
      { name: '担担面', desc: '麻辣鲜香，肉末酥脆', shop: '钟水饺', lat: 30.6590, lng: 104.0460, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Dandan_noodles.jpg/400px-Dandan_noodles.jpg' },
      { name: '夫妻肺片', desc: '红油麻辣，鲜香爽口', shop: '夫妻肺片总店', lat: 30.6650, lng: 104.0360, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Fuqi_feipian.jpg/400px-Fuqi_feipian.jpg' },
      { name: '回锅肉', desc: '肥而不腻，香气四溢', shop: '乡村基', lat: 30.6590, lng: 104.0500, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Huiguo_rou.jpg/400px-Huiguo_rou.jpg' },
    ],
    '武汉': [
      { name: '热干面', desc: '芝麻酱香，劲道爽滑', shop: '蔡林记', lat: 30.5420, lng: 114.3420, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Wuhan_reganmian.jpg/400px-Wuhan_reganmian.jpg' },
      { name: '三鲜豆皮', desc: '金黄酥脆，馅料丰富', shop: '王师傅豆皮', lat: 30.5400, lng: 114.3400, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Wuhan_doupi.jpg/400px-Wuhan_doupi.jpg' },
      { name: '面窝', desc: '外酥内软，葱香扑鼻', shop: '户部巷小吃', lat: 30.5360, lng: 114.3360, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Wuhan_mianwo.jpg/400px-Wuhan_mianwo.jpg' },
      { name: '欢喜坨', desc: '空心酥脆，甜香可口', shop: '老通城', lat: 30.5400, lng: 114.3440, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Huanxituo.jpg/400px-Huanxituo.jpg' },
      { name: '糊汤粉', desc: '鱼汤鲜美，胡椒暖胃', shop: '徐嫂糊汤粉', lat: 30.5360, lng: 114.3380, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Wuhan_hutangfen.jpg/400px-Wuhan_hutangfen.jpg' },
    ],
    '长沙': [
      { name: '臭豆腐', desc: '闻着臭吃着香，外酥里嫩', shop: '黑色经典', lat: 28.2280, lng: 112.9380, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Changsha_stinky_tofu.jpg/400px-Changsha_stinky_tofu.jpg' },
      { name: '糖油粑粑', desc: '金黄软糯，甜香可口', shop: '李公庙糖油粑粑', lat: 28.2260, lng: 112.9360, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Tangyou_baba.jpg/400px-Tangyou_baba.jpg' },
      { name: '口味虾', desc: '麻辣鲜香，香辣过瘾', shop: '文和友', lat: 28.2280, lng: 112.9400, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Changsha_spicy_crayfish.jpg/400px-Changsha_spicy_crayfish.jpg' },
      { name: '剁椒鱼头', desc: '红亮诱人，酸辣开胃', shop: '炊烟小炒黄牛肉', lat: 28.2300, lng: 112.9420, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Duojiao_yutou.jpg/400px-Duojiao_yutou.jpg' },
      { name: '小炒黄牛肉', desc: '肉质鲜嫩，香辣下饭', shop: '费大厨', lat: 28.2280, lng: 112.9440, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Xiaochao_huangniurou.jpg/400px-Xiaochao_huangniurou.jpg' },
    ],
    '广州': [
      { name: '早茶', desc: '点心丰富，品类繁多', shop: '陶陶居', lat: 23.1200, lng: 113.2600, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Guangzhou_morning_tea.jpg/400px-Guangzhou_morning_tea.jpg' },
      { name: '肠粉', desc: '皮薄滑嫩，馅料鲜美', shop: '银记肠粉', lat: 23.1200, lng: 113.2600, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Guangzhou_cheongfun.jpg/400px-Guangzhou_cheongfun.jpg' },
      { name: '烧鹅', desc: '皮脆肉嫩，汁多味美', shop: '深井烧鹅', lat: 23.1200, lng: 113.2600, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Guangzhou_roast_goose.jpg/400px-Guangzhou_roast_goose.jpg' },
      { name: '白切鸡', desc: '皮黄肉白，原汁原味', shop: '广州酒家', lat: 23.1200, lng: 113.3200, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Guangzhou_white_cut_chicken.jpg/400px-Guangzhou_white_cut_chicken.jpg' },
      { name: '双皮奶', desc: '奶香浓郁，细腻嫩滑', shop: '南信牛奶甜品', lat: 23.1200, lng: 113.2400, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shuangpinai.jpg/400px-Shuangpinai.jpg' },
    ],
    '南京': [
      { name: '盐水鸭', desc: '皮白肉嫩，咸香适口', shop: '桂花鸭', lat: 32.0600, lng: 118.7900, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Nanjing_salted_duck.jpg/400px-Nanjing_salted_duck.jpg' },
      { name: '鸭血粉丝汤', desc: '汤鲜味美，粉丝爽滑', shop: '回味鸭血粉丝', lat: 32.0600, lng: 118.7900, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Nanjing_duck_blood_soup.jpg/400px-Nanjing_duck_blood_soup.jpg' },
      { name: '小笼包', desc: '皮薄馅大，汤汁鲜美', shop: '尹氏鸡汁汤包', lat: 32.0300, lng: 118.7800, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Xiaolongbao_Shanghai.jpg/400px-Xiaolongbao_Shanghai.jpg' },
      { name: '桂花糖芋苗', desc: '香甜软糯，桂香四溢', shop: '南京大牌档', lat: 32.0600, lng: 118.7900, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nanjing_sweet_taro.jpg/400px-Nanjing_sweet_taro.jpg' },
      { name: '鸡鸭血汤', desc: '鲜美滋补，口味独特', shop: '鸭血粉丝汤店', lat: 32.0300, lng: 118.7800, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ji_yaxue_tang.jpg/400px-Ji_yaxue_tang.jpg' },
    ],
  };

  const data = foodData[cityName];
  if (data) {
    return data.map(item => ({
      ...item,
      image: getFoodImage(item.name)
    }));
  }

  return [
    { name: `${cityName}特色小吃`, desc: `${cityName}传统美食，口味独特`, shop: `${cityName}老字号`, image: getFoodImage(`${cityName}特色小吃`) },
    { name: `${cityName}地方菜`, desc: `独具特色的${cityName}风味`, shop: `${cityName}餐厅`, image: getFoodImage(`${cityName}地方菜`) },
    { name: `${cityName}火锅`, desc: `麻辣鲜香，回味无穷`, shop: `${cityName}火锅店`, image: getFoodImage(`${cityName}火锅`) },
  ];
};

const getDefaultPhotoSpots = (cityName) => {
  const city = getCityByName(cityName);
  if (!city) return [];

  const photoSpotsData = {
    '拉萨': [
      { name: '布达拉宫正面', desc: '最佳拍摄点：药王山观景台', bestTime: '日出时分', poseTips: '穿着民族服饰，庄重肃穆', verified: true, lat: 29.6540, lng: 91.1717, likes: 2580, image: 'https://images.unsplash.com/photo-1553953782402-6f233156c9b0?w=600&q=80' },
      { name: '布达拉宫夜景', desc: '最佳拍摄点：布达拉宫广场', bestTime: '20:00-21:00', poseTips: '长曝光拍摄灯光', verified: true, lat: 29.6540, lng: 91.1717, likes: 1890, image: 'https://images.unsplash.com/photo-1491547669199-747d077e4f1d?w=600&q=80' },
      { name: '纳木错日出', desc: '最佳拍摄点：扎西半岛', bestTime: '清晨6-7点', poseTips: '湖面倒影，人物剪影', verified: true, lat: 30.7609, lng: 90.9047, likes: 2150, image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80' },
      { name: '羊卓雍错', desc: '最佳拍摄点：观景台', bestTime: '上午10-11点', poseTips: '蓝色湖水为背景', verified: true, lat: 29.0310, lng: 90.5686, likes: 1920, image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80' },
      { name: '大昭寺金顶', desc: '最佳拍摄点：八廓街', bestTime: '下午阳光', poseTips: '仰拍金顶', verified: true, lat: 29.6513, lng: 91.1752, likes: 1650, image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80' },
    ],
  };

  const data = photoSpotsData[cityName];
  if (data) return data;

  return [
    { name: `${cityName}地标`, desc: '最佳拍摄点：市中心广场', bestTime: '傍晚', poseTips: '城市背景，自然微笑', verified: true, lat: city.lat, lng: city.lng, likes: 500, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
    { name: `${cityName}夜景`, desc: '最佳拍摄点：江边步道', bestTime: '20:00后', poseTips: '灯光背景，长曝光', verified: true, lat: city.lat, lng: city.lng + 0.01, likes: 450, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80' },
    { name: `${cityName}公园`, desc: '最佳拍摄点：湖边', bestTime: '下午3-4点', poseTips: '自然放松，融入景色', verified: true, lat: city.lat - 0.01, lng: city.lng, likes: 380, image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=600&q=80' },
  ];
};

const getDefaultWeather = (cityName) => {
  const weatherData = {
    '北京': { temp: 26, condition: '晴', humidity: 45, wind: '东北风 3级', forecast: [{ day: '今天', condition: '晴', high: 28, low: 18 }, { day: '明天', condition: '晴', high: 29, low: 19 }, { day: '后天', condition: '多云', high: 27, low: 17 }] },
    '天津': { temp: 25, condition: '多云', humidity: 55, wind: '东风 2级', forecast: [{ day: '今天', condition: '多云', high: 27, low: 19 }, { day: '明天', condition: '阴', high: 26, low: 18 }, { day: '后天', condition: '晴', high: 28, low: 20 }] },
    '上海': { temp: 28, condition: '多云', humidity: 65, wind: '东南风 4级', forecast: [{ day: '今天', condition: '多云', high: 30, low: 22 }, { day: '明天', condition: '晴', high: 31, low: 23 }, { day: '后天', condition: '阴', high: 29, low: 21 }] },
    '重庆': { temp: 32, condition: '阴', humidity: 80, wind: '南风 2级', forecast: [{ day: '今天', condition: '阴', high: 34, low: 26 }, { day: '明天', condition: '小雨', high: 33, low: 25 }, { day: '后天', condition: '阴', high: 35, low: 27 }] },
    '石家庄': { temp: 27, condition: '晴', humidity: 40, wind: '北风 3级', forecast: [{ day: '今天', condition: '晴', high: 29, low: 17 }, { day: '明天', condition: '晴', high: 30, low: 18 }, { day: '后天', condition: '多云', high: 28, low: 16 }] },
    '太原': { temp: 24, condition: '晴', humidity: 35, wind: '西北风 4级', forecast: [{ day: '今天', condition: '晴', high: 26, low: 14 }, { day: '明天', condition: '多云', high: 25, low: 13 }, { day: '后天', condition: '晴', high: 27, low: 15 }] },
    '呼和浩特': { temp: 22, condition: '多云', humidity: 45, wind: '北风 3级', forecast: [{ day: '今天', condition: '多云', high: 24, low: 12 }, { day: '明天', condition: '晴', high: 23, low: 11 }, { day: '后天', condition: '多云', high: 25, low: 13 }] },
    '沈阳': { temp: 23, condition: '晴', humidity: 50, wind: '东北风 3级', forecast: [{ day: '今天', condition: '晴', high: 25, low: 13 }, { day: '明天', condition: '多云', high: 24, low: 12 }, { day: '后天', condition: '晴', high: 26, low: 14 }] },
    '长春': { temp: 21, condition: '多云', humidity: 55, wind: '东风 2级', forecast: [{ day: '今天', condition: '多云', high: 23, low: 11 }, { day: '明天', condition: '晴', high: 22, low: 10 }, { day: '后天', condition: '阴', high: 24, low: 12 }] },
    '哈尔滨': { temp: 20, condition: '晴', humidity: 50, wind: '西北风 3级', forecast: [{ day: '今天', condition: '晴', high: 22, low: 10 }, { day: '明天', condition: '晴', high: 21, low: 9 }, { day: '后天', condition: '多云', high: 23, low: 11 }] },
    '南京': { temp: 28, condition: '多云', humidity: 60, wind: '东南风 3级', forecast: [{ day: '今天', condition: '多云', high: 30, low: 20 }, { day: '明天', condition: '晴', high: 31, low: 21 }, { day: '后天', condition: '阴', high: 29, low: 19 }] },
    '杭州': { temp: 29, condition: '晴', humidity: 55, wind: '东风 2级', forecast: [{ day: '今天', condition: '晴', high: 31, low: 21 }, { day: '明天', condition: '晴', high: 32, low: 22 }, { day: '后天', condition: '多云', high: 30, low: 20 }] },
    '合肥': { temp: 28, condition: '阴', humidity: 70, wind: '南风 2级', forecast: [{ day: '今天', condition: '阴', high: 30, low: 22 }, { day: '明天', condition: '小雨', high: 29, low: 21 }, { day: '后天', condition: '阴', high: 31, low: 23 }] },
    '福州': { temp: 30, condition: '多云', humidity: 75, wind: '东南风 3级', forecast: [{ day: '今天', condition: '多云', high: 32, low: 24 }, { day: '明天', condition: '晴', high: 33, low: 25 }, { day: '后天', condition: '多云', high: 31, low: 23 }] },
    '南昌': { temp: 31, condition: '晴', humidity: 65, wind: '南风 2级', forecast: [{ day: '今天', condition: '晴', high: 33, low: 23 }, { day: '明天', condition: '晴', high: 34, low: 24 }, { day: '后天', condition: '多云', high: 32, low: 22 }] },
    '济南': { temp: 27, condition: '晴', humidity: 45, wind: '西南风 3级', forecast: [{ day: '今天', condition: '晴', high: 29, low: 17 }, { day: '明天', condition: '多云', high: 30, low: 18 }, { day: '后天', condition: '晴', high: 28, low: 16 }] },
    '郑州': { temp: 29, condition: '多云', humidity: 55, wind: '东南风 2级', forecast: [{ day: '今天', condition: '多云', high: 31, low: 21 }, { day: '明天', condition: '晴', high: 30, low: 20 }, { day: '后天', condition: '多云', high: 32, low: 22 }] },
    '武汉': { temp: 30, condition: '晴', humidity: 60, wind: '东风 3级', forecast: [{ day: '今天', condition: '晴', high: 32, low: 22 }, { day: '明天', condition: '晴', high: 33, low: 23 }, { day: '后天', condition: '多云', high: 31, low: 21 }] },
    '长沙': { temp: 31, condition: '多云', humidity: 70, wind: '南风 2级', forecast: [{ day: '今天', condition: '多云', high: 33, low: 23 }, { day: '明天', condition: '晴', high: 34, low: 24 }, { day: '后天', condition: '多云', high: 32, low: 22 }] },
    '广州': { temp: 32, condition: '晴', humidity: 75, wind: '东南风 3级', forecast: [{ day: '今天', condition: '晴', high: 34, low: 26 }, { day: '明天', condition: '晴', high: 35, low: 27 }, { day: '后天', condition: '多云', high: 33, low: 25 }] },
    '南宁': { temp: 31, condition: '多云', humidity: 80, wind: '南风 2级', forecast: [{ day: '今天', condition: '多云', high: 33, low: 25 }, { day: '明天', condition: '小雨', high: 32, low: 24 }, { day: '后天', condition: '多云', high: 34, low: 26 }] },
    '海口': { temp: 33, condition: '晴', humidity: 85, wind: '东南风 4级', forecast: [{ day: '今天', condition: '晴', high: 35, low: 27 }, { day: '明天', condition: '晴', high: 36, low: 28 }, { day: '后天', condition: '多云', high: 34, low: 26 }] },
    '成都': { temp: 26, condition: '阴', humidity: 75, wind: '北风 2级', forecast: [{ day: '今天', condition: '阴', high: 28, low: 20 }, { day: '明天', condition: '小雨', high: 27, low: 19 }, { day: '后天', condition: '阴', high: 29, low: 21 }] },
    '贵阳': { temp: 24, condition: '多云', humidity: 70, wind: '东风 2级', forecast: [{ day: '今天', condition: '多云', high: 26, low: 18 }, { day: '明天', condition: '晴', high: 25, low: 17 }, { day: '后天', condition: '多云', high: 27, low: 19 }] },
    '昆明': { temp: 23, condition: '晴', humidity: 55, wind: '西南风 2级', forecast: [{ day: '今天', condition: '晴', high: 25, low: 13 }, { day: '明天', condition: '晴', high: 24, low: 12 }, { day: '后天', condition: '多云', high: 26, low: 14 }] },
    '拉萨': { temp: 18, condition: '晴', humidity: 35, wind: '西风 3级', forecast: [{ day: '今天', condition: '晴', high: 20, low: 8 }, { day: '明天', condition: '晴', high: 21, low: 9 }, { day: '后天', condition: '晴', high: 19, low: 7 }] },
    '西安': { temp: 27, condition: '晴', humidity: 45, wind: '西北风 3级', forecast: [{ day: '今天', condition: '晴', high: 29, low: 17 }, { day: '明天', condition: '晴', high: 30, low: 18 }, { day: '后天', condition: '多云', high: 28, low: 16 }] },
    '兰州': { temp: 25, condition: '多云', humidity: 40, wind: '西北风 4级', forecast: [{ day: '今天', condition: '多云', high: 27, low: 15 }, { day: '明天', condition: '晴', high: 26, low: 14 }, { day: '后天', condition: '多云', high: 28, low: 16 }] },
    '西宁': { temp: 19, condition: '晴', humidity: 35, wind: '东风 3级', forecast: [{ day: '今天', condition: '晴', high: 21, low: 9 }, { day: '明天', condition: '晴', high: 20, low: 8 }, { day: '后天', condition: '多云', high: 22, low: 10 }] },
    '银川': { temp: 26, condition: '晴', humidity: 40, wind: '西北风 3级', forecast: [{ day: '今天', condition: '晴', high: 28, low: 16 }, { day: '明天', condition: '晴', high: 29, low: 17 }, { day: '后天', condition: '多云', high: 27, low: 15 }] },
    '乌鲁木齐': { temp: 24, condition: '多云', humidity: 45, wind: '北风 4级', forecast: [{ day: '今天', condition: '多云', high: 26, low: 14 }, { day: '明天', condition: '晴', high: 25, low: 13 }, { day: '后天', condition: '多云', high: 27, low: 15 }] },
  };

  const weather = weatherData[cityName];
  if (weather) {
    return weather;
  }

  return {
    temp: 25,
    condition: '晴',
    humidity: 50,
    wind: '微风',
    forecast: [
      { day: '今天', condition: '晴', high: 27, low: 17 },
      { day: '明天', condition: '多云', high: 28, low: 18 },
      { day: '后天', condition: '阴', high: 26, low: 16 },
    ],
  };
};

const transportationData = {
  '拉萨': {
    flights: [
      { from: '北京', duration: '4h30m', price: 1800, discount: '6折', airlines: '国航/川航', bookingUrl: 'https://flights.ctrip.com/booking/BJS-LXA.html?date=2024-08-01' },
      { from: '上海', duration: '5h15m', price: 2100, discount: '5折', airlines: '东航/吉祥', bookingUrl: 'https://flights.ctrip.com/booking/SHA-LXA.html?date=2024-08-01' },
      { from: '广州', duration: '4h45m', price: 1900, discount: '5.5折', airlines: '南航', bookingUrl: 'https://flights.ctrip.com/booking/CAN-LXA.html?date=2024-08-01' },
      { from: '成都', duration: '1h50m', price: 1200, discount: '全价', airlines: '川航/国航', bookingUrl: 'https://flights.ctrip.com/booking/CTU-LXA.html?date=2024-08-01' },
      { from: '重庆', duration: '2h', price: 1300, discount: '6折', airlines: '川航/海航', bookingUrl: 'https://flights.ctrip.com/booking/CKG-LXA.html?date=2024-08-01' },
    ],
    trains: [
      { from: '西宁', duration: '21h', price: 224, type: 'Z265', scenic: true, bookingUrl: 'https://trains.ctrip.com/TrainBooking/Search.aspx?from=西宁&to=拉萨' },
      { from: '格尔木', duration: '12h', price: 141, type: 'Z6801', scenic: true, bookingUrl: 'https://trains.ctrip.com/TrainBooking/Search.aspx?from=格尔木&to=拉萨' },
      { from: '成都', duration: '36h', price: 328, type: 'Z322', scenic: true, bookingUrl: 'https://trains.ctrip.com/TrainBooking/Search.aspx?from=成都&to=拉萨' },
      { from: '重庆', duration: '33h', price: 302, type: 'Z324', scenic: true, bookingUrl: 'https://trains.ctrip.com/TrainBooking/Search.aspx?from=重庆&to=拉萨' },
    ],
    tips: '进藏列车沿途风景壮美，建议选择靠窗座位。飞机抵达后建议在机场休息30分钟再前往市区。',
  },
  '北京': {
    flights: [
      { from: '上海', duration: '2h15m', price: 600, discount: '3折', airlines: '国航/东航', bookingUrl: 'https://flights.ctrip.com/booking/SHA-BJS.html?date=2024-08-01' },
      { from: '广州', duration: '3h10m', price: 800, discount: '4折', airlines: '南航/国航', bookingUrl: 'https://flights.ctrip.com/booking/CAN-BJS.html?date=2024-08-01' },
      { from: '成都', duration: '3h', price: 700, discount: '3.5折', airlines: '川航/国航', bookingUrl: 'https://flights.ctrip.com/booking/CTU-BJS.html?date=2024-08-01' },
    ],
    trains: [
      { from: '上海', duration: '4h30m', price: 553, type: 'G1', highSpeed: true, bookingUrl: 'https://trains.ctrip.com/TrainBooking/Search.aspx?from=上海&to=北京' },
      { from: '广州', duration: '8h', price: 1023, type: 'G80', highSpeed: true, bookingUrl: 'https://trains.ctrip.com/TrainBooking/Search.aspx?from=广州&to=北京' },
      { from: '西安', duration: '4h30m', price: 515, type: 'G651', highSpeed: true, bookingUrl: 'https://trains.ctrip.com/TrainBooking/Search.aspx?from=西安&to=北京' },
    ],
    tips: '建议乘坐高铁前往，时间快且舒适。首都机场距离市区较远，建议提前3小时出发。',
  },
  '上海': {
    flights: [
      { from: '北京', duration: '2h15m', price: 600, discount: '3折', airlines: '国航/东航', bookingUrl: 'https://flights.ctrip.com/booking/BJS-SHA.html?date=2024-08-01' },
      { from: '广州', duration: '2h30m', price: 700, discount: '4折', airlines: '南航/东航', bookingUrl: 'https://flights.ctrip.com/booking/CAN-SHA.html?date=2024-08-01' },
      { from: '成都', duration: '3h15m', price: 800, discount: '4折', airlines: '川航/东航', bookingUrl: 'https://flights.ctrip.com/booking/CTU-SHA.html?date=2024-08-01' },
    ],
    trains: [
      { from: '北京', duration: '4h30m', price: 553, type: 'G1', highSpeed: true, bookingUrl: 'https://trains.ctrip.com/TrainBooking/Search.aspx?from=北京&to=上海' },
      { from: '杭州', duration: '1h', price: 73, type: 'G7351', highSpeed: true, bookingUrl: 'https://trains.ctrip.com/TrainBooking/Search.aspx?from=杭州&to=上海' },
      { from: '南京', duration: '1h30m', price: 134, type: 'G7001', highSpeed: true, bookingUrl: 'https://trains.ctrip.com/TrainBooking/Search.aspx?from=南京&to=上海' },
    ],
    tips: '长三角地区建议乘坐高铁，方便快捷。浦东机场距离市区较远，建议提前安排交通。',
  },
  '成都': {
    flights: [
      { from: '北京', duration: '3h', price: 700, discount: '3.5折', airlines: '国航/川航', bookingUrl: 'https://flights.ctrip.com/booking/BJS-CTU.html?date=2024-08-01' },
      { from: '上海', duration: '3h15m', price: 800, discount: '4折', airlines: '东航/川航', bookingUrl: 'https://flights.ctrip.com/booking/SHA-CTU.html?date=2024-08-01' },
      { from: '广州', duration: '2h30m', price: 600, discount: '3折', airlines: '南航/川航', bookingUrl: 'https://flights.ctrip.com/booking/CAN-CTU.html?date=2024-08-01' },
    ],
    trains: [
      { from: '重庆', duration: '1h30m', price: 96, type: 'G8601', highSpeed: true, bookingUrl: 'https://trains.ctrip.com/TrainBooking/Search.aspx?from=重庆&to=成都' },
      { from: '西安', duration: '3h', price: 263, type: 'G879', highSpeed: true, bookingUrl: 'https://trains.ctrip.com/TrainBooking/Search.aspx?from=西安&to=成都' },
      { from: '贵阳', duration: '2h30m', price: 196, type: 'G8617', highSpeed: true, bookingUrl: 'https://trains.ctrip.com/TrainBooking/Search.aspx?from=贵阳&to=成都' },
    ],
    tips: '成都是进藏门户，航班和火车班次较多。建议从成都转机或转火车前往拉萨。',
  },
};

const getDefaultTransportation = (cityName) => {
  const data = transportationData[cityName];
  if (data) {
    return data;
  }
  
  const city = getCityByName(cityName);
  if (!city) return null;
  
  return {
    flights: [
      { from: '北京', duration: '2-4h', price: 800, discount: '5折', airlines: '各大航司', bookingUrl: `https://flights.ctrip.com/booking/BJS-${city.cityCode}.html?date=2024-08-01` },
      { from: '上海', duration: '2-4h', price: 900, discount: '5折', airlines: '各大航司', bookingUrl: `https://flights.ctrip.com/booking/SHA-${city.cityCode}.html?date=2024-08-01` },
      { from: '广州', duration: '2-4h', price: 850, discount: '5折', airlines: '各大航司', bookingUrl: `https://flights.ctrip.com/booking/CAN-${city.cityCode}.html?date=2024-08-01` },
    ],
    trains: [
      { from: '邻近城市', duration: '2-6h', price: 100, type: '高铁/动车', highSpeed: true, bookingUrl: `https://trains.ctrip.com/TrainBooking/Search.aspx?from=&to=${cityName}` },
    ],
    tips: `建议提前查询${cityName}的交通信息，选择合适的出行方式。`,
  };
};

const ticketInfo = {
  '拉萨': {
    '布达拉宫': { price: 200, freeAge: '60岁以上', halfPriceAge: '学生', bookingUrl: 'https://www.potalapalace.cn/', openTime: '9:00-17:00', needBooking: true },
    '大昭寺': { price: 85, freeAge: '60岁以上', halfPriceAge: '学生', bookingUrl: 'https://www.dazhaosi.com/', openTime: '9:00-17:30', needBooking: false },
    '八廓街': { price: 0, freeAge: '全部', halfPriceAge: '-', bookingUrl: '#', openTime: '全天', needBooking: false },
    '纳木错': { price: 120, freeAge: '60岁以上', halfPriceAge: '学生', bookingUrl: '#', openTime: '8:00-18:00', needBooking: false },
    '羊卓雍错': { price: 60, freeAge: '60岁以上', halfPriceAge: '学生', bookingUrl: '#', openTime: '8:00-19:00', needBooking: false },
    '罗布林卡': { price: 60, freeAge: '60岁以上', halfPriceAge: '学生', bookingUrl: '#', openTime: '9:00-18:00', needBooking: false },
    '哲蚌寺': { price: 50, freeAge: '60岁以上', halfPriceAge: '学生', bookingUrl: '#', openTime: '9:00-17:00', needBooking: false },
    '色拉寺': { price: 50, freeAge: '60岁以上', halfPriceAge: '学生', bookingUrl: '#', openTime: '9:00-17:00', needBooking: false },
    '甘丹寺': { price: 45, freeAge: '60岁以上', halfPriceAge: '学生', bookingUrl: '#', openTime: '9:00-16:00', needBooking: false },
    '药王山': { price: 2, freeAge: '65岁以上', halfPriceAge: '学生', bookingUrl: '#', openTime: '8:00-18:00', needBooking: false },
  },
  '北京': {
    '故宫': { price: 60, freeAge: '65岁以上', halfPriceAge: '学生', bookingUrl: 'https://gugong.ktmtech.cn/', openTime: '8:30-17:00', needBooking: true },
    '天安门广场': { price: 0, freeAge: '全部', halfPriceAge: '-', bookingUrl: '#', openTime: '5:00-22:00', needBooking: false },
    '八达岭长城': { price: 40, freeAge: '65岁以上', halfPriceAge: '学生', bookingUrl: 'https://www.badaling.cn/', openTime: '7:30-17:30', needBooking: false },
    '颐和园': { price: 30, freeAge: '65岁以上', halfPriceAge: '学生', bookingUrl: '#', openTime: '6:30-18:00', needBooking: false },
    '天坛': { price: 15, freeAge: '65岁以上', halfPriceAge: '学生', bookingUrl: '#', openTime: '6:00-22:00', needBooking: false },
  },
  '上海': {
    '外滩': { price: 0, freeAge: '全部', halfPriceAge: '-', bookingUrl: '#', openTime: '全天', needBooking: false },
    '东方明珠': { price: 220, freeAge: '65岁以上', halfPriceAge: '学生', bookingUrl: 'https://www.tvtower.com.cn/', openTime: '8:00-22:00', needBooking: false },
    '豫园': { price: 40, freeAge: '65岁以上', halfPriceAge: '学生', bookingUrl: '#', openTime: '8:30-17:30', needBooking: false },
    '上海博物馆': { price: 0, freeAge: '全部', halfPriceAge: '-', bookingUrl: '#', openTime: '9:00-17:00', needBooking: false },
    '南京路步行街': { price: 0, freeAge: '全部', halfPriceAge: '-', bookingUrl: '#', openTime: '全天', needBooking: false },
  },
  '成都': {
    '大熊猫基地': { price: 55, freeAge: '65岁以上', halfPriceAge: '学生', bookingUrl: 'https://www.panda.org.cn/', openTime: '7:30-18:00', needBooking: true },
    '宽窄巷子': { price: 0, freeAge: '全部', halfPriceAge: '-', bookingUrl: '#', openTime: '全天', needBooking: false },
    '锦里': { price: 0, freeAge: '全部', halfPriceAge: '-', bookingUrl: '#', openTime: '全天', needBooking: false },
    '都江堰': { price: 80, freeAge: '65岁以上', halfPriceAge: '学生', bookingUrl: '#', openTime: '8:00-18:00', needBooking: false },
    '青城山': { price: 80, freeAge: '65岁以上', halfPriceAge: '学生', bookingUrl: '#', openTime: '8:00-18:00', needBooking: false },
  },
};

const getTicketInfo = (cityName, attractionName) => {
  const cityTickets = ticketInfo[cityName];
  if (cityTickets && cityTickets[attractionName]) {
    return cityTickets[attractionName];
  }
  return { price: '待定', freeAge: '-', halfPriceAge: '-', bookingUrl: '#', openTime: '待定', needBooking: false };
};

const altitudeTips = {
  low: {
    threshold: 1500,
    title: '舒适海拔',
    color: '#4caf50',
    tips: [],
  },
  medium: {
    threshold: 2500,
    title: '注意海拔',
    color: '#ff9800',
    tips: [
      '初到高原建议先休息，不要剧烈运动',
      '多喝水，保持身体水分',
      '避免饮酒和吸烟',
      '注意保暖，预防感冒',
    ],
  },
  high: {
    threshold: 3000,
    title: '高原地区',
    color: '#f44336',
    tips: [
      '提前服用抗高原反应药物（如红景天）',
      '抵达后第一天建议不洗澡',
      '不要奔跑、跳跃等剧烈运动',
      '保持乐观心态，避免紧张',
      '出现严重不适请立即就医',
    ],
  },
};

const getAltitudeLevel = (altitude) => {
  if (altitude >= 3000) return 'high';
  if (altitude >= 2500) return 'medium';
  if (altitude >= 1500) return 'medium';
  return 'low';
};

const getAltitudeTips = (altitude) => {
  const level = getAltitudeLevel(altitude);
  return { ...altitudeTips[level], altitude };
};

const generateItinerary = (cityName, days, departureCity = '', returnCity = '') => {
  const attractions = getDefaultAttractions(cityName);
  if (attractions.length === 0) return [];

  const meals = getDefaultFood(cityName) || [];
  const dailyMaxDuration = 8;
  const itinerary = [];
  const usedAttractions = new Set();

  const zoneGroups = {};
  attractions.forEach(attraction => {
    const zone = attraction.zone || '其他';
    if (!zoneGroups[zone]) {
      zoneGroups[zone] = [];
    }
    zoneGroups[zone].push(attraction);
  });

  const zoneList = Object.keys(zoneGroups).sort((a, b) => {
    return zoneGroups[b].length - zoneGroups[a].length;
  });

  for (let day = 0; day < days; day++) {
    const dayPlan = {
      day: day + 1,
      title: `第${day + 1}天行程`,
      morning: null,
      morning2: null,
      lunch: null,
      afternoon: null,
      afternoon2: null,
      dinner: null,
      evening: null,
      attractions: [],
      routeDistance: 0,
    };

    let currentDuration = 0;
    let lastAttraction = null;
    let currentZone = null;

    for (const zone of zoneList) {
      const zoneAttractions = zoneGroups[zone].filter(a => !usedAttractions.has(a.name));
      if (zoneAttractions.length === 0) continue;

      if (!currentZone) {
        currentZone = zone;
      }

      for (const attraction of zoneAttractions) {
        const duration = attraction.duration || 2;
        
        if (currentDuration + duration > dailyMaxDuration) {
          if (dayPlan.attractions.length === 0) {
            dayPlan.attractions.push(attraction);
            usedAttractions.add(attraction.name);
            currentDuration += duration;
            lastAttraction = attraction;
          }
          break;
        }

        if (lastAttraction && attraction.zone !== currentZone) {
          const distance = calculateDistance(
            lastAttraction.lat, lastAttraction.lng,
            attraction.lat, attraction.lng
          );
          if (distance > 30) {
            continue;
          }
        }

        dayPlan.attractions.push(attraction);
        usedAttractions.add(attraction.name);
        currentDuration += duration;
        lastAttraction = attraction;

        if (currentDuration >= dailyMaxDuration) break;
      }

      if (dayPlan.attractions.length > 0) break;
    }

    if (dayPlan.attractions.length === 0) {
      const remainingAttractions = attractions.filter(a => !usedAttractions.has(a.name));
      if (remainingAttractions.length > 0) {
        const singleAttraction = remainingAttractions[0];
        dayPlan.attractions.push(singleAttraction);
        usedAttractions.add(singleAttraction.name);
      }
    }

    if (dayPlan.attractions.length > 1) {
      dayPlan.attractions = sortAttractionsByLocation(dayPlan.attractions);
    }

    dayPlan.routeDistance = calculateDayDistance(dayPlan.attractions);
    itinerary.push(dayPlan);
  }

  return itinerary.map((dayPlan, dayIndex) => {
    let currentTime = 8.5;
    const lunchIndex = dayIndex % meals.length;
    const dinnerIndex = (dayIndex + 1) % meals.length;

    dayPlan.morning = null;
    dayPlan.morning2 = null;
    dayPlan.lunch = null;
    dayPlan.afternoon = null;
    dayPlan.afternoon2 = null;
    dayPlan.dinner = null;
    dayPlan.evening = null;

    let slotIndex = 0;
    const timeSlots = ['morning', 'morning2', 'afternoon', 'afternoon2', 'evening', 'evening2'];

    dayPlan.attractions.forEach((attraction, index) => {
      const duration = attraction.duration || 2;

      if (currentTime >= 11.5 && !dayPlan.lunch) {
        dayPlan.lunch = {
          time: '12:00',
          food: meals[lunchIndex],
          activity: `品尝${meals[lunchIndex]?.name || '当地美食'}`,
        };
        currentTime = 13.5;
        slotIndex++;
      }

      if (currentTime >= 17.5 && !dayPlan.dinner) {
        dayPlan.dinner = {
          time: '18:00',
          food: meals[dinnerIndex],
          activity: `品尝${meals[dinnerIndex]?.name || '当地美食'}`,
        };
        currentTime = 19.5;
        slotIndex++;
      }

      if (slotIndex >= timeSlots.length) {
        slotIndex = timeSlots.length - 1;
      }

      const hours = Math.floor(currentTime);
      const minutes = Math.round((currentTime - hours) * 60);
      const displayTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

      const slotName = timeSlots[slotIndex];

      const slotData = {
        time: displayTime,
        attraction: attraction,
        activity: index === dayPlan.attractions.length - 1 && (attraction.type === '街区' || attraction.type === '现代') 
          ? `${attraction.name}夜游` 
          : `游览${attraction.name}`,
        duration: `${duration}小时`,
        facilities: getNearbyFacilities(cityName, attraction.lat, attraction.lng),
      };

      dayPlan[slotName] = slotData;

      if (index < dayPlan.attractions.length - 1) {
        const nextAttraction = dayPlan.attractions[index + 1];
        const distance = calculateDistance(
          attraction.lat, attraction.lng,
          nextAttraction.lat, nextAttraction.lng
        );
        const travelTime = distance / 30;
        currentTime += duration + travelTime;
      } else {
        currentTime += duration;
      }
      slotIndex++;
    });

    if (!dayPlan.lunch && meals[lunchIndex]) {
      dayPlan.lunch = {
        time: '12:00',
        food: meals[lunchIndex],
        activity: `品尝${meals[lunchIndex].name}`,
      };
    }
    if (!dayPlan.dinner && meals[dinnerIndex]) {
      dayPlan.dinner = {
        time: '18:00',
        food: meals[dinnerIndex],
        activity: `品尝${meals[dinnerIndex].name}`,
      };
    }

    return dayPlan;
  });
};

const calculateDayDistance = (attractions) => {
  if (attractions.length <= 1) return 0;
  
  let totalDistance = 0;
  for (let i = 0; i < attractions.length - 1; i++) {
    totalDistance += calculateDistance(
      attractions[i].lat, attractions[i].lng,
      attractions[i + 1].lat, attractions[i + 1].lng
    );
  }
  
  return Math.round(totalDistance * 10) / 10;
};

const cityFacilities = {
  '北京': {
    supermarkets: [
      { name: '王府井百货', lat: 39.9140, lng: 116.4040 },
      { name: '西单商场', lat: 39.9160, lng: 116.3640 },
      { name: '三里屯太古里', lat: 39.9360, lng: 116.4480 },
      { name: '国贸商城', lat: 39.9080, lng: 116.4700 },
      { name: 'SKP', lat: 39.9080, lng: 116.4500 },
    ],
    hospitals: [
      { name: '北京协和医院', lat: 39.9140, lng: 116.4060 },
      { name: '北京大学第一医院', lat: 39.9340, lng: 116.3860 },
      { name: '北京同仁医院', lat: 39.9160, lng: 116.4120 },
      { name: '中国医学科学院肿瘤医院', lat: 39.8660, lng: 116.4700 },
      { name: '北京朝阳医院', lat: 39.9320, lng: 116.4660 },
    ],
    toilets: [
      { name: '故宫公共厕所', lat: 39.9163, lng: 116.3972 },
      { name: '天安门广场公共厕所', lat: 39.9042, lng: 116.4074 },
      { name: '天坛公共厕所', lat: 39.8822, lng: 116.4066 },
      { name: '颐和园公共厕所', lat: 39.9999, lng: 116.2755 },
      { name: '南锣鼓巷公共厕所', lat: 39.9860, lng: 116.4040 },
    ],
    subwayStations: [
      { name: '王府井站', lat: 39.9140, lng: 116.4040 },
      { name: '天安门东站', lat: 39.9042, lng: 116.4074 },
      { name: '天安门西站', lat: 39.9060, lng: 116.3960 },
      { name: '天坛东门站', lat: 39.8822, lng: 116.4120 },
      { name: '颐和园站', lat: 39.9999, lng: 116.2755 },
      { name: '南锣鼓巷站', lat: 39.9860, lng: 116.4040 },
      { name: '鸟巢站', lat: 39.9911, lng: 116.3964 },
    ],
    busStations: [
      { name: '故宫公交站', lat: 39.9163, lng: 116.3972 },
      { name: '天安门广场公交站', lat: 39.9042, lng: 116.4074 },
      { name: '天坛公园公交站', lat: 39.8822, lng: 116.4066 },
      { name: '颐和园公交站', lat: 39.9999, lng: 116.2755 },
      { name: '南锣鼓巷公交站', lat: 39.9860, lng: 116.4040 },
    ],
  },
  '上海': {
    supermarkets: [
      { name: '上海环球金融中心', lat: 31.2397, lng: 121.5076 },
      { name: '恒隆广场', lat: 31.2380, lng: 121.4700 },
      { name: '国金中心', lat: 31.2397, lng: 121.5076 },
      { name: 'iapm商场', lat: 31.2080, lng: 121.4800 },
      { name: '正大广场', lat: 31.2397, lng: 121.5076 },
    ],
    hospitals: [
      { name: '瑞金医院', lat: 31.2080, lng: 121.4720 },
      { name: '华山医院', lat: 31.2200, lng: 121.4460 },
      { name: '中山医院', lat: 31.2080, lng: 121.4420 },
      { name: '仁济医院', lat: 31.2380, lng: 121.5000 },
      { name: '新华医院', lat: 31.2700, lng: 121.5200 },
    ],
    toilets: [
      { name: '外滩公共厕所', lat: 31.2304, lng: 121.4737 },
      { name: '城隍庙公共厕所', lat: 31.2317, lng: 121.4927 },
      { name: '豫园公共厕所', lat: 31.2317, lng: 121.4938 },
      { name: '南京路公共厕所', lat: 31.2304, lng: 121.4737 },
      { name: '田子坊公共厕所', lat: 31.2077, lng: 121.4811 },
    ],
    subwayStations: [
      { name: '外滩站', lat: 31.2304, lng: 121.4737 },
      { name: '城隍庙站', lat: 31.2317, lng: 121.4927 },
      { name: '豫园站', lat: 31.2317, lng: 121.4938 },
      { name: '南京东路站', lat: 31.2304, lng: 121.4737 },
      { name: '陆家嘴站', lat: 31.2397, lng: 121.5076 },
      { name: '迪士尼站', lat: 31.1443, lng: 121.6972 },
    ],
    busStations: [
      { name: '外滩公交站', lat: 31.2304, lng: 121.4737 },
      { name: '城隍庙公交站', lat: 31.2317, lng: 121.4927 },
      { name: '南京路公交站', lat: 31.2304, lng: 121.4737 },
      { name: '陆家嘴公交站', lat: 31.2397, lng: 121.5076 },
      { name: '田子坊公交站', lat: 31.2077, lng: 121.4811 },
    ],
  },
  '杭州': {
    supermarkets: [
      { name: '银泰百货', lat: 30.2645, lng: 120.1500 },
      { name: '西湖银泰', lat: 30.2645, lng: 120.1500 },
      { name: '杭州大厦', lat: 30.2820, lng: 120.1560 },
      { name: '湖滨银泰', lat: 30.2741, lng: 120.1551 },
      { name: '万象城', lat: 30.2645, lng: 120.1800 },
    ],
    hospitals: [
      { name: '浙江大学医学院附属第一医院', lat: 30.2720, lng: 120.1660 },
      { name: '浙江大学医学院附属第二医院', lat: 30.2580, lng: 120.1500 },
      { name: '浙江省人民医院', lat: 30.2920, lng: 120.1660 },
      { name: '杭州市第一人民医院', lat: 30.2660, lng: 120.1560 },
      { name: '浙江大学医学院附属妇产科医院', lat: 30.2580, lng: 120.1660 },
    ],
    toilets: [
      { name: '西湖公共厕所', lat: 30.2741, lng: 120.1551 },
      { name: '灵隐寺公共厕所', lat: 30.2986, lng: 120.1020 },
      { name: '河坊街公共厕所', lat: 30.2645, lng: 120.1500 },
      { name: '断桥残雪公共厕所', lat: 30.2754, lng: 120.1515 },
      { name: '苏堤春晓公共厕所', lat: 30.2700, lng: 120.1550 },
    ],
    subwayStations: [
      { name: '西湖站', lat: 30.2741, lng: 120.1551 },
      { name: '灵隐站', lat: 30.2986, lng: 120.1020 },
      { name: '河坊街站', lat: 30.2645, lng: 120.1500 },
      { name: '断桥站', lat: 30.2754, lng: 120.1515 },
      { name: '苏堤站', lat: 30.2700, lng: 120.1550 },
      { name: '千岛湖站', lat: 29.6175, lng: 119.0592 },
    ],
    busStations: [
      { name: '西湖公交站', lat: 30.2741, lng: 120.1551 },
      { name: '灵隐寺公交站', lat: 30.2986, lng: 120.1020 },
      { name: '河坊街公交站', lat: 30.2645, lng: 120.1500 },
      { name: '断桥公交站', lat: 30.2754, lng: 120.1515 },
      { name: '苏堤公交站', lat: 30.2700, lng: 120.1550 },
    ],
  },
  '西安': {
    supermarkets: [
      { name: '赛格国际购物中心', lat: 34.2619, lng: 108.9500 },
      { name: '开元商城', lat: 34.2619, lng: 108.9500 },
      { name: '世纪金花', lat: 34.2619, lng: 108.9500 },
      { name: '大悦城', lat: 34.2167, lng: 108.9550 },
      { name: '老城根G park', lat: 34.2800, lng: 108.9200 },
    ],
    hospitals: [
      { name: '西京医院', lat: 34.2760, lng: 109.0000 },
      { name: '唐都医院', lat: 34.2300, lng: 109.0800 },
      { name: '陕西省人民医院', lat: 34.2460, lng: 108.9560 },
      { name: '西安交大第一附属医院', lat: 34.2260, lng: 108.9300 },
      { name: '西安市第三医院', lat: 34.3000, lng: 108.9900 },
    ],
    toilets: [
      { name: '兵马俑公共厕所', lat: 34.3853, lng: 109.2884 },
      { name: '大雁塔公共厕所', lat: 34.2167, lng: 108.9550 },
      { name: '城墙公共厕所', lat: 34.2619, lng: 108.9500 },
      { name: '回民街公共厕所', lat: 34.2640, lng: 108.9460 },
      { name: '大唐不夜城公共厕所', lat: 34.2167, lng: 108.9550 },
    ],
    subwayStations: [
      { name: '大雁塔站', lat: 34.2167, lng: 108.9550 },
      { name: '钟楼站', lat: 34.2619, lng: 108.9500 },
      { name: '鼓楼站', lat: 34.2640, lng: 108.9460 },
      { name: '回民街站', lat: 34.2640, lng: 108.9460 },
      { name: '大唐不夜城站', lat: 34.2167, lng: 108.9550 },
      { name: '兵马俑站', lat: 34.3853, lng: 109.2884 },
    ],
    busStations: [
      { name: '大雁塔公交站', lat: 34.2167, lng: 108.9550 },
      { name: '钟楼公交站', lat: 34.2619, lng: 108.9500 },
      { name: '鼓楼公交站', lat: 34.2640, lng: 108.9460 },
      { name: '回民街公交站', lat: 34.2640, lng: 108.9460 },
      { name: '城墙公交站', lat: 34.2619, lng: 108.9500 },
    ],
  },
  '成都': {
    supermarkets: [
      { name: 'IFS国际金融中心', lat: 30.6590, lng: 104.0640 },
      { name: '太古里', lat: 30.6590, lng: 104.0640 },
      { name: '春熙路商圈', lat: 30.6590, lng: 104.0640 },
      { name: '万象城', lat: 30.6650, lng: 104.1300 },
      { name: '环球中心', lat: 30.5700, lng: 104.0400 },
    ],
    hospitals: [
      { name: '四川大学华西医院', lat: 30.6460, lng: 104.0380 },
      { name: '四川省人民医院', lat: 30.6580, lng: 104.0080 },
      { name: '成都中医药大学附属医院', lat: 30.6580, lng: 104.0180 },
      { name: '成都市第三人民医院', lat: 30.6660, lng: 104.0460 },
      { name: '解放军西部战区总医院', lat: 30.7700, lng: 104.1900 },
    ],
    toilets: [
      { name: '宽窄巷子公共厕所', lat: 30.6650, lng: 104.0360 },
      { name: '锦里公共厕所', lat: 30.6460, lng: 104.0380 },
      { name: '武侯祠公共厕所', lat: 30.6460, lng: 104.0380 },
      { name: '杜甫草堂公共厕所', lat: 30.6580, lng: 104.0080 },
      { name: '春熙路公共厕所', lat: 30.6590, lng: 104.0640 },
    ],
    subwayStations: [
      { name: '宽窄巷子站', lat: 30.6650, lng: 104.0360 },
      { name: '锦里站', lat: 30.6460, lng: 104.0380 },
      { name: '武侯祠站', lat: 30.6460, lng: 104.0380 },
      { name: '杜甫草堂站', lat: 30.6580, lng: 104.0080 },
      { name: '春熙路站', lat: 30.6590, lng: 104.0640 },
      { name: '大熊猫基地站', lat: 30.7790, lng: 104.1960 },
    ],
    busStations: [
      { name: '宽窄巷子公交站', lat: 30.6650, lng: 104.0360 },
      { name: '锦里公交站', lat: 30.6460, lng: 104.0380 },
      { name: '武侯祠公交站', lat: 30.6460, lng: 104.0380 },
      { name: '杜甫草堂公交站', lat: 30.6580, lng: 104.0080 },
      { name: '春熙路公交站', lat: 30.6590, lng: 104.0640 },
    ],
  },
  '武汉': {
    supermarkets: [
      { name: '武商广场', lat: 30.5513, lng: 114.3694 },
      { name: '江汉路商圈', lat: 30.5855, lng: 114.3081 },
      { name: '光谷广场', lat: 30.5100, lng: 114.3800 },
      { name: '群光广场', lat: 30.5300, lng: 114.3600 },
      { name: '武汉天地', lat: 30.5700, lng: 114.3200 },
    ],
    hospitals: [
      { name: '武汉大学人民医院', lat: 30.5300, lng: 114.3600 },
      { name: '华中科技大学同济医学院附属协和医院', lat: 30.5600, lng: 114.2800 },
      { name: '武汉大学中南医院', lat: 30.5200, lng: 114.3800 },
      { name: '武汉市第一医院', lat: 30.5600, lng: 114.2800 },
      { name: '湖北省人民医院', lat: 30.5300, lng: 114.3600 },
    ],
    toilets: [
      { name: '黄鹤楼公共厕所', lat: 30.5855, lng: 114.3081 },
      { name: '东湖公共厕所', lat: 30.5513, lng: 114.3694 },
      { name: '户部巷公共厕所', lat: 30.5790, lng: 114.3100 },
      { name: '长江大桥公共厕所', lat: 30.5855, lng: 114.3000 },
      { name: '湖北省博物馆公共厕所', lat: 30.5513, lng: 114.3700 },
    ],
    subwayStations: [
      { name: '黄鹤楼站', lat: 30.5855, lng: 114.3081 },
      { name: '东湖站', lat: 30.5513, lng: 114.3694 },
      { name: '户部巷站', lat: 30.5790, lng: 114.3100 },
      { name: '长江大桥站', lat: 30.5855, lng: 114.3000 },
      { name: '湖北省博物馆站', lat: 30.5513, lng: 114.3700 },
    ],
    busStations: [
      { name: '黄鹤楼公交站', lat: 30.5855, lng: 114.3081 },
      { name: '东湖公交站', lat: 30.5513, lng: 114.3694 },
      { name: '户部巷公交站', lat: 30.5790, lng: 114.3100 },
      { name: '长江大桥公交站', lat: 30.5855, lng: 114.3000 },
      { name: '湖北省博物馆公交站', lat: 30.5513, lng: 114.3700 },
    ],
  },
  '长沙': {
    supermarkets: [
      { name: 'IFS国金中心', lat: 28.2280, lng: 112.9388 },
      { name: '平和堂', lat: 28.2280, lng: 112.9400 },
      { name: '黄兴路步行街', lat: 28.2280, lng: 112.9450 },
      { name: '悦方ID MALL', lat: 28.2280, lng: 112.9400 },
      { name: '海信广场', lat: 28.2280, lng: 112.9450 },
    ],
    hospitals: [
      { name: '湘雅医院', lat: 28.2350, lng: 112.9550 },
      { name: '湖南省人民医院', lat: 28.2280, lng: 112.9400 },
      { name: '中南大学湘雅二医院', lat: 28.2100, lng: 112.9600 },
      { name: '湖南省肿瘤医院', lat: 28.1700, lng: 112.9400 },
      { name: '长沙市中心医院', lat: 28.1900, lng: 112.9800 },
    ],
    toilets: [
      { name: '橘子洲公共厕所', lat: 28.2280, lng: 112.9388 },
      { name: '岳麓山公共厕所', lat: 28.2400, lng: 112.9330 },
      { name: '太平街公共厕所', lat: 28.2280, lng: 112.9450 },
      { name: '坡子街公共厕所', lat: 28.2280, lng: 112.9400 },
      { name: '湖南省博物馆公共厕所', lat: 28.2350, lng: 112.9550 },
    ],
    subwayStations: [
      { name: '橘子洲站', lat: 28.2280, lng: 112.9388 },
      { name: '岳麓山站', lat: 28.2400, lng: 112.9330 },
      { name: '太平街站', lat: 28.2280, lng: 112.9450 },
      { name: '坡子街站', lat: 28.2280, lng: 112.9400 },
      { name: '湖南省博物馆站', lat: 28.2350, lng: 112.9550 },
    ],
    busStations: [
      { name: '橘子洲公交站', lat: 28.2280, lng: 112.9388 },
      { name: '岳麓山公交站', lat: 28.2400, lng: 112.9330 },
      { name: '太平街公交站', lat: 28.2280, lng: 112.9450 },
      { name: '坡子街公交站', lat: 28.2280, lng: 112.9400 },
      { name: '湖南省博物馆公交站', lat: 28.2350, lng: 112.9550 },
    ],
  },
  '广州': {
    supermarkets: [
      { name: '天河城', lat: 23.1200, lng: 113.3200 },
      { name: '太古汇', lat: 23.1200, lng: 113.3200 },
      { name: '正佳广场', lat: 23.1200, lng: 113.3200 },
      { name: '北京路步行街', lat: 23.1200, lng: 113.2600 },
      { name: '上下九步行街', lat: 23.1200, lng: 113.2400 },
    ],
    hospitals: [
      { name: '中山大学附属第一医院', lat: 23.1200, lng: 113.3200 },
      { name: '广东省人民医院', lat: 23.1200, lng: 113.3200 },
      { name: '南方医科大学南方医院', lat: 23.1400, lng: 113.3600 },
      { name: '广州市第一人民医院', lat: 23.1200, lng: 113.2600 },
      { name: '中山大学孙逸仙纪念医院', lat: 23.1200, lng: 113.2600 },
    ],
    toilets: [
      { name: '广州塔公共厕所', lat: 23.1200, lng: 113.3200 },
      { name: '白云山公共厕所', lat: 23.1800, lng: 113.3000 },
      { name: '沙面岛公共厕所', lat: 23.1200, lng: 113.2400 },
      { name: '北京路公共厕所', lat: 23.1200, lng: 113.2600 },
      { name: '长隆欢乐世界公共厕所', lat: 23.1000, lng: 113.3800 },
    ],
    subwayStations: [
      { name: '广州塔站', lat: 23.1200, lng: 113.3200 },
      { name: '白云山站', lat: 23.1800, lng: 113.3000 },
      { name: '沙面岛站', lat: 23.1200, lng: 113.2400 },
      { name: '北京路站', lat: 23.1200, lng: 113.2600 },
      { name: '长隆站', lat: 23.1000, lng: 113.3800 },
    ],
    busStations: [
      { name: '广州塔公交站', lat: 23.1200, lng: 113.3200 },
      { name: '白云山公交站', lat: 23.1800, lng: 113.3000 },
      { name: '沙面岛公交站', lat: 23.1200, lng: 113.2400 },
      { name: '北京路公交站', lat: 23.1200, lng: 113.2600 },
      { name: '长隆公交站', lat: 23.1000, lng: 113.3800 },
    ],
  },
  '南京': {
    supermarkets: [
      { name: '新街口商圈', lat: 32.0600, lng: 118.7900 },
      { name: '德基广场', lat: 32.0600, lng: 118.7900 },
      { name: '中央商场', lat: 32.0600, lng: 118.7900 },
      { name: '夫子庙商圈', lat: 32.0300, lng: 118.7800 },
      { name: '老门东商圈', lat: 32.0300, lng: 118.7800 },
    ],
    hospitals: [
      { name: '江苏省人民医院', lat: 32.0500, lng: 118.7600 },
      { name: '南京鼓楼医院', lat: 32.0600, lng: 118.7900 },
      { name: '南京大学医学院附属鼓楼医院', lat: 32.0600, lng: 118.7900 },
      { name: '南京市第一医院', lat: 32.0300, lng: 118.7800 },
      { name: '东南大学附属中大医院', lat: 32.0600, lng: 118.7800 },
    ],
    toilets: [
      { name: '中山陵公共厕所', lat: 32.0400, lng: 118.8200 },
      { name: '夫子庙公共厕所', lat: 32.0300, lng: 118.7800 },
      { name: '秦淮河公共厕所', lat: 32.0300, lng: 118.7800 },
      { name: '明孝陵公共厕所', lat: 32.0500, lng: 118.8400 },
      { name: '老门东公共厕所', lat: 32.0300, lng: 118.7800 },
    ],
    subwayStations: [
      { name: '中山陵站', lat: 32.0400, lng: 118.8200 },
      { name: '夫子庙站', lat: 32.0300, lng: 118.7800 },
      { name: '秦淮河站', lat: 32.0300, lng: 118.7800 },
      { name: '明孝陵站', lat: 32.0500, lng: 118.8400 },
      { name: '老门东站', lat: 32.0300, lng: 118.7800 },
    ],
    busStations: [
      { name: '中山陵公交站', lat: 32.0400, lng: 118.8200 },
      { name: '夫子庙公交站', lat: 32.0300, lng: 118.7800 },
      { name: '秦淮河公交站', lat: 32.0300, lng: 118.7800 },
      { name: '明孝陵公交站', lat: 32.0500, lng: 118.8400 },
      { name: '老门东公交站', lat: 32.0300, lng: 118.7800 },
    ],
  },
  '拉萨': {
    supermarkets: [
      { name: '百益超市', lat: 29.6540, lng: 91.1717 },
      { name: '好又多超市', lat: 29.6513, lng: 91.1752 },
      { name: '拉萨百货', lat: 29.6517, lng: 91.1745 },
      { name: '天百百货', lat: 29.6540, lng: 91.1717 },
      { name: '神力时代广场', lat: 29.6517, lng: 91.1745 },
    ],
    hospitals: [
      { name: '西藏自治区人民医院', lat: 29.6470, lng: 91.1760 },
      { name: '西藏军区总医院', lat: 29.6740, lng: 91.1760 },
      { name: '拉萨市人民医院', lat: 29.6540, lng: 91.1717 },
      { name: '西藏阜康医院', lat: 29.6513, lng: 91.1752 },
      { name: '西藏自治区藏医院', lat: 29.6517, lng: 91.1745 },
    ],
    toilets: [
      { name: '布达拉宫公共厕所', lat: 29.6540, lng: 91.1717 },
      { name: '大昭寺公共厕所', lat: 29.6513, lng: 91.1752 },
      { name: '八廓街公共厕所', lat: 29.6517, lng: 91.1745 },
      { name: '罗布林卡公共厕所', lat: 29.6340, lng: 91.1520 },
      { name: '纳木错公共厕所', lat: 30.7609, lng: 90.9047 },
    ],
    subwayStations: [
      { name: '布达拉宫站', lat: 29.6540, lng: 91.1717 },
      { name: '大昭寺站', lat: 29.6513, lng: 91.1752 },
      { name: '八廓街站', lat: 29.6517, lng: 91.1745 },
      { name: '罗布林卡站', lat: 29.6340, lng: 91.1520 },
      { name: '药王山站', lat: 29.6530, lng: 91.1690 },
    ],
    busStations: [
      { name: '布达拉宫公交站', lat: 29.6540, lng: 91.1717 },
      { name: '大昭寺公交站', lat: 29.6513, lng: 91.1752 },
      { name: '八廓街公交站', lat: 29.6517, lng: 91.1745 },
      { name: '罗布林卡公交站', lat: 29.6340, lng: 91.1520 },
      { name: '药王山公交站', lat: 29.6530, lng: 91.1690 },
    ],
  },
};

const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

const getNearbyFacilities = (cityName, lat, lng, radius = 3) => {
  const cityData = cityFacilities[cityName];
  if (!cityData) return { supermarkets: [], hospitals: [], toilets: [], subwayStations: [], busStations: [] };
  
  const result = {};
  ['supermarkets', 'hospitals', 'toilets', 'subwayStations', 'busStations'].forEach(type => {
    result[type] = cityData[type]
      .map(item => ({
        ...item,
        distance: calculateDistance(lat, lng, item.lat, item.lng)
      }))
      .filter(item => item.distance <= radius)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3);
  });
  
  return result;
};

const sortAttractionsByLocation = (attractions) => {
  if (attractions.length <= 1) return attractions;
  
  const sorted = [...attractions];
  const visited = new Set();
  const result = [];
  
  visited.add(0);
  result.push(sorted[0]);
  
  for (let i = 1; i < sorted.length; i++) {
    let nearestIndex = -1;
    let minDistance = Infinity;
    
    const lastPoint = result[result.length - 1];
    
    for (let j = 0; j < sorted.length; j++) {
      if (visited.has(j)) continue;
      
      const distance = calculateDistance(
        lastPoint.lat, lastPoint.lng,
        sorted[j].lat, sorted[j].lng
      );
      
      if (distance < minDistance) {
        minDistance = distance;
        nearestIndex = j;
      }
    }
    
    if (nearestIndex !== -1) {
      visited.add(nearestIndex);
      result.push(sorted[nearestIndex]);
    }
  }
  
  return result;
};

window.generateItinerary = generateItinerary;
window.searchCities = searchCities;
window.getAllCities = getAllCities;
window.getNearbyFacilities = getNearbyFacilities;
window.getPopularCities = getPopularCities;
window.getCityByName = getCityByName;
window.getDefaultAttractions = getDefaultAttractions;
window.getDefaultFood = getDefaultFood;
window.getFoodImage = getFoodImage;
window.getDefaultWeather = getDefaultWeather;