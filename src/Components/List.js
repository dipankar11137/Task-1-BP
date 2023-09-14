import React, { useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import { MdArrowDropDown, MdOutlineZoomOutMap } from 'react-icons/md';

const List = ({ name }) => {
  const [click, setClick] = useState();
  return (
    <div className="px-6 mt-32 bg-white mx-7 rounded-xl shadow-lg pb-36 ">
      <h1 className="text-3xl font-semibold pt-14">{name}</h1>
      <div className="flex items-center justify-end md:mr-40">
        <AiOutlineReload
          onClick={() => setClick('reload')}
          className={`${click === 'reload' && 'text-primary'} cursor-pointer`}
        />
        <div className="w-[1px] h-[10px] bg-slate-600 mx-2"></div>
        <MdOutlineZoomOutMap
          onClick={() => setClick('zoom')}
          className={`${click === 'zoom' && 'text-primary'} cursor-pointer`}
        />
      </div>

      <div className="w-full mt-10">
        <table className="w-full overflow-x-auto ">
          <thead>
            <tr className="text-center">
              <th className="bg-sky-200 text-sm lg:pr-6 lg:mx-3">#</th>
              <td className="bg-sky-200 text-sm lg:pr-6 lg:mx-3">Date</td>
              <td className="bg-sky-200 text-sm lg:pr-6 lg:mx-3">ID</td>
              <td className="bg-sky-200 text-sm lg:pr-6 lg:mx-3">
                Business Name
              </td>
              <td className="bg-sky-200 text-sm lg:pr-6 lg:mx-3">State</td>
              <td className="bg-sky-200 text-sm lg:pr-6 lg:mx-3">Pro Type</td>
              <td className="bg-sky-200 text-sm lg:pr-6 lg:mx-3">Status</td>
              <th className="bg-sky-200 text-sm lg:pr-6 lg:mx-3">Package</th>
              <th className="bg-sky-200 text-sm lg:pr-6 lg:mx-3">
                Expiry Date
              </th>
              <th className="bg-sky-200 text-sm lg:pr-6 lg:mx-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-thin">
              <th className="font-thin bg-slate-100 border-dashed border-[2px]">
                1
              </th>
              <th className="font-thin bg-slate-100 border-dashed border-[2px]">
                1/4/20
              </th>
              <th className="font-thin bg-slate-100 border-dashed border-[2px]">
                100
              </th>
              <th className="font-thin bg-slate-100 border-dashed border-[2px]">
                Narayana
              </th>
              <th className="font-thin bg-slate-100 border-dashed border-[2px]">
                AP
              </th>
              <th className="font-thin bg-slate-100 border-dashed border-[2px]">
                Student
              </th>
              <th className="font-thin bg-slate-100 border-dashed border-[2px]">
                Active
              </th>
              <th className="font-thin bg-slate-100 border-dashed border-[2px]"></th>
              <th className="font-thin bg-slate-100 border-dashed border-[2px]">
                1/4/20
              </th>
              <th className="font-thin bg-slate-100 border-dashed border-[2px]">
                <div className="dropdown dropdown-bottom ">
                  <label
                    tabIndex={0}
                    className="btn m-1 btn-sm text-white btn-accent"
                  >
                    Select Option <MdArrowDropDown />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Profile Ad</a>
                    </li>
                    <li>
                      <a>Suspend</a>
                    </li>
                  </ul>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
