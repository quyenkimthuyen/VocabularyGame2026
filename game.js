const vocabData = {
    MyFriends: [
        { word: 'Friend', emoji: '👧', ipa: '🇺🇸 /frɛnd/', meaning: 'Bạn bè' },
        { word: 'Playmate', emoji: '🤝', ipa: '🇺🇸 /pleɪmeɪt/', meaning: 'Bạn cùng chơi' },
        { word: 'Classmate', emoji: '🧑‍🏫', ipa: '🇺🇸 /klæs.meɪt/', meaning: 'Bạn cùng lớp' }
    ],
    TimeDailyRoutines: [
        { word: 'Morning', emoji: '🌅', ipa: '🇺🇸 /ˈmɔːrnɪŋ/', meaning: 'Buổi sáng' },
        { word: 'Sunrise', emoji: '🌄', ipa: '🇺🇸 /ˈsʌn.raɪz/', meaning: 'Bình minh' },
        { word: 'Wake Up', emoji: '⏰', ipa: '🇺🇸 /weɪk ʌp/', meaning: 'Thức dậy' },
        { word: 'Brush Teeth', emoji: '🪥', ipa: '🇺🇸 /brʌʃ tiːθ/', meaning: 'Đánh răng' },
        { word: 'Wash Face', emoji: '🚿', ipa: '🇺🇸 /wɑːʃ feɪs/', meaning: 'Rửa mặt' },
        { word: 'Take a Shower', emoji: '🚿', ipa: '🇺🇸 /teɪk ə ˈʃaʊ.ɚ/', meaning: 'Tắm vòi sen' },
        { word: 'Get Dressed', emoji: '👕', ipa: '🇺🇸 /ɡet drest/', meaning: 'Mặc quần áo' },
        { word: 'Comb Hair', emoji: '🪮', ipa: '🇺🇸 /koʊm her/', meaning: 'Chải tóc' },
        { word: 'Breakfast', emoji: '🍳', ipa: '🇺🇸 /ˈbrek.fəst/', meaning: 'Bữa sáng' },
        { word: 'Drink Milk', emoji: '🥛', ipa: '🇺🇸 /drɪŋk mɪlk/', meaning: 'Uống sữa' },
        { word: 'Go to School', emoji: '🏫', ipa: '🇺🇸 /ɡoʊ tə skuːl/', meaning: 'Đi học' },
        { word: 'Study', emoji: '📚', ipa: '🇺🇸 /ˈstʌd.i/', meaning: 'Học bài' },
        { word: 'Read Books', emoji: '📖', ipa: '🇺🇸 /riːd bʊks/', meaning: 'Đọc sách' },
        { word: 'Write Homework', emoji: '✍️', ipa: '🇺🇸 /raɪt ˈhoʊm.wɝːk/', meaning: 'Làm bài tập' },
        { word: 'Lunch', emoji: '🥪', ipa: '🇺🇸 /lʌntʃ/', meaning: 'Bữa trưa' },
        { word: 'Eat Lunch', emoji: '🍱', ipa: '🇺🇸 /iːt lʌntʃ/', meaning: 'Ăn trưa' },
        { word: 'Take a Nap', emoji: '😴', ipa: '🇺🇸 /teɪk ə næp/', meaning: 'Ngủ trưa' },
        { word: 'Afternoon', emoji: '☀️', ipa: '🇺🇸 /ˌæf.tɚˈnuːn/', meaning: 'Buổi chiều' },
        { word: 'Play Games', emoji: '🎮', ipa: '🇺🇸 /pleɪ ɡeɪmz/', meaning: 'Chơi trò chơi' },
        { word: 'Play Football', emoji: '⚽', ipa: '🇺🇸 /pleɪ ˈfʊt.bɑːl/', meaning: 'Chơi bóng đá' },
        { word: 'Ride a Bike', emoji: '🚴', ipa: '🇺🇸 /raɪd ə baɪk/', meaning: 'Đi xe đạp' },
        { word: 'Listen to Music', emoji: '🎵', ipa: '🇺🇸 /ˈlɪs.ən tə ˈmjuː.zɪk/', meaning: 'Nghe nhạc' },
        { word: 'Watch TV', emoji: '📺', ipa: '🇺🇸 /wɑːtʃ ˌtiːˈviː/', meaning: 'Xem TV' },
        { word: 'Help Parents', emoji: '🤝', ipa: '🇺🇸 /help ˈper.ənts/', meaning: 'Giúp bố mẹ' },
        { word: 'Clean Room', emoji: '🧹', ipa: '🇺🇸 /kliːn ruːm/', meaning: 'Dọn phòng' },
        { word: 'Water Plants', emoji: '🪴', ipa: '🇺🇸 /ˈwɔː.t̬ɚ plænts/', meaning: 'Tưới cây' },
        { word: 'Feed the Dog', emoji: '🐶', ipa: '🇺🇸 /fiːd ðə dɔːɡ/', meaning: 'Cho chó ăn' },
        { word: 'Evening', emoji: '🌆', ipa: '🇺🇸 /ˈiːvnɪŋ/', meaning: 'Buổi tối' },
        { word: 'Dinner', emoji: '🍽️', ipa: '🇺🇸 /ˈdɪn.ɚ/', meaning: 'Bữa tối' },
        { word: 'Eat Dinner', emoji: '🍛', ipa: '🇺🇸 /iːt ˈdɪn.ɚ/', meaning: 'Ăn tối' },
        { word: 'Family Time', emoji: '👨‍👩‍👧‍👦', ipa: '🇺🇸 /ˈfæm.əl.i taɪm/', meaning: 'Thời gian gia đình' },
        { word: 'Tell Stories', emoji: '📚', ipa: '🇺🇸 /tel ˈstɔːr.iz/', meaning: 'Kể chuyện' },
        { word: 'Do Homework', emoji: '📝', ipa: '🇺🇸 /duː ˈhoʊm.wɝːk/', meaning: 'Làm bài tập về nhà' },
        { word: 'Take a Bath', emoji: '🛁', ipa: '🇺🇸 /teɪk ə bæθ/', meaning: 'Tắm bồn' },
        { word: 'Put on Pajamas', emoji: '🛌', ipa: '🇺🇸 /pʊt ɑːn pəˈdʒɑː.məz/', meaning: 'Mặc đồ ngủ' },
        { word: 'Go to Bed', emoji: '🛏️', ipa: '🇺🇸 /ɡoʊ tə bed/', meaning: 'Đi ngủ' },
        { word: 'Sleep', emoji: '😴', ipa: '🇺🇸 /sliːp/', meaning: 'Ngủ' },
        { word: 'Dream', emoji: '💭', ipa: '🇺🇸 /driːm/', meaning: 'Mơ' },
        { word: 'Midnight', emoji: '🌙', ipa: '🇺🇸 /ˈmɪd.naɪt/', meaning: 'Nửa đêm' },
        { word: 'Clock', emoji: '🕒', ipa: '🇺🇸 /klɑːk/', meaning: 'Đồng hồ' },
        { word: 'Time', emoji: '⏳', ipa: '🇺🇸 /taɪm/', meaning: 'Thời gian' },
        { word: 'Minute', emoji: '⏱️', ipa: '🇺🇸 /ˈmɪn.ɪt/', meaning: 'Phút' },
        { word: 'Hour', emoji: '🕐', ipa: '🇺🇸 /aʊr/', meaning: 'Giờ' },
        { word: 'Today', emoji: '📆', ipa: '🇺🇸 /təˈdeɪ/', meaning: 'Hôm nay' },
        { word: 'Tomorrow', emoji: '➡️', ipa: '🇺🇸 /təˈmɑːr.oʊ/', meaning: 'Ngày mai' },
        { word: 'Yesterday', emoji: '⬅️', ipa: '🇺🇸 /ˈjes.tɚ.deɪ/', meaning: 'Hôm qua' },
        { word: 'Weekend', emoji: '🎉', ipa: '🇺🇸 /ˌwiːkˈend/', meaning: 'Cuối tuần' },
    ],
    MyWeek: [
        { word: 'Monday', emoji: '📅', ipa: '🇺🇸 /ˈmʌn.deɪ/', meaning: 'Thứ hai' },
        { word: 'Tuesday', emoji: '📅', ipa: '🇺🇸 /ˈtjuːz.deɪ/', meaning: 'Thứ ba' },
        { word: 'Wednesday', emoji: '📅', ipa: '🇺🇸 /ˈwenz.deɪ/', meaning: 'Thứ tư' },
        { word: 'Thursday', emoji: '📅', ipa: '🇺🇸 /ˈθɝːz.deɪ/', meaning: 'Thứ năm' },
        { word: 'Friday', emoji: '📅', ipa: '🇺🇸 /ˈfraɪ.deɪ/', meaning: 'Thứ sáu' },
        { word: 'Saturday', emoji: '📅', ipa: '🇺🇸 /ˈsæt̬.ɚ.deɪ/', meaning: 'Thứ bảy' },
        { word: 'Sunday', emoji: '📅', ipa: '🇺🇸 /ˈsʌn.deɪ/', meaning: 'Chủ nhật' },

        { word: 'Week', emoji: '🗓️', ipa: '🇺🇸 /wiːk/', meaning: 'Tuần' },
        { word: 'Weekend', emoji: '🎉', ipa: '🇺🇸 /ˈwiːk.end/', meaning: 'Cuối tuần' },
        { word: 'Weekday', emoji: '🏫', ipa: '🇺🇸 /ˈwiːk.deɪ/', meaning: 'Ngày trong tuần' },

        { word: 'Today', emoji: '📍', ipa: '🇺🇸 /təˈdeɪ/', meaning: 'Hôm nay' },
        { word: 'Tomorrow', emoji: '➡️', ipa: '🇺🇸 /təˈmɑːr.oʊ/', meaning: 'Ngày mai' },
        { word: 'Yesterday', emoji: '⬅️', ipa: '🇺🇸 /ˈjes.tɚ.deɪ/', meaning: 'Hôm qua' },

        { word: 'Morning', emoji: '🌅', ipa: '🇺🇸 /ˈmɔːr.nɪŋ/', meaning: 'Buổi sáng' },
        { word: 'Afternoon', emoji: '☀️', ipa: '🇺🇸 /ˌæf.tɚˈnuːn/', meaning: 'Buổi chiều' },
        { word: 'Evening', emoji: '🌆', ipa: '🇺🇸 /ˈiːv.nɪŋ/', meaning: 'Buổi tối' },
        { word: 'Night', emoji: '🌙', ipa: '🇺🇸 /naɪt/', meaning: 'Ban đêm' },

        { word: 'Calendar', emoji: '📆', ipa: '🇺🇸 /ˈkæl.ən.dɚ/', meaning: 'Lịch' },
        { word: 'Holiday', emoji: '🏖️', ipa: '🇺🇸 /ˈhɑː.lə.deɪ/', meaning: 'Ngày nghỉ' },
        { word: 'Schedule', emoji: '📝', ipa: '🇺🇸 /ˈskedʒ.uːl/', meaning: 'Thời khóa biểu' }
    ],
    MyBirthdayParty: [
        { word: 'Cake', emoji: '🎂', ipa: '🇺🇸 /keɪk/', meaning: 'Bánh kem' },
        { word: 'Gift', emoji: '🎁', ipa: '🇺🇸 /ɡɪft/', meaning: 'Quà tặng' },
        { word: 'Balloon', emoji: '🎈', ipa: '🇺🇸 /bəˈluːn/', meaning: 'Bóng bay' }
    ],
    ThingsWeCanDo: [
        { word: 'Read', emoji: '📖', ipa: '🇺🇸 /riːd/', meaning: 'Đọc' },
        { word: 'Write', emoji: '✍️', ipa: '🇺🇸 /raɪt/', meaning: 'Viết' },
        { word: 'Draw', emoji: '🖍️', ipa: '🇺🇸 /drɔː/', meaning: 'Vẽ' },
        { word: 'Paint', emoji: '🎨', ipa: '🇺🇸 /peɪnt/', meaning: 'Tô màu' },
        { word: 'Color', emoji: '🖌️', ipa: '🇺🇸 /ˈkʌl.ɚ/', meaning: 'Tô màu sắc' },
        { word: 'Sing', emoji: '🎤', ipa: '🇺🇸 /sɪŋ/', meaning: 'Hát' },
        { word: 'Dance', emoji: '💃', ipa: '🇺🇸 /dæns/', meaning: 'Nhảy múa' },
        { word: 'Jump', emoji: '🤾', ipa: '🇺🇸 /dʒʌmp/', meaning: 'Nhảy' },
        { word: 'Run', emoji: '🏃', ipa: '🇺🇸 /rʌn/', meaning: 'Chạy' },
        { word: 'Walk', emoji: '🚶', ipa: '🇺🇸 /wɔːk/', meaning: 'Đi bộ' },
        { word: 'Swim', emoji: '🏊', ipa: '🇺🇸 /swɪm/', meaning: 'Bơi' },
        { word: 'Fly', emoji: '🪂', ipa: '🇺🇸 /flaɪ/', meaning: 'Bay' },
        { word: 'Climb', emoji: '🧗', ipa: '🇺🇸 /klaɪm/', meaning: 'Leo trèo' },
        { word: 'Ride a Bike', emoji: '🚴', ipa: '🇺🇸 /raɪd ə baɪk/', meaning: 'Đi xe đạp' },
        { word: 'Play Football', emoji: '⚽', ipa: '🇺🇸 /pleɪ ˈfʊt.bɑːl/', meaning: 'Chơi bóng đá' },
        { word: 'Play Basketball', emoji: '🏀', ipa: '🇺🇸 /pleɪ ˈbæs.kɪt.bɑːl/', meaning: 'Chơi bóng rổ' },
        { word: 'Play Chess', emoji: '♟️', ipa: '🇺🇸 /pleɪ tʃes/', meaning: 'Chơi cờ vua' },
        { word: 'Cook', emoji: '👩‍🍳', ipa: '🇺🇸 /kʊk/', meaning: 'Nấu ăn' },
        { word: 'Bake', emoji: '🧁', ipa: '🇺🇸 /beɪk/', meaning: 'Nướng bánh' },
        { word: 'Eat', emoji: '🍽️', ipa: '🇺🇸 /iːt/', meaning: 'Ăn' },
        { word: 'Drink', emoji: '🥤', ipa: '🇺🇸 /drɪŋk/', meaning: 'Uống' },
        { word: 'Sleep', emoji: '😴', ipa: '🇺🇸 /sliːp/', meaning: 'Ngủ' },
        { word: 'Dream', emoji: '💭', ipa: '🇺🇸 /driːm/', meaning: 'Mơ' },
        { word: 'Talk', emoji: '🗣️', ipa: '🇺🇸 /tɔːk/', meaning: 'Nói chuyện' },
        { word: 'Speak English', emoji: '🇬🇧', ipa: '🇺🇸 /spiːk ˈɪŋ.ɡlɪʃ/', meaning: 'Nói tiếng Anh' },
        { word: 'Listen', emoji: '👂', ipa: '🇺🇸 /ˈlɪs.ən/', meaning: 'Lắng nghe' },
        { word: 'Watch TV', emoji: '📺', ipa: '🇺🇸 /wɑːtʃ ˌtiːˈviː/', meaning: 'Xem TV' },
        { word: 'Watch Movies', emoji: '🎬', ipa: '🇺🇸 /wɑːtʃ ˈmuː.viz/', meaning: 'Xem phim' },
        { word: 'Listen to Music', emoji: '🎵', ipa: '🇺🇸 /ˈlɪs.ən tə ˈmjuː.zɪk/', meaning: 'Nghe nhạc' },
        { word: 'Play Games', emoji: '🎮', ipa: '🇺🇸 /pleɪ ɡeɪmz/', meaning: 'Chơi trò chơi' },
        { word: 'Study', emoji: '📚', ipa: '🇺🇸 /ˈstʌd.i/', meaning: 'Học bài' },
        { word: 'Learn', emoji: '🧠', ipa: '🇺🇸 /lɝːn/', meaning: 'Học hỏi' },
        { word: 'Teach', emoji: '👩‍🏫', ipa: '🇺🇸 /tiːtʃ/', meaning: 'Dạy học' },
        { word: 'Count', emoji: '🔢', ipa: '🇺🇸 /kaʊnt/', meaning: 'Đếm' },
        { word: 'Think', emoji: '🤔', ipa: '🇺🇸 /θɪŋk/', meaning: 'Suy nghĩ' },
        { word: 'Remember', emoji: '🧠', ipa: '🇺🇸 /rɪˈmem.bɚ/', meaning: 'Ghi nhớ' },
        { word: 'Forget', emoji: '❌', ipa: '🇺🇸 /fɚˈɡet/', meaning: 'Quên' },
        { word: 'Smile', emoji: '😊', ipa: '🇺🇸 /smaɪl/', meaning: 'Mỉm cười' },
        { word: 'Laugh', emoji: '😂', ipa: '🇺🇸 /læf/', meaning: 'Cười lớn' },
        { word: 'Cry', emoji: '😢', ipa: '🇺🇸 /kraɪ/', meaning: 'Khóc' },
        { word: 'Help', emoji: '🤝', ipa: '🇺🇸 /help/', meaning: 'Giúp đỡ' },
        { word: 'Share', emoji: '🎁', ipa: '🇺🇸 /ʃer/', meaning: 'Chia sẻ' },
        { word: 'Give', emoji: '🎁', ipa: '🇺🇸 /ɡɪv/', meaning: 'Cho' },
        { word: 'Take', emoji: '✋', ipa: '🇺🇸 /teɪk/', meaning: 'Lấy' },
        { word: 'Open', emoji: '🚪', ipa: '🇺🇸 /ˈoʊ.pən/', meaning: 'Mở' },
        { word: 'Close', emoji: '🔒', ipa: '🇺🇸 /kloʊz/', meaning: 'Đóng' },
        { word: 'Push', emoji: '🤜', ipa: '🇺🇸 /pʊʃ/', meaning: 'Đẩy' },
        { word: 'Pull', emoji: '🤚', ipa: '🇺🇸 /pʊl/', meaning: 'Kéo' },
        { word: 'Build', emoji: '🧱', ipa: '🇺🇸 /bɪld/', meaning: 'Xây dựng' },
        { word: 'Clean', emoji: '🧹', ipa: '🇺🇸 /kliːn/', meaning: 'Dọn dẹp' },
        { word: 'Wash', emoji: '🧼', ipa: '🇺🇸 /wɑːʃ/', meaning: 'Rửa' },
        { word: 'Brush Teeth', emoji: '🪥', ipa: '🇺🇸 /brʌʃ tiːθ/', meaning: 'Đánh răng' },
        { word: 'Plant Trees', emoji: '🌳', ipa: '🇺🇸 /plænt triːz/', meaning: 'Trồng cây' },
        { word: 'Water Plants', emoji: '🪴', ipa: '🇺🇸 /ˈwɔː.t̬ɚ plænts/', meaning: 'Tưới cây' },
        { word: 'Travel', emoji: '✈️', ipa: '🇺🇸 /ˈtræv.əl/', meaning: 'Du lịch' },
        { word: 'Explore', emoji: '🧭', ipa: '🇺🇸 /ɪkˈsplɔːr/', meaning: 'Khám phá' },
        { word: 'Take Photos', emoji: '📸', ipa: '🇺🇸 /teɪk ˈfoʊ.toʊz/', meaning: 'Chụp ảnh' },
        { word: 'Shop', emoji: '🛍️', ipa: '🇺🇸 /ʃɑːp/', meaning: 'Mua sắm' },
        { word: 'Buy', emoji: '🛒', ipa: '🇺🇸 /baɪ/', meaning: 'Mua' },
        { word: 'Sell', emoji: '💰', ipa: '🇺🇸 /sel/', meaning: 'Bán' },
        { word: 'Celebrate', emoji: '🥳', ipa: '🇺🇸 /ˈsel.ə.breɪt/', meaning: 'Ăn mừng' },
        { word: 'Pray', emoji: '🙏', ipa: '🇺🇸 /preɪ/', meaning: 'Cầu nguyện' },
        { word: 'Meditate', emoji: '🧘', ipa: '🇺🇸 /ˈmed.ə.teɪt/', meaning: 'Thiền' },
    ],
    SchoolFacilities: [
        { word: 'Library', emoji: '📚', ipa: '🇺🇸 /ˈlaɪ.brer.i/', meaning: 'Thư viện' },
        { word: 'Gym', emoji: '🏋️', ipa: '🇺🇸 /dʒɪm/', meaning: 'Phòng tập thể dục' },
        { word: 'Cafeteria', emoji: '🍽️', ipa: '🇺🇸 /kæf.əˈtɪə.ri.ə/', meaning: 'Căn tin' }
    ],
    Timetables: [
        { word: 'Math', emoji: '➗', ipa: '🇺🇸 /mæθ/', meaning: 'Môn toán' },
        { word: 'Science', emoji: '🔬', ipa: '🇺🇸 /ˈsaɪ.əns/', meaning: 'Khoa học' },
        { word: 'Art', emoji: '🎨', ipa: '🇺🇸 /ɑːrt/', meaning: 'Mỹ thuật' }
    ],
    MyFavouriteSubjects: [
        { word: 'English', emoji: '🇬🇧', ipa: '🇺🇸 /ˈɪŋ.glɪʃ/', meaning: 'Tiếng Anh' },
        { word: 'Music', emoji: '🎵', ipa: '🇺🇸 /ˈmjuː.zɪk/', meaning: 'Âm nhạc' },
        { word: 'History', emoji: '📜', ipa: '🇺🇸 /ˈhɪs.tə.ri/', meaning: 'Lịch sử' }
    ],
    SportsDay: [
        { word: 'Running', emoji: '🏃', ipa: '🇺🇸 /ˈrʌnɪŋ/', meaning: 'Chạy bộ' },
        { word: 'Jumping', emoji: '🤾', ipa: '🇺🇸 /ˈdʒʌmpɪŋ/', meaning: 'Nhảy' },
        { word: 'Throw', emoji: '🏈', ipa: '🇺🇸 /θroʊ/', meaning: 'Ném' }
    ],
    SummerHoliday: [
        { word: 'Beach', emoji: '🏖️', ipa: '🇺🇸 /biːtʃ/', meaning: 'Bãi biển' },
        { word: 'Swim', emoji: '🏊', ipa: '🇺🇸 /swɪm/', meaning: 'Bơi' },
        { word: 'Sun', emoji: '☀️', ipa: '🇺🇸 /sʌn/', meaning: 'Mặt trời' }
    ],
    MyHome: [
        { word: 'Room', emoji: '🚪', ipa: '🇺🇸 /ruːm/', meaning: 'Căn phòng' },
        { word: 'Garden', emoji: '🌳', ipa: '🇺🇸 /ˈɡɑːr.dən/', meaning: 'Khu vườn' },
        { word: 'Kitchen', emoji: '🍳', ipa: '🇺🇸 /ˈkɪtʃ.ən/', meaning: 'Nhà bếp' }
    ],
    Appearance: [
        { word: 'Hair', emoji: '💇', ipa: '🇺🇸 /hɛr/', meaning: 'Tóc' },
        { word: 'Eyes', emoji: '👀', ipa: '🇺🇸 /aɪz/', meaning: 'Đôi mắt' },
        { word: 'Clothes', emoji: '👗', ipa: '🇺🇸 /kloʊðz/', meaning: 'Quần áo' }
    ],
    DailyActivities: [
        { word: 'Brush', emoji: '🪥', ipa: '🇺🇸 /brʌʃ/', meaning: 'Chải' },
        { word: 'Eat', emoji: '🍽️', ipa: '🇺🇸 /iːt/', meaning: 'Ăn' },
        { word: 'Sleep', emoji: '😴', ipa: '🇺🇸 /sliːp/', meaning: 'Ngủ' }
    ],
    FamilyWeekend: [
        { word: 'Park', emoji: '🏞️', ipa: '🇺🇸 /pɑːrk/', meaning: 'Công viên' },
        { word: 'Picnic', emoji: '🧺', ipa: '🇺🇸 /ˈpɪk.nɪk/', meaning: 'Buổi dã ngoại' },
        { word: 'Game', emoji: '🎲', ipa: '🇺🇸 /ɡeɪm/', meaning: 'Trò chơi' }
    ],

    Weather: [
        { word: 'Rain', emoji: '🌧️', ipa: '🇺🇸 /reɪn/', meaning: 'Mưa' },
        { word: 'Snow', emoji: '❄️', ipa: '🇺🇸 /snoʊ/', meaning: 'Tuyết' },
        { word: 'Wind', emoji: '💨', ipa: '🇺🇸 /wɪnd/', meaning: 'Gió' },
        { word: 'Sunny', emoji: '☀️', ipa: '🇺🇸 /ˈsʌn.i/', meaning: 'Có nắng' },
        { word: 'Cloudy', emoji: '☁️', ipa: '🇺🇸 /ˈklaʊ.di/', meaning: 'Nhiều mây' },
        { word: 'Storm', emoji: '⛈️', ipa: '🇺🇸 /stɔːrm/', meaning: 'Bão' },
        { word: 'Thunder', emoji: '⚡', ipa: '🇺🇸 /ˈθʌn.dɚ/', meaning: 'Sấm' },
        { word: 'Lightning', emoji: '🌩️', ipa: '🇺🇸 /ˈlaɪt.nɪŋ/', meaning: 'Tia chớp' },
        { word: 'Rainbow', emoji: '🌈', ipa: '🇺🇸 /ˈreɪn.boʊ/', meaning: 'Cầu vồng' },
        { word: 'Fog', emoji: '🌫️', ipa: '🇺🇸 /fɑːɡ/', meaning: 'Sương mù' },
        { word: 'Mist', emoji: '🌁', ipa: '🇺🇸 /mɪst/', meaning: 'Sương nhẹ' },
        { word: 'Hail', emoji: '🧊', ipa: '🇺🇸 /heɪl/', meaning: 'Mưa đá' },
        { word: 'Drizzle', emoji: '🌦️', ipa: '🇺🇸 /ˈdrɪz.əl/', meaning: 'Mưa phùn' },
        { word: 'Typhoon', emoji: '🌀', ipa: '🇺🇸 /taɪˈfuːn/', meaning: 'Bão lớn' },
        { word: 'Hurricane', emoji: '🌪️', ipa: '🇺🇸 /ˈhɝː.ə.keɪn/', meaning: 'Cuồng phong' },
        { word: 'Tornado', emoji: '🌪️', ipa: '🇺🇸 /tɔːrˈneɪ.doʊ/', meaning: 'Lốc xoáy' },
        { word: 'Hot', emoji: '🥵', ipa: '🇺🇸 /hɑːt/', meaning: 'Nóng' },
        { word: 'Cold', emoji: '🥶', ipa: '🇺🇸 /koʊld/', meaning: 'Lạnh' },
        { word: 'Warm', emoji: '🌤️', ipa: '🇺🇸 /wɔːrm/', meaning: 'Ấm áp' },
        { word: 'Cool', emoji: '😎', ipa: '🇺🇸 /kuːl/', meaning: 'Mát mẻ' },
        { word: 'Wet', emoji: '💧', ipa: '🇺🇸 /wet/', meaning: 'Ướt' },
        { word: 'Dry', emoji: '🏜️', ipa: '🇺🇸 /draɪ/', meaning: 'Khô' },
        { word: 'Humid', emoji: '💦', ipa: '🇺🇸 /ˈhjuː.mɪd/', meaning: 'Ẩm ướt' },
        { word: 'Freezing', emoji: '🧊', ipa: '🇺🇸 /ˈfriː.zɪŋ/', meaning: 'Đóng băng' },
        { word: 'Weather', emoji: '🌍', ipa: '🇺🇸 /ˈweð.ɚ/', meaning: 'Thời tiết' },
        { word: 'Temperature', emoji: '🌡️', ipa: '🇺🇸 /ˈtem.prə.tʃɚ/', meaning: 'Nhiệt độ' },
        { word: 'Forecast', emoji: '📡', ipa: '🇺🇸 /ˈfɔːr.kæst/', meaning: 'Dự báo thời tiết' },
        { word: 'Sky', emoji: '🌌', ipa: '🇺🇸 /skaɪ/', meaning: 'Bầu trời' },
        { word: 'Sun', emoji: '☀️', ipa: '🇺🇸 /sʌn/', meaning: 'Mặt trời' },
        { word: 'Moon', emoji: '🌙', ipa: '🇺🇸 /muːn/', meaning: 'Mặt trăng' },
        { word: 'Star', emoji: '⭐', ipa: '🇺🇸 /stɑːr/', meaning: 'Ngôi sao' },
        { word: 'Ice', emoji: '🧊', ipa: '🇺🇸 /aɪs/', meaning: 'Băng' },
        { word: 'Snowflake', emoji: '❄️', ipa: '🇺🇸 /ˈsnoʊ.fleɪk/', meaning: 'Bông tuyết' },
        { word: 'Puddle', emoji: '💦', ipa: '🇺🇸 /ˈpʌd.əl/', meaning: 'Vũng nước' },
        { word: 'Umbrella', emoji: '☂️', ipa: '🇺🇸 /ʌmˈbrel.ə/', meaning: 'Cái ô' },
        { word: 'Raincoat', emoji: '🧥', ipa: '🇺🇸 /ˈreɪn.koʊt/', meaning: 'Áo mưa' },
        { word: 'Boots', emoji: '🥾', ipa: '🇺🇸 /buːts/', meaning: 'Ủng' },
        { word: 'Scarf', emoji: '🧣', ipa: '🇺🇸 /skɑːrf/', meaning: 'Khăn quàng cổ' },
        { word: 'Gloves', emoji: '🧤', ipa: '🇺🇸 /ɡlʌvz/', meaning: 'Găng tay' },
        { word: 'Hat', emoji: '🧢', ipa: '🇺🇸 /hæt/', meaning: 'Mũ' },
        { word: 'Sweater', emoji: '🧥', ipa: '🇺🇸 /ˈswet̬.ɚ/', meaning: 'Áo len' },
        { word: 'Windy', emoji: '💨', ipa: '🇺🇸 /ˈwɪn.di/', meaning: 'Có gió' },
        { word: 'Rainy', emoji: '🌧️', ipa: '🇺🇸 /ˈreɪ.ni/', meaning: 'Có mưa' },
        { word: 'Snowy', emoji: '❄️', ipa: '🇺🇸 /ˈsnoʊ.i/', meaning: 'Có tuyết' },
        { word: 'Stormy', emoji: '⛈️', ipa: '🇺🇸 /ˈstɔːr.mi/', meaning: 'Có bão' },
        { word: 'Foggy', emoji: '🌫️', ipa: '🇺🇸 /ˈfɑː.ɡi/', meaning: 'Có sương mù' },
        { word: 'Clear Sky', emoji: '🌤️', ipa: '🇺🇸 /klɪr skaɪ/', meaning: 'Trời quang' },
        { word: 'Sunshine', emoji: '🌞', ipa: '🇺🇸 /ˈsʌn.ʃaɪn/', meaning: 'Ánh nắng' },
        { word: 'Breeze', emoji: '🍃', ipa: '🇺🇸 /briːz/', meaning: 'Gió nhẹ' },
        { word: 'Season', emoji: '🍂', ipa: '🇺🇸 /ˈsiː.zən/', meaning: 'Mùa' },
        { word: 'Spring', emoji: '🌸', ipa: '🇺🇸 /sprɪŋ/', meaning: 'Mùa xuân' },
        { word: 'Summer', emoji: '🏖️', ipa: '🇺🇸 /ˈsʌm.ɚ/', meaning: 'Mùa hè' },
        { word: 'Autumn', emoji: '🍁', ipa: '🇺🇸 /ˈɔː.təm/', meaning: 'Mùa thu' },
        { word: 'Winter', emoji: '⛄', ipa: '🇺🇸 /ˈwɪn.t̬ɚ/', meaning: 'Mùa đông' },
    ],

    InTheCity: [
        { word: 'Bus', emoji: '🚌', ipa: '🇺🇸 /bʌs/', meaning: 'Xe buýt' },
        { word: 'Taxi', emoji: '🚕', ipa: '🇺🇸 /tæksi/', meaning: 'Taxi' },
        { word: 'Shop', emoji: '🏬', ipa: '🇺🇸 /ʃɑːp/', meaning: 'Cửa hàng' }
    ],

    AtTheShoppingCentre: [
        { word: 'Store', emoji: '🛍️', ipa: '🇺🇸 /stɔːr/', meaning: 'Cửa hàng' },
        { word: 'Cashier', emoji: '💰', ipa: '🇺🇸 /kæʃɪər/', meaning: 'Thu ngân' },
        { word: 'Sale', emoji: '💸', ipa: '🇺🇸 /seɪl/', meaning: 'Giảm giá' }
    ],

    AnimalWorld: [
        { word: 'Lion', emoji: '🦁', ipa: '🇺🇸 /ˈlaɪ.ən/', meaning: 'Sư tử' },
        { word: 'Elephant', emoji: '🐘', ipa: '🇺🇸 /ˈel.ə.fənt/', meaning: 'Con voi' },
        { word: 'Monkey', emoji: '🐒', ipa: '🇺🇸 /ˈmʌŋ.ki/', meaning: 'Con khỉ' }
    ],

    AtSummerCamp: [
        { word: 'Tent', emoji: '⛺', ipa: '🇺🇸 /tɛnt/', meaning: 'Lều' },
        { word: 'Fire', emoji: '🔥', ipa: '🇺🇸 /faɪr/', meaning: 'Lửa' },
        { word: 'Marshmallow', emoji: '🍢', ipa: '🇺🇸 /ˈmɑːrʃ.mæloʊ/', meaning: 'Kẹo dẻo marshmallow' }
    ],

    Animals: [
        { word: 'Cat', emoji: '🐱', ipa: '🇺🇸 /kæt/', meaning: 'Mèo' },
        { word: 'Dog', emoji: '🐶', ipa: '🇺🇸 /dɔːɡ/', meaning: 'Chó' },
        { word: 'Elephant', emoji: '🐘', ipa: '🇺🇸 /ˈel.ə.fənt/', meaning: 'Con voi' },
        { word: 'Lion', emoji: '🦁', ipa: '🇺🇸 /ˈlaɪ.ən/', meaning: 'Sư tử' },
        { word: 'Monkey', emoji: '🐒', ipa: '🇺🇸 /ˈmʌŋ.ki/', meaning: 'Con khỉ' },
        { word: 'Penguin', emoji: '🐧', ipa: '🇺🇸 /ˈpeŋ.ɡwɪn/', meaning: 'Chim cánh cụt' },
        { word: 'Giraffe', emoji: '🦒', ipa: '🇺🇸 /dʒɪˈræf/', meaning: 'Hươu cao cổ' },
        { word: 'Rabbit', emoji: '🐰', ipa: '🇺🇸 /ˈræb.ɪt/', meaning: 'Con thỏ' },
        { word: 'Tiger', emoji: '🐯', ipa: '🇺🇸 /ˈtaɪ.ɡɚ/', meaning: 'Con hổ' },
        { word: 'Panda', emoji: '🐼', ipa: '🇺🇸 /ˈpæn.də/', meaning: 'Gấu trúc' },
        { word: 'Kangaroo', emoji: '🦘', ipa: '🇺🇸 /kæŋɡəruː/', meaning: 'Chuột túi' },
        { word: 'Zebra', emoji: '🦓', ipa: '🇺🇸 /ˈzibrə/', meaning: 'Ngựa vằn' },
        { word: 'Hippo', emoji: '🦛', ipa: '🇺🇸 /ˈhɪpoʊ/', meaning: 'Hà mã' },
        { word: 'Crocodile', emoji: '🐊', ipa: '🇺🇸 /ˈkrɒk.ə.daɪl/', meaning: 'Cá sấu' },
        { word: 'Dolphin', emoji: '🐬', ipa: '🇺🇸 /ˈdɒlfɪn/', meaning: 'Cá heo' }
    ],

    Fruits: [
        { word: 'Apple', emoji: '🍎', ipa: '🇺🇸 /ˈæp.əl/', meaning: 'Táo' },
        { word: 'Banana', emoji: '🍌', ipa: '🇺🇸 /bəˈnæn.ə/', meaning: 'Chuối' },
        { word: 'Orange', emoji: '🍊', ipa: '🇺🇸 /ˈɔːr.ɪndʒ/', meaning: 'Cam' },
        { word: 'Grapes', emoji: '🍇', ipa: '🇺🇸 /ɡreɪps/', meaning: 'Nho' },
        { word: 'Strawberry', emoji: '🍓', ipa: '🇺🇸 /ˈstrɔːˌber.i/', meaning: 'Dâu tây' },
        { word: 'Watermelon', emoji: '🍉', ipa: '🇺🇸 /ˈwɑː.t̬ɚˌmel.ən/', meaning: 'Dưa hấu' },
        { word: 'Pineapple', emoji: '🍍', ipa: '🇺🇸 /ˈpaɪn.æp.əl/', meaning: 'Dứa' },
        { word: 'Cherry', emoji: '🍒', ipa: '🇺🇸 /ˈtʃer.i/', meaning: 'Anh đào' },
        { word: 'Mango', emoji: '🥭', ipa: '🇺🇸 /ˈmæŋ.ɡoʊ/', meaning: 'Xoài' },
        { word: 'Pear', emoji: '🍐', ipa: '🇺🇸 /per/', meaning: 'Lê' },
        { word: 'Kiwi', emoji: '🥝', ipa: '🇺🇸 /ˈkiːwi/', meaning: 'Kiwi' },
        { word: 'Papaya', emoji: '🥭', ipa: '🇺🇸 /pæˈpaɪ.ə/', meaning: 'Đu đủ' },
        { word: 'Peach', emoji: '🍑', ipa: '🇺🇸 /piːtʃ/', meaning: 'Đào' },
        { word: 'Plum', emoji: '🍈', ipa: '🇺🇸 /plʌm/', meaning: 'Mận' },
        { word: 'Lemon', emoji: '🍋', ipa: '🇺🇸 /ˈlɛm.ən/', meaning: 'Chanh vàng' },
        { word: 'Lime', emoji: '🍈', ipa: '🇺🇸 /laɪm/', meaning: 'Chanh xanh' },
    ],
    Verbs: [
        { word: 'Run', emoji: '🏃', ipa: '🇺🇸 /rʌn/', meaning: 'Chạy' },
        { word: 'Jump', emoji: '🤾', ipa: '🇺🇸 /dʒʌmp/', meaning: 'Nhảy' },
        { word: 'Swim', emoji: '🏊', ipa: '🇺🇸 /swɪm/', meaning: 'Bơi' },
        { word: 'Fly', emoji: '🪂', ipa: '🇺🇸 /flaɪ/', meaning: 'Bay' },
        { word: 'Sing', emoji: '🎤', ipa: '🇺🇸 /sɪŋ/', meaning: 'Hát' },
        { word: 'Dance', emoji: '💃', ipa: '🇺🇸 /dæns/', meaning: 'Nhảy múa' },
        { word: 'Think', emoji: '🤔', ipa: '🇺🇸 /θɪŋk/', meaning: 'Suy nghĩ' },
        { word: 'Listen', emoji: '👂', ipa: '🇺🇸 /ˈlɪs.ən/', meaning: 'Lắng nghe' },
        { word: 'Watch', emoji: '📺', ipa: '🇺🇸 /wɒtʃ/', meaning: 'Xem' },
        { word: 'Cook', emoji: '👩‍🍳', ipa: '🇺🇸 /kʊk/', meaning: 'Nấu ăn' },
        { word: 'Drive', emoji: '🚗', ipa: '🇺🇸 /draɪv/', meaning: 'Lái xe' },
        { word: 'Buy', emoji: '🛒', ipa: '🇺🇸 /baɪ/', meaning: 'Mua' },
        { word: 'Sell', emoji: '💰', ipa: '🇺🇸 /sɛl/', meaning: 'Bán' },
        { word: 'Help', emoji: '🤝', ipa: '🇺🇸 /hɛlp/', meaning: 'Giúp đỡ' },
        { word: 'Play', emoji: '🎮', ipa: '🇺🇸 /pleɪ/', meaning: 'Chơi' },
        { word: 'Study', emoji: '📚', ipa: '🇺🇸 /ˈstʌdi/', meaning: 'Học' },
        { word: 'Travel', emoji: '✈️', ipa: '🇺🇸 /ˈtrævəl/', meaning: 'Du lịch' },
        { word: 'Build', emoji: '🔨', ipa: '🇺🇸 /bɪld/', meaning: 'Xây dựng' },
        { word: 'Clean', emoji: '🧹', ipa: '🇺🇸 /kliːn/', meaning: 'Lau dọn' },
        { word: 'Sleep', emoji: '😴', ipa: '🇺🇸 /sliːp/', meaning: 'Ngủ' },
        { word: 'Read', emoji: '📖', ipa: '🇺🇸 /riːd/', meaning: 'Đọc' },
        { word: 'Write', emoji: '✍️', ipa: '🇺🇸 /raɪt/', meaning: 'Viết' },
        { word: 'Draw', emoji: '🖍️', ipa: '🇺🇸 /drɔː/', meaning: 'Vẽ' },
        { word: 'Speak', emoji: '🗣️', ipa: '🇺🇸 /spiːk/', meaning: 'Nói' },
        { word: 'Climb', emoji: '🧗', ipa: '🇺🇸 /klaɪm/', meaning: 'Leo trèo' },
        { word: 'Throw', emoji: '🏈', ipa: '🇺🇸 /θroʊ/', meaning: 'Ném' },
        { word: 'Catch', emoji: '🤲', ipa: '🇺🇸 /kætʃ/', meaning: 'Bắt lấy' },
        { word: 'Kick', emoji: '🥾', ipa: '🇺🇸 /kɪk/', meaning: 'Đá' },
        { word: 'Hit', emoji: '👊', ipa: '🇺🇸 /hɪt/', meaning: 'Đánh' },
        { word: 'Push', emoji: '🤜', ipa: '🇺🇸 /pʊʃ/', meaning: 'Đẩy' },
        { word: 'Pull', emoji: '🤚', ipa: '🇺🇸 /pʊl/', meaning: 'Kéo' },
        { word: 'Open', emoji: '🚪', ipa: '🇺🇸 /ˈoʊ.pən/', meaning: 'Mở' },
        { word: 'Close', emoji: '🔒', ipa: '🇺🇸 /kloʊz/', meaning: 'Đóng' },
        { word: 'Turn', emoji: '🔄', ipa: '🇺🇸 /tɜːrn/', meaning: 'Xoay' },
        { word: 'Smile', emoji: '😊', ipa: '🇺🇸 /smaɪl/', meaning: 'Mỉm cười' },
        { word: 'Laugh', emoji: '😂', ipa: '🇺🇸 /læf/', meaning: 'Cười lớn' },
        { word: 'Cry', emoji: '😢', ipa: '🇺🇸 /kraɪ/', meaning: 'Khóc' },
        { word: 'Pray', emoji: '🙏', ipa: '🇺🇸 /preɪ/', meaning: 'Cầu nguyện' },
        { word: 'Meditate', emoji: '🧘', ipa: '🇺🇸 /ˈmɛdɪteɪt/', meaning: 'Thiền' },
        { word: 'Celebrate', emoji: '🥳', ipa: '🇺🇸 /ˈsɛləbreɪt/', meaning: 'Ăn mừng' },
        { word: 'Explore', emoji: '🧭', ipa: '🇺🇸 /ɪkˈsplɔːr/', meaning: 'Khám phá' },
        { word: 'Discover', emoji: '🔎', ipa: '🇺🇸 /dɪsˈkʌvər/', meaning: 'Phát hiện' },
        { word: 'Choose', emoji: '🤔', ipa: '🇺🇸 /tʃuːz/', meaning: 'Chọn' },
        { word: 'Decide', emoji: '✅', ipa: '🇺🇸 /dɪˈsaɪd/', meaning: 'Quyết định' },
        { word: 'Remember', emoji: '🧠', ipa: '🇺🇸 /rɪˈmɛm.bɚ/', meaning: 'Ghi nhớ' },
        { word: 'Forget', emoji: '❌', ipa: '🇺🇸 /fərˈɡɛt/', meaning: 'Quên' },
        { word: 'Grow', emoji: '🌱', ipa: '🇺🇸 /ɡroʊ/', meaning: 'Lớn lên' },
        { word: 'Shrink', emoji: '📏', ipa: '🇺🇸 /ʃrɪŋk/', meaning: 'Co lại' },
        { word: 'Paint', emoji: '🎨', ipa: '🇺🇸 /peɪnt/', meaning: 'Tô màu' },
        { word: 'Sew', emoji: '🧵', ipa: '🇺🇸 /soʊ/', meaning: 'May vá' },
        { word: 'Code', emoji: '💻', ipa: '🇺🇸 /koʊd/', meaning: 'Lập trình' },
        { word: 'Teach', emoji: '👩‍🏫', ipa: '🇺🇸 /tiːtʃ/', meaning: 'Dạy học' },
        { word: 'Bark', emoji: '🐶', ipa: '🇺🇸 /bɑːrk/', meaning: 'Sủa' },
        { word: 'Meow', emoji: '🐱', ipa: '🇺🇸 /miˈaʊ/', meaning: 'Kêu meo meo' },
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
        { word: 'Brown', emoji: '🟫', ipa: '🇺🇸 /braʊn/', meaning: 'Màu nâu' },
        { word: 'Cyan', emoji: '🟦', ipa: '🇺🇸 /ˈsaɪ.ən/', meaning: 'Màu xanh cyan' },
        { word: 'Magenta', emoji: '🟪', ipa: '🇺🇸 /mæˈdʒɛnta/', meaning: 'Màu đỏ tím' },
        { word: 'Gold', emoji: '🟨', ipa: '🇺🇸 /ɡoʊld/', meaning: 'Màu vàng kim' },
        { word: 'Silver', emoji: '⚪', ipa: '🇺🇸 /ˈsɪl.vər/', meaning: 'Màu bạc' },
        { word: 'Bronze', emoji: '🟫', ipa: '🇺🇸 /brɒnz/', meaning: 'Màu đồng' },
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
    AtSummerCamp: 0
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
let categoryScores = {
    Animals: 0,
    Fruits: 0,
    Colors: 0,
    Food: 0,
    School: 0,
    Jobs: 0,
    Vehicles: 0,
    Sports: 0,
    Verbs: 0
};

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
    score = 0;
    isWaitingForCorrection = false;

    const settings = difficultySettings[currentDifficulty];
    lives = settings.lives;
    timeRemaining = settings.time;

    remainingWords = [...vocabData[category]];

    categoryTitle.innerText = category;
    scoreDisplay.innerText = score;
    timerDisplay.innerText = timeRemaining;

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
            const percentage = Math.max(0, (timeRemaining / settings.time) * 100);
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
            goHome();
        }
    }, 1000);
}


