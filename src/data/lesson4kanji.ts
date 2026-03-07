import type { KanjiLesson } from "../types/lesson";

const lesson4Kanji: KanjiLesson = {
  lessonId: 4,
  title: "Kanji — Bài 4 (Bản Hoàn Thiện Đầy Đủ)",
  categories: [
    {
      category_label: "1. Nhóm Kanji trọng tâm",
      kanji_list: [
        { kanji: "東", han_viet: "ĐÔNG", kanji_meaning: "Hướng đông", words: [{ word: "東", meaning: "Phía đông", reading: "ひがし (higashi)" }, { word: "東京", meaning: "Thủ đô Tokyo", reading: "とうきょう (toukyou)" }] },
        { kanji: "京", han_viet: "KINH", kanji_meaning: "Kinh đô", words: [{ word: "東京", meaning: "Thủ đô Tokyo", reading: "とうきょう (toukyou)" }] },
        { kanji: "名", han_viet: "DANH", kanji_meaning: "Tên, nổi tiếng", words: [{ word: "名前", meaning: "Tên", reading: "なまえ (namae)" }, { word: "名人", meaning: "Người nổi tiếng", reading: "めいじん (meijin)" }, { word: "有名", meaning: "Nổi tiếng", reading: "ゆうめい (yuumei)" }] },
        { kanji: "前", han_viet: "TIỀN", kanji_meaning: "Phía trước", words: [{ word: "前", meaning: "Phía trước", reading: "まえ (mae)" }, { word: "名前", meaning: "Tên", reading: "なまえ (namae)" }, { word: "午前", meaning: "Giờ sáng (AM)", reading: "ごぜん (gozen)" }, { word: "前日", meaning: "Ngày hôm trước", reading: "ぜんじつ (zenjitsu)" }] },
        { kanji: "国", han_viet: "QUỐC", kanji_meaning: "Đất nước", words: [{ word: "国 / お国", meaning: "Đất nước", reading: "くに (kuni) / おくに (okuni)" }, { word: "中国", meaning: "Trung Quốc", reading: "ちゅうごく (chuugoku)" }] },
        { kanji: "男", han_viet: "NAM", kanji_meaning: "Đàn ông, con trai", words: [{ word: "男", meaning: "Nam giới", reading: "おとこ (otoko)" }, { word: "男の人", meaning: "Người đàn ông", reading: "おとこのひと (otoko no hito)" }, { word: "男女", meaning: "Nam nữ", reading: "だんじょ (danjo)" }] },
        { kanji: "女", han_viet: "NỮ", kanji_meaning: "Phụ nữ, con gái", words: [{ word: "女", meaning: "Nữ giới", reading: "おんな (onna)" }, { word: "女の人", meaning: "Người phụ nữ", reading: "おんなのひと (onna no hito)" }, { word: "男女", meaning: "Nam nữ", reading: "だんじょ (danjo)" }] },
        { kanji: "区", han_viet: "KHU", kanji_meaning: "Quận, khu vực", words: [{ word: "区", meaning: "Quận", reading: "く (ku)" }] },
        { kanji: "市", han_viet: "THỊ", kanji_meaning: "Thành phố", words: [{ word: "市", meaning: "Thành phố", reading: "し (shi)" }] },
      ]
    },
    {
      category_label: "2. Nhóm phương hướng bổ sung",
      kanji_list: [
        { kanji: "北", han_viet: "BẮC", kanji_meaning: "Hướng bắc", words: [{ word: "北", meaning: "Phía bắc", reading: "きた (kita)" }] },
        { kanji: "南", han_viet: "NAM", kanji_meaning: "Hướng nam", words: [{ word: "南", meaning: "Phía nam", reading: "みなみ (minami)" }] },
        { kanji: "西", han_viet: "TÂY", kanji_meaning: "Hướng tây", words: [{ word: "西", meaning: "Phía tây", reading: "にし (nishi)" }] },
      ]
    },
    {
      category_label: "3. Nhóm tự nhiên & địa điểm bổ sung",
      kanji_list: [
        { kanji: "山", han_viet: "SƠN", kanji_meaning: "Núi", words: [{ word: "山", meaning: "Núi", reading: "やま (yama)" }] },
        { kanji: "川", han_viet: "XUYÊN", kanji_meaning: "Sông", words: [{ word: "川", meaning: "Sông", reading: "かわ (kawa)" }] },
        { kanji: "雨", han_viet: "VŨ", kanji_meaning: "Mưa", words: [{ word: "雨", meaning: "Mưa", reading: "あめ (ame)" }] },
        { kanji: "天", han_viet: "THIÊN", kanji_meaning: "Bầu trời", words: [{ word: "天気", meaning: "Thời tiết", reading: "てんき (tenki)" }] },
        { kanji: "気", han_viet: "KHÍ", kanji_meaning: "Không khí, khí chất", words: [{ word: "天気", meaning: "Thời tiết", reading: "てんき (tenki)" }] },
        { kanji: "車", han_viet: "XA", kanji_meaning: "Xe cộ", words: [{ word: "車", meaning: "Ô tô", reading: "くるま (kuruma)" }, { word: "電車", meaning: "Tàu điện", reading: "でんしゃ (densha)" }] },
        { kanji: "電", han_viet: "ĐIỆN", kanji_meaning: "Điện", words: [{ word: "電車", meaning: "Tàu điện", reading: "でんしゃ (densha)" }] },
      ]
    },
    {
      category_label: "4. Nhóm tính từ & cảm giác bổ sung",
      kanji_list: [
        { kanji: "新", han_viet: "TÂN", kanji_meaning: "Mới", words: [{ word: "新しい", meaning: "Mới", reading: "あたらしい (atarashii)" }, { word: "新幹線", meaning: "Tàu cao tốc Shinkansen", reading: "しんかんせん (shinkansen)" }] },
        { kanji: "古", han_viet: "CỔ", kanji_meaning: "Cũ", words: [{ word: "古い", meaning: "Cũ", reading: "ふるい (furui)" }] },
        { kanji: "大", han_viet: "ĐẠI", kanji_meaning: "To, lớn", words: [{ word: "大きい", meaning: "To, lớn", reading: "おおきい (ookii)" }] },
        { kanji: "小", han_viet: "TIỂU", kanji_meaning: "Nhỏ, bé", words: [{ word: "小さい", meaning: "Nhỏ, bé", reading: "ちいさい (chiisai)" }] },
        { kanji: "高", han_viet: "CAO", kanji_meaning: "Cao, đắt", words: [{ word: "高い", meaning: "Cao, đắt", reading: "たかい (takai)" }] },
        { kanji: "低", han_viet: "ĐÊ", kanji_meaning: "Thấp", words: [{ word: "低い", meaning: "Thấp", reading: "ひくい (hikui)" }] },
        { kanji: "熱", han_viet: "NHIỆT", kanji_meaning: "Nóng", words: [{ word: "熱い", meaning: "Nóng (nhiệt độ)", reading: "あつい (atsui)" }] },
        { kanji: "冷", han_viet: "LÃNH", kanji_meaning: "Lạnh", words: [{ word: "冷たい", meaning: "Lạnh / Mát (cảm giác)", reading: "つめたい (tsumetai)" }] },
        { kanji: "甘", han_viet: "CAM", kanji_meaning: "Ngọt", words: [{ word: "甘い", meaning: "Ngọt", reading: "あまい (amai)" }] },
        { kanji: "辛", han_viet: "TÂN", kanji_meaning: "Cay", words: [{ word: "辛い", meaning: "Cay", reading: "からい (karai)" }] },
        { kanji: "苦", han_viet: "KHỔ", kanji_meaning: "Đắng", words: [{ word: "苦い", meaning: "Đắng", reading: "にがい (nigai)" }] },
      ]
    },
    {
      category_label: "5. Nhóm thời gian & vị trí bổ sung",
      kanji_list: [
        { kanji: "中", han_viet: "TRUNG", kanji_meaning: "Ở giữa, bên trong", words: [{ word: "真ん中", meaning: "Chính giữa", reading: "まんなか (mannaka)" }, { word: "一年中", meaning: "Suốt 1 năm / Quanh năm", reading: "いちねんじゅう (ichinenjuu)" }] },
        { kanji: "年", han_viet: "NIÊN", kanji_meaning: "Năm", words: [{ word: "一年中", meaning: "Suốt 1 năm / Quanh năm", reading: "いちねんじゅう (ichinenjuu)" }] },
        { kanji: "時", han_viet: "THỜI", kanji_meaning: "Thời gian, giờ", words: [{ word: "時間", meaning: "Thời gian / Tiếng đồng hồ", reading: "じかん (jikan)" }] },
        { kanji: "間", han_viet: "GIAN", kanji_meaning: "Khoảng, không gian", words: [{ word: "時間", meaning: "Thời gian / Tiếng đồng hồ", reading: "じかん (jikan)" }] },
      ]
    }
  ]
};

export default lesson4Kanji;