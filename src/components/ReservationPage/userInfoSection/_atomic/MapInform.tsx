import { useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk"

export default function MapInform() {

    return (
        <div className="map_info">
            <div className="so_title">
                <p className="tit">약도</p>
            </div>

            <Map
                className="map"
                center={{ lat: 33.5563, lng: 126.79581 }}
                style={{ width: "100%", height: 200 }}
            >
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                    {/* <div style={{ color: "#000" }}></div> */}
                </MapMarker>

            </Map>


        </div>
    )
}