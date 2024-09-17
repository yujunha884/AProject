const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

// CORS 미들웨어 설정
app.use(cors());

// 미들웨어, 라우트 설정
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World'));

app.get('/db', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT examdata_post_id id, user_id, examdata_title, examdata_content, examdata_views, examdata_likes, examdata_cdate FROM examdata_post');
        res.json(rows);
    } catch (error) {
        console.error('쿼리 실행 실패:', error);
        res.status(500).json({ error: '서버 오류' });
    }
});

app.get('/free_board', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT free_post_id id, user_id, free_title, free_content, free_views, free_likes, free_cdate, notice_yn isNotice FROM free_post');
        res.json(rows);
    } catch (error) {
        console.error('쿼리 실행 실패:', error);
        res.status(500).json({ error: '서버 오류' });
    }
});

module.exports = app;