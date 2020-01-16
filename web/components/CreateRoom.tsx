import * as React from "react";
import { useState, useMemo, useCallback, useEffect, useContext } from "react";
import { Popover, Button } from 'antd';
import 'antd/dist/antd.css';
import _ from 'lodash';
import axios from 'axios';
import '../assets/scss/room.scss'
import { CreateRoomContext } from "../pages/createRoom";
import Map from "./Map";
import { ImageUpload } from "./ImageUpload";

type Props = {
};

const CreateRoom: React.FunctionComponent<Props> = ({
}) => {
    const [step, setStep] = useState(1);
    const [isError, setIsError] = useState(false);
    const [files, setFiles] : any = useState([]);
    const [rule, setRule] = useState("");
    const [rules, setRules] = useState([]);
    const [state, dispatch] : any = useContext(CreateRoomContext);
    const tempSave = useCallback(() => {
        window.localStorage.setItem('state', JSON.stringify(state));
    }, [state]);
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
    const onChageRule = useCallback(e => {
        setRule(e.target.value);
        console.log('rule', rule);
    }, [rule]);
    const addRules = useCallback(e => {
        const newRules = _.union(rules, [rule]);
        setRules(newRules as any);
        setRule("");
    }, [rules, rule]);
    const removeRule = useCallback(index => {
        const newRules = _.clone(rules);
        _.pullAt(newRules, [index]);
        setRules(newRules);
    }, [rules]);
    const options = useMemo(() => {
        const option = { center: { lat: state.lat, lng: state.lng }, zoom: 15 };
        return option;
    }, [state]);
    const links = useMemo(() => {
        return [{
            coords: { lat: state.lat, lng: state.lng }, // required: latitude & longitude
            // at which to display the marker
            title: `Life, the Universe and Area 51`, // optional
            url: `https://wikipedia.org/wiki/Area_51`, // optional
        }];
    }, [state]);
    const addMarkers = (links: { forEach: (arg0: (link: any, index: any) => void) => void; }) => (map: any) => {
        links.forEach((link: any, index: any) => {
            // const marker = new window.google.maps.Marker({
            //     map,
            //     position: link.coords,
            //     label: `${index + 1}`,
            //     title: link.title,
            // })
            // marker.addListener(`click`, () => {
            //     window.location.href = link.url
            // })
        })
    }
    const setCurrentLocation = async () => {
        const geoInfo = await axios.post(
            'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBBT02YSLxubEfcSxZA9UIiqy3rxD0pHfc'
        );
        if (geoInfo) {
            const { data: { location: { lat = 0, lng = 0 } } } = geoInfo;
            const locationInfo = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBBT02YSLxubEfcSxZA9UIiqy3rxD0pHfc`);
            const { data: { results } } = locationInfo;
            if (!_.isEmpty(results)) {
                const address = results[0].formatted_address || '';
                const { plus_code: { global_code = '' } } = results[0];
                dispatch({ type: 'setLat', value: lat });
                dispatch({ type: 'setLng', value: lng });
                dispatch({ type: 'setAddress', value: address.split(' ') });
                dispatch({ type: 'setPostcode', value: global_code });
            }
        }
    };
    const addFile = (file: { map: (arg0: (file: any) => any) => void; }) => {
        console.log(file);
        // this.setState({
        //     files: file.map((file: any) =>
        //         Object.assign(file, {
        //             preview: URL.createObjectURL(file)
        //         })
        //     )
        // });
        setFiles({
            files: file.map((file: any) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            )
        } as any);
    };
    useEffect(() => {
        return () => {
            let newFiles = _.clone(files);
            newFiles.forEach((file: { preview: string; }) => URL.revokeObjectURL(file.preview));
        }
    });
    const content = useMemo( () => {
        return (
            <div>
                <p>Content</p>
                <p>Content</p>
            </div>
        );
    }, []);
    return (
        <div className="cotainer max-w-2xl mx-auto my-64 flex flex-col items-center border p-6 border-gray-400">
            <button onClick={tempSave}>임시저장</button>
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
                                <button className={`bg-transparent font-semibold py-2 px-4 border-2 border-green-600 rounded mr-2 text-green-600`} onClick={setCurrentLocation}>
                                    현재위치 사용
                                </button>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <span>시/도</span>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="시/도" value={!_.isEmpty(state.address) ? `${state.address[2]} ${state.address[3]}` : ''} />
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <span>시/군/구</span>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="시/군/구" value={!_.isEmpty(state.address) ? `${state.address[4]}` : ''} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="-mx-3 mb-6">
                                <div className="md:w-2/2 px-3 mb-6 md:mb-0">
                                    <span>도로명주소</span>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="도로명주소" value={!_.isEmpty(state.address) ? `${state.address[0]} ${state.address[1]} ${state.address[2]} ${state.address[3]} ${state.address[4]}` : ''} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <span>우편번호</span>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="우편번호" value={state.postCode} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                step === 3 && (
                    <div className="w-full max-w-2xl">
                        {/* <Map
                            options={options}
                            onMount={addMarkers(links)}
                        /> */}
                    </div>
                )
            }
            {
                step === 4 && (
                    <div className="w-full max-w-2xl">
                        <div>
                            <div className="flex items-center py-2">
                                <p className="text-lg">숙소사진 올리기</p>
                            </div>
                        </div>
                        <div>
                            {
                                state.imageUrl ? (
                                    <img src={state.imageUrl} />
                                ) : (
                                        <ImageUpload
                                            state={state}
                                            dispatch={dispatch}
                                        />
                                    )
                            }
                        </div>
                    </div>
                )
            }
            {
                step === 5 && (
                    <div className="w-full max-w-2xl">
                        <div>
                            <div className="flex items-center py-2">
                                <p className="text-3xl font-bold">게스트가 지켜야할 이용규칙을 정하세요</p>
                            </div>
                            <div className="flex items-center py-2 relative">
                                <p className="text-lg">어린이 숙박에 적합함</p>
                                <Popover content={content} title="Title" placement="right">
                                    <i className="material-icons" style={ { marginBottom: 15, marginLeft: 5 } }>notification_important</i>
                                </Popover>
                                <div className="absolute right-0">
                                    <button className="font-semibold hover:text-white w-8 h-8 bg-green-700 rounded mr-2 rounded-full pl-2">
                                        <svg className="fill-current w-4 h-4 text-white" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                                    </button>
                                    <button className="font-semibold hover:text-white w-8 h-8 border border-gray-400 bg-white rounded mr-2 rounded-full pl-1">
                                        <svg className="fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center py-2 relative">
                                <p className="text-lg">유아 숙박에 적합함</p>
                                <div className="absolute right-0">
                                    <button className="font-semibold hover:text-white w-8 h-8 bg-green-700 rounded mr-2 rounded-full pl-2">
                                        <svg className="fill-current w-4 h-4 text-white" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                                    </button>
                                    <button className="font-semibold hover:text-white w-8 h-8 border border-gray-400 bg-white rounded mr-2 rounded-full pl-1">
                                        <svg className="fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center py-2 relative">
                                <p className="text-lg">반려동물 숙박에 적합함</p>
                                <div className="absolute right-0">
                                    <button className="font-semibold hover:text-white w-8 h-8 bg-green-700 rounded mr-2 rounded-full pl-2">
                                        <svg className="fill-current w-4 h-4 text-white" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                                    </button>
                                    <button className="font-semibold hover:text-white w-8 h-8 border border-gray-400 bg-white rounded mr-2 rounded-full pl-1">
                                        <svg className="fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center py-2 mt-3">
                                <p className="text-2xl font-bold">추가규칙</p>
                            </div>
                            {
                                rules.map((rule, index) => {
                                    return (
                                        <div className="flex relative items-center">
                                            <p className="text-lg">{rule}</p>
                                            <div className="absolute right-0">
                                                <button className="font-semibold hover:text-white w-8 h-8 bg-white rounded mr-2 rounded-full pl-1" onClick={() => removeRule(index)}>
                                                    <svg className="fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div>
                                <div className="inline-block mt-2 w-3/4">
                                    <input className="w-full py-3 text-gray-700 h-12" type="text" placeholder="조용히 해야하는 시간" onChange={onChageRule} />
                                </div>
                                <div className="inline-block mt-2 w-1/4">
                                    <button className="w-full py-3 text-gray-700 border border-gray-500 h-12" onClick={addRules}>추가</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="inline-flex my-5">
                <button className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded-l bg-green-700 text-white" onClick={goPrevStep}>
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