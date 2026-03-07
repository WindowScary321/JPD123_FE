import type { KanjiLesson } from "../types/lesson";

const lesson6Kanji: KanjiLesson = {
  lessonId: 6,
  title: "Kanji - Bài 6 (Bản Hoàn Thiện Đầy Đủ)",
  categories: [
    {
      category_label: "1. Nhóm 9 Kanji trọng tâm (Từ slide bài giảng)",
      kanji_list: [
        { kanji: "今", han_viet: "KIM", kanji_meaning: "Hiện tại, nay", words: [{ word: "今日", meaning: "Hôm nay", reading: "きょう (kyou)" }, { word: "今週", meaning: "Tuần này", reading: "こんしゅう (konshuu)" }, { word: "今月", meaning: "Tháng này", reading: "こんげつ (kongetsu)" }, { word: "今年", meaning: "Năm nay", reading: "ことし (kotoshi)" }, { word: "今度", meaning: "Lần tới", reading: "こんど (kondo)" }, { word: "今晩", meaning: "Tối nay", reading: "こんばん (konban)" }] },
        { kanji: "来", han_viet: "LAI", kanji_meaning: "Đến, tới", words: [{ word: "来ます", meaning: "Đến", reading: "きます (kimasu)" }, { word: "来週", meaning: "Tuần sau", reading: "らいしゅう (raishuu)" }, { word: "来月", meaning: "Tháng sau", reading: "らいげつ (raigetsu)" }, { word: "来年", meaning: "Năm sau", reading: "らいねん (rainen)" }, { word: "来日", meaning: "Đến Nhật Bản", reading: "らいにち (rainichi)" }] },
        { kanji: "帰", han_viet: "QUY", kanji_meaning: "Trở về", words: [{ word: "帰ります", meaning: "Trở về (nhà)", reading: "かえります (kaerimasu)" }, { word: "帰国", meaning: "Về nước", reading: "きこく (kikoku)" }] },
        { kanji: "会", han_viet: "HỘI", kanji_meaning: "Gặp gỡ, hội họp", words: [{ word: "会います", meaning: "Gặp gỡ", reading: "あいます (aimasu)" }, { word: "会社", meaning: "Công ty", reading: "かいしゃ (kaisha)" }, { word: "社会", meaning: "Xã hội", reading: "しゃかい (shakai)" }, { word: "会話", meaning: "Hội thoại", reading: "かいわ (kaiwa)" }, { word: "国会", meaning: "Quốc hội", reading: "こっかい (kokkai)" }] },
        { kanji: "社", han_viet: "XÃ", kanji_meaning: "Công ty, đền", words: [{ word: "会社", meaning: "Công ty", reading: "かいしゃ (kaisha)" }, { word: "社会", meaning: "Xã hội", reading: "しゃかい (shakai)" }] },
        { kanji: "聞", han_viet: "VĂN", kanji_meaning: "Nghe", words: [{ word: "聞きます", meaning: "Nghe", reading: "ききます (kikimasu)" }, { word: "新聞", meaning: "Báo chí", reading: "しんぶん (shinbun)" }] },
        { kanji: "読", han_viet: "ĐỘC", kanji_meaning: "Đọc", words: [{ word: "読みます", meaning: "Đọc", reading: "よみます (yomimasu)" }, { word: "読書", meaning: "Việc đọc sách", reading: "どくしょ (dokusho)" }, { word: "読み物", meaning: "Tài liệu đọc", reading: "よみもの (yomimono)" }] },
        { kanji: "書", han_viet: "THƯ", kanji_meaning: "Viết, sách", words: [{ word: "書きます", meaning: "Viết", reading: "かきます (kakimasu)" }, { word: "読書", meaning: "Việc đọc sách", reading: "どくしょ (dokusho)" }] },
        { kanji: "話", han_viet: "THOẠI", kanji_meaning: "Nói chuyện", words: [{ word: "話します", meaning: "Nói chuyện", reading: "はなします (hanashimasu)" }, { word: "会話", meaning: "Hội thoại", reading: "かいわ (kaiwa)" }] }
      ]
    },
    {
      category_label: "2. Nhóm tính từ bổ sung",
      kanji_list: [
        { kanji: "近", han_viet: "CẬN", kanji_meaning: "Gần", words: [{ word: "近い", meaning: "Gần", reading: "ちかい (chikai)" }] },
        { kanji: "遠", han_viet: "VIỄN", kanji_meaning: "Xa", words: [{ word: "遠い", meaning: "Xa", reading: "とおい (tooi)" }] },
        { kanji: "早", han_viet: "TẢO", kanji_meaning: "Sớm", words: [{ word: "早い", meaning: "Sớm", reading: "はやい (hayai)" }] },
        { kanji: "広", han_viet: "QUẢNG", kanji_meaning: "Rộng", words: [{ word: "広い", meaning: "Rộng", reading: "ひろい (hiroi)" }] }
      ]
    },
    {
      category_label: "3. Nhóm danh từ & Khác bổ sung",
      kanji_list: [
        { kanji: "地", han_viet: "ĐỊA", kanji_meaning: "Đất", words: [{ word: "地下鉄", meaning: "Tàu điện ngầm", reading: "ちかてつ (chikatetsu)" }, { word: "地図", meaning: "Bản đồ", reading: "ちず (chizu)" }] },
        { kanji: "鉄", han_viet: "THIẾT", kanji_meaning: "Sắt, thép", words: [{ word: "地下鉄", meaning: "Tàu điện ngầm", reading: "ちかてつ (chikatetsu)" }] },
        { kanji: "図", han_viet: "ĐỒ", kanji_meaning: "Bản đồ, hình vẽ", words: [{ word: "地図", meaning: "Bản đồ", reading: "ちず (chizu)" }] },
        { kanji: "館", han_viet: "QUÁN", kanji_meaning: "Tòa nhà", words: [{ word: "映画館", meaning: "Rạp chiếu phim", reading: "えいがかん (eigakan)" }] },
        { kanji: "歌", han_viet: "CA", kanji_meaning: "Bài hát", words: [{ word: "歌手", meaning: "Ca sỹ", reading: "かしゅ (kashu)" }] },
        { kanji: "全", han_viet: "TOÀN", kanji_meaning: "Tất cả", words: [{ word: "全部", meaning: "Toàn bộ", reading: "ぜんぶ (zenbu)" }] },
        { kanji: "枚", han_viet: "MAI", kanji_meaning: "Tờ, tấm (đếm vật mỏng)", words: [{ word: "～枚", meaning: "~ tấm (Cách đếm vật mỏng, phẳng)", reading: "～まい (~mai)" }] }
      ]
    }
  ]
};

export default lesson6Kanji;