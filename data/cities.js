window.cityData = {
  provinces: [
    {
      name: '北京市',
      cities: [
        { name: '北京', lat: 39.9042, lng: 116.4074, themeColor: '#c0392b', isMajor: true },
      ]
    },
    {
      name: '天津市',
      cities: [
        { name: '天津', lat: 39.0842, lng: 117.2009, themeColor: '#3498db', isMajor: true },
      ]
    },
    {
      name: '河北省',
      cities: [
        { name: '石家庄', lat: 38.0423, lng: 114.5149, themeColor: '#f39c12' },
        { name: '秦皇岛', lat: 39.9322, lng: 119.5964, themeColor: '#27ae60' },
        { name: '承德', lat: 40.9740, lng: 117.9343, themeColor: '#9b59b6' },
        { name: '张家口', lat: 40.8420, lng: 114.8783, themeColor: '#1abc9c' },
        { name: '保定', lat: 38.8676, lng: 115.4892, themeColor: '#e74c3c' },
      ]
    },
    {
      name: '山西省',
      cities: [
        { name: '太原', lat: 37.8706, lng: 112.5489, themeColor: '#3498db' },
        { name: '大同', lat: 40.0799, lng: 113.3048, themeColor: '#f39c12' },
        { name: '平遥', lat: 37.2085, lng: 112.1803, themeColor: '#9b59b6' },
        { name: '五台山', lat: 38.9517, lng: 113.5928, themeColor: '#27ae60' },
        { name: '临汾', lat: 36.0821, lng: 111.5069, themeColor: '#e74c3c' },
      ]
    },
    {
      name: '内蒙古',
      cities: [
        { name: '呼和浩特', lat: 40.8420, lng: 111.7510, themeColor: '#3498db' },
        { name: '包头', lat: 40.6697, lng: 109.8220, themeColor: '#f39c12' },
        { name: '呼伦贝尔', lat: 49.2146, lng: 119.7403, themeColor: '#27ae60' },
        { name: '鄂尔多斯', lat: 39.8173, lng: 109.7585, themeColor: '#9b59b6' },
      ]
    },
    {
      name: '辽宁省',
      cities: [
        { name: '沈阳', lat: 41.8057, lng: 123.4315, themeColor: '#3498db', isMajor: true },
        { name: '大连', lat: 38.9140, lng: 121.6147, themeColor: '#27ae60', isMajor: true },
        { name: '鞍山', lat: 41.1191, lng: 123.0169, themeColor: '#f39c12' },
        { name: '锦州', lat: 41.1191, lng: 121.1572, themeColor: '#9b59b6' },
        { name: '丹东', lat: 40.1411, lng: 124.3712, themeColor: '#1abc9c' },
      ]
    },
    {
      name: '吉林省',
      cities: [
        { name: '长春', lat: 43.8256, lng: 125.3245, themeColor: '#3498db', isMajor: true },
        { name: '吉林', lat: 43.8266, lng: 126.5480, themeColor: '#27ae60' },
        { name: '长白山', lat: 42.3275, lng: 128.0259, themeColor: '#f39c12' },
        { name: '延吉', lat: 42.9340, lng: 129.5018, themeColor: '#9b59b6' },
      ]
    },
    {
      name: '黑龙江',
      cities: [
        { name: '哈尔滨', lat: 45.8038, lng: 126.5349, themeColor: '#3498db', isMajor: true },
        { name: '齐齐哈尔', lat: 47.3592, lng: 123.9047, themeColor: '#27ae60' },
        { name: '牡丹江', lat: 44.5837, lng: 129.6035, themeColor: '#f39c12' },
        { name: '漠河', lat: 52.9399, lng: 122.5187, themeColor: '#9b59b6' },
        { name: '伊春', lat: 47.7323, lng: 128.9251, themeColor: '#1abc9c' },
      ]
    },
    {
      name: '上海市',
      cities: [
        { name: '上海', lat: 31.2304, lng: 121.4737, themeColor: '#3498db', isMajor: true },
      ]
    },
    {
      name: '江苏省',
      cities: [
        { name: '南京', lat: 32.0603, lng: 118.7969, themeColor: '#c0392b', isMajor: true },
        { name: '苏州', lat: 31.2990, lng: 120.5853, themeColor: '#27ae60', isMajor: true },
        { name: '无锡', lat: 31.4912, lng: 120.3119, themeColor: '#f39c12' },
        { name: '常州', lat: 31.8112, lng: 119.9742, themeColor: '#9b59b6' },
        { name: '扬州', lat: 32.3931, lng: 119.4223, themeColor: '#1abc9c' },
        { name: '镇江', lat: 32.2044, lng: 119.4471, themeColor: '#3498db' },
        { name: '南通', lat: 31.9822, lng: 120.8929, themeColor: '#e74c3c' },
      ]
    },
    {
      name: '浙江省',
      cities: [
        { name: '杭州', lat: 30.2741, lng: 120.1551, themeColor: '#27ae60', isMajor: true },
        { name: '宁波', lat: 29.8736, lng: 121.5449, themeColor: '#3498db' },
        { name: '温州', lat: 28.0298, lng: 120.6652, themeColor: '#f39c12' },
        { name: '嘉兴', lat: 30.7547, lng: 120.7572, themeColor: '#9b59b6' },
        { name: '湖州', lat: 30.8696, lng: 120.1196, themeColor: '#1abc9c' },
        { name: '绍兴', lat: 30.0076, lng: 120.5853, themeColor: '#e74c3c' },
        { name: '金华', lat: 29.0711, lng: 119.6461, themeColor: '#27ae60' },
        { name: '舟山', lat: 30.0156, lng: 122.1155, themeColor: '#3498db' },
        { name: '台州', lat: 28.6516, lng: 121.4273, themeColor: '#f39c12' },
      ]
    },
    {
      name: '安徽省',
      cities: [
        { name: '合肥', lat: 31.8206, lng: 117.2272, themeColor: '#3498db' },
        { name: '黄山', lat: 29.7179, lng: 118.1971, themeColor: '#27ae60', isMajor: true },
        { name: '芜湖', lat: 31.3574, lng: 118.4477, themeColor: '#f39c12' },
        { name: '安庆', lat: 30.5225, lng: 117.0563, themeColor: '#9b59b6' },
        { name: '九华山', lat: 30.5867, lng: 117.8125, themeColor: '#1abc9c' },
      ]
    },
    {
      name: '福建省',
      cities: [
        { name: '福州', lat: 26.0745, lng: 119.2965, themeColor: '#3498db' },
        { name: '厦门', lat: 24.4798, lng: 118.0894, themeColor: '#27ae60', isMajor: true },
        { name: '泉州', lat: 24.9118, lng: 118.6539, themeColor: '#f39c12' },
        { name: '漳州', lat: 24.6161, lng: 117.0800, themeColor: '#9b59b6' },
        { name: '武夷山', lat: 27.7679, lng: 117.9806, themeColor: '#1abc9c' },
      ]
    },
    {
      name: '江西省',
      cities: [
        { name: '南昌', lat: 28.6826, lng: 115.8573, themeColor: '#c0392b' },
        { name: '九江', lat: 29.7154, lng: 115.9927, themeColor: '#3498db' },
        { name: '庐山', lat: 29.5841, lng: 115.9755, themeColor: '#27ae60', isMajor: true },
        { name: '景德镇', lat: 29.2743, lng: 117.2272, themeColor: '#f39c12' },
        { name: '婺源', lat: 29.2988, lng: 117.7236, themeColor: '#9b59b6' },
        { name: '井冈山', lat: 26.5745, lng: 114.1217, themeColor: '#1abc9c' },
      ]
    },
    {
      name: '山东省',
      cities: [
        { name: '济南', lat: 36.6512, lng: 117.1201, themeColor: '#c0392b', isMajor: true },
        { name: '青岛', lat: 36.0671, lng: 120.3826, themeColor: '#27ae60', isMajor: true },
        { name: '烟台', lat: 37.4602, lng: 121.4343, themeColor: '#3498db' },
        { name: '威海', lat: 37.5116, lng: 122.1162, themeColor: '#f39c12' },
        { name: '泰安', lat: 36.1938, lng: 117.1069, themeColor: '#9b59b6' },
        { name: '曲阜', lat: 35.5903, lng: 116.9724, themeColor: '#1abc9c' },
        { name: '日照', lat: 35.4228, lng: 119.4695, themeColor: '#e74c3c' },
      ]
    },
    {
      name: '河南省',
      cities: [
        { name: '郑州', lat: 34.7466, lng: 113.6253, themeColor: '#3498db', isMajor: true },
        { name: '开封', lat: 34.8001, lng: 114.3534, themeColor: '#f39c12' },
        { name: '洛阳', lat: 34.6234, lng: 112.4536, themeColor: '#9b59b6', isMajor: true },
        { name: '安阳', lat: 36.1922, lng: 114.3576, themeColor: '#27ae60' },
        { name: '嵩山', lat: 34.4722, lng: 113.0833, themeColor: '#1abc9c' },
        { name: '南阳', lat: 33.0159, lng: 112.5492, themeColor: '#e74c3c' },
      ]
    },
    {
      name: '湖北省',
      cities: [
        { name: '武汉', lat: 30.5928, lng: 114.3055, themeColor: '#c0392b', isMajor: true },
        { name: '宜昌', lat: 30.5971, lng: 111.2811, themeColor: '#27ae60' },
        { name: '襄阳', lat: 32.0603, lng: 112.1480, themeColor: '#3498db' },
        { name: '十堰', lat: 32.6242, lng: 110.7892, themeColor: '#f39c12' },
        { name: '恩施', lat: 30.2987, lng: 109.4781, themeColor: '#9b59b6' },
        { name: '神农架', lat: 31.4587, lng: 110.3253, themeColor: '#1abc9c' },
      ]
    },
    {
      name: '湖南省',
      cities: [
        { name: '长沙', lat: 28.2280, lng: 112.9388, themeColor: '#c0392b', isMajor: true },
        { name: '张家界', lat: 29.1170, lng: 110.4731, themeColor: '#27ae60', isMajor: true },
        { name: '岳阳', lat: 29.3546, lng: 113.0889, themeColor: '#3498db' },
        { name: '常德', lat: 29.0215, lng: 111.6778, themeColor: '#f39c12' },
        { name: '凤凰', lat: 27.9298, lng: 109.5097, themeColor: '#9b59b6' },
        { name: '衡山', lat: 27.2531, lng: 112.6208, themeColor: '#1abc9c' },
        { name: '韶山', lat: 27.9407, lng: 112.5833, themeColor: '#e74c3c' },
      ]
    },
    {
      name: '广东省',
      cities: [
        { name: '广州', lat: 23.1291, lng: 113.2644, themeColor: '#c0392b', isMajor: true },
        { name: '深圳', lat: 22.5431, lng: 114.0579, themeColor: '#27ae60', isMajor: true },
        { name: '珠海', lat: 22.2707, lng: 113.5662, themeColor: '#3498db' },
        { name: '汕头', lat: 23.3573, lng: 116.6648, themeColor: '#f39c12' },
        { name: '佛山', lat: 23.0242, lng: 113.1224, themeColor: '#9b59b6' },
        { name: '肇庆', lat: 23.0434, lng: 112.4518, themeColor: '#1abc9c' },
        { name: '惠州', lat: 23.1128, lng: 114.4058, themeColor: '#e74c3c' },
        { name: '湛江', lat: 21.2891, lng: 110.3549, themeColor: '#27ae60' },
      ]
    },
    {
      name: '广西',
      cities: [
        { name: '南宁', lat: 22.8170, lng: 108.3665, themeColor: '#3498db' },
        { name: '桂林', lat: 25.2741, lng: 110.2993, themeColor: '#27ae60', isMajor: true },
        { name: '阳朔', lat: 24.7814, lng: 110.4781, themeColor: '#f39c12' },
        { name: '北海', lat: 21.4911, lng: 109.1147, themeColor: '#9b59b6' },
        { name: '柳州', lat: 24.3117, lng: 109.4496, themeColor: '#1abc9c' },
      ]
    },
    {
      name: '海南省',
      cities: [
        { name: '海口', lat: 20.0447, lng: 110.2244, themeColor: '#3498db' },
        { name: '三亚', lat: 18.2526, lng: 109.5033, themeColor: '#f39c12', isMajor: true },
        { name: '琼海', lat: 19.2529, lng: 110.4652, themeColor: '#27ae60' },
        { name: '万宁', lat: 18.8224, lng: 110.3958, themeColor: '#9b59b6' },
      ]
    },
    {
      name: '重庆市',
      cities: [
        { name: '重庆', lat: 29.4316, lng: 106.9123, themeColor: '#c0392b', isMajor: true },
      ]
    },
    {
      name: '四川省',
      cities: [
        { name: '成都', lat: 30.5728, lng: 104.0668, themeColor: '#f39c12', isMajor: true },
        { name: '都江堰', lat: 30.9756, lng: 103.6505, themeColor: '#27ae60' },
        { name: '乐山', lat: 29.5630, lng: 103.7619, themeColor: '#3498db' },
        { name: '峨眉山', lat: 29.5963, lng: 103.4593, themeColor: '#9b59b6' },
        { name: '九寨沟', lat: 33.2035, lng: 103.9234, themeColor: '#1abc9c', isMajor: true },
        { name: '稻城亚丁', lat: 28.5048, lng: 100.3236, themeColor: '#e74c3c' },
        { name: '西昌', lat: 27.9052, lng: 102.2969, themeColor: '#27ae60' },
      ]
    },
    {
      name: '贵州省',
      cities: [
        { name: '贵阳', lat: 26.6470, lng: 106.6301, themeColor: '#3498db' },
        { name: '遵义', lat: 27.7031, lng: 106.9169, themeColor: '#c0392b' },
        { name: '安顺', lat: 26.2547, lng: 105.9563, themeColor: '#27ae60' },
        { name: '凯里', lat: 26.5735, lng: 107.9777, themeColor: '#f39c12' },
        { name: '丽江', lat: 26.8667, lng: 100.2200, themeColor: '#1abc9c', isMajor: true },
        { name: '大理', lat: 25.6082, lng: 100.2280, themeColor: '#9b59b6', isMajor: true },
        { name: '香格里拉', lat: 27.8498, lng: 99.7392, themeColor: '#e74c3c' },
      ]
    },
    {
      name: '云南省',
      cities: [
        { name: '昆明', lat: 24.8808, lng: 102.8336, themeColor: '#3498db', isMajor: true },
        { name: '丽江', lat: 26.8667, lng: 100.2200, themeColor: '#1abc9c', isMajor: true },
        { name: '大理', lat: 25.6082, lng: 100.2280, themeColor: '#9b59b6', isMajor: true },
        { name: '西双版纳', lat: 22.0146, lng: 100.7930, themeColor: '#f39c12' },
        { name: '腾冲', lat: 25.0008, lng: 98.4842, themeColor: '#27ae60' },
        { name: '香格里拉', lat: 27.8498, lng: 99.7392, themeColor: '#e74c3c' },
        { name: '普洱', lat: 22.7913, lng: 101.0089, themeColor: '#9b59b6' },
      ]
    },
    {
      name: '西藏',
      cities: [
        { name: '拉萨', lat: 29.6540, lng: 91.1710, themeColor: '#27ae60', isMajor: true },
        { name: '日喀则', lat: 29.2415, lng: 88.8947, themeColor: '#3498db' },
        { name: '林芝', lat: 29.5943, lng: 94.3190, themeColor: '#f39c12' },
        { name: '纳木错', lat: 30.7842, lng: 90.9047, themeColor: '#9b59b6' },
      ]
    },
    {
      name: '陕西省',
      cities: [
        { name: '西安', lat: 34.2619, lng: 108.9463, themeColor: '#8e44ad', isMajor: true },
        { name: '咸阳', lat: 34.3264, lng: 108.7090, themeColor: '#3498db' },
        { name: '宝鸡', lat: 34.3309, lng: 107.1415, themeColor: '#27ae60' },
        { name: '延安', lat: 36.6512, lng: 109.4731, themeColor: '#c0392b' },
        { name: '汉中', lat: 33.0734, lng: 107.0321, themeColor: '#f39c12' },
        { name: '华山', lat: 34.4843, lng: 110.0998, themeColor: '#9b59b6' },
      ]
    },
    {
      name: '甘肃省',
      cities: [
        { name: '兰州', lat: 36.0611, lng: 103.8343, themeColor: '#3498db' },
        { name: '嘉峪关', lat: 39.7817, lng: 98.2985, themeColor: '#f39c12' },
        { name: '张掖', lat: 38.9340, lng: 100.4514, themeColor: '#27ae60' },
        { name: '敦煌', lat: 40.1478, lng: 94.6696, themeColor: '#9b59b6', isMajor: true },
        { name: '天水', lat: 34.5709, lng: 105.7277, themeColor: '#1abc9c' },
      ]
    },
    {
      name: '青海省',
      cities: [
        { name: '西宁', lat: 36.6171, lng: 101.7782, themeColor: '#3498db' },
        { name: '青海湖', lat: 36.9861, lng: 100.1866, themeColor: '#27ae60', isMajor: true },
        { name: '格尔木', lat: 36.4230, lng: 94.9063, themeColor: '#f39c12' },
      ]
    },
    {
      name: '宁夏',
      cities: [
        { name: '银川', lat: 38.4875, lng: 106.2324, themeColor: '#3498db' },
        { name: '中卫', lat: 37.5278, lng: 105.1413, themeColor: '#f39c12' },
        { name: '石嘴山', lat: 39.0464, lng: 106.3066, themeColor: '#27ae60' },
      ]
    },
    {
      name: '新疆',
      cities: [
        { name: '乌鲁木齐', lat: 43.8256, lng: 87.6168, themeColor: '#3498db', isMajor: true },
        { name: '吐鲁番', lat: 42.9340, lng: 89.1860, themeColor: '#f39c12' },
        { name: '喀什', lat: 39.4761, lng: 75.9943, themeColor: '#9b59b6' },
        { name: '伊犁', lat: 43.9214, lng: 81.3370, themeColor: '#27ae60' },
        { name: '喀纳斯', lat: 48.7093, lng: 87.0996, themeColor: '#1abc9c', isMajor: true },
        { name: '敦煌', lat: 40.1478, lng: 94.6696, themeColor: '#e74c3c' },
      ]
    },
    {
      name: '香港',
      cities: [
        { name: '香港', lat: 22.3193, lng: 114.1694, themeColor: '#3498db', isMajor: true },
      ]
    },
    {
      name: '澳门',
      cities: [
        { name: '澳门', lat: 22.1987, lng: 113.5439, themeColor: '#f39c12', isMajor: true },
      ]
    },
    {
      name: '台湾',
      cities: [
        { name: '台北', lat: 25.0330, lng: 121.5654, themeColor: '#c0392b', isMajor: true },
        { name: '高雄', lat: 22.6273, lng: 120.3014, themeColor: '#27ae60' },
        { name: '台南', lat: 23.0000, lng: 120.2000, themeColor: '#3498db' },
        { name: '垦丁', lat: 21.9425, lng: 120.8372, themeColor: '#f39c12' },
      ]
    },
  ],

  getMajorCities: function() {
    const majors = [];
    this.provinces.forEach(province => {
      province.cities.forEach(city => {
        if (city.isMajor) majors.push(city);
      });
    });
    return majors;
  },

  getAllCities: function() {
    const all = [];
    this.provinces.forEach(province => {
      province.cities.forEach(city => {
        all.push({ ...city, province: province.name });
      });
    });
    return all;
  },

  searchCities: function(query) {
    if (!query) return this.getAllCities();
    const lowerQuery = query.toLowerCase();
    return this.getAllCities().filter(city => 
      city.name.toLowerCase().includes(lowerQuery) ||
      city.province.toLowerCase().includes(lowerQuery)
    );
  },

  getCityByName: function(name) {
    for (const province of this.provinces) {
      const city = province.cities.find(c => c.name === name);
      if (city) return { ...city, province: province.name };
    }
    return null;
  },
};