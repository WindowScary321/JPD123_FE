import type { Lesson } from "../types/lesson";

const lesson6: Lesson = {
  id: 6,
  title: "Bài 6",
  description: "Mời bạn bè, Sự kiện, Lựa chọn và So sánh",
  categories: [
    {
      category_name: "1. 一緒に行きませんか (Mời mọc & Sự kiện)",
      items: [
        { kanji: "今週", hiragana: "こんしゅう", romaji: "konshuu", meaning: "Tuần này" },
        { kanji: "来週", hiragana: "らいしゅう", romaji: "raishuu", meaning: "Tuần sau" },
        { kanji: "今月", hiragana: "こんげつ", romaji: "kongetsu", meaning: "Tháng này" },
        { kanji: "来月", hiragana: "らいげつ", romaji: "raigetsu", meaning: "Tháng sau" },
        { kanji: "カラオケ", hiragana: "カラオケ", romaji: "karaoke", meaning: "Hát karaoke" },
        { kanji: "コンサート", hiragana: "コンサート", romaji: "konsaato", meaning: "Buổi hòa nhạc" },
        { kanji: "試合", hiragana: "しあい", romaji: "shiai", meaning: "Trận đấu" },
        { kanji: "セール", hiragana: "セール", romaji: "seeru", meaning: "Giảm giá" },
        { kanji: "チケット", hiragana: "チケット", romaji: "chiketto", meaning: "Vé" },
        { kanji: "地図", hiragana: "ちず", romaji: "chizu", meaning: "Bản đồ" },
        { kanji: "ドライブ", hiragana: "ドライブ", romaji: "doraibu", meaning: "Lái xe (đi chơi)" },
        { kanji: "水着", hiragana: "みずぎ", romaji: "mizugi", meaning: "Đồ bơi" },
        { kanji: "野球", hiragana: "やきゅう", romaji: "yakyuu", meaning: "Bóng chày" },
        { kanji: "約束", hiragana: "やくそく", romaji: "yakusoku", meaning: "Hứa, hẹn" },
        { kanji: "用事", hiragana: "ようじ", romaji: "youji", meaning: "Việc bận" },
        { kanji: "～枚", hiragana: "～まい", romaji: "~mai", meaning: "~ tấm (Cách đếm vật mỏng, phẳng)" },
        { kanji: "残念（な）", hiragana: "ざんねん", romaji: "zannen", meaning: "Tiếc" },
        { kanji: "一緒に", hiragana: "いっしょに", romaji: "isshoni", meaning: "Cùng với" },
        { kanji: "いいですね", hiragana: "いいですね", romaji: "ii desu ne", meaning: "Hay đấy, được đấy!" },
        { kanji: "また今度", hiragana: "またこんど", romaji: "mata kondo", meaning: "Hẹn (anh) lần sau nhé" },
        { kanji: "わあ", hiragana: "わあ", romaji: "waa", meaning: "Oa (Thể hiện sự ngạc nhiên)" }
      ]
    },
    {
      category_name: "2. どちらがいいですか (Lựa chọn & So sánh)",
      items: [
        { kanji: "食べ物", hiragana: "たべもの", romaji: "tabemono", meaning: "Đồ ăn" },
        { kanji: "飲み物", hiragana: "のみもの", romaji: "nomimono", meaning: "Đồ uống" },
        { kanji: "焼き肉", hiragana: "やきにく", romaji: "yakiniku", meaning: "Thịt nướng" },
        { kanji: "ラーメン", hiragana: "ラーメン", romaji: "raamen", meaning: "Mỳ Nhật" },
        { kanji: "食べ放題", hiragana: "たべほうだい", romaji: "tabehoudai", meaning: "Ăn buffet (ăn tự chọn)" },
        { kanji: "コース", hiragana: "コース", romaji: "koosu", meaning: "Suất ăn / Khóa học" },
        { kanji: "居酒屋", hiragana: "いざかや", romaji: "izakaya", meaning: "Quán rượu" },
        { kanji: "映画館", hiragana: "えいがかん", romaji: "eigakan", meaning: "Rạp chiếu phim" },
        { kanji: "地下鉄", hiragana: "ちかてつ", romaji: "chikatetsu", meaning: "Tàu điện ngầm" },
        { kanji: "歌手", hiragana: "かしゅ", romaji: "kashu", meaning: "Ca sỹ" },
        { kanji: "季節", hiragana: "きせつ", romaji: "kisetsu", meaning: "Mùa" },
        { kanji: "コメディー", hiragana: "コメディー", romaji: "komedii", meaning: "Hài kịch" },
        { kanji: "ジャズ", hiragana: "ジャズ", romaji: "jazu", meaning: "Nhạc jazz" },
        { kanji: "ツアー", hiragana: "ツアー", romaji: "tsuaa", meaning: "Tour du lịch" },
        { kanji: "どちら", hiragana: "どちら", romaji: "dochira", meaning: "Bên nào, phương nào" },
        { kanji: "どちらも", hiragana: "どちらも", romaji: "dochira mo", meaning: "Bên nào cũng" },
        { kanji: "近い", hiragana: "ちかい", romaji: "chikai", meaning: "Gần" },
        { kanji: "遠い", hiragana: "とおい", romaji: "tooi", meaning: "Xa" },
        { kanji: "早い", hiragana: "はやい", romaji: "hayai", meaning: "Sớm" },
        { kanji: "広い", hiragana: "ひろい", romaji: "hiroi", meaning: "Rộng" },
        { kanji: "いちばん", hiragana: "いちばん", romaji: "ichiban", meaning: "Nhất" },
        { kanji: "全部", hiragana: "ぜんぶ", romaji: "zenbu", meaning: "Toàn bộ" }
      ]
    },
    {
      category_name: "3. 約束 (Thỏa thuận & Hứa hẹn)",
      items: [
        { kanji: "お好み焼き", hiragana: "おこのみやき", romaji: "okonomiyaki", meaning: "Món bánh xèo Nhật" },
        { kanji: "すき焼き", hiragana: "すきやき", romaji: "sukiyaki", meaning: "Món nhúng có thịt bò và rau" },
        { kanji: "遊びます［遊ぶ］1", hiragana: "あそびます", romaji: "asobimasu", meaning: "Chơi, chơi đùa" },
        { kanji: "ぜひ", hiragana: "ぜひ", romaji: "zehi", meaning: "Nhất định" },
        { kanji: "まだ", hiragana: "まだ", romaji: "mada", meaning: "Vẫn, chưa" },
        { kanji: "もう", hiragana: "もう", romaji: "mou", meaning: "Đã, rồi" },
        { kanji: "そうしましょう", hiragana: "そうしましょう", romaji: "sou shimashou", meaning: "Mình cùng làm thế đi!" },
        { kanji: "わかりました", hiragana: "わかりました", romaji: "wakarimashita", meaning: "Tôi hiểu rồi" }
      ]
    }
  ]
};

export default lesson6;