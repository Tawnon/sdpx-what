# Tech Stack

## Decision Summary

ทีม: 67015041 นาย ณัฐนน ​​แน่นหนา,
​​67015063 นางสาว ธัญญเรศ ​ศรีวิชัย,
67015080 นางสาว ปิยธิดา ​สุระ​​,
​67015090 นาย ปุญญพัฒน์ ​เรืองสุทธิ,
​67015188 นางสาว สุพิชชา ​อิ่มทองใบ

Domain: Pairwise Evaluation
Date: 2026-08-04

## Frontend
- Framework: Next.js
- Language: TypeScript
- Styling: Tailwind CSS
- Rationale: ใช้งานง่าย มี React ในตัว และ Deploy บน Vercel ได้สะดวก

## Backend
- Framework: Next.js Route Handlers
- Language: TypeScript
- Rationale: ใช้ภาษาเดียวกันทั้ง Frontend และ Backend ทำให้พัฒนาและดูแลง่าย

## Database
- PostgreSQL
- Rationale: เหมาะสำหรับระบบเว็บและสามารถรองรับการขยายระบบในอนาคต

## Deployment
- Platform: Vercel
- Staging URL: จะเพิ่มหลัง deploy
- Commit-to-live time: จะวัดในขั้นตอนที่ 5

## AI Tools
- Agent ที่ใช้: GitHub Copilot, ChatGPT
- Review policy: ทุก AI-generated code ต้องอ่านและอธิบายได้ก่อน commit