function updateCategoryScore() {
    categoryScores[currentCategory] = Math.max(categoryScores[currentCategory], score);
    const catScoreDisplay = document.getElementById('score-' + currentCategory);
    if (catScoreDisplay) {
        catScoreDisplay.innerText = categoryScores[currentCategory];
    }

    const finalLives = Math.max(0, lives);
    categoryLives[currentCategory] = finalLives;
    const catLivesDisplay = document.getElementById('lives-' + currentCategory);
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
    // Render UI
    wordDisplay.innerText = currentWord.word;

    // Render options with emoji and meaning
    options.forEach((opt, index) => {
        const btn = document.createElement('div');
        btn.className = 'option-card';
        // Show emoji and Vietnamese meaning
        btn.innerHTML = `<div class="emoji-display">${opt.emoji}</div><div class="meaning-text">${opt.meaning || ''}</div>`;
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
        btnElement.classList.add('wrong');
        btnElement.classList.add('shake');

        // Show the correct emoji next to the target word immediately
        wordDisplay.innerText = currentWord.word + ' ' + currentWord.emoji;

        // Highlight correct answer card with glowing pulse
        const allCards = optionsGrid.querySelectorAll('.option-card');
        allCards.forEach(card => {
            if (card.innerText === currentWord.emoji) {
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
