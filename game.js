const vocabData = {
    Hello: [
        { word: 'hello', emoji: '👋', ipa: '/həˈləʊ/', meaning: 'xin chào' },
        { word: 'goodbye', emoji: '🚶‍♂️', ipa: '/ˌɡʊdˈbaɪ/', meaning: 'tạm biệt' },
        { word: 'nice', emoji: '😊', ipa: '/naɪs/', meaning: 'vui, tốt' },
        { word: 'meet', emoji: '🤝', ipa: '/miːt/', meaning: 'gặp' },
        { word: 'friend', emoji: '👭', ipa: '', meaning: 'Bạn' },
        { word: 'stand up', emoji: '🪑⬆️', ipa: '', meaning: 'đứng dậy' },
        { word: 'sit down', emoji: '🪑⬇️', ipa: '', meaning: 'ngồi xuống' },
        { word: 'hands up', emoji: '🙌', ipa: '', meaning: 'giơ tay lên' },
        { word: 'open your book', emoji: '📖🔓', ipa: '', meaning: 'mở sách' },
        { word: 'close your book', emoji: '📖🔒', ipa: '', meaning: 'đóng sách' },
        { word: 'hands down', emoji: '🙇', ipa: '', meaning: 'hạ tay xuống' },
        { word: "what's your name?", emoji: '❓🏷️', ipa: '', meaning: 'Bạn tên là gì?' },
        { word: 'My name is Tom', emoji: '👦🏷️', ipa: '', meaning: 'Tên tôi là Tom' },
        { word: 'How old are you?', emoji: '🎂', ipa: '', meaning: 'Bạn bao nhiêu tuổi?' },
        { word: "I'm eight", emoji: '8️⃣', ipa: '', meaning: 'Tôi 8 tuổi' },
        { word: 'name', emoji: '🏷️', ipa: '', meaning: 'Tên' },
        { word: 'spell', emoji: '📖', ipa: '', meaning: 'Đánh vần' },
        { word: 'what', emoji: '🤷', ipa: '', meaning: 'Cái gì' },
        { word: 'your name', emoji: '🪪', ipa: '', meaning: 'Tên của bạn' }
    ],
    MyWeek: [
        { word: 'Monday', emoji: '1️⃣📅', ipa: '🇺🇸 /ˈmʌn.deɪ/', meaning: 'Thứ hai' },
        { word: 'Tuesday', emoji: '2️⃣📅', ipa: '🇺🇸 /ˈtjuːz.deɪ/', meaning: 'Thứ ba' },
        { word: 'Wednesday', emoji: '3️⃣📅', ipa: '🇺🇸 /ˈwenz.deɪ/', meaning: 'Thứ tư' },
        { word: 'Thursday', emoji: '4️⃣📅', ipa: '🇺🇸 /ˈθɝːz.deɪ/', meaning: 'Thứ năm' },
        { word: 'Friday', emoji: '5️⃣📅', ipa: '🇺🇸 /ˈfraɪ.deɪ/', meaning: 'Thứ sáu' },
        { word: 'Saturday', emoji: '6️⃣📅', ipa: '🇺🇸 /ˈsæt̬.ɚ.deɪ/', meaning: 'Thứ bảy' },
        { word: 'Sunday', emoji: '7️⃣📅', ipa: '🇺🇸 /ˈsʌn.deɪ/', meaning: 'Chủ nhật' },
        { word: 'Week', emoji: '🗓️', ipa: '🇺🇸 /wiːk/', meaning: 'Tuần' },
        { word: 'Weekend', emoji: '🎉', ipa: '🇺🇸 /ˈwiːk.end/', meaning: 'Cuối tuần' },
        { word: 'Today', emoji: '📍', ipa: '🇺🇸 /təˈdeɪ/', meaning: 'Hôm nay' },
        { word: 'Tomorrow', emoji: '➡️', ipa: '🇺🇸 /təˈmɑːr.oʊ/', meaning: 'Ngày mai' },
        { word: 'Yesterday', emoji: '⬅️', ipa: '🇺🇸 /ˈjes.tɚ.deɪ/', meaning: 'Hôm qua' },
        { word: 'Morning', emoji: '🌅', ipa: '🇺🇸 /ˈmɔːr.nɪŋ/', meaning: 'Buổi sáng' },
        { word: 'Afternoon', emoji: '☀️', ipa: '🇺🇸 /ˌæf.tɚˈnuːn/', meaning: 'Buổi chiều' },
        { word: 'Evening', emoji: '🌆', ipa: '🇺🇸 /ˈiːv.nɪŋ/', meaning: 'Buổi tối' },
        { word: 'Night', emoji: '🌙', ipa: '🇺🇸 /naɪt/', meaning: 'Ban đêm' },
    ],
    Home: [
        { word: 'Room', emoji: '🚪', ipa: '🇺🇸 /ruːm/', meaning: 'Căn phòng' },
        { word: 'Garden', emoji: '🌳', ipa: '🇺🇸 /ˈɡɑːr.dən/', meaning: 'Khu vườn' },
        { word: 'Kitchen', emoji: '🍳', ipa: '🇺🇸 /ˈkɪtʃ.ən/', meaning: 'Nhà bếp' }
    ],
    MyFace: [
        { word: 'Face', emoji: '👦', ipa: '🇺🇸 /feɪs/', meaning: 'Khuôn mặt' },
        { word: 'Eye', emoji: '👁️', ipa: '🇺🇸 /aɪ/', meaning: 'Con mắt' },
        { word: 'Nose', emoji: '👃', ipa: '🇺🇸 /noʊz/', meaning: 'Cái mũi' },
        { word: 'Mouth', emoji: '👄', ipa: '🇺🇸 /maʊθ/', meaning: 'Cái miệng' },
        { word: 'Ear', emoji: '👂', ipa: '🇺🇸 /ɪr/', meaning: 'Cái tai' },
        { word: 'Hair', emoji: '💇', ipa: '🇺🇸 /her/', meaning: 'Mái tóc' },
        { word: 'Touch', emoji: '👈', ipa: '🇺🇸 /tʌtʃ/', meaning: 'Chạm vào' }
    ],
    Colors: [
        { word: 'Red', emoji: '🟥', ipa: '🇺🇸 /red/', meaning: 'Màu đỏ' },
        { word: 'Blue', emoji: '🟦', ipa: '🇺🇸 /bluː/', meaning: 'Màu xanh dương' },
        { word: 'Green', emoji: '🟩', ipa: '🇺🇸 /ɡriːn/', meaning: 'Màu xanh lá' },
        { word: 'Yellow', emoji: '🟨', ipa: '🇺🇸 /ˈjel.oʊ/', meaning: 'Màu vàng' },
        { word: 'Purple', emoji: '🟪', ipa: '🇺🇸 /ˈpɝː.pəl/', meaning: 'Màu tím' },
        { word: 'Orange', emoji: '🟧', ipa: '🇺🇸 /ˈɔːr.ɪndʒ/', meaning: 'Màu cam' },
        { word: 'Pink', emoji: '💗', ipa: '🇺🇸 /pɪŋk/', meaning: 'Màu hồng' },
        { word: 'Black', emoji: '⬛', ipa: '🇺🇸 /blæk/', meaning: 'Màu đen' },
        { word: 'White', emoji: '⬜', ipa: '🇺🇸 /waɪt/', meaning: 'Màu trắng' },
        { word: 'Grey', emoji: '⚪', ipa: '🇺🇸 /ɡreɪ/', meaning: 'Màu xám' },
        { word: 'Brown', emoji: '🟫', ipa: '🇺🇸 /braʊn/', meaning: 'Màu nâu' },
        { word: 'Gold', emoji: '🟨', ipa: '🇺🇸 /ɡoʊld/', meaning: 'Màu vàng kim' },
    ],
    MyFriends: [
        { word: 'friend', emoji: '👭', ipa: '🇺🇸 /frend/', meaning: 'bạn bè' },
        { word: 'play', emoji: '⚽', ipa: '🇺🇸 /pleɪ/', meaning: 'chơi' },
        { word: 'share', emoji: '🤝', ipa: '🇺🇸 /ʃer/', meaning: 'chia sẻ' },
        { word: 'help', emoji: '🆘', ipa: '🇺🇸 /help/', meaning: 'giúp đỡ' },
        { word: 'talk', emoji: '💬', ipa: '🇺🇸 /tɔːk/', meaning: 'nói chuyện' },
        { word: 'happy', emoji: '😊', ipa: '🇺🇸 /ˈhæp.i/', meaning: 'vui vẻ' },
        { word: 'nice', emoji: '😇', ipa: '🇺🇸 /naɪs/', meaning: 'tốt bụng' },
        { word: 'funny', emoji: '😂', ipa: '🇺🇸 /ˈfʌn.i/', meaning: 'vui tính' }
    ],
    Family: [
        { word: 'father', emoji: '👨', ipa: '🇺🇸 /ˈfɑː.ðɚ/', meaning: 'bố' },
        { word: 'mother', emoji: '👩', ipa: '🇺🇸 /ˈmʌð.ɚ/', meaning: 'mẹ' },
        { word: 'brother', emoji: '👦', ipa: '🇺🇸 /ˈbrʌð.ɚ/', meaning: 'anh/em trai' },
        { word: 'sister', emoji: '👧', ipa: '🇺🇸 /ˈsɪs.tɚ/', meaning: 'chị/em gái' },
        { word: 'grandfather', emoji: '👴', ipa: '🇺🇸 /ˈɡræn.fɑː.ðɚ/', meaning: 'ông' },
        { word: 'grandmother', emoji: '👵', ipa: '🇺🇸 /ˈɡræn.mʌð.ɚ/', meaning: 'bà' },
        { word: 'uncle', emoji: '👨‍🦰', ipa: '🇺🇸 /ˈʌŋ.kəl/', meaning: 'chú, bác, cậu' },
        { word: 'aunt', emoji: '👩‍🦰', ipa: '🇺🇸 /ænt/', meaning: 'cô, dì, bác gái' },
        { word: 'cousin', emoji: '🧑‍🤝‍🧑', ipa: '🇺🇸 /ˈkʌz.ən/', meaning: 'anh chị em họ' },
        { word: 'This is my father.', emoji: '👨', ipa: '🇺🇸 /ðɪs ɪz maɪ ˈfɑː.ðɚ/', meaning: 'Đây là bố của tôi.' },
        { word: "Who's she?", emoji: '❓👩', ipa: '🇺🇸 /huːz ʃiː/', meaning: 'Cô ấy là ai?' },
        { word: "She's my aunt.", emoji: '👩‍🦰', ipa: '🇺🇸 /ʃiːz maɪ ænt/', meaning: 'Cô ấy là cô/dì của tôi.' }
    ],
    School: [
        { word: 'eraser', emoji: '🧼', ipa: '🇺🇸 /ɪˈreɪ.sɚ/', meaning: 'cục tẩy' },
        { word: 'ruler', emoji: '📏', ipa: '🇺🇸 /ˈruː.lɚ/', meaning: 'thước kẻ' },
        { word: 'pencil', emoji: '✏️', ipa: '🇺🇸 /ˈpen.səl/', meaning: 'bút chì' },
        { word: 'notebook', emoji: '📓', ipa: '🇺🇸 /ˈnoʊt.bʊk/', meaning: 'vở ghi' },
        { word: 'pencil case', emoji: '👝', ipa: '🇺🇸 /ˈpen.səl keɪs/', meaning: 'hộp bút' },
        { word: 'Is this your eraser?', emoji: '🧼', ipa: '🇺🇸 /ɪz ðɪs jɔːr ɪˈreɪsər/', meaning: 'Đây có phải là cục tẩy của bạn không?' },
        { word: 'Are these your notebooks?', emoji: '📓', ipa: '🇺🇸 /ɑːr ðiːz jɔːr ˈnoʊtbʊks/', meaning: 'Đây có phải là những quyển vở của bạn không?' },
        { word: 'math', emoji: '➕', ipa: '🇺🇸 /mæθ/', meaning: 'môn toán' },
        { word: 'english', emoji: '🔤', ipa: '🇺🇸 /ˈɪŋ.ɡlɪʃ/', meaning: 'môn tiếng Anh' },
        { word: 'art', emoji: '🎨', ipa: '🇺🇸 /ɑːrt/', meaning: 'môn mỹ thuật' },
        { word: 'PE', emoji: '🏃', ipa: '🇺🇸 /ˌpiː ˈiː/', meaning: 'môn thể dục' },
        { word: 'music', emoji: '🎵', ipa: '🇺🇸 /ˈmjuː.zɪk/', meaning: 'môn âm nhạc' }
    ],
    Sports: [
        { word: 'soccer', emoji: '⚽', ipa: '🇺🇸 /ˈsɑː.kɚ/', meaning: 'bóng đá' },
        { word: 'basketball', emoji: '🏀', ipa: '🇺🇸 /ˈbæs.kət.bɑːl/', meaning: 'bóng rổ' },
        { word: 'badminton', emoji: '🏸', ipa: '🇺🇸 /ˈbæd.mɪn.tən/', meaning: 'cầu lông' },
        { word: 'tennis', emoji: '🎾', ipa: '🇺🇸 /ˈten.ɪs/', meaning: 'quần vợt' },
        { word: 'swim', emoji: '🏊', ipa: '🇺🇸 /swɪm/', meaning: 'bơi' },
        { word: 'run', emoji: '🏃', ipa: '🇺🇸 /rʌn/', meaning: 'chạy' },
        { word: 'jump', emoji: '🏃‍♂️', ipa: '🇺🇸 /dʒʌmp/', meaning: 'nhảy' },
        { word: 'cycle', emoji: '🚴', ipa: '🇺🇸 /ˈsaɪ.kəl/', meaning: 'đạp xe' }
    ],
    Hobbies: [
        { word: 'sing', emoji: '🎤', ipa: '🇺🇸 /sɪŋ/', meaning: 'hát' },
        { word: 'dance', emoji: '💃', ipa: '🇺🇸 /dæns/', meaning: 'nhảy múa' },
        { word: 'draw', emoji: '🎨', ipa: '🇺🇸 /drɑː/', meaning: 'vẽ' },
        { word: 'read', emoji: '📚', ipa: '🇺🇸 /riːd/', meaning: 'đọc sách' },
        { word: 'paint', emoji: '🖌️', ipa: '🇺🇸 /peɪnt/', meaning: 'tô màu' },
        { word: 'cook', emoji: '🍳', ipa: '🇺🇸 /kʊk/', meaning: 'nấu ăn' },
        { word: 'music', emoji: '🎵', ipa: '🇺🇸 /ˈmjuː.zɪk/', meaning: 'âm nhạc' },
        { word: 'game', emoji: '🎮', ipa: '🇺🇸 /ɡeɪm/', meaning: 'trò chơi' }
    ],
    Clothes: [
        { word: 'shirt', emoji: '👕', ipa: '🇺🇸 /ʃɝːt/', meaning: 'áo sơ mi' },
        { word: 'pants', emoji: '👖', ipa: '🇺🇸 /pænts/', meaning: 'quần dài' },
        { word: 'dress', emoji: '👗', ipa: '🇺🇸 /dres/', meaning: 'váy liền' },
        { word: 'skirt', emoji: '👗', ipa: '🇺🇸 /skɝːt/', meaning: 'chân váy' },
        { word: 'hat', emoji: '🧢', ipa: '🇺🇸 /hæt/', meaning: 'mũ' },
        { word: 'socks', emoji: '🧦', ipa: '🇺🇸 /sɑːks/', meaning: 'tất, vớ' },
        { word: 'shoes', emoji: '👟', ipa: '🇺🇸 /ʃuːz/', meaning: 'giày' },
        { word: 'jacket', emoji: '🧥', ipa: '🇺🇸 /ˈdʒæk.ɪt/', meaning: 'áo khoác' }
    ],
    Toys: [
        { word: 'doll', emoji: '👧', ipa: '🇺🇸 /dɑːl/', meaning: 'búp bê' },
        { word: 'ball', emoji: '⚽', ipa: '🇺🇸 /bɑːl/', meaning: 'quả bóng' },
        { word: 'car', emoji: '🚗', ipa: '🇺🇸 /kɑːr/', meaning: 'xe hơi đồ chơi' },
        { word: 'robot', emoji: '🤖', ipa: '🇺🇸 /ˈroʊ.bɑːt/', meaning: 'rô-bốt' },
        { word: 'kite', emoji: '🪁', ipa: '🇺🇸 /kaɪt/', meaning: 'con diều' },
        { word: 'teddy bear', emoji: '🧸', ipa: '🇺🇸 /ˈted.i ˌber/', meaning: 'gấu bông' },
        { word: 'train', emoji: '🚂', ipa: '🇺🇸 /treɪn/', meaning: 'tàu hỏa đồ chơi' },
        { word: 'plane', emoji: '✈️', ipa: '🇺🇸 /pleɪn/', meaning: 'máy bay đồ chơi' }
    ],
    Food: [
        { word: 'apple', emoji: '🍎', ipa: '🇺🇸 /ˈæp.əl/', meaning: 'quả táo' },
        { word: 'banana', emoji: '🍌', ipa: '🇺🇸 /bəˈnæn.ə/', meaning: 'quả chuối' },
        { word: 'carrot', emoji: '🥕', ipa: '🇺🇸 /ˈkær.ət/', meaning: 'củ cà rốt' },
        { word: 'cupcake', emoji: '🧁', ipa: '🇺🇸 /ˈkʌp.keɪk/', meaning: 'bánh cupcake' },
        { word: 'donut', emoji: '🍩', ipa: '🇺🇸 /ˈdoʊ.nʌt/', meaning: 'bánh vòng' },
        { word: 'onion', emoji: '🧅', ipa: '🇺🇸 /ˈʌn.jən/', meaning: 'củ hành tây' },
        { word: 'tomato', emoji: '🍅', ipa: '🇺🇸 /təˈmeɪ.toʊ/', meaning: 'quả cà chua' },
        { word: 'pear', emoji: '🍐', ipa: '🇺🇸 /per/', meaning: 'quả lê' },
        { word: 'potato', emoji: '🥔', ipa: '🇺🇸 /pəˈteɪ.toʊ/', meaning: 'củ khoai tây' },
        { word: 'lime', emoji: '🍋', ipa: '🇺🇸 /laɪm/', meaning: 'quả chanh xanh' },
        { word: 'fries', emoji: '🍟', ipa: '🇺🇸 /fraɪz/', meaning: 'khoai tây chiên' },
        { word: 'pizza', emoji: '🍕', ipa: '🇺🇸 /ˈpiːt.sə/', meaning: 'bánh pizza' },
        { word: 'cake', emoji: '🍰', ipa: '🇺🇸 /keɪk/', meaning: 'bánh ngọt' },
        { word: 'ice cream', emoji: '🍨', ipa: '🇺🇸 /ˌaɪs ˈkriːm/', meaning: 'kem' },
        { word: 'chicken', emoji: '🍗', ipa: '🇺🇸 /ˈtʃɪk.ɪn/', meaning: 'thịt gà' },
        { word: 'fish', emoji: '🐟', ipa: '🇺🇸 /fɪʃ/', meaning: 'cá' },
        { word: 'knife', emoji: '🔪', ipa: '🇺🇸 /naɪf/', meaning: 'con dao' },
        { word: 'fork', emoji: '🍴', ipa: '🇺🇸 /fɔːrk/', meaning: 'dĩa, nĩa' },
        { word: 'spoon', emoji: '🥄', ipa: '🇺🇸 /spuːn/', meaning: 'thìa, muỗng' },
        { word: 'chopsticks', emoji: '🥢', ipa: '🇺🇸 /ˈtʃɑːp.stɪks/', meaning: 'đôi đũa' },
        { word: 'noodle', emoji: '🍜', ipa: '🇺🇸 /ˈnuː.dəl/', meaning: 'mì' },
        { word: 'There is an apple.', emoji: '🍎', ipa: '🇺🇸 /ðer ɪz ən ˈæp.əl/', meaning: 'Có một quả táo.' },
        { word: 'There are eight cupcakes.', emoji: '🧁', ipa: '🇺🇸 /ðer ɑːr eɪt ˈkʌp.keɪks/', meaning: 'Có tám cái bánh cupcake.' },
        { word: 'Are there any tomatoes?', emoji: '❓🍅', ipa: '🇺🇸 /ɑːr ðer ˈen.i təˈmeɪ.toʊz/', meaning: 'Có quả cà chua nào không?' },
        { word: 'Yes, there are some tomatoes.', emoji: '🍅', ipa: '🇺🇸 /jes ðer ɑːr sʌm təˈmeɪ.toʊz/', meaning: 'Có, có một vài quả cà chua.' },
        { word: 'Is there an onion?', emoji: '❓🧅', ipa: '🇺🇸 /ɪz ðer ən ˈʌn.jən/', meaning: 'Có củ hành tây nào không?' },
        { word: 'Yes, there is an onion.', emoji: '🧅', ipa: '🇺🇸 /jes ðer ɪz ən ˈʌn.jən/', meaning: 'Có, có một củ hành tây.' },
        { word: "Is there an onion? - No, there isn't.", emoji: '❌', ipa: '🇺🇸 /noʊ ðer ˈɪz.ənt/', meaning: 'Không, không có.' },
        { word: 'Would you like some fries?', emoji: '❓🍟', ipa: '🇺🇸 /wʊd ju laɪk sʌm fraɪz/', meaning: 'Bạn có muốn ăn một ít khoai tây chiên không?' },
        { word: 'Would you like some fries? - Yes, please.', emoji: '😊', ipa: '🇺🇸 /jes pliːz/', meaning: 'Vâng, làm ơn.' },
        { word: 'Would you like some fries? - No, thank you.', emoji: '🙏', ipa: '🇺🇸 /noʊ θæŋk juː/', meaning: 'Không, cảm ơn.' },
        { word: 'We eat ice cream with a spoon.', emoji: '🍨🥄', ipa: '🇺🇸 /wiː iːt ˌaɪs ˈkriːm wɪð ə spuːn/', meaning: 'Chúng tôi ăn kem bằng thìa.' },
        { word: 'We often eat chicken.', emoji: '🍗', ipa: '🇺🇸 /wiː ˈɑː.fən iːt ˈtʃɪk.ɪn/', meaning: 'Chúng tôi thường ăn thịt gà.' },
        { word: 'My favorite food is fish.', emoji: '🐟❤️', ipa: '🇺🇸 /maɪ ˈfeɪ.vɚ.ɪt fuːd ɪz fɪʃ/', meaning: 'Món ăn yêu thích của tôi là cá.' }
    ],
};

