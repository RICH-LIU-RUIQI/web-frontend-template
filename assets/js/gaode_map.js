window.onload = function(){
      var map = new AMap.Map("map-container", {
        zoom: 15, //设置地图显示的缩放级别
        center: [106.55495, 29.744899] //设置地图中心点坐标
      });

      // 创建一个 Marker 实例：（标记点）
      var marker = new AMap.Marker({
        position: new AMap.LngLat(106.55495, 29.744899), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "位置标题"
      });

      // 将创建的点标记添加到已有的地图实例：
      map.add(marker);
    }