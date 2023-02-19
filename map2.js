var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.5884546, 126.9926780), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// if (navigator.geolocation) {
    
//     // GeoLocation을 이용해서 접속 위치를 얻어옵니다
//     navigator.geolocation.getCurrentPosition(function(position) {
        
//         var lat = position.coords.latitude, // 위도
//             lon = position.coords.longitude; // 경도
        
//         var locPosition = new kakao.maps.LatLng(lat, lon) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        
//         // 마커를 표시합니다
//         displayMarker(locPosition);
            
//     });
    
// } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치를 설정합니다
    
//     var locPosition = new kakao.maps.LatLng(37.5884546, 126.9926780)
        
//     displayMarker(locPosition);
// }

function displayMarker(locPosition) {

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);      
}    


var imageSrc = './img/marker.png', // 마커이미지의 주소입니다    
imageSize = new kakao.maps.Size(32, 32), // 마커이미지의 크기입니다
imageOption = {offset: new kakao.maps.Point(16, 40)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커가 표시될 위치입니다 
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.5884546, 126.9926780); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var content = 
'<div class="infoBox">'+
    '<div class="infoTitle" onclick="showPreview()">ttt</div>'+
'</div>' // 인포윈도우에 표출될 내용

//인포윈도우 표시 위치
var position = new kakao.maps.LatLng(37.5884546, 126.9926780); 

var overlay = new kakao.maps.CustomOverlay({
    content: content,
    map: map,
    position: position,
    yAnchor: 1
});

overlay.setMap(null); 

// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
kakao.maps.event.addListener(marker, 'click', function() {
    overlay.setMap(map);
});

function showPreview() {
    document.getElementById("detailInfoBox").style.display = "block";
}

function routeToDetailPage() {
    // 가게 상세페이지로 이동
}

function routeToListPage() {
    // 리스트업 페이지로 이동
}



// 클릭 이벤트시 색상 변경
// var content = document.getElementsByClassName("content");

// function handleClick(event) {
//   console.log(event.target);
//   // console.log(this);
//   // 콘솔창을 보면 둘다 동일한 값이 나온다

//   console.log(event.target.classList);

//   if (event.target.classList[1] === "clicked") {
//     event.target.classList.remove("clicked");
//   } else {
//     for (var i = 0; i < content.length; i++) {
//       content[i].classList.remove("clicked");
//     }

//     event.target.classList.add("clicked");
//   }
// }

// function init() {
//   for (var i = 0; i < content.length; i++) {
//     content[i].addEventListener("click", handleClick);
//   }
// }

// init();