// Merged Vietnamese meanings directly into vocabData entries

// Meanings are now part of vocabData; no additional processing needed

let currentDifficulty = 'easy';

const difficultySettings = {
    easy: {
        time: 90,
        lives: 3,
        optionsCount: 2
    },
    medium: {
        time: 60,
        lives: 3,
        optionsCount: 4
    },
    hard: {
        time: 40,
        lives: 3,
        optionsCount: 8
    }
};

let categoryLives = {
    Animals: 0,
    Fruits: 0,
    Colors: 0,
    Food: 0,
    School: 0,
    Jobs: 0,
    Vehicles: 0,
    Sports: 0,
    Verbs: 0,
    MyFriends: 0,
    Family: 0,
    Hobbies: 0,
    Clothes: 0,
    Toys: 0,
    TimeDailyRoutines: 0,
    MyWeek: 0,
    MyBirthdayParty: 0,
    ThingsWeCanDo: 0,
    SchoolFacilities: 0,
    Timetables: 0,
    MyFavouriteSubjects: 0,
    SportsDay: 0,
    SummerHoliday: 0,
    MyHome: 0,
    Appearance: 0,
    DailyActivities: 0,
    FamilyWeekend: 0,
    Weather: 0,
    InTheCity: 0,
    AtTheShoppingCentre: 0,
    AnimalWorld: 0,
    AtSummerCamp: 0,
    "Getting-Started": 0
};

