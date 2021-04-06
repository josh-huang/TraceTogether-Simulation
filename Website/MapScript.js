function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 1.357912699946735, lng: 103.86402586050852},
        zoom: 12,
        mapId: 'd06829fc6911d098',
        mapTypeControl: false,
        fullScreenControl: false,
        streetViewControl: false

      });

    const image_url = "https://freesvg.org/img/location_icon.png";
    const covid_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Coronavirus_icon.svg/1024px-Coronavirus_icon.svg.png"
    const size1 = 38;
    const size2 = 31;


    const markers = [
      [          
        "100 AM" ,
        1.274913 ,
        103.843614 
      ],
      [
        "313@Somerset" ,
        1.301013 ,
        103.83854 
      ],
      [
        "321 Clementi" ,
        1.316578 ,
        103.766386 
      ],
      [
        "888 Plaza" ,
        1.43781 ,
        103.795316 
      ],
      [
        "Admiralty Place" ,
        1.439698 ,
        103.801841 
      ],
      [
        "Alexandra Central" ,
        1.287526 ,
        103.805291 
      ],
      [
        "Alexandra Retail Centre" ,
        1.273893 ,
        103.801456 
      ],
      [
        "AMK Hub" ,
        1.369435 ,
        103.848334 
      ],
      [
        "Anchorpoint" ,
        1.288675 ,
        103.805095 
      ],
      [
        "Aperia" ,
        1.310341 ,
        103.864027 
      ],
      [
        "Balestier Hill Shopping Centre" ,
        1.325442 ,
        103.842521 
      ],
      [
        "Beauty World Centre" ,
        1.3423624 ,
        103.7764855 
      ],
      [
        "Beauty World Plaza" ,
        1.34183 ,
        103.776278 
      ],
      [
        "Bedok Mall" ,
        1.32488 ,
        103.9292396 
      ],
      [
        "Bedok Point" ,
        1.3247574 ,
        103.9323895 
      ],
      [
        "Big Box ",
        1.3322794 ,
        103.7457493 
      ],
      [
        "Boon Lay Shopping Centre" ,
        1.3463367 ,
        103.7127614 
      ],
      [
        "Buangkok Square" ,
        1.3838388 ,
        103.8819622 
      ],
      [
        "Bugis Cube" ,
        1.2982756 ,
        103.8555546 
      ],
      [
        "Bugis Junction" ,
        1.2989008 ,
        103.855176 
      ],
      [
        "Bugis+",
        1.2999533 ,
        103.8552781 
      ],
      [
        "Bukit Panjang Plaza" ,
        1.378655 ,
        103.7620908 
      ],
      [
        "Bukit Timah Plaza" ,
        1.3384959 ,
        103.7785106 
      ],
      [
        "Canberra Plaza" ,
        1.4432209 ,
        103.8305821 
      ],
      [
        "Capitol Piazza" ,
        1.2930198 ,
        103.8509811 
      ],
      [
        "Cathay Cineleisure Orchard" ,
        1.3014468 ,
        103.8364807 
      ],
      [
        "Causeway Point" ,
        1.4361009 ,
        103.7860949 
      ],
      [
        "Century Square" ,
        1.3523775 ,
        103.9438195 
      ],
      [
        "Changi Airport" ,
        1.3575573 ,
        103.9884703 
      ],
      [
        "Changi City Point" ,
        1.334113 ,
        103.9627137 
      ],
      [
        "City Gate Mall" ,
        1.3023204 ,
        103.8622868 
      ],
      [
        "City Plaza" ,
        1.3147175 ,
        103.8934143 
      ],
      [
        "City Square Mall" ,
        1.3112429 ,
        103.8565772 
      ],
      [
        "CityLink Mall" ,
        1.2921921 ,
        103.8545358 
      ],
      [
        "Clarke Quay Central" ,
        1.2889569 ,
        103.8464961 
      ],
      [
        "Compass One" ,
        1.3920337 ,
        103.8949527 
      ],
      [
        "Djitsun Mall" ,
        1.3728879 ,
        103.8476187 
      ],
      [
        "Djitsun Mall Bedok" ,
        1.3260744 ,
        103.9295754 
      ],
      [
        "Downtown East" ,
        1.3773722 ,
        103.954648 
      ],
      [
        "East Village" ,
        1.3316644 ,
        103.9462908 
      ],
      [
        "Eastpoint Mall" ,
        1.3424679 ,
        103.9528535 
      ],
      [
        "Elias Mall" ,
        1.3785553 ,
        103.9420134 
      ],
      [
        "Fairprice Hub" ,
        1.3255324 ,
        103.6784394 
      ],
      [
        "Fajar Shopping Centre" ,
        1.3834498 ,
        103.7710942 
      ],
      [
        "Far East Plaza" ,
        1.3071429 ,
        103.8336405 
      ],
      [
        "Funan" ,
        1.291313 ,
        103.8499471 
      ],
      [
        "Gek Po Shopping Centre" ,
        1.349176 ,
        103.6975195 
      ],
      [
        "Great World City" ,
        1.2934518 ,
        103.8319929 
      ],
      [
        "Greenridge Shopping Centre" ,
        1.3853791 ,
        103.7661902 
      ],
      [
        "Greenwich V" ,
        1.3875009 ,
        103.8693942 
      ],
      [
        "GR.ID" ,
        1.3000836 ,
        103.8492948 
      ],
      [
        "HarbourFront Centre" ,
        1.2642217 ,
        103.8202454 
      ],
      [
        "HDB Hub" ,
        1.3319765 ,
        103.8485384 
      ],
      [
        "Heartland Mall" ,
        1.3596301 ,
        103.8852259 
      ],
      [
        "Hillion Mall" ,
        1.3785082 ,
        103.7633212 
      ],
      [
        "HillV2" ,
        1.3629674 ,
        103.7644875 
      ],
      [
        "Hougang 1" ,
        1.375719 ,
        103.8794915 
      ],
      [
        "Hougang Green Shopping Mall" ,
        1.3791215 ,
        103.8878419 
      ],
      [
        "Hougang Mall" ,
        1.3725735 ,
        103.8937879 
      ],
      [
        "i12 Katong" ,
        1.3052327 ,
        103.9050524 
      ],
      [
        "IMM" ,
        1.334611 ,
        103.7467494 
      ],
      [
        "ION Orchard" ,
        1.3039479 ,
        103.8319051 
      ],
      [
        "JCube" ,
        1.3332998 ,
        103.7401593 
      ],
      [
        "Jem" ,
        1.3332962 ,
        103.7433912 
      ],
      [
        "Jewel Changi Airport" ,
        1.3602242 ,
        103.9896749 
      ],
      [
        "Jubilee Square" ,
        1.3718136 ,
        103.8477532 
      ],
      [
        "Junction 10" ,
        1.3803675 ,
        103.7601674 
      ],
      [
        "Junction 8" ,
        1.3505893 ,
        103.8487447 
      ],
      [
        "Junction 9" ,
        1.2904753 ,
        103.8520359 
      ],
      [
        "Jurong Point" ,
        1.3394964 ,
        103.705254 
      ],
      [
        "Kallang Wave Mall" ,
        1.3035107 ,
        103.8727917 
      ],
      [
        "Katong Shopping Centre" ,
        1.3038779 ,
        103.9011731 
      ],
      [
        "Katong Square" ,
        1.3047036 ,
        103.9048008 
      ],
      [
        "Katong V" ,
        1.3031334 ,
        103.9032312 
      ],
      [
        "Keat Hong Shopping Centre" ,
        1.3773319 ,
        103.7444165 
      ],
      [
        "KINEX" ,
        1.3147639 ,
        103.894707 
      ],
      [
        "Knightsbridge" ,
        1.3032346 ,
        103.8363241 
      ],
      [
        "Leisure Park Kallang" ,
        1.3022347 ,
        103.8765544 
      ],
      [
        "Liat Towers" ,
        1.3050783 ,
        103.8307259 
      ],
      [
        "Limbang Shopping Centre" ,
        1.3919423 ,
        103.7433051 
      ],
      [
        "Lot One" ,
        1.3850567 ,
        103.7450277 
      ],
      [
        "Loyang Point" ,
        1.3669647 ,
        103.9646487 
      ],
      [
        "Lucky Plaza" ,
        1.3046029 ,
        103.8339122 
      ],
      [
        "Marina Bay Financial Centre Tower 3" ,
        1.2789573 ,
        103.8544488 
      ],
      [
        "Marina Bay Link Mall" ,
        1.2808361 ,
        103.8539888 
      ],
      [
        "Marina Bay Sands" ,
        1.2836965 ,
        103.8607226 
      ],
      [
        "Marina One" ,
        1.2772586 ,
        103.8529596 
      ],
      [
        "Marina Square" ,
        1.2912739 ,
        103.8571836 
      ],
      [
        "Marsiling Mall" ,
        1.4332503 ,
        103.780787 
      ],
      [
        "Midpoint Orchard" ,
        1.3017143 ,
        103.8386311 
      ],
      [
        "Millenia Walk" ,
        1.292471 ,
        103.8596399 
      ],
      [
        "Mustafa Shopping Centre" ,
        1.3101174 ,
        103.8553229 
      ],
      [
        "myVillage At Serangoon Garden" ,
        1.3651222 ,
        103.8650484 
      ],
      [
        "NEX" ,
        1.3504507 ,
        103.8722447 
      ],
      [
        "Ngee Ann City" ,
        1.302617 ,
        103.8345284 
      ],
      [
        "Northpoint City" ,
        1.4282062 ,
        103.836264 
      ],
      [
        "Oasis Terraces" ,
        1.4028263 ,
        103.913229 
      ],
      [
        "OD Mall" ,
        1.3351056 ,
        103.7944923 
      ],
      [
        "Orchard Central" ,
        1.3008042 ,
        103.839819 
      ],
      [
        "Orchard Gateway" ,
        1.3014214 ,
        103.8389049 
      ],
      [
        "Orchard Plaza" ,
        1.3013398 ,
        103.8411567 
      ],
      [
        "Orchard Shopping Centre" ,
        1.3014771 ,
        103.8378934 
      ],
      [
        "Our Tampines Hub" ,
        1.3530262 ,
        103.9406755 
      ],
      [
        "Palais Renaissance" ,
        1.28967 ,
        103.85007 
      ],
      [
        "Paragon" ,
        1.3037371 ,
        103.8355203 
      ],
      [
        "Parkway Parade" ,
        1.3013733 ,
        103.9051778 
      ],
      [
        "Paya Lebar Quarter (PLQ)" ,
        1.3175858 ,
        103.892854 
      ],
      [
        "People's Park Centre",
        1.285942 ,
        103.8442264 
      ],
      [
        "People's Park Complex",
        1.2841387 ,
        103.842557 
      ],
      [
        "Pioneer Mall" ,
        1.3416979 ,
        103.6971606 
      ],
      [
        "Plaza Singapura" ,
        1.3004414 ,
        103.8449028 
      ],
      [
        "Punggol Plaza" ,
        1.399168 ,
        103.9024984 
      ],
      [
        "Queensway Shopping Centre" ,
        1.2875059,
        103.8035435
      ],
      [
        "Raffles City" ,
        1.2938762 ,
        103.8532616 
      ],
      [
        "Rail Mall" ,
        1.3601778 ,
        103.7675449 
      ],
      [
        "Rivervale Mall" ,
        1.3922451 ,
        103.9043778 
      ],
      [
        "Rivervale Plaza" ,
        1.3853753 ,
        103.9018221 
      ],
      [
        "Rochester Mall" ,
        1.3056577 ,
        103.7880838 
      ],
      [
        "Roxy Square" ,
        1.3033419 ,
        103.9046459 
      ],
      [
        "Scotts Square ",
        1.3058344 ,
        103.8329333 
      ],
      [
        "Sembawang Shopping Centre" ,
        1.4417425 ,
        103.8248753 
      ],
      [
        "Serangoon Plaza" ,
        1.3109014 ,
        103.8548135 
      ],
      [
        "Shaw House and Centre" ,
        1.3058298 ,
        103.831526 
      ],
      [
        "Sim Lim Square" ,
        1.3030332 ,
        103.8530255 
      ],
      [
        "Singapore Post Centre (Singpost Centre)" ,
        1.3189532 ,
        103.8947901 
      ],
      [
        "Singapore Shopping Centre" ,
        1.2981147 ,
        103.8441112 
      ],
      [
        'Square 2' ,
        1.3206362 ,
        103.8441867 
      ],
      [
        "Sun Plaza" ,
        1.4480986 ,
        103.8190191 
      ],
      [
        "Sunshine Place" ,
        1.3777695 ,
        103.7386492 
      ],
      [
        "Sunshine Plaza" ,
        1.3003526 ,
        103.8509473 
      ],
      [
        "Suntec City" ,
        1.2951505 ,
        103.8598741 
      ],
      [
        "Taman Jurong Shopping Centre" ,
        1.3347863 ,
        103.7201085 
      ],
      [
        "Tampines 1" ,
        1.35422 ,
        103.9451247 
      ],
      [
        "Tampines Mall" ,
        1.3525434 ,
        103.9447383 
      ],
      [
        "Tanglin Mall" ,
        1.3048201 ,
        103.8238677 
      ],
      [
        "Tang Plaza" ,
        1.305109 ,
        103.8328767 
      ],
      [
        "Tanjong Pagar Centre" ,
        1.2766057 ,
        103.8457793 
      ],
      [
        "Teck Whye Shopping Centre" ,
        1.3807832 ,
        103.7524705 
      ],
      [
        "Tekka Centre" ,
        1.3061832 ,
        103.8505875 
      ],
      [
        "The Centrepoint" ,
        1.3018345 ,
        103.8397127 
      ],
      [
        "The ClementiMall" ,
        1.3150286 ,
        103.7644982 
      ],
      [
        "The Flow" ,
        1.3045554 ,
        103.9042659 
      ],
      [
        "The Midtown" ,
        1.370386 ,
        103.8953238 
      ],
      [
        "The Seletar Mall" ,
        1.3917727 ,
        103.8760148 
      ],
      [
        "The Shoppes at Marina Bay Sands" ,
        1.2840175 ,
        103.8587997 
      ],
      [
        "The Star Vista" ,
        1.3068312 ,
        103.7884268 
      ],
      [
        "Thomson Plaza ",
        1.3546534 ,
        103.831073 
      ],
      [
        "Tiong Bahru Plaza" ,
        1.2863599 ,
        103.827333 
      ],
      [
        "United Square" ,
        1.317258 ,
        103.8436009 
      ],
      [
        "Upper Serangoon Shopping Centre" ,
        1.3536587 ,
        103.8788228 
      ],
      [
        "Velocity@Novena Square",
        1.3197981 ,
        103.8440434 
      ],
      [
        "Vista Point" ,
        1.4307324 ,
        103.7940437 
      ],
      [
        "VivoCity" ,
        1.2643707 ,
        103.8229537 
      ],
      [
        "Waterway Point" ,
        1.4066031 ,
        103.9020707 
      ],
      [
        "West Coast Plaza",
        1.303478 ,
        103.7658546 
      ],
      [
        "West Mall" ,
        1.3500765 ,
        103.7492566 
      ],
      [
        "Westgate" ,
        1.334194 ,
        103.7428671 
      ],
      [
        "Wheelock Place" ,
        1.3046691 ,
        103.8306003 
      ],
      [
        "White Sands" ,
        1.3723844 ,
        103.9497206 
      ],
      [
        "Wisma Atria" ,
        1.3036967 ,
        103.8332876 
      ],
      [
        "Wisteria Mall" ,
        1.4182429 ,
        103.8412529 
      ],
      [
        "Woodlands Civic Centre" ,
        1.4350299 ,
        103.7869088 
      ],
      [
        "Woodlands Mart" ,
        1.4456569 ,
        103.798172 
      ],
      [
        "Woodlands North Plaza" ,
        1.44288 ,
        103.7908639 
      ],
      [
        "Yew Tee Point" ,
        1.3969577 ,
        103.7466122 
      ],
      [
        "Yew Tee Shopping Centre" ,
        1.3974608,
        103.7474009
      ],
      [
        "Yew Tee Square" ,
        1.3982858 ,
        103.7470082 
      ],
      [
        "Zhongshan Mall" ,
        1.3271544 ,
        103.8464917 
      ] 
    ];

    const locationmap = {
      Paragon: {
        center: { lat: markers[104][1], lng: markers[104][2] },
        population: 1,
      },
      NorthPointCity: {
        center: { lat: markers[95][1], lng: markers[95][2] },
        population: 1,
      },
      ChangiAirport: {
        center: { lat: markers[28][1], lng: markers[28][2] },
        population: 2,
      },
      LiatTower: {
        center: { lat: markers[78][1], lng: markers[78][2] },
        population: 1,
      },
      MustafaShoppingCentre: {
        center: { lat: markers[91][1], lng: markers[91][2] },
        population: 1,
      },
      BugisPlus: {
        center: { lat: markers[20][1], lng: markers[20][2] },
        population: 2,
      },
      MarineSquare: {
        center: { lat: markers[87][1], lng: markers[87][2] },
        population: 1,
      },
      EastPointCity: {
        center: { lat: markers[40][1], lng: markers[40][2] },
        population: 1,
      },
      OrchardShoppingCentre: {
        center: { lat: markers[101][1], lng: markers[101][2] },
        population: 1,
      },
      PeopleParkCentre: {
        center: { lat: markers[107][1], lng: markers[107][2] },
        population: 1,
      },
    };

    for (let i=0; i<markers.length; i++){
      const currentMarker=markers[i];

      const marker = new google.maps.Marker({
        position: {lat:currentMarker[1], lng: currentMarker[2]},
        map,
        icon: {
            url: image_url,
            scaledSize: new google.maps.Size(size1,size2)
        },
        animation: google.maps.Animation.DROP
      });
  
      const infowindow = new google.maps.InfoWindow({
        content: currentMarker[0],
      });
  
      marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
  }

    for (const location in locationmap) {
    // Add the circle for this city to the map.
      const cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: locationmap[location].center,
        radius: locationmap[location].population * 1000,
    });
  }
    const flightPlanCoordinates = [
      { lat: markers[6][1], lng: markers[6][2] },
      { lat: markers[100][1], lng: markers[100][2] },
    ];
    const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 3.0,
      strokeWeight: 2,
    });
    flightPath.setMap(map);
    }


    

//1.357912699946735, 103.86402586050852
//1.3934912438275326, 103.7991235701476