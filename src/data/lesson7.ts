import type { Lesson } from "../types/lesson";

const lesson7: Lesson = {
  id: 7,
  title: "Bài 7",
  description: "Hỏi đường, Chuẩn bị tiệc & Các hoạt động",
  categories: [
    {
      category_name: "1. 道がわかりません (Hỏi đường & Vị trí)",
      items: [
        { kanji: "改札", hiragana: "かいさつ", romaji: "kaisatsu", meaning: "Cổng/Cửa soát vé" },
        { kanji: "木", hiragana: "き", romaji: "ki", meaning: "Cây / Gỗ" },
        { kanji: "交番", hiragana: "こうばん", romaji: "kouban", meaning: "Đồn cảnh sát" },
        { kanji: "自動販売機", hiragana: "じどうはんばいき", romaji: "jidou hanbaiki", meaning: "Máy bán hàng tự động" },
        { kanji: "ポスト", hiragana: "ポスト", romaji: "posuto", meaning: "Thùng thư" },
        { kanji: "花", hiragana: "はな", romaji: "hana", meaning: "Hoa" },
        { kanji: "犬", hiragana: "いぬ", romaji: "inu", meaning: "Con chó" },
        { kanji: "間", hiragana: "あいだ", romaji: "aida", meaning: "Giữa, ở giữa" },
        { kanji: "上", hiragana: "うえ", romaji: "ue", meaning: "Trên, bên trên" },
        { kanji: "下", hiragana: "した", romaji: "shita", meaning: "Dưới, phía dưới" },
        { kanji: "近く", hiragana: "ちかく", romaji: "chikaku", meaning: "Gần (ở vị trí gần)" },
        { kanji: "隣", hiragana: "となり", romaji: "tonari", meaning: "Bên cạnh (cạnh sát)" },
        { kanji: "中", hiragana: "なか", romaji: "naka", meaning: "Trong, bên trong" },
        { kanji: "外", hiragana: "そと", romaji: "soto", meaning: "Ngoài, bên ngoài" },
        { kanji: "前", hiragana: "まえ", romaji: "mae", meaning: "Trước, phía trước" },
        { kanji: "後ろ", hiragana: "うしろ", romaji: "ushiro", meaning: "Sau, phía sau, đằng sau" },
        { kanji: "横", hiragana: "よこ", romaji: "yoko", meaning: "Bên cạnh, chiều ngang" },
        { kanji: "迎えに行きます［迎えに行く]", hiragana: "むかえにいきます", romaji: "mukae ni ikimasu", meaning: "Đi đón" },
        { kanji: "います［いる］", hiragana: "います", romaji: "imasu", meaning: "Có mặt ở (người, động vật)" },
        { kanji: "もしもし", hiragana: "もしもし", romaji: "moshimoshi", meaning: "A lô a lô" },
        { kanji: "右", hiragana: "みぎ", romaji: "migi", meaning: "Phải" },
        { kanji: "左", hiragana: "ひだり", romaji: "hidari", meaning: "Trái" }
      ]
    },
    {
      category_name: "2. パーティーの準備 (Chuẩn bị tiệc & Đồ dùng)",
      items: [
        { kanji: "いす", hiragana: "いす", romaji: "isu", meaning: "Ghế, cái ghế" },
        { kanji: "テーブル", hiragana: "テーブル", romaji: "teeburu", meaning: "Bàn, cái bàn" },
        { kanji: "電子レンジ", hiragana: "でんしれんじ", romaji: "denshi renji", meaning: "Lò vi sóng" },
        { kanji: "冷蔵庫", hiragana: "れいぞうこ", romaji: "reizouko", meaning: "Tủ lạnh" },
        { kanji: "砂糖", hiragana: "さとう", romaji: "satou", meaning: "Đường (ăn)" },
        { kanji: "塩", hiragana: "しお", romaji: "shio", meaning: "Muối" },
        { kanji: "しょうゆ", hiragana: "しょうゆ", romaji: "shouyu", meaning: "Xì dầu / Nước tương chấm" },
        { kanji: "コップ", hiragana: "コップ", romaji: "koppu", meaning: "Cốc, cái cốc" },
        { kanji: "（お）皿", hiragana: "（お）さら", romaji: "(o)sara", meaning: "Đĩa, cái đĩa" },
        { kanji: "スプーン", hiragana: "スプーン", romaji: "supuun", meaning: "Cái thìa, cái muỗng" },
        { kanji: "ナイフ", hiragana: "ナイフ", romaji: "naifu", meaning: "Dao, con dao" },
        { kanji: "フォーク", hiragana: "フォーク", romaji: "fooku", meaning: "Cái dĩa" },
        { kanji: "はし", hiragana: "はし", romaji: "hashi", meaning: "Đũa" },
        { kanji: "漢字", hiragana: "かんじ", romaji: "kanji", meaning: "Chữ Hán" },
        { kanji: "洗います［洗う]", hiragana: "あらいます", romaji: "araimasu", meaning: "Giặt, rửa, tắm" },
        { kanji: "置きます［置く]", hiragana: "おきます", romaji: "okimasu", meaning: "Đặt, để" },
        { kanji: "書きます［書く]", hiragana: "かきます", romaji: "kakimasu", meaning: "Viết" },
        { kanji: "貸します［貸す]", hiragana: "かします", romaji: "kashimasu", meaning: "Cho mượn" },
        { kanji: "聞きます［聞く]", hiragana: "ききます", romaji: "kikimasu", meaning: "Hỏi / Nghe" },
        { kanji: "切ります［切る]", hiragana: "きります", romaji: "kirimasu", meaning: "Cắt, gọt" },
        { kanji: "使います［使う]", hiragana: "つかいます", romaji: "tsukaimasu", meaning: "Dùng, sử dụng" },
        { kanji: "手伝います［手伝う]", hiragana: "てつだいます", romaji: "tetsudaimasu", meaning: "Giúp, giúp đỡ" },
        { kanji: "取ります［取る]", hiragana: "とります", romaji: "torimasu", meaning: "Lấy" },
        { kanji: "持って行きます［持って行く]", hiragana: "もっていきます", romaji: "motte ikimasu", meaning: "Mang đi" }
      ]
    },
    {
      category_name: "3. みんなで楽しいパーティー (Hoạt động tiệc tùng)",
      items: [
        { kanji: "わかります［わかる]", hiragana: "わかります", romaji: "wakarimasu", meaning: "Hiểu, biết" },
        { kanji: "出します［出す]", hiragana: "だします", romaji: "dashimasu", meaning: "Lấy ra / Đưa ra" },
        { kanji: "入れます［入れる］", hiragana: "いれます", romaji: "iremasu", meaning: "Cho vào, bỏ vào" },
        { kanji: "教えます［教える］", hiragana: "おしえます", romaji: "oshiemasu", meaning: "Dạy, chỉ bảo" },
        { kanji: "歌", hiragana: "うた", romaji: "uta", meaning: "Bài hát" },
        { kanji: "ギター", hiragana: "ギター", romaji: "gitaa", meaning: "Đàn ghi-ta" },
        { kanji: "台所", hiragana: "だいどころ", romaji: "daidokoro", meaning: "Nhà bếp" },
        { kanji: "たばこ", hiragana: "たばこ", romaji: "tabako", meaning: "Thuốc lá" },
        { kanji: "電話", hiragana: "でんわ", romaji: "denwa", meaning: "Điện thoại" },
        { kanji: "ピザ", hiragana: "ピザ", romaji: "piza", meaning: "Bánh pizza" },
        { kanji: "窓", hiragana: "まど", romaji: "mado", meaning: "Cửa sổ" },
        { kanji: "歌います［歌う", hiragana: "うたいます", romaji: "utaimasu", meaning: "Hát, ca hát" },
        { kanji: "吸います［吸う]", hiragana: "すいます", romaji: "suimasu", meaning: "Hút (thuốc)" },
        { kanji: "話します［話す]", hiragana: "はなします", romaji: "hanashimasu", meaning: "Nói chuyện" },
        { kanji: "弾きます［弾く]", hiragana: "ひきます", romaji: "hikimasu", meaning: "Chơi (nhạc cụ)" },
        { kanji: "持ちます［持つ]", hiragana: "もちます", romaji: "mochimasu", meaning: "Cầm, mang" },
        { kanji: "開けます［開ける］", hiragana: "あけます", romaji: "akemasu", meaning: "Mở" },
        { kanji: "閉めます［閉める］", hiragana: "しめます", romaji: "shimemasu", meaning: "Đóng" },
        { kanji: "かけます［かける］", hiragana: "かけます", romaji: "kakemasu", meaning: "Gọi (điện thoại)" },
        { kanji: "持って来ます［持って来る］", hiragana: "もってきます", romaji: "motte kimasu", meaning: "Mang đến" }
      ]
    }
  ]
};

export default lesson7;