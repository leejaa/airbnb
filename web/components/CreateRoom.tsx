import * as React from "react";
import { useState, useRef, useCallback, useEffect, useContext } from "react";
import _ from 'lodash';
import { CreateRoomContext } from "../pages/createRoom";

type Props = {
};

const CreateRoom: React.FunctionComponent<Props> = ({
}) => {
    const [step, setStep] = useState('first');
    const [isError, setIsError] = useState(false);
    const [state, dispatch] = useContext(CreateRoomContext);
    const onChange = useCallback(e => {
        dispatch({ type: 'setConvenience', value: e.target.value });
    }, [state]);
    const goNextStep = useCallback(() => {

    }, []);
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
                            <input type="checkbox" className="w-8" checked={ _.includes( state.convenience, 'aircon' ) } value="aircon" onChange={ onChange }/>
                                <span className="ml-2">에어컨</span>
                        </label>
                    </div>
                    <div className="flex items-center py-2">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="w-8" checked={ _.includes( state.convenience, 'refrigerator' ) } value="refrigerator" onChange={ onChange }/>
                                <span className="ml-2">냉장고</span>
                        </label>
                    </div>
                    <div className="flex items-center py-2">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="w-8" checked={ _.includes( state.convenience, 'washer' ) } value="washer" onChange={ onChange }/>
                                <span className="ml-2">세탁기</span>
                        </label>
                    </div>
                </div>
                    <div className="inline-flex my-5">
                        <button className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded-l bg-green-600 text-white">
                            이전
                    </button>
                        <button className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded-r ml-50vh bg-green-600 text-white" onClick={goNextStep}>
                            다음
                    </button>
                    </div>
                </div>
            </div>
            );
        }
        
export default CreateRoom;