function setDifficulty(level) {
    currentDifficulty = level;

    document.querySelectorAll('.diff-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById('diff-' + level);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    let voiceWord = 'Easy';
    if (level === 'medium') voiceWord = 'Medium';
    if (level === 'hard') voiceWord = 'Hard';

    const msg = new SpeechSynthesisUtterance(voiceWord);
    msg.lang = 'en-US';
    msg.rate = 1.0;
    window.speechSynthesis.speak(msg);
}

let currentCategory = '';
let score = 0;
let lives = 3;
let currentWord = null;
let options = [];
let isAnimating = false;
let timeRemaining = 60;
let timerInterval = null;
let remainingWords = [];
let isWaitingForCorrection = false;
let categoryScores = {};
;

// DOM Elements
const screenHome = document.getElementById('screen-home');
const screenGame = document.getElementById('screen-game');
const screenGameOver = document.getElementById('screen-game-over');
const categoryTitle = document.getElementById('game-category-title');
const scoreDisplay = document.getElementById('score-display');
const timerDisplay = document.getElementById('timer-display');
const finalScoreDisplay = document.getElementById('final-score');
const livesContainer = document.getElementById('lives-container');
const wordDisplay = document.getElementById('word-display');
const optionsGrid = document.getElementById('options-grid');
const rewardOverlay = document.getElementById('reward-overlay');
const timerBar = document.getElementById('timer-bar');

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function startGame(category) {
    console.log('Starting game for category:', category);
    if (!vocabData.hasOwnProperty(category)) {
        console.error('Category data missing for', category);
        alert('Sorry, data for this category is unavailable.');
        return;
    }

    currentCategory = category;
    // Initialize score and lives entry for the current category if not present
    if (!(currentCategory in categoryScores)) {
        categoryScores[currentCategory] = 0;
    }
    if (!(currentCategory in categoryLives)) {
        categoryLives[currentCategory] = 0;
    }

    remainingWords = [...vocabData[category]];
    const perWordSec = { easy: 10, medium: 8, hard: 5 }[currentDifficulty] || 8;
    const totalTime = remainingWords.length * perWordSec; // total seconds for the round
    timeRemaining = totalTime;

    // Lives are still taken from difficulty settings.
    const settings = difficultySettings[currentDifficulty];
    lives = settings.lives;

    categoryTitle.innerText = category;
    scoreDisplay.innerText = score;
    timerDisplay.innerText = timeRemaining;

    // Store totalTime for percentage calculation in the timer bar.
    window.__gameTotalTime = totalTime; // temporary global for the timer interval

    if (timerBar) {
        timerBar.style.width = '100%';
        timerBar.classList.remove('low-time');
    }

    initLivesDisplay();
    showScreen(screenGame);
    nextQuestion();

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining--;
        timerDisplay.innerText = timeRemaining;
        if (timerBar) {
            const total = window.__gameTotalTime || settings.time;
            const percentage = Math.max(0, (timeRemaining / total) * 100);
            timerBar.style.width = percentage + '%';
            if (timeRemaining <= 15) {
                timerBar.classList.add('low-time');
            } else {
                timerBar.classList.remove('low-time');
            }
        }
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            updateCategoryScore();
            // Show Game Over screen instead of returning home.
            gameOver(false);
        }
    }, 1000);
}


