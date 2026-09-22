# backend-express-nodejs

ตัวอย่าง backend เบื้องต้นด้วย Express

## สรุปสิ่งที่ทำ

- สร้าง Express server สำหรับ backend
- เพิ่ม `express.json()` เพื่อรองรับ request body แบบ JSON
- เพิ่ม endpoint `GET /` สำหรับตรวจสอบว่า server ทำงานอยู่
- เพิ่ม endpoint `GET /health` สำหรับ health check
- เพิ่ม `npm start` สำหรับรัน server ปกติ
- เพิ่ม `npm run dev` สำหรับรันด้วย Nodemon และ reload อัตโนมัติ
- รองรับการกำหนด port ผ่านตัวแปร `PORT`

โครงสร้างไฟล์หลัก:

```text
src/server.js  # จุดเริ่มต้นของ Express server
package.json   # dependencies และ scripts
```

## เริ่มใช้งาน

```bash
npm install
npm run dev
```

เปิด `http://localhost:3000` หรือ `http://localhost:3000/health`

สำหรับรันแบบปกติ:

```bash
npm start
```

กำหนด port อื่นได้ด้วยตัวแปร `PORT` เช่น `PORT=4000 npm start`