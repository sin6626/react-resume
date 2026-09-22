import { SinList } from "./common/SinList"

export const SinPraise = () => {
  const items: string[] = [
    "第16届蓝桥杯大赛(2025)湖南省软件赛B组C++省二等奖",
    "坚持算法训练, LeetCode累计532题, 覆盖多种常见题型"
  ]

  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold">获奖与补充信息</h3>
        <div className="w-200 h-0.5 bg-gray-500"></div>
        <SinList items={items} ></SinList>
      </div>
    </>
  )
}