function updateCategoryScore() {
    // Update stored scores
    categoryScores[currentCategory] = Math.max(categoryScores[currentCategory], score);
    // Use sanitized IDs for DOM lookups (replace spaces with hyphens)
    const sanitized = currentCategory.replace(/\s+/g, '-');
    const catScoreDisplay = document.getElementById('score-' + sanitized);
    if (catScoreDisplay) {
        catScoreDisplay.innerText = categoryScores[currentCategory];
    }

    const finalLives = Math.max(0, lives);
    categoryLives[currentCategory] = finalLives;
    const catLivesDisplay = document.getElementById('lives-' + sanitized);
    if (catLivesDisplay) {
        let heartsHTML = '';
        for (let i = 0; i < finalLives; i++) {
            heartsHTML += '❤️';
        }
        if (finalLives === 0) {
            heartsHTML = '💔';
        }
        catLivesDisplay.innerText = heartsHTML;
    }
}

function initLivesDisplay() {
    livesContainer.innerHTML = '';
    const maxLives = difficultySettings[currentDifficulty].lives;
    for (let i = 0; i < maxLives; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.innerText = '❤️';
        livesContainer.appendChild(heart);
    }
}

function updateLivesDisplay() {
    const hearts = livesContainer.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        if (index >= lives) {
            heart.classList.add('lost');
        } else {
            heart.classList.remove('lost');
        }
    });
}

