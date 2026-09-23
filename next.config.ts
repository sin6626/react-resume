import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 导出问静态网站, 会导出在out文件夹内, 不加的会实在.next文件夹里, Next小细节, 使用svg图作为网站图标, 必须是icon.svg的名字
  output: "export"
};

export default nextConfig;
