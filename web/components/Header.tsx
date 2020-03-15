import React from "react";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import '../assets/scss/room.scss';
import { AppleOutlined, AppleFilled, SearchOutlined } from "@ant-design/icons";

interface Props {
  onChangeSearchAddress: any,
  setIsShowSearchList: any
}

export const Header: React.FC<Props> = ({
  onChangeSearchAddress,
  setIsShowSearchList
}) => {

  return (
    <div className="header-container1">
      <div className="header-container2">
        <AppleFilled style={{ color: 'pink', fontSize: '50px' }} />
      </div>
      <div className="header-container3">
        <div className="header-container4">
          <input type="text" className="header-input" placeholder={"검색"} onChange={onChangeSearchAddress} onFocus={() => setIsShowSearchList(true)} />
          <div className="header-container5">
            <SearchOutlined style={{ fontSize: '20px', color: 'gray' }} />
          </div>
        </div>
      </div>
    </div>
  );
};