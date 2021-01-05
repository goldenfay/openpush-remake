import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  Circle,
  GeolocationControl,
  SearchControl,
} from "react-yandex-maps";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& * ": {
      width: "100%",
    //   height: "auto",
    },
},
map: {
  width: "100%",
  minHeight: "80vh",
},
}));

const MapView = (props) => {
  const classes = useStyles();
  return (
    <>
      {/* <div className={classes.root}>
        <YMaps >
          <div className={classes.root}>
           
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}  className={classes.root}/>
          </div>
        </YMaps>
      </div> */}
      <div className={classes.root}>
        <YMaps query={{ lang: "en-US" }}>
          <Map
            className={classes.map}
            defaultState={{
              center: [40.7211435800902, -73.83499960619568],
              zoom: 14,
              controls: [],
            }}
          >
            {props.items &&
              props.items.length &&
              props.items.map((item) => {
                return (
                  <div key={item.id}>
                    <Placemark
                      geometry={[item.lon, item.lat]}
                      options={{
                        iconLayout: "default#image",
                        iconImageHref: item.icon,
                        iconImageSize: [30, 30],
                        iconImageOffset: [-3, -42],
                        hasBalloon: true,
                        draggable: false,
                      }}
                      properties={{
                        balloonContent: "content here",
                        balloonContentHeader: "T4",
                        balloonContentBody: "TTT6",
                        balloonContentFooter: "FG3",
                      }}
                    />
                  </div>
                );
              })}
            

            <ZoomControl options={{ float: "right" }} />
            {/* <Circle
            geometry={[[60.2055, 24.6559], 10000]}
            options={{
              draggable: true,
              fillColor: '#DB709377',
              strokeColor: '#990066',
              strokeOpacity: 0.2,
              strokeWidth: 3,
            }}
            /> */}

            {props.geoLocation && (
              <GeolocationControl options={{ float: "left" }} />
            )}
            {props.searchControl && (
              <SearchControl options={{ float: "right" }} />
            )}
          </Map>
        </YMaps>
      </div>
    </>
  );
};

export default MapView;
