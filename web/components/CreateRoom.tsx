import * as React from "react";
import { useState, useMemo, useCallback, useEffect, useContext } from "react";
import _ from 'lodash';
import axios from 'axios';
import { CreateRoomContext } from "../pages/createRoom";
import Map from "./Map";

type Props = {
};

const CreateRoom: React.FunctionComponent<Props> = ({
}) => {
    const [step, setStep] = useState(2);
    const [isError, setIsError] = useState(false);
    const [state, dispatch] = useContext(CreateRoomContext);
    const onChange = useCallback(e => {
        dispatch({ type: 'setConvenience', value: e.target.value });
    }, [state]);
    const goPrevStep = useCallback(() => {
        let newStep = _.clone(step);
        setStep(--newStep);
    }, [step]);
    const goNextStep = useCallback(() => {
        let newStep = _.clone(step);
        setStep(++newStep);
    }, [step]);
    const options = useMemo( () => {
        const option = { center: { lat: state.lat, lng: state.lng }, zoom: 15 };
        return option;
    }, [ state ]);
    const links = useMemo( () => {
        return [{
            coords: { lat: state.lat, lng: state.lng }, // required: latitude & longitude
            // at which to display the marker
            title: `Life, the Universe and Area 51`, // optional
            url: `https://wikipedia.org/wiki/Area_51`, // optional
          }];
    }, [ state ]);
    const addMarkers = links => map => {
        console.log();
        links.forEach((link, index) => {
          const marker = new window.google.maps.Marker({
            map,
            position: link.coords,
            label: `${index + 1}`,
            title: link.title,
          })
          marker.addListener(`click`, () => {
            window.location.href = link.url
          })
        })
      }
    const setCurrentLocation = async () => {
        const geoInfo = await axios.post(
            'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBBT02YSLxubEfcSxZA9UIiqy3rxD0pHfc'
        );
        if ( geoInfo ) {
            const { data: { location: { lat = 0, lng = 0 } } } = geoInfo;
            const locationInfo = await axios.get( `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBBT02YSLxubEfcSxZA9UIiqy3rxD0pHfc` );
            const { data: { results } } = locationInfo;
            if ( !_.isEmpty( results ) ) {
                const address = results[0].formatted_address || '';
                const { plus_code: { global_code = '' } } = results[0];
                dispatch({ type: 'setLat', value: lat });
                dispatch({ type: 'setLng', value: lng });
                dispatch({ type: 'setAddress', value: address.split(' ') });
                dispatch({ type: 'setPostcode', value: global_code });
            }
        }
    };
    return (
        <div className="container max-w-2xl mx-auto my-64 flex flex-col items-center border p-6 border-gray-400">
            {
                isError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-10 py-3 rounded relative" role="alert">
                        <strong className="font-bold">입력란을 채워주셔야 합니다.</strong>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3 ml-3">
                            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div>
                )
            }
            {
                step === 1 && (
                    <div className="w-full max-w-2xl">
                        <div>
                            <div className="flex items-center py-2">
                                <p className="text-lg">등록하실 숙소의 종류는 무엇인가요?</p>
                            </div>
                            <div className="flex items-center border-b border-b-2 border-gray-500 py-2">
                                <button className={`${state.houseType === 'apartment' ? 'bg-gray-900 text-white' : 'bg-transparent'} hover:bg-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded mr-2`} onClick={() => dispatch({ type: 'setHouseType', value: 'apartment' })}>
                                    아파트
                                </button>
                                <button className={`${state.houseType === 'jootek' ? 'bg-gray-900 text-white' : 'bg-transparent'} hover:bg-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded mr-2`} onClick={() => dispatch({ type: 'setHouseType', value: 'jootek' })}>
                                    주택
                                </button>
                                <button className={`${state.houseType === 'hotel' ? 'bg-gray-900 text-white' : 'bg-transparent'} hover:bg-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded mr-2`} onClick={() => dispatch({ type: 'setHouseType', value: 'hotel' })}>
                                    호텔
                                </button>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="flex items-center py-2">
                                <p className="text-lg">게스트가 묵게될 숙소의 유형을 골라주세요.</p>
                            </div>
                            <div className="flex items-center py-2">
                                <label className="inline-flex items-center">
                                    <input type="radio" className="w-8" name="all" value="all" checked={state.houseRadio === 'all'} onChange={() => dispatch({ type: 'setHouseRadio', value: 'all' })} />
                                    <span>집 전체</span>
                                </label>
                            </div>
                            <div className="flex items-center py-2">
                                <label className="inline-flex items-center">
                                    <input type="radio" className="w-8" checked={state.houseRadio === 'individual'} onChange={() => dispatch({ type: 'setHouseRadio', value: 'individual' })} />
                                    <span>개인실</span>
                                </label>
                            </div>
                            <div className="flex items-center py-2">
                                <label className="inline-flex items-center">
                                    <input type="radio" className="w-8" checked={state.houseRadio === 'multi'} onChange={() => dispatch({ type: 'setHouseRadio', value: 'multi' })} />
                                    <span>다인실</span>
                                </label>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="flex items-center py-2">
                                <p className="text-lg">어떤 편의시설을 제공하시나요?</p>
                            </div>
                            <div className="flex items-center py-2">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="w-8" checked={_.includes(state.convenience, 'aircon')} value="aircon" onChange={onChange} />
                                    <span className="ml-2">에어컨</span>
                                </label>
                            </div>
                            <div className="flex items-center py-2">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="w-8" checked={_.includes(state.convenience, 'refrigerator')} value="refrigerator" onChange={onChange} />
                                    <span className="ml-2">냉장고</span>
                                </label>
                            </div>
                            <div className="flex items-center py-2">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="w-8" checked={_.includes(state.convenience, 'washer')} value="washer" onChange={onChange} />
                                    <span className="ml-2">세탁기</span>
                                </label>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                step === 2 && (
                    <div className="w-full max-w-2xl">
                        <div>
                            <div className="flex items-center py-2">
                                <p className="text-lg">숙소의 위치는 어디인가요?</p>
                            </div>
                            <div className="flex items-center border-b border-b-2 border-gray-500 py-2">
                                <button className={`bg-transparent font-semibold py-2 px-4 border-2 border-green-600 rounded mr-2 text-green-600`} onClick={ setCurrentLocation }>
                                    현재위치 사용
                                </button>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <span>시/도</span>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="시/도" value={ !_.isEmpty( state.address ) ? `${state.address[2]} ${state.address[3]}` : '' }/>
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <span>시/군/구</span>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="시/군/구" value={ !_.isEmpty( state.address ) ? `${state.address[4]}` : '' }/>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="-mx-3 mb-6">
                                <div className="md:w-2/2 px-3 mb-6 md:mb-0">
                                    <span>도로명주소</span>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="도로명주소" value={ !_.isEmpty( state.address ) ? `${state.address[0]} ${state.address[1]} ${state.address[2]} ${state.address[3]} ${state.address[4]}` : '' }/>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <span>우편번호</span>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="우편번호" value={ state.postCode }/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                step === 3 && (
                    <div className="w-full max-w-2xl">
                        <Map
                            options={ options }
                            onMount={ addMarkers( links ) }
                        />
                    </div>
                )
            }
            <div className="inline-flex my-5">
                <button className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded-l bg-green-600 text-white" onClick={goPrevStep}>
                    이전
            </button>
                <button className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded-r ml-50vh bg-green-600 text-white" onClick={goNextStep}>
                    다음
            </button>
            </div>
        </div>
    );
}

export default CreateRoom;