function playAudio() {
    if (!currentWord) return;
    const utterance = new SpeechSynthesisUtterance(currentWord.word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8; // Slower for kids
    utterance.pitch = 1.2;
    window.speechSynthesis.speak(utterance);
}

function nextQuestion() {
    isAnimating = false;
    const words = vocabData[currentCategory];

    if (remainingWords.length === 0) {
        gameOver(true);
        return;
    }

    const randomIndex = Math.floor(Math.random() * remainingWords.length);
    currentWord = remainingWords[randomIndex];
    remainingWords.splice(randomIndex, 1);

    // Pick wrong options based on difficulty settings
    const wrongOptionsCount = difficultySettings[currentDifficulty].optionsCount - 1;
    const wrongOptions = words.filter(w => w.word !== currentWord.word);
    wrongOptions.sort(() => 0.5 - Math.random());

    options = [currentWord, ...wrongOptions.slice(0, wrongOptionsCount)];
    options.sort(() => 0.5 - Math.random()); // Shuffle

    // Clear previous options
    optionsGrid.innerHTML = '';
    // Adjust grid columns based on difficulty
    const colsClass = {
        2: 'cols-2',
        4: 'cols-4',
        8: 'cols-8'
    }[difficultySettings[currentDifficulty].optionsCount];
    optionsGrid.className = `options-grid ${colsClass}`;

    // Render UI
    wordDisplay.innerText = currentWord.word;
    // Update IPA display
    const ipaBadge = document.getElementById('ipa-display');
    if (ipaBadge) { ipaBadge.innerText = currentWord.ipa; }
    // Render options with emoji and meaning
    options.forEach((opt, index) => {
        const btn = document.createElement('div');
        btn.className = 'option-card';
        btn.dataset.word = opt.word;
        // Show emoji, optional flag image, and Vietnamese meaning
        btn.innerHTML = `<div class="emoji-display">${opt.emoji}</div>${opt.flagImg ? `<img src="${opt.flagImg}" class="flag-img">` : ''}<div class="meaning-text">${opt.meaning || ''}</div>`;
        btn.onclick = () => checkAnswer(opt, btn);
        optionsGrid.appendChild(btn);
    });

    // Auto play audio
    playAudio();
}

function checkAnswer(selectedOpt, btnElement) {
    if (isAnimating) return;

    if (isWaitingForCorrection) {
        if (selectedOpt.word === currentWord.word) {
            isAnimating = true;
            btnElement.classList.remove('correct-glow');
            btnElement.classList.add('correct');

            rewardOverlay.classList.add('show');

            setTimeout(() => {
                rewardOverlay.classList.remove('show');
                isWaitingForCorrection = false;
                if (lives < 0) {
                    gameOver(false);
                } else {
                    nextQuestion();
                }
            }, 1500);
        }
        return;
    }

    isAnimating = true;

    if (selectedOpt.word === currentWord.word) {
        // Correct
        score += 10;
        scoreDisplay.innerText = score;
        btnElement.classList.add('correct');

        // Show reward animation
        rewardOverlay.classList.add('show');

        setTimeout(() => {
            rewardOverlay.classList.remove('show');
            nextQuestion();
        }, 1500);
    } else {
        // Wrong
        lives--;
        updateLivesDisplay();
        if (lives <= 0) {
            clearInterval(timerInterval);
            gameOver(false);
            return;
        }
        btnElement.classList.add('wrong');
        btnElement.classList.add('shake');

        // Show the correct emoji next to the target word immediately
        // Render UI
        wordDisplay.innerText = currentWord.word;
        // Update IPA display
        const ipaBadge = document.getElementById('ipa-display');
        if (ipaBadge) {
            ipaBadge.innerText = currentWord.ipa;
        }

        // Highlight correct answer card with glowing pulse
        const allCards = optionsGrid.querySelectorAll('.option-card');
        allCards.forEach(card => {
            if (card.dataset.word === currentWord.word) {
                card.classList.add('correct-glow');
            }
        });

        isWaitingForCorrection = true;
        isAnimating = false; // Allow click on correct answer to proceed
    }
}

function gameOver(isWin = false) {
    clearInterval(timerInterval);
    updateCategoryScore();
    finalScoreDisplay.innerText = score;

    const gameOverTitle = document.getElementById('game-over-title');
    const finalScoreLabel = document.getElementById('final-score-label');

    if (isWin) {
        if (gameOverTitle) {
            gameOverTitle.innerText = "You Win! 🏆";
            gameOverTitle.style.color = "#FFD166";
        }
        if (finalScoreLabel) {
            finalScoreLabel.innerText = "Congratulations! Score";
        }

        const msg = new SpeechSynthesisUtterance("Congratulations! You won!");
        msg.lang = 'en-US';
        msg.rate = 1.0;
        window.speechSynthesis.speak(msg);
    } else {
        if (gameOverTitle) {
            gameOverTitle.innerText = "Game Over!";
            gameOverTitle.style.color = "white";
        }
        if (finalScoreLabel) {
            finalScoreLabel.innerText = "Your Score";
        }

        const msg = new SpeechSynthesisUtterance("Game Over");
        msg.lang = 'en-US';
        msg.rate = 1.0;
        window.speechSynthesis.speak(msg);
    }

    showScreen(screenGameOver);
}

function goHome() {
    clearInterval(timerInterval);
    updateCategoryScore();
    showScreen(screenHome);
}

function restartGame() {
    startGame(currentCategory);
}
