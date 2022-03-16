### 说明
  > 了解，实际体验下webrtc 简单实现一个分享屏幕的demo


  ```bash
    # 使用流程
    npm install
    npm run dev
  ```

  - 访问 localhost:3001/ower.html 点击start分享屏幕
  - 访问 localhost:3003/customer.html 点击start观看



### 补充一些小的注意事项
  ```
    WebRTC需要https协议。
    serve.js代码中的https证书需要手动生成，可以查一下生成方式（我是本地测试的，证书的问题会出现不安全的https提示，试了下不影响运行）
  ```

### PS
  目前只是单纯学习下 rtc 基础使用方式，所以服务端并没有使用socket，暂时使用了轮询的方式，有时间再改下

### 相关

  有很多其他相关知识，关于网络协议的知识待补充，比如 `SDP` `RTP` `STUN协议` `NAT`，尤其 `STUN` 和RTC的使